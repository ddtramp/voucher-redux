import fetch from 'isomorphic-fetch';
import moment from 'moment';

import { SetTrs } from '../../actions/Middle/Tr';

export const REQUEST_DATA_POSTS = 'REQUEST_DATA_POSTS';
function requestPosts() {
    return {
        type: REQUEST_DATA_POSTS
    }
}

export const RECEIVE_DATA_POSTS = 'RECEIVE_DATA_POSTS';
function receivePosts( json) {
    return {
        type: RECEIVE_DATA_POSTS,
        posts: json,
        receivedAt: moment().valueOf()
    }
}

export const POSTS_DATA_INVALIDATE = 'POSTS_DATA_INVALIDATE';
export const PostDataInvalidate = () => {
    return {
        type: POSTS_DATA_INVALIDATE
    }
};

/**
 * get data
 * @param url { String }
 * @returns {function(*)}
 */
function fetchPosts(url) {
    return dispatch => {
        dispatch(requestPosts());
        return fetch( url + '?timestamp=' + moment().valueOf())
            .then(response => response.json())
            .then(json => {
                dispatch(receivePosts(json));
                dispatch(SetTrs(json));
            })
    }
}

function shouldFetchPosts(state) {
    const posts = state.postVoucher.data.length;
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export  function fetchPostsIfNeeded(url) {

    return (dispatch, getState) => {

        if (shouldFetchPosts(getState())) {
            // 在 thunk 里 dispatch 另一个 thunk！
            return dispatch(fetchPosts(url))
        } else {
            // 告诉调用代码不需要再等待。
            return Promise.resolve()
        }
    }
}