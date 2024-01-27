/**
 * Bài tập javascript 17/1
 * 
 */

//bài 1
var x = 7;
switch (x) {
  case 2:
    console.log("thu "+2);
    break;
  case 3:
    console.log("thu "+3);
    break;
  case 4:
    console.log("thu 4");
    break;
  case 5:
    console.log("thu 5");
    break;
  case 6:
    console.log("thu 6");
    break;
  case 7:
    console.log("thu 7");
    break;
  case 8:
    console.log("chủ nhật");
    break;
  default:
    console.log("lỗi");
    break;
}

//bai 2: dùng switch case in chỉ mục trong mảng
var y = ["thứ 2", "thứ 3", "thứ 4", "thứ 5", "thứ 6", "thứ 7", "chủ nhật"];
var x = 4;

switch(x){
  case 2:
    console.log(y[x-2]);
    break;
  case 3:
    console.log(y[x-2]);
    break;
  case 4:
      console.log(y[x-2]);
      break;
  case 5:
    console.log(y[x-2]);
    break;
  case 6:
    console.log(y[x-2]);
    break;
  case 7:
    console.log(y[x-2]);
    break;
  case 8:
    console.log(y[x-2]);
    break;
  default:
    console.log("lỗi")
    break;
}

//bai 3: check số chẵn lẻ
var so = 5;
if(so%2==0){
    console.log(so + "la so chan")
}else{
    console.log(so + "la so le")
}

//bai 4: check số nguyên tố
function checkSNT(x){
  var dem = 0;
  for(var i=2; i<=Math.sqrt(x); i++){
    var check = 1;
    if(x%i==0){
      check = 0;
    }
    if(check == 1){
      console.log(x+" là số nguyên tố")
    }else{
      console.log(x+" ko phải số nguyên tố")
    }
  }
}
checkSNT(8)

//bai 5: HIển thị mảng 2 chiều
// var m = [[1,2,3], [4,5,6], [7,8,9]];
// for(i=0; i<m.length; i++){
//   for(j=0; j<m[i].length; j++){
//     document.write(m[i][j]+" ");
//   }
//   document.write("<br>")
// }


/**
 * var m = [[1,2,3], [4,5,6], [7,8,9]];
for(i=0; i<m.length; i++){
  for(j=0; j<m[i].length; j++){
    console.log(m[i][j]);
  }
  console.log("");
}
 * 
 */

//bai 6: kiểm tra  email /a-z hoặc 0-9/ 

var re_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var re_pass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var email_truoc = 'nguyendazero@gmail.com'
var password_truoc = 'mainyasuo@lmht.com'

if(re_email.test(email_truoc) && re_pass.test(password_truoc)){
  console.log("email và password được chấp thuận")
}else{
  if(!re_email.test(email_truoc) && !re_pass.test(password_truoc)){
    console.log("email và pass ko đc chấp nhận")
  }
  if(!re_email.test(email_truoc)){
    console.log("email ko đc chấp nhận")
  }else if(!re_pass.test(password_truoc)){
    console.log("pass ko đc chấp nhận")
  }
}


function checkAccount() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === email_truoc && password === password_truoc) {
      alert('Tài khoản tồn tại!');
  } else {
      alert('Tài khoản không tồn tại!');
  }
}





