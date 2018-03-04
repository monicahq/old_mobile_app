import React from 'react';
import {shallow} from 'enzyme';
import {Contact} from '../Contact';

describe('Pages', () => {
  describe('Contact', () => {
    const back = jest.fn();
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
        <Contact back={back} navigate={navigate} contact={contact} />,
      );
      expect(tree.instance().componentWillMount).toBeUndefined();
    });
  });
});
