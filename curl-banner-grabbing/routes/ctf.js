module.exports = (app) => {
    let bodyParser = require('body-parser');
    let urlEncodedParser = bodyParser.urlencoded({
        extended: false
    });

    let ctfFlags = {
        "redirect": "PH{cur1_locati0n_redirect}",
        "response-header": "PH{reSp0nse_hEAdER_v!a_cur1}",
        "ua-identify": "PH{y0u_kn0w_how_to_sp0of_user_agent!}",
        "order-post": "PH{p0sting_outside_of_br0wser_1s_dope}",
        "order-get": "PH{query_str1ng_is_Http_101}",
        "order-as-human": "PH{th1s_happens_more_0ften_than_youd_think}"
    }

    app.get('/', (req, res) => {
        res.redirect('https://sites.google.com/view/pingtunghacker');
    });

    app.get('/challenge/redirect', (req, res) => {
        if (!req.useragent.isCurl) {
            res.status(400).send("Sorry, you must use curl to solve this challenge.");
            return;
        }
        res.redirect('/redirect-secret/');
    })
    app.get('/redirect-secret', (req, res) => {
        res.send(ctfFlags["redirect"]);
    });

    app.get('/challenge/response-header', (req, res) => {
        res.append('Server', Buffer.from(ctfFlags["response-header"]).toString('base64'));
        res.send("Hello there!");
    })

    app.get('/challenge/ua-identify', (req, res) => {
        if (req.useragent.isEdge && req.useragent.isMac) {
            res.send(ctfFlags["ua-identify"]);
        } else {
            res.status(400).send("You must be using Edge on macOS to see the flag!");
        }
    });

    app.route('/challenge/order')
        .post(urlEncodedParser, (req, res) => {
            if (req.body.item) {
                res.send(ctfFlags["order-post"]);
            } else {
                res.status(400).send("What <b>item</b> would you like? Tell me via URL encoded form data.");
            }
        })
        .get((req, res) => {
            if (req.query.item) {
                res.send(ctfFlags["order-get"]);
            } else {
                res.status(400).send("What <b>item</b> would you like? Tell me via query string!");
            }
        })
        .all((req, res) => {
            res.status(405).send("Try POST or GET.");
        });
    app.route('/challenge/order-as-human')
        .post(urlEncodedParser, (req, res) => {
            let item = req.body.item;
            if (!item) {
                res.status(400).send("You must tell us what <b>item</b> you want in the form data!");
                return;
            }
            if (req.useragent.isCurl || req.useragent.isBot || req.useragent.browser === "unknown" || req.useragent.version === undefined) {
                console.log(req.useragent);
                res.status(400).send("We don't serve bots or crawler here!");
                return;
            }
            let authorizationToken = req.get('Authorization');
            if (authorizationToken){
                let parsedAuth = require('basic-auth').parse(authorizationToken);
                if (parsedAuth && parsedAuth.name === "PH" && parsedAuth.pass === ctfFlags["order-post"]){
                    res.send(ctfFlags["order-as-human"]);
                    return;
                }
            }
            res.status(400).send(
                "You need to be authorized! Please authorize via basic authorization.\r\n"+
                "Username: PH\r\n" + 
                "Password: Flag from the ORDER (POST) challenge\r\n" + 
                "See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization");
        })
        .all((req, res) => {
            res.status(405).send("Only POST allowed!");
        });

    function isPrivateIP(ip) {
        var parts = ip.split('.');
        return parts[0] === '10' ||
            (parts[0] === '172' && (parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31)) ||
            (parts[0] === '192' && parts[1] === '168');
    }
}