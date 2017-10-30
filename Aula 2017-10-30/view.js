const debug = require("debug")("soccer-app:view")
const fs = require("fs")
const handlebars = require("handlebars")




var views = {
}

module.exports = function (viewName, context, cb) {

    if(views[viewName]) {
        return executeView(views[viewName]);
    }

    const viewFilePath = __dirname + "/views/" + viewName + ".hbs";
    debug(viewFilePath);
    fs.readFile(viewFilePath, processViewFileContent)

    
    function processViewFileContent(err, data) {
        if (err) {
            return cb(err);
        }
        data = data.toString();
        const template = handlebars.compile(data)
        views[viewName] = template;

        executeView(template)
    }

    function executeView(template) {
        let viewContent = template(context);
        debug(viewContent)
        
        cb(null, viewContent);
    }
}


