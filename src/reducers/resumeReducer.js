import { KEY_RESUME, LOAD_RESUME } from '../util/constants';
import { loadState } from '../util/localStorage';
import resume from '../util/data';

const initialState = { ...resume };
const savedState = loadState( KEY_RESUME );

export default(state = savedState || initialState, action) => {
    switch(action.type) {
        case LOAD_RESUME:
            return state;
        default:
            return state;
    }
}
