export const loadState = (key) => {
    try {
        const state = localStorage.getItem(key);
        if( state === null ) {
            return undefined;
        }
        return JSON.parse(state);
    } catch( err ) {
        return undefined;
    }
};

export const saveState = (key, data) => {
    try {
        const state = JSON.stringify(data);
        localStorage.setItem(key, state);
    } catch( err ) {
        return undefined;
    }
}
