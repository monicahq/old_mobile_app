import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {TextInput} from '../TextInput';

describe('Components', () => {
  describe('TextInput', () => {
    it('ios should renders correctly', () => {
      expect(toJson(shallow(<TextInput title="My title" />))).toMatchSnapshot();
      expect(
        toJson(shallow(<TextInput title="My title" touched={true} />))
      ).toMatchSnapshot();

      expect(
        toJson(
          shallow(
            <TextInput title="My title" touched={true} error="my-error" />
          )
        )
      ).toMatchSnapshot();

      expect(
        toJson(shallow(<TextInput title="My title" error="My errors" />))
      ).toMatchSnapshot();
    });

    it('android should renders correctly', () => {
      jest.mock('Platform', () => ({
        OS: 'android',
      }));

      expect(toJson(shallow(<TextInput title="My title" />))).toMatchSnapshot();
      expect(
        toJson(shallow(<TextInput title="My title" touched={true} />))
      ).toMatchSnapshot();
    });

    it('should handle focus event', () => {
      const tree = shallow(<TextInput title="My title" />);

      tree.instance().textInput = {
        focus: jest.fn(),
      };
      tree.instance().focus();

      expect(tree.instance().textInput.focus.mock.calls.length).toBe(1);
      expect(tree.instance().textInput.focus.mock.calls[0]).toEqual([]);
    });

    it('should initialize textInput ref', () => {
      const textInputVal = 'test-text-input';

      const tree = shallow(<TextInput title="My title" />);
      tree.instance().textInputRef(textInputVal);

      expect(tree.instance().textInput).toBe(textInputVal);
    });
  });
});
