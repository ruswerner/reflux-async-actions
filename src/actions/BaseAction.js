class BaseAction {

    constructor() {
    }

    preEmit() {
        if(process.env.NODE_ENV !=='production') {
            console.debug('dispatch', JSON.stringify(arguments));
        }
        this.dispatch(...arguments);
    }

    dispatch() {
        // override this to perform async logic as part of an action dispatch
    }
}

module.exports = BaseAction;