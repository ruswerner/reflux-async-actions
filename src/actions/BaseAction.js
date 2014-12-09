class AbstractAction {

    constructor() {
    }

    preEmit() {
        if(process.env.NODE_ENV !=='production') {
            console.debug('dispatch', JSON.stringify(arguments));
        }
        this.dispatch(...arguments);
    }

    dispatch() {
        // override this to dispatch an action event
    }
}

module.exports = AbstractAction;