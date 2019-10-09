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

    app.get('/', (req, res)=>{
        res.redirect('https://sites.google.com/view/pingtunghacker');
    });

    app.get('/challenge/redirect', (req, res)=>{
        if(!req.useragent.isCurl){
            res.status(400).send("Sorry, you must use curl to solve this challenge.");
            return;
        }
        res.redirect('/redirect-secret/');
    })
    app.get('/redirect-secret', (req, res)=>{
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
                res.status(400).send("What <b>item</b> would you like?");
            }
        })
        .get((req, res) => {
            if (req.query.item) {
                res.send(ctfFlags["order-get"]);
            } else {
                res.status(400).send("What <b>item</b> would you like?");
            }
        })
        .all((req, res) => {
            res.status(405).send("Try POST or GET.");
        });
    app.route('/challenge/order-as-human')
        .post(urlEncodedParser, (req, res) => {
            let item = req.body.item;
            if (!item) {
                res.status(400).send("You must tell us what item you want!");
                return;
            }
            if (req.useragent.isCurl || req.useragent.isBot || req.useragent.browser === "unknown") {
                res.status(400).send("We don't serve bots or crawler here!");
                return;
            }
            let referrer = req.get("Referrer");
            if (referrer) {
                let referrerUrl = require('url').parse(referrer);
                if (referrerUrl) {
                    if (referrerUrl.host === "localhost" || referrerUrl.host === "127.0.0.1") {
                        res.send(`Enjoy your <b>${item}</b>! ${ctfFlags["order-as-human"]}`);
                        return;
                    }
                }
            }
            res.status(400).send("We don't serve outsiders here! You need to be referred from our home to order anything!");
        })
        .all((req, res) => {
            res.status(405).send("Only POST allowed!");
        });
}