const debug = require("debug")("soccer-app:view")
const fs = require("fs")
const handlebars = require("handlebars")


var views = {
}

module.exports = function (viewName, context) {

//    if(!views[viewName]) {
        const viewFilePath = __dirname + "/views/" + viewName + ".hbs";
        debug(viewFilePath);
        let data = fs.readFileSync(viewFilePath)
        data = data.toString();
        const template = handlebars.compile(data)
        views[viewName] = template;
//    }
    return views[viewName](context);
}


