//1
var student = {
  name: "Mai Ha Thi",
  getName: function(){
    console.log(this.name);
    return this.name
  }
};

var _deStudent = student.getName();

//2
var person1 = {name: 'Nhat Minh', age: 12};
var person2 = {name: 'Huu Trung', age: 32};

 var sayHello = function(){
  console.log('Hello, '+this.name);
 };
 var sayGoodbye = function(){
  console.log('Goodbye,'+this.name);
 };

 sayHello();
 sayGoodbye();
//3: Call
 sayHello.call(person1);
 sayGoodbye.call(person2);

 //4: Apply
 sayHello.apply(person1);
 sayGoodbye.apply(person2);

 //5: Scope chain
 var te;
 function step1(){
  console.log(te);
 }
 function step2(){
  te = 2;
  step1();
 }
 step2();
 var te = "Global variables";

 //5: Bind
 var checkNumericRange = function(value){
  if(typeof value !== 'number')
    return false;
  else
    return value >= this.minimum && value <= this.maximum;
 }

 var range = {minimum: 10, maximum:20};

 var boundCheckNumericRange = checkNumericRange.bind(range);

 var result = boundCheckNumericRange(12);
 document.write(result);

 //6: Currying

 function add(a, b, c){
  return a+b+c;
 }

 console.log(add(1,2,3));
 function addCurries(a){
  return(b) => {
    return(c) => {
      return a + b +c;
    }
  }
 }

 console.log(addCurries(1)(2)(3));
 const ad1 = addCurries(1);
 const ad2 = ad1(2);
 const ad3 = ad2(4);

 console.log(ad3);
// function add(v1, v2){
//   return v1+v2;
// }
// function curriedAdd(v2){
//   return add(5, v2);
// }

 //7: Lexical Scope
 function fOuter(){
  var x = "hello";
  function fInner(){
    x = "world";
  }
  fInner();
  return x;
 }
 document.write(fOuter());

 var myFunction = function(){
  var name = 'Ha Thi';
  var myOtherFuction = function(){
    console.log('I am '+name);
  };
  console.log(name);
  myOtherFuction();
 };

 myFunction();

 //8
 function outerF(){
  var x = "World";
  function innerFsetX(val){
    x = val;
  }
  return innerFsetX;
 }
 var a = outerF();

 console.log( a("hello"));

 //Closures scope
 var sayBye = function (name){
  var text = 'Bye, ' + name;
  return () => {
    console.log(text);
  }
 }
 sayBye('Me');
 var calledMe = sayBye('Me');
 calledMe();

 //Another VD for closure scope 
 var registrations = {
  class: "Database",
  students: [
    { studentId: "001", name: "Mai Ha Thi"},
    { studentId: "002", name: "Nguyen Van A"},
    { studentId: "003", name: "Mai An Thuy"},
  ],

  clickEnrollment: function(){
    const _this = this
    this.students.forEach(function(student){
      console.log(student.name + " already enrolled class " + _this.class);
    })
  }
 }
 alert(registrations.clickEnrollment());








