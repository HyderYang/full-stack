const fs = require('fs');

/**
 * fs.writeFile(path, data, callback)
 * fs.readFile(path, callback)
 */

 fs.writeFile('./a.txt', 'test case', (err) => {
     if(err){
         console.log('err')
     }else{
         console.log('success')
     }
 })

 fs.readFile('./a.txt', (err, data) => {
     if(err){
         console.log(err);
     }else{
        //  console.log('success', data);
         console.log('success', data.toString());
     }
 })