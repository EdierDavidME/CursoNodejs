function info(text){
    text += "https://www.npmjs.com/";
    console.log("INFO: ",text);
    return text;
}

module.exports.error = function error(text){
    console.log("Error",text);
    return text;
}
module.exports.info = info;
//module.exports = {info, error};