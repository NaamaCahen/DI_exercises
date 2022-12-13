export const logAge = (store) => (next) => (action) => {
    // Our middleware
    console.log(`caught in the middleware:`, JSON.stringify(store.getState()))
    // call the next function
    next(action);
}