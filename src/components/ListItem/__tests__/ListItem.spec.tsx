import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ListItem} from '../ListItem';

describe('Components', () => {
  describe('ListItem', () => {
    it('should renders correctly with a title', () => {
      expect(toJson(shallow(<ListItem title="test" />))).toMatchSnapshot();
    });

    it('should renders correctly with a subtitle', () => {
      expect(
        toJson(shallow(<ListItem title="My title" subtitle="My subtitle" />))
      ).toMatchSnapshot();
    });

    it('should renders correctly with a subtitle and last', () => {
      expect(
        toJson(
          shallow(
            <ListItem title="My title" subtitle="My subtitle" lastItem={true} />
          )
        )
      ).toMatchSnapshot();
    });

    it('should renders correctly with an info right', () => {
      expect(
        toJson(shallow(<ListItem title="My title" infoRight="Info right" />))
      ).toMatchSnapshot();
    });
  });
});
