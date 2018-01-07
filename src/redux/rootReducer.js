import { combineReducers } from 'redux';

import router from './router/reducer';

const rootReducer = combineReducers({
    router,
});

export default rootReducer;
