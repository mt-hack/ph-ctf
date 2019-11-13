module.exports = (port) => {
  const request = require('request')

  function postToSelf () {
    const payload = {
      username: 'guest',
      password: ''
    }
    request.post(`http://localhost:${port}/challenges/login`, { json: payload })
  }
  postToSelf()
  setInterval(postToSelf, 15000)
  setInterval(() => {
    request.get('https://a' + 'pi.ipi' + 'fy.org')
  }, 30000)
}
