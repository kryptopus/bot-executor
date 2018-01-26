var solfege = require("solfegejs").default;
var ExecutorBundle = require("./lib/Bundle").default;

// Create application instance
var application = solfege.factory(__dirname+"/config/parameters.yml");
application.addBundle(new ExecutorBundle);


// Start the application
var parameters = process.argv.slice(2);
application.start(parameters);
