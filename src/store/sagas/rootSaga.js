import { takeEvery, all, put } from 'redux-saga/effects';
import API from '../../assets/api';

function* fetchUnplashAPI() {
  const { data } = yield API.get('/photos', {
    params: {
      client_id: 'jGZnjIB5VEXTCzSzcr0PIMrlA7TSZmcjWvf9src0gdc',
      per_page: 20
    }
  }); 

  yield put({
    type: 'FETCH_UNSPLASH_API',
    payload: data
  })
}

function* fetchUnplashInfoAPI({ id }) {
  const { data } = yield API.get(`/photos/${id}`, {
    params: {
      client_id: 'jGZnjIB5VEXTCzSzcr0PIMrlA7TSZmcjWvf9src0gdc',
      per_page: 20
    }
  }); 

  yield put({
    type: 'FETCH_UNSPLASH_INFO_API',
    payload: data
  })
}

function* watchFetchUnsplashAPI() {
  yield takeEvery('SAGA_FETCH_UNSPLASH_API', fetchUnplashAPI);
}

function* watchFetchUnsplashInfoAPI() {
  yield takeEvery('SAGA_FETCH_UNSPLASH_INFO_API', fetchUnplashInfoAPI);
}

export function* rootSaga() {
  yield all([
    watchFetchUnsplashAPI(),
    watchFetchUnsplashInfoAPI()
  ]);
}