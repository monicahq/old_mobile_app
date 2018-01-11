import {navigate, back} from '../operations';
import {navigate as n, back as b} from '../actions';

describe('Router', () => {
  describe('Operations', () => {
    it('should return the same thing as actions.back', () => {
      expect(back()).toEqual(b());
    });

    it('should navigate to the Login Route', () => {
      expect(navigate()).toEqual(n());
    });
  });
});
