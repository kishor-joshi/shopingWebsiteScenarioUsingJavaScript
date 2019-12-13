const fs = require('fs');
const read = require('./readDetails');

function createNewJsonFile(fileName) {
    let jsonObject = {};

    let isFileExist = fs.existsSync(fileName);
    console.log(isFileExist);
    if (!isFileExist) {
        writeDataIntoFile(fileName, jsonObject)

    } else {
        console.log('file already exist');
    }

}


function writeDataIntoFile(fileName, jsonFileObject) {
    let jsonFileString = JSON.stringify(jsonFileObject);
    fs.writeFile(fileName, jsonFileString, function (err) {
        if (err) throw err;

    }
    );

}
function isKeyexist(key, fileObject) {
    if (fileObject[key] != undefined) {
        console.log('key is exist');
        return true;
    } else {
        console.log('key is not exist');
        return false;
    }
}


function insertDataIntoFile(fileName, jsonObject) {

    let isExist = fs.existsSync(fileName);

    console.log(isExist);
    if (isExist == true) {
        writeDataIntoFile(fileName, jsonObject)

    } else {
        console.log('file path is wrong or file not exist');
    }
}

function setUserDetails(userID, name, productID, productName, colour, size, price) {

    var selectedProductDetails = { "productID": productID, "productName": productName, "colour": colour, "size": size, "price": price };
    var userDetailsObject = { "id": userID, "name": name, "selectedProductDetails": selectedProductDetails };
    return userDetailsObject;
}

function insertNewDataIntoFile(fileName, userID, name, productID, productName, colour, size, price) {
    let isExist = fs.existsSync(fileName);
    console.log(isExist);
    if (isExist == true) {
        jsonObject = read.readJsonFile(fileName);
        if (!isKeyexist(userID, jsonObject)) {
            userNewObject = setUserDetails(userID, name, productID, productName, colour, size, price);
            jsonObject[userID] = userNewObject;
            writeDataIntoFile(fileName, jsonObject);
        }
        else {
            console.log('key is already  exist');
        }
    } else {
        console.log('file path is wrong or file not exist');
    }
}
module.exports = {
    createNewJsonFile, writeDataIntoFile, insertDataIntoFile, setUserDetails, insertNewDataIntoFile
}

insertNewDataIntoFile('userDetails.json', '4', 'mohith', '4', 'pant', 'red', '5', '299')
