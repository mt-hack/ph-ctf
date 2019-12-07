module.exports = (app) => {
  const helmet = require('helmet')
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'cdnjs.cloudflare.com'],
      scriptSrc: ["'self'", 'cdnjs.cloudflare.com']
    }
  }))
  app.use(helmet.xssFilter())
}
