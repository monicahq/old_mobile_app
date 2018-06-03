import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {View} from 'react-native';
import {FormListItem} from '../FormListItem';

describe('Components', () => {
  describe('FormListItem', () => {
    it('should renders correctly 1', () => {
      expect(toJson(shallow(<FormListItem />))).toMatchSnapshot();
    });
    it('should renders correctly 2', () => {
      expect(toJson(shallow(<FormListItem last={true} />))).toMatchSnapshot();
    });
    it('should renders correctly 3', () => {
      expect(
        toJson(
          shallow(
            <FormListItem>
              <View />
            </FormListItem>
          )
        )
      ).toMatchSnapshot();
    });
    it('should renders correctly 4', () => {
      expect(
        toJson(
          shallow(
            <FormListItem last={true}>
              <View />
            </FormListItem>
          )
        )
      ).toMatchSnapshot();
    });
  });
});
