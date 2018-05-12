import {connect} from 'react-redux';

import {IRootState} from '@models';
import {CodePush} from './CodePush';

export const CodePushContainer = connect((state: IRootState) => ({
  beta: state.beta,
}))(CodePush);
