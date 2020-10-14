import {
    combineReducers
} from 'redux';
import imageReducer from './imageReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';


const rootReducer = combineReducers({
    images: imageReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer
});

export default rootReducer;
