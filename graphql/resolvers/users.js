const User = require('../../models/User');

module.exports = {
    Mutation: {
        register(_, args, context, info) {
            //TODO:
            // Validate User data 
            // Make sure user does not exits 
            // hash password and create an auth token
        }
    }
}