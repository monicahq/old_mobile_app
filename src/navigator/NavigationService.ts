import {NavigationActions, StackActions} from 'react-navigation';

let navigator;

export const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

export const navigate = (routeName: string, params?: any) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

export const pop = () => {
  navigator.dispatch(StackActions.pop());
};

export type INavigateAction = typeof navigate;
export type IPopAction = typeof pop;
