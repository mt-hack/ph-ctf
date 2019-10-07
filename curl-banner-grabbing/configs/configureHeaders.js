module.exports = (app) =>{
    let helmet = require('helmet');
    app.use(helmet());
    app.use(helmet.contentSecurityPolicy({
        directives:{
            scriptSrc: ["'self'"],
            upgradeInsecureRequests: true,
            reportUri: '/report-violation'
        }
    }));
}