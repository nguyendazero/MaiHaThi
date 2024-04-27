const fs = require('fs');

fs.readFile('./BaiTapB9/test.txt', function(err, data){
    if(err) throw err;
    console.log(data.toString());
});

console.log(1);