import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ContactActivityRow} from '../ContactActivityRow';

describe('Pages', () => {
  describe('Login', () => {
    let onPress;

    beforeEach(() => {
      onPress = jest.fn();
    });

    it('should renders correctly', () => {
      expect(
        toJson(
          shallow(
            <ContactActivityRow
              count={0}
              image={{uri: 'image.net'}}
              title="My title"
              onPress={onPress}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should renders correctly with last true', () => {
      expect(
        toJson(
          shallow(
            <ContactActivityRow
              count={0}
              image={{uri: 'image.net'}}
              title="My title"
              onPress={onPress}
              last={true}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should call onPress when taping the row', () => {
      const row = shallow(
        <ContactActivityRow
          count={0}
          image={{uri: 'image.net'}}
          title="My title"
          onPress={onPress}
        />
      );
      row.find('Touchable').prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
