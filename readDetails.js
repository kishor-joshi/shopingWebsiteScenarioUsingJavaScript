const fs = require('fs');


function readJsonFile(fileName) {
    'use strict';

    //read the json file Synchronously
    let rawdata = fs.readFileSync(fileName);
    //convert into java script object
    let jsonObject = JSON.parse(rawdata);
    return jsonObject;

}

function getDataByID(fileName, id) {
    let fileData = readJsonFile(fileName);

    if (fileData[id] != undefined) {
        console.log(fileData[id]);
        return fileData[id];
    }
    else {
        console.log('id is not exist');
    }
}


function getValueByID(id, fileObject) {
    if (fileObject[id] != undefined) {
        console.log(fileObject[id])
        return fileObject[id];
    } else {
        console.log('id is wrong');
    }
}



function getAllkeys(fileName) {
    let getJsonFileContent = getJsonFileObject(fileName);

    const keys = Object.keys(getJsonFileContent);
    console.log(keys);
    return keys;   //returns in array formate
}


function getAllDetails(fileName) {
    let fileData = getJsonFileObject(fileName);
    console.log(fileData);
    return fileData;
}


module.exports = {
    readJsonFile, getDataByID, getAllkeys, getAllDetails, getValueByID
}

//getDataByID('productDetails.json', '1')