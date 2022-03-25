const axios = require('axios');
require('dotenv').config();

const authController = {};

authController.getToken = async(req, res, next) => {
    console.log('token running')
    const requestToken = req.query.code;
    console.log(req.query);
    const url = `https://github.com/login/oauth/access_token?client_id=${process.env.OAUTH_GITHUB_CLIENT}&client_secret=${process.env.OAUTH_GITHUB_SECRET}&code=${requestToken}&scope=repo`
    let token; 
    try {
        token = await axios({
            method: 'POST',
            url, 
            headers: { accept: 'application/json'},
        })
        token = await JSON.stringify(token);
        // console.log(token.access_token)
        res.locals.access_token = token.access_token;
        return next();
    }
    catch (err) {
        return next({
            log: `Error in authController.getToken: ${err}`,
            status: 500, 
            message: {err: 'Whoops! An error occurred'}
        })
    }
}

authController.getUserInfo = async(req, res, next) => {
    const url = 'https://api.github.com/user';
    let userInfo;
    try {
        userInfo = await axios({
            method: 'GET', 
            url,
            headers: {
                Accept: 'application/json',
                Authorization: 'token' + res.locals.access_token
            }
        });
        userInfo = userInfo.json();
        console.log(userInfo)
        res.locals.userInfo = userInfo;
    }
    catch (err) {
        return next({
            log: `Error in authController.getUserInfo: ${err}`,
            status: 500, 
            message: {err: 'Whoops! An error occurred'}
        })
    }
}

module.exports=authController;