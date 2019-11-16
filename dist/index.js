
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tiny-mobx-form-react.cjs.production.min.js')
} else {
  module.exports = require('./tiny-mobx-form-react.cjs.development.js')
}
