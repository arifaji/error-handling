const { ErrorHandler } = require('../helpers/error');

class ErrorController {
    static response () {
        throw new ErrorHandler(500, 'Internal server error');
    }
};

module.exports = ErrorController;