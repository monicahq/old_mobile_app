import {shallow} from 'enzyme';
import React from 'react';
import {Contact} from '../Contact';

describe('Pages', () => {
  describe('Contact', () => {
    const pop = jest.fn();
    const navigate = jest.fn();
    navigate.mockReturnValue(jest.fn());
    const contact = {
      statistics: {
        number_of_calls: 0,
        number_of_activities: 0,
        number_of_reminders: 0,
        number_of_tasks: 0,
        number_of_notes: 0,
        number_of_gifts: 0,
        number_of_debts: 0,
      },
    };

    it('should not have a componentWillReceiveProps method', () => {
      const tree = shallow(
        <Contact pop={pop} navigate={navigate} contact={contact as any} />
      );
      expect(tree.instance().componentWillMount).toBeUndefined();
    });
  });
});
