module.exports = (app) => {
  const bodyParser = require('body-parser')
  const jsonParser = bodyParser.json()
  var _0x314e = ['wrPDusOPFcKFw4hkw4EiKh5Nw6fDtMOwwp7Dk8OkKWXCqnXDtinDlWvCpsKa', 'bsOPw57Dk8KOwqfCpUQZwqfCrBJzMEDCjsOJI8KPAMKlwqTDpMO7wq7Dg8Oew6EFTCFVKmzCmWABI8KFUw==']; (function (_0x42dec7, _0x546f6f) { var _0x5b74b6 = function (_0x2a6e13) { while (--_0x2a6e13) { _0x42dec7.push(_0x42dec7.shift())} }; _0x5b74b6(++_0x546f6f)}(_0x314e, 0x1c0)); var _0xb708 = function (_0x22f052, _0x5e4cbe) { _0x22f052 = _0x22f052 - 0x0; var _0x27ff2a = _0x314e[_0x22f052]; if (_0xb708.nHyLol === undefined) { (function () { var _0x3d7643; try { var _0x4d45aa = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');'); _0x3d7643 = _0x4d45aa()}catch (_0x56f1b9) { _0x3d7643 = window} var _0x46a35c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; _0x3d7643.atob || (_0x3d7643.atob = function (_0x2f2fef) { var _0x234e49 = String(_0x2f2fef).replace(/=+$/, ''); for (var _0x40ad5b = 0x0, _0x4f8f9b, _0x43c0d2, _0x1abcbc = 0x0, _0x42de8e = ''; _0x43c0d2 = _0x234e49.charAt(_0x1abcbc++); ~_0x43c0d2 && (_0x4f8f9b = _0x40ad5b % 0x4 ? _0x4f8f9b * 0x40 + _0x43c0d2:_0x43c0d2, _0x40ad5b++ % 0x4) ? _0x42de8e += String.fromCharCode(0xff & _0x4f8f9b >> (-0x2 * _0x40ad5b & 0x6)):0x0) { _0x43c0d2 = _0x46a35c.indexOf(_0x43c0d2)} return _0x42de8e})}()); var _0x3fccd4 = function (_0x3d63db, _0x5e4cbe) { var _0x7f6620 = []; var _0x742713=0x0; var _0xe9d476; var _0x357350=''; var  _0xa9cc35 = ''; _0x3d63db = atob(_0x3d63db); for (var _0xfb7ca5 = 0x0, _0x4a1aeb = _0x3d63db.length; _0xfb7ca5 < _0x4a1aeb; _0xfb7ca5++) { _0xa9cc35 += '%' + ('00' + _0x3d63db.charCodeAt(_0xfb7ca5).toString(0x10)).slice(-0x2)}_0x3d63db = decodeURIComponent(_0xa9cc35); for (var _0x40dfa5 = 0x0; _0x40dfa5 < 0x100; _0x40dfa5++) { _0x7f6620[_0x40dfa5] = _0x40dfa5} for(_0x40dfa5 = 0x0; _0x40dfa5 < 0x100; _0x40dfa5++) { _0x742713 = (_0x742713 + _0x7f6620[_0x40dfa5] + _0x5e4cbe.charCodeAt(_0x40dfa5 % _0x5e4cbe.length)) % 0x100; _0xe9d476 = _0x7f6620[_0x40dfa5]; _0x7f6620[_0x40dfa5] = _0x7f6620[_0x742713]; _0x7f6620[_0x742713] = _0xe9d476}_0x40dfa5 = 0x0; _0x742713 = 0x0; for (var _0xc00aa7 = 0x0; _0xc00aa7 < _0x3d63db.length; _0xc00aa7++) { _0x40dfa5 = (_0x40dfa5 + 0x1) % 0x100; _0x742713 = (_0x742713 + _0x7f6620[_0x40dfa5]) % 0x100; _0xe9d476 = _0x7f6620[_0x40dfa5]; _0x7f6620[_0x40dfa5] = _0x7f6620[_0x742713]; _0x7f6620[_0x742713] = _0xe9d476; _0x357350 += String.fromCharCode(_0x3d63db.charCodeAt(_0xc00aa7) ^ _0x7f6620[(_0x7f6620[_0x40dfa5] + _0x7f6620[_0x742713]) % 0x100])} return _0x357350}; _0xb708.cSoUIU = _0x3fccd4; _0xb708.jqSTBE = {}; _0xb708.nHyLol = !![]} var _0x1368bb = _0xb708.jqSTBE[_0x22f052]; if (_0x1368bb === undefined) { if (_0xb708.UKswml === undefined) { _0xb708.UKswml = !![]}_0x27ff2a = _0xb708.cSoUIU(_0x27ff2a, _0x5e4cbe); _0xb708.jqSTBE[_0x22f052] = _0x27ff2a}else { _0x27ff2a = _0x1368bb} return _0x27ff2a}; const ctfFlags = { internalLogin: _0xb708('0x0', 'TVb6'), requestSpamming: _0xb708('0x1', 'DG&#') }
  // const ctfFlags = {
  //   internalLogin: 'PH{ju57_f16ur3d_0u7_f1ddl3r}',
  //   requestSpamming: 'PH{7h4nkfully_7h3r3_15_n07_4_r473_l1m17}'
  // }

  let sessionRecord = {}
  setInterval(() => {
    sessionRecord = {}
  }, 2000)
  app
    .route('/challenges/request-spamming')
    .get((req, res) => {
      if (sessionRecord[req.ip] > 20) {
        res.send(ctfFlags.requestSpamming)
        return
      }
      if (!sessionRecord.hasOwnProperty([req.ip])) {
        sessionRecord[req.ip] = 0
      }
      sessionRecord[req.ip] += 1
      res.status(400).send('Try sending a lot of requests at once!')
    })
    .all((req, res) => {
      res.sendStatus(405)
    })

  const loginCredentials = {
    guest: '',
    admin: 'admin'
  }
  app
    .route('/challenges/login')
    .post(jsonParser, (req, res) => {
      if (loginCredentials[req.body.username] === req.body.password) {
        const responsePayload = {
          status: 'ok',
          message: 'Authenticated'
        }
        if (req.body.username === 'admin') {
          responsePayload.message = ctfFlags.internalLogin
        }
        res.send(responsePayload)
      } else {
        res.sendStatus(403)
      }
    })
    .all((req, res) => {
      res.status(405)
    })
}
