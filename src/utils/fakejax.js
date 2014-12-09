/**
 * Fake AJAX request
 * @param req String
 * @param done Function invoked on complete, first argument will be non-null if an error occurred (50% of the time)
 */
module.exports = function fakejax(req,done) {
    console.log('sending request: '+req);
    setTimeout(function(){
        var err = Math.round(Math.random()) === 1 ? 'fail' : null;
        console.log('request completed: '+req,err);
        done(err);
    },2000);
};
