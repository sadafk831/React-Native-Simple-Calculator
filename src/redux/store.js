/**
 * Created by sadafkhan on 16/12/15.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default store = createStoreWithMiddleware(rootReducer);