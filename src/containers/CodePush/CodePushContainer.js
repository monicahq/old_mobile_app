import {connect} from 'react-redux';

import {CodePush} from './CodePush';

export const CodePushContainer = connect(state => ({
  beta: state.beta,
}))(CodePush);
