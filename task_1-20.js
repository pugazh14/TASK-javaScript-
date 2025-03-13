
alert("Hello, world!")
let  string="hi";
console.log(string)
let num=144
console.log(num);
let bool=true
console.log(bool)
let a=10,b=3;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
let p="butter"
let u="fly"
console.log(p+u)
console.log(typeof num);
console.log(typeof bool);
let i=0
while (i<4) {
    for(let j=1;j<=2;j++){
        console.log(i+" "+j);
    }
    i++
}
 const iseven=(num)=> num%2==0;
 console.log(iseven(5));
let maxval=(n1,n2)=> { return n1>n2 ? n1:n2}
console.log(maxval(8,9))
 
"use strict";
const s=100
//s=22;
//console.log()
const f=100;
var ho;
console.log(ho)
function add1(n1,n2){
    return n1+n2
}
console.log(add1(34,66))
let funexp=function( n1,n2){ console.log("i am in function expression :"); return (n1+n2);}
let arrowfun=(n1,n2)=>{
    console.log("i am in arrow function : "); return (n1+n2)
}

console.log(funexp(45,10));
console.log(arrowfun(56,10));
let recarea=(l,b)=>{ return l*b}
console.log(recarea(5,4))
function oper(){
    return a+b;
}
console.log(7,8);
let per={
    nam:"aaaa",
    age:12
};
let{nam,age}=per;
console.log(nam);
console.log(age);

console.log("Hi");

setTimeout(() => {
    console.log("Geek");
}, 2000);

console.log("End");
