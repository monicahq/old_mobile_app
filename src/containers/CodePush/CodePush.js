import {PureComponent} from 'react';
import {Platform, AppState} from 'react-native';
import PropTypes from 'prop-types';
import codePush from 'react-native-code-push';

const betaDeploymentKey =
  Platform.OS === 'ios'
    ? 'Dcx-ddWTB_BIqABopeNiY5l-m-oyHJU2vGNSf'
    : 'GERRrABwyzmQs-9gv8DTs0AE1O6GrkZolEVSz';

export class CodePush extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line
    beta: PropTypes.object.isRequired,
  };
  componentWillMount() {
    AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        this.sync(this.props);
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.sync(nextProps);
  }
  sync(props) {
    const {ready, isSubscribed} = props.beta;

    if (!ready) {
      return;
    }

    !__DEV__ &&
      codePush.sync({
        deploymentKey: isSubscribed ? betaDeploymentKey : undefined,
      });
  }
  render() {
    return null;
  }
}
