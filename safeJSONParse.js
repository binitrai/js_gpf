/*
Function for JSON string parsing with default value
@param1 : json string
@param2 : default output incase of json string is not valid
*/

function safeJSONParse(jsonString, defaultParsedJson = {}){
    let ret = defaultParsedJson;
    if (jsonString === null) {
        return ret;
    }
    try {
        ret = JSON.parse(jsonString)
    } catch(e) {
        console.log(e);
    }
    if (typeof ret === "object") {
        return ret;
    }
    return defaultParsedJson;
}
