import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Navbar} from '../Navbar.android';

describe('Components', () => {
  describe('Navbar Android', () => {
    let onPress;

    beforeEach(() => {
      onPress = jest.fn();
    });

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Navbar onBack={onPress} title="My title" />)),
      ).toMatchSnapshot();

      expect(toJson(shallow(<Navbar title="My title" />))).toMatchSnapshot();
    });

    it('onActionSelected should trigger the back function', () => {
      const tree = shallow(<Navbar onBack={onPress} title="My title" />);
      tree.instance().onActionSelected();
      expect(onPress.mock.calls.length).toBe(1);
      expect(onPress.mock.calls[0]).toEqual([]);
    });
  });
});
