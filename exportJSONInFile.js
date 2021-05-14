/*
export any javascript object as a json file

@param1 : data : javascript object or json string
@param2 : filename : name of the file to be downloaded
*/

function exportJSON (data, filename = 'json.json') {
    if(!data) {
        console.error('exportJSON : No data')
        return;
    }
    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
