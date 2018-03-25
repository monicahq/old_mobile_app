import {styles} from '../TextInput.styles';

jest.mock('Platform', () => ({
  OS: 'ios',
}));

describe('Components', () => {
  describe('TextInputStyles', () => {
    it('ios should renders correctly', () => {
      expect((styles.textInput as any).borderBottomWidth).toEqual(0.5);
    });
  });
});
