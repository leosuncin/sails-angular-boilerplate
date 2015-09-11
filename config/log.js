/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */

module.exports.log = {

    /***************************************************************************
    *                                                                          *
    * Valid `level` configs: i.e. the minimum log level to capture with        *
    * sails.log.*()                                                            *
    *                                                                          *
    * The order of precedence for log levels from lowest to highest is:        *
    * silly, verbose, info, debug, warn, error                                 *
    *                                                                          *
    * You may also set the level to "silent" to suppress all logs.             *
    *                                                                          *
    ***************************************************************************/

    // level: 'info',

    // unlock dailyRorate transport!
    // more information: https://github.com/winstonjs/winston#daily-rotate-file-transport
    dailyRotate: {
        dirname: require('path').resolve('.tmp/logs'),
        datePatern: '.yyyy-MM-dd',
        filename: require('../package.json').name,
        handleExceptions: true,
        exitOnError: true,
        prettyPrint: true,
        timestamp: true,
        level: 'warn'
    }

};
