import {getLabel} from '../gifts';

describe('Utils', () => {
  describe('Gifts', () => {
    describe('getLabel', () => {
      it('should display has been offered label', () => {
        const gift = {
          has_been_offered: true,
        };
        expect(getLabel(gift as any)).toBe('offered');
      });

      it('should display is an idea label', () => {
        const gift = {
          is_an_idea: true,
        };
        expect(getLabel(gift as any)).toBe('idea');
      });

      it('should return undefined in any other case', () => {
        const gift = {};
        expect(getLabel(gift as any)).toBe(undefined);
      });
    });
  });
});
