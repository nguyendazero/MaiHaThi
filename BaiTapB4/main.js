function checkSoChan(number){
  return number%2 === 0;
}

console.log(checkSoChan(27));

check = number => number % 2 === 0;
console.log(check(7));

var sachs = [
  {
    tacgia: 'Harper Lee',
    tieuDe: 'To Kill a Mockingbird',
    namXuatBan: 2020,
    trangthai: true
  },
  {
    tacgia: 'Ray Brandury',
    tieuDe: 'Fahrenheit 451',
    namXuatBan: 2022,
    trangthai: false
  }
]

console.log(`sách 1: tacGia: ${sachs[0].tacgia}, tieuDe: ${sachs[0].tieuDe}, namXuatBan: ${sachs[0].namXuatBan}, trangThai: ${sachs[0].trangthai}`)
console.log(`sách 2: tacGia: ${sachs[1].tacgia}, tieuDe: ${sachs[1].tieuDe}, namXuatBan: ${sachs[1].namXuatBan}, trangThai: ${sachs[1].trangthai}`)

function MaxMin(mang){
  let max = mang[0];
  let min = mang[0];
  for(let i = 0; i<mang.length; i++){
    if(max < mang[i]){
      max = mang[i];
    }
    if(min > mang[i]){
      min = mang[i];
    }
  }
  console.log(max, min);
}
MaxMin([1,2,3,4,5]);

function FindKeyLong(name){
  let ten = name.split(' ');
  let max = ten[0];
  for(let i = 0; i<ten.length; i++){
    if(max < ten[i]){
      max = ten[i];
    }
  }
  console.log(max);
}

FindKeyLong('Nguyen Da Da');


function FindKeyLong2(name){
  let ten = "";
  let max = 0;
  name.trim().split(" ").forEach(element => {
    max<=element.length ? (ten = element , max = element.length) : ten = ten
  });

  console.log(ten);
}

FindKeyLong2('Nguyen rgzdhdth Da');



let number=[2,5,7,8,9];
let max = number[0];
let min = number[0];
for(var i = 0; i < number.length; i++){
  // if(max<number[i]){
  //   max=number[i];
  // } 
  (max < number[i]) ? max=number[i] : max ;
  // if(min>number[i]){
  //   min=number[i];
  // }
  (min > number[i]) ? min=number[i] : min ;
}
console.log("so lon nhat",max);
console.log("so nho nhat",min);