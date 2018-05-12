import {PureComponent} from 'react';
import {AppState, Platform} from 'react-native';
import codePush from 'react-native-code-push';

import {IRootState} from '@models';

const betaDeploymentKey =
  Platform.OS === 'ios'
    ? 'Dcx-ddWTB_BIqABopeNiY5l-m-oyHJU2vGNSf'
    : 'GERRrABwyzmQs-9gv8DTs0AE1O6GrkZolEVSz';

interface ICodePushProps {
  beta: IRootState['beta'];
}

export class CodePush extends PureComponent<ICodePushProps, {}> {
  public componentWillMount() {
    AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        this.sync(this.props);
      }
    });
  }
  public componentWillReceiveProps(nextProps) {
    this.sync(nextProps);
  }
  public sync(props) {
    const {ready, isSubscribed} = props.beta;

    if (!ready) {
      return;
    }

    if (!__DEV__) {
      codePush.sync({
        deploymentKey: isSubscribed ? betaDeploymentKey : undefined,
      });
    }
  }
  public render() {
    return null;
  }
}
