module.exports = (app) => {
    let bodyParser = require('body-parser');
    let jsonParser = bodyParser.json({
        type: ['json', 'application/csp-report']
    });

    app.post('/report-violation', jsonParser, (req, res) => {
        if (req.body) {
            console.log('CSP Violation: ', req.body)
        } else {
            console.log('CSP Violation: No data received!')
        }

        res.status(204).end()
    });
}