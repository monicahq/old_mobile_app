// import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import React from 'react';
import {GiftsList} from '../GiftsList';

describe('Pages', () => {
  describe('Gifts', () => {
    let pop;
    let getGiftsByContact;

    beforeEach(() => {
      pop = jest.fn();
      getGiftsByContact = jest.fn();
    });

    // it('should renders correctly without gifts and fetching', () => {
    //   const gifts = [];
    //   const tree = shallow(
    //     <GiftsList
    //       pop={pop}
    //       getGiftsByContact={getGiftsByContact}
    //       isFetching={true}
    //       gifts={gifts as any}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    // });

    // it('should renders correctly without gifts and not fetching', () => {
    //   const gifts = [];
    //   const tree = shallow(
    //     <GiftsList
    //       pop={pop}
    //       getGiftsByContact={getGiftsByContact}
    //       isFetching={false}
    //       gifts={gifts as any}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    // });

    // it('should renders correctly with gifts and fetching', () => {
    //   const gifts = [{body: 'My body', created_at: '1991-12-17'}];
    //   const tree = shallow(
    //     <GiftsList
    //       pop={pop}
    //       getGiftsByContact={getGiftsByContact}
    //       isFetching={true}
    //       gifts={gifts as any}
    //     />,
    //   );
    //   expect(toJson(tree)).toMatchSnapshot();
    //   expect(
    //     toJson(shallow(tree.instance().renderItem({index: 0}))),
    //   ).toMatchSnapshot();
    // });

    // it('should renders correctly with gifts and fetching', () => {
    //   const gifts = [
    //     {body: 'My body', created_at: '1991-12-17'},
    //     {body: 'My body 2', created_at: '1993-12-17'},
    //   ];
    //   const tree = shallow(
    //     <GiftsList
    //       pop={pop}
    //       getGiftsByContact={getGiftsByContact}
    //       isFetching={false}
    //       gifts={gifts as any}
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

    // it('should display the gift indicator in the footer if it is fetching', () => {
    //   const gifts = [
    //     {body: 'My body', created_at: '1991-12-17'},
    //     {body: 'My body 2', created_at: '1993-12-17'},
    //   ];
    //   const tree = shallow(
    //     <GiftsList
    //       pop={pop}
    //       getGiftsByContact={getGiftsByContact}
    //       isFetching={true}
    //       gifts={gifts as any}
    //     />,
    //   );
    //   expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    // });

    it('should not display the gift indicator in the footer if it is not fetching', () => {
      const gifts = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <GiftsList
          pop={pop}
          getGiftsByContact={getGiftsByContact}
          isFetching={false}
          gifts={gifts as any}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const gifts = [{id: 1}, {id: 2}];
      const tree = shallow(
        <GiftsList
          pop={pop}
          getGiftsByContact={getGiftsByContact}
          isFetching={false}
          gifts={gifts as any}
        />
      );
      expect(tree.instance().keyExtractor(gifts[0])).toBe('1');
      expect(tree.instance().keyExtractor(gifts[1])).toBe('2');
    });
  });
});
