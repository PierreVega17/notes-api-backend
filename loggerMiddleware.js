const logger = ((request, response, next) => {
    console.log('Middleware');
    console.log(request.method);
    console.log(request.path);
    console.log(request.body);
    next();
});

module.exports = logger;