const fs = require('fs');

fs.writeFile('./BaiTapB9/test.txt', 'Nguyễn Đa Đa 2', function(err, data){
    if(err) throw err;
    console.log('write file successfully');
});