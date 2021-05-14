/*
isEmptyJSON
@param1 : json/array
@param2 : Optional : Boolian if you want to check array empty check also.
@retyrn : Boolian false if valid object with values/ Boolian true if json is anything else.
*/


function isEmptyJSON(json, includeArrayCheck = false) {
    if (json === null) {
        return true;
    }
    if (typeof json === "object") {
        if (Array.isArray(json)) {
            if (includeArrayCheck === true && json.length) {
                return false;
            } 
            return true;
        }
        for (let key in json) {
            if (hasOwnProperty.call(json, key)) {
                return false;
            }
        }

    }
    return true;
}
