import {mapDispatchToProps} from '../LoginScreen';

// import {back, navigate} from '@redux/router';
import {setToken} from '@redux/user';

describe('Pages', () => {
  describe('LoginScreen', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should contains every key', () => {
      const props = mapDispatchToProps(dispatch);
      expect(Object.keys(props)).toEqual([
        'navigate',
        'navigateToAppStack',
        'pop',
        'setToken',
      ]);
    });

    // it('navigate should return a navigate action trigger', () => {
    //   const routeName = 'my-routeName';
    //   const props = mapDispatchToProps(dispatch);
    //   props.navigate(routeName)();
    //   expect(dispatch.mock.calls.length).toBe(1);
    //   expect(dispatch.mock.calls[0]).toEqual([navigate(routeName)]);
    // });

    // it('back should trigger back action', () => {
    //   const props = mapDispatchToProps(dispatch);
    //   props.back();
    //   expect(dispatch.mock.calls.length).toBe(1);
    //   expect(dispatch.mock.calls[0]).toEqual([back()]);
    // });

    it('setToken should trigger setToken action', () => {
      const token = 'my-token';

      const props = mapDispatchToProps(dispatch);
      props.setToken(token);
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls[0]).toEqual([setToken(token)]);
    });
  });
});
