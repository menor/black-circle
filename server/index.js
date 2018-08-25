// Something is wrong with serving the js build
// TO continue open the browser on Port 3005 and check network
// request, the Javascript is not loading
const path = require('path')

const nconf = require('nconf')
const express = require('express')
const morgan = require('morgan')

const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy


const rootDir = path.resolve(__dirname, '../')
const expressSession = require('express-session')
// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. Configuration files

nconf.defaults({
  defaults: `${__dirname}/config/defaults.json`,
  private: `${__dirname}/config/private.json`,
})

nconf
  .argv()
  .env('__')
  .defaults({'NODE_ENV': 'development'})
  .file('defaults', `${__dirname}/config/defaults.json`)
  .file('private', `${__dirname}/config/private.json`)

const NODE_ENV = nconf.get('NODE_ENV')
const isDev = NODE_ENV === 'development'

passport.use(
  new SpotifyStrategy(
    {
      clientID: nconf.get('SPOTIFY_CLIENT_ID'),
      clientSecret: nconf.get('SPOTIFY_CLIENT_SERVER'),
      callbackURL: nconf.get('SPOTIFY_CALLBACK_URL'),
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function() {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, profile)
      })
    },
  ),
)

const app = express()


if(isDev) {
  // Use Filestore in development mode, this way we won't delete
  // the session every time nodemon restarts the server
  const FileStore = require('session-file-store')(expressSession)
  app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    // In production we will get this from nconf
    secret: 'unguessable',
    store: new FileStore()
  }))
} else {
  // Use RedisStore in production mode
}

app.use(morgan('dev'))
app.use(passport.initialize())

app.get('/auth/spotify', passport.authenticate('spotify'))
app.get('/auth/spotify/callback', passport.authenticate('spotify'))

// Express only serves static assets in production
if (!isDev) {
  app.use(express.static(path.join(rootDir, 'build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'build/index.html'))
})

app.listen(nconf.get('PORT'), () =>
  console.log(`Ready on port ${nconf.get('PORT')}`),
)
