const sessionController = {}

sessionController.verifySession = (req, res, next) => {
    let loggedIn = false;
    if (req.session) {
        loggedIn = true
    }
    return next();
}

module.export = sessionController;