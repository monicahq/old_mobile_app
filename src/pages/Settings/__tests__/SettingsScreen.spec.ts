import {mapDispatchToProps, mapStateToProps} from '../SettingsScreen';

import {subscribeBeta} from '@redux/beta';
import {logout} from '@redux/user';

describe('Pages', () => {
  describe('SettingsScreen', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    describe('state', () => {
      it('with beta subscribed', () => {
        const props = mapStateToProps({beta: {isSubscribed: true}});
        expect(props).toEqual({
          beta: true,
        });
      });
      it('with beta not subscribed', () => {
        const props = mapStateToProps({beta: {isSubscribed: false}});
        expect(props).toEqual({
          beta: false,
        });
      });
    });

    describe('actions', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch);
        expect(Object.keys(props)).toEqual([
          'logout',
          'goToLaunchScreen',
          'subscribeBeta',
        ]);
      });

      // it('back should trigger goLaunchScreen action', () => {
      //   const props = mapDispatchToProps(dispatch);
      //   props.goToLaunchScreen();
      //   expect(dispatch.mock.calls.length).toBe(1);
      //   expect(dispatch.mock.calls[0]).toEqual([goToLaunchScreen()]);
      // });

      it('back should trigger logout action', () => {
        const props = mapDispatchToProps(dispatch);
        props.logout();
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toEqual([logout()]);
      });

      it('subscribeBeta should trigger subscribeBeta action', () => {
        const value = true;

        const props = mapDispatchToProps(dispatch);
        props.subscribeBeta(value);
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toEqual([subscribeBeta(value)]);
      });
    });
  });
});
