import React from 'react';
// import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {Calls} from '../Calls';

describe('Pages', () => {
  describe('Calls', () => {
    let back;
    let getCallsByContact;

    beforeEach(() => {
      back = jest.fn();
      getCallsByContact = jest.fn();
    });

    // it('should renders correctly without calls and fetching', () => {
    //   const calls = [];
    //   const tree = shallow(
    //     <Calls
    //       back={back}
    //       getCallsByContact={getCallsByContact}
    //       isFetching={true}
    //       calls={calls}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    // });

    // it('should renders correctly without calls and not fetching', () => {
    //   const calls = [];
    //   const tree = shallow(
    //     <Calls
    //       back={back}
    //       getCallsByContact={getCallsByContact}
    //       isFetching={false}
    //       calls={calls}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    // });

    // it('should renders correctly with calls and fetching', () => {
    //   const calls = [{body: 'My body', created_at: '1991-12-17'}];
    //   const tree = shallow(
    //     <Calls
    //       back={back}
    //       getCallsByContact={getCallsByContact}
    //       isFetching={true}
    //       calls={calls}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    //   expect(
    //     toJson(shallow(tree.instance().renderItem({index: 0}))),
    //   ).toMatchSnapshot();
    // });

    // it('should renders correctly with calls and fetching', () => {
    //   const calls = [
    //     {body: 'My body', created_at: '1991-12-17'},
    //     {body: 'My body 2', created_at: '1993-12-17'},
    //   ];
    //   const tree = shallow(
    //     <Calls
    //       back={back}
    //       getCallsByContact={getCallsByContact}
    //       isFetching={false}
    //       calls={calls}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    //   expect(
    //     toJson(shallow(tree.instance().renderItem({index: 0}))),
    //   ).toMatchSnapshot();
    //   expect(
    //     toJson(shallow(tree.instance().renderItem({index: 1}))),
    //   ).toMatchSnapshot();
    // });

    // it('should display the loading indicator in the footer if it is fetching', () => {
    //   const calls = [
    //     {body: 'My body', created_at: '1991-12-17'},
    //     {body: 'My body 2', created_at: '1993-12-17'},
    //   ];
    //   const tree = shallow(
    //     <Calls
    //       back={back}
    //       getCallsByContact={getCallsByContact}
    //       isFetching={true}
    //       calls={calls}
    //     />,
    //   );
    //   expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    // });

    it('should not display the loading indicator in the footer if it is not fetching', () => {
      const calls = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Calls
          back={back}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls}
        />,
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const calls = [{id: 1}, {id: 2}];
      const tree = shallow(
        <Calls
          back={back}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls}
        />,
      );
      expect(tree.instance().keyExtractor(calls[0])).toBe('1');
      expect(tree.instance().keyExtractor(calls[1])).toBe('2');
    });
  });
});
