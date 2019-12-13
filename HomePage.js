const fs = require('fs');
const readline = require('readline-sync');
const read = require('./readDetails');

function script(fileName) {

    while (true) {
        console.log('hii well come to mart....')
        console.log('enter user id')
        console.log('enter user name')
        console.log('if key is exist or not')
        console.log('if key is exist again loop and ask user to enter new key.')
        console.log('')
        console.log('show product available');
        josnReader = read.readJsonFile(fileName);
        id = readline.question('1)pant2)shirt 3)T-shirt 4)exit');
        // console.log(josnReader[id]['colour'])
        read.getDataByID(fileName, id)



        if (id == 4)
            break;
    }

}
script('productDetails.json');
