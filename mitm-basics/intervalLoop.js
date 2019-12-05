module.exports = (port) => {
  const request = require('request')

  function postToSelf () {
    const payload = {
      username: 'guest',
      password: ''
    }
    request.post(`http://localhost:${port}/challenges/login`, { json: payload })
  }
  function requestIp(){
    request.get('https://a' + 'pi.ipi' + 'fy.org')
  }
  postToSelf()
  setInterval(postToSelf, 15000)
  requestIp()
  setInterval(requestIp, 30000)
}
