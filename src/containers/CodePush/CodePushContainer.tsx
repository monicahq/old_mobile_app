import {connect} from 'react-redux';

import {IAppState} from '@models';
import {CodePush} from './CodePush';

export const CodePushContainer = connect((state: IAppState) => ({
  beta: state.beta,
}))(CodePush);
