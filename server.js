const express = require('express')

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '6506ae077a634d908522d49adde5681b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log(`Holy fuzzballs!! ITS WORKING ON PORT 4000!!`))