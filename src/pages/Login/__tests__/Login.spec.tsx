import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Login} from '../Login';

jest.mock('../form/LoginFormContainer', () => ({
  LoginFormContainer: () => 'View',
}));

describe('Pages', () => {
  describe('Login', () => {
    it('should renders correctly', () => {
      const setToken = jest.fn();
      const navigate = jest.fn();
      const back = jest.fn();

      expect(
        toJson(
          shallow(<Login setToken={setToken} navigate={navigate} back={back} />)
        )
      ).toMatchSnapshot();
    });

    it('should handle loginFormSuccess event correctly and set token returned', () => {
      const setToken = jest.fn();
      const navigate = jest.fn().mockReturnValue(() => {
        return;
      });
      const back = jest.fn();
      const token = 'my-token';

      const tree = shallow(
        <Login setToken={setToken} navigate={navigate} back={back} />
      );
      expect(tree.find('LoginFormContainer').length).toBe(1);
      tree.find('LoginFormContainer').prop('onSuccess')({
        access_token: token,
      });

      expect(setToken.mock.calls.length).toBe(1);
      expect(setToken.mock.calls[0]).toEqual([token]);
    });

    it('should handle loginFormSuccess event correctly and navigate to Dashboard', () => {
      const setToken = jest.fn();
      const navigateCall = jest.fn();
      const navigate = jest.fn().mockReturnValue(navigateCall);
      const back = jest.fn();
      const token = 'my-token';

      const tree = shallow(
        <Login setToken={setToken} navigate={navigate} back={back} />
      );
      expect(tree.find('LoginFormContainer').length).toBe(1);
      tree.find('LoginFormContainer').prop('onSuccess')({
        access_token: token,
      });

      expect(navigate.mock.calls.length).toBe(1);
      expect(navigate.mock.calls[0]).toEqual(['Tabs']);
      expect(navigateCall.mock.calls.length).toBe(1);
      expect(navigateCall.mock.calls[0]).toEqual([]);
    });
  });
});
