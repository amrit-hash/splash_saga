import { IMAGES } from '../constants';
import { take, fork, put, call } from 'redux-saga/effects';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats } from '../actions';

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
        } catch (e) {}
    }
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images.id);
            //no yield statement with forEach
        }
    }
}
