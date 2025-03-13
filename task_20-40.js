console.log("hello world in JS")
let v="hello";
console.log(v.length)
console.log(v.charAt(4))
console.log(v.indexOf("e"))
console.log(v.lastIndexOf("o"))
console.log(v.split("e"))
console.log(v.split(""))
console.log(v.slice(1,4))
console.log(v.toUpperCase())
console.log(v.toLowerCase())
console.log(v.includes("oo"))
console.log(Number(v)+1)
console.log(Number(true)+1)

let n=12.0;
let p="122"
console.log(Number.isInteger(6))
console.log(Number.parseFloat(n));
console.log(Number.parseInt(p))
console.log(Number.isNaN("str"));
console.log(isNaN(v))
console.log(Math.PI)
console.log(Math.PI.toFixed(2))
console.log(Math.trunc(Math.PI))
console.log(Math.trunc(3.99))
console.log(Math.round(7.6))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.7))
console.log(Math.pow(3,2));
console.log(Math.min(23 , 5 ,4 ,3))
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.random())
let s="pugazhenthan"
console.log(s.charAt(Math.floor(Math.random()*12)))
const f=prompt("enter your num")
console.log(typeof(f))
let a=confirm("are you ok")
console.log(a);
function sub(n1,n2){
    return n1-n2
}
let add = (n1,n2)=>{
    return n1+n2
}
console.log(add(3,7))
let r=[]
 r=["a","b","c"]
let aa=["k","l","m"]
r.splice(1,2,"add")
console.log(r)
let c=r.join()
console.log(c)
let ar=c.split(",")
console.log(ar)
let pa=[...r,...aa]
console.log(pa)
