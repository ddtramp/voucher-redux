
import { POSTS_DATA_INVALIDATE, REQUEST_DATA_POSTS,  RECEIVE_DATA_POSTS } from '../../actions/Async/data';
const initState = {
    isFetching: false,
    didInvalidate: false,
    data: []
};

function postVoucher(state = initState , action) {
    switch (action.type) {
        case POSTS_DATA_INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_DATA_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_DATA_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}


export default postVoucher;