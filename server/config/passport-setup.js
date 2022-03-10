const passport = require('passport');
const GitHubStrategy = require('passport-github2');
const User = require('../userModel')
require('dotenv').config();

// cerates cookie w the mongo _id property
passport.serializeUser((user, done) => {
    done(null, user.id);
})

// brings back cookie to check it
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

passport.use(
    new GitHubStrategy({
    //the options for the strategy
    callbackURL: '/auth/github/redirect',
    clientID: process.env.OAUTH_GITHUB_CLIENT,
    clientSecret: process.env.OAUTH_GITHUB_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        //check if user already exists in db
        User.findOne({id: profile.id}).then((currentUser)=>{
            if (currentUser) {
                done(null, currentUser)
            } else {
                new User({
                    id: profile.id,
                    displayName: profile.displayName,
                    userName: profile.username,
                    photo: profile.photos[0].value
                }).save().then((newUser)=>{
                    console.log('new user created ', newUser)
                    done(null, newUser)
                })
            }
        })
        
    })
)