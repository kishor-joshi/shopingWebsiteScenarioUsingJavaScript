const read = require('./readDetails');
const fs = require('fs');
const readline = require('readline-sync');
const write = require('./writeDetails');

function getAvailableProduct(fileName, requredValueKey) {
    fileContents = read.readJsonFile(fileName);
    Object.entries(fileContents).forEach(([key, value]) => {
        console.log(`${key} = ${value[requredValueKey]}`)
    });
    return fileContents;

}

function showSelectedProductDetails(id, fileContents) {
    productDetails = read.getValueByID(id, fileContents);
    console.log(productDetails);
    return productDetails;
}


function getselectdColour(product, selectedColor) {
    for (let index = 0; index < product.length; index++) {
        const color = product[index];
        if (selectedColor == color) {
            console.log('selected color is available ' + selectedColor);
            return color;
        }

    }

    console.log('selected color is not available');
}

function showperpurchasedItems(fileName, id) {
    userProductDetails = read.getDataByID(fileName, id);
    console.log(`thank you ${userProductDetails['name']} for purchasing.`)
    console.log('you ordered following product')
    console.log(userProductDetails['selectedProductDetails']);
}


function script() {

    while (true) {


        id = readline.question('enter id');
        //id = 3;
        size = 's';
        fileContents = getAvailableProduct('productDetails.json', 'type');
        selectedProduct = showSelectedProductDetails(id, fileContents);
        console.log(selectedProduct['type']);
        availableSize = showSelectedProductDetails('Size', selectedProduct);
        selectedSize = showSelectedProductDetails('s', availableSize);
        console.log(selectedSize['price']);
        availablecolor = showSelectedProductDetails('colour', selectedProduct);
        whichColour = getselectdColour(availablecolor, 'red');
        //console.log(whichColour);
        write.insertNewDataIntoFile('userDetails.json', '5', 'maghesh', id, selectedProduct['type'], whichColour, size, selectedSize['price'])
        showperpurchasedItems('userDetails.json', '5')
    }
}

script();