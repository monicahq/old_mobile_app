import {styles} from '../TextInput.styles';

jest.mock('Platform', () => ({
  OS: 'android',
}));

describe('Components', () => {
  describe('TextInputStyles', () => {
    it('android should renders correctly', () => {
      expect((styles.textInput as any).borderBottomWidth).toEqual(0);
    });
  });
});
