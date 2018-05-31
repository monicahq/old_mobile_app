import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Navbar} from '../Navbar.android';

describe('Components', () => {
  describe('Navbar Android', () => {
    let onBack;
    let onRight;

    beforeEach(() => {
      onBack = jest.fn();
      onRight = jest.fn();
    });

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Navbar onBack={onBack} title="My title" />))
      ).toMatchSnapshot();

      expect(toJson(shallow(<Navbar title="My title" />))).toMatchSnapshot();
    });

    it('onActionSelected should trigger the right action', () => {
      const tree = shallow(
        <Navbar onBack={onBack} rightAction={onRight} title="My title" />
      );
      tree.instance().onActionSelected();
      expect(onRight.mock.calls.length).toBe(1);
      expect(onRight.mock.calls[0]).toEqual([]);
    });
  });
});
