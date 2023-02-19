


// ------------------------------- Every time you see this its a new question or topic



// -------------------------------
//given a object write a fuction to search the object with string input
var obj = { a: { b: { c: { d: { e: { f: 1 }, g: { h: 2 } } } } }, i: 3 };

let search = (path) => {
  return path.split(".").reduce((object, i) => object[i], obj);
};
console.log(search("a.b.c.d.g.h"));

// -------------------------------
//deep cloning a object
let someObj = {
  name: "Ajit",
  age: 28,
  address: {
    home: {
      name: "Karnataka",
      city: "Bangalore",
    },
  },
  log: () => console.log("logged"),
};

let clone = (_someObj) => {
  return Object.keys(_someObj).reduce((object, i) => {
    return i;
  }, _someObj);
};

console.log(clone(someObj));
let obj1 = {
  age: 28,
};


obj1 = { ...obj1, ...{ name: "swayambhu" } };
obj1.name = "swayambhu"
console.log(obj1)

const key = "name";
obj1[key] = "swayambhu";

let copySomeObj =  JSON.parse(JSON.stringify(someObj));
let _copyObject = cloneObject(someObj);
function cloneObject(_someObj) {
  let copySomeObj = {};
  Object.keys(_someObj).forEach((key) => {
    if (!(typeof _someObj[key] === "object")) {
      copySomeObj[key] = _someObj[key];
    } else copySomeObj[key] = cloneObject(_someObj[key]);
  });
  return copySomeObj;
}

_copyObject.name = "swayambhu";
_copyObject.address.home.city = "cuttack";

console.log(_copyObject);

// -------------------------------
//is the following declaretion valid
console.log(a); //10

let a = 10; //invalid
let a = 12;
console.log(a);

//ans-    this type of declaretion is valid for var only.

// -------------------------------
//what will console.log(a) prints
var a = 12;

function abc(a = 13) {
  console.log(a);
}

abc();

// -------------------------------
//use of sprade oparator 
Const a=  {ac: 2, bc: 3};
Const b = a;
B.bc: 4;

// -------------------------------

// Const a = [1,2,3,4];
// Typeof a; // array

// Typeof null;
// Typeof NaN

// 1+ ‘1’ // 11 or ‘11’

// 1 + ‘1’ * 2 // error

// -------------------------------
// Event Loop //

// console.log(‘start’);
// setTimeout(() => {
// 	console.log(‘set timeout’);
// },0);

// promise.resolve(2);

// console.log(‘end’);

// ‘start’
// ‘end’
// ‘Set timeout’

// -------------------------------
// Debounce // -
// Throttle // +

// -------------------------------
// Array.map
// Array.ownMap
// array.map((arr,i)=>{

// })
//array.prototype

// Function ownMap(){
// for(let i=0;i<array.length;i++)
// {

// }
// }

// Array.prototype.ownMap =()=>{
// for(let i=0;i<array.length;i++)
// {

// }
// }

// [1,2,3].ownMap((item) => {
// })

// [1,2,3].map()

// -------------------------------
//lifecycle methods in hooks
// useEffect(()=>{
// // mount and update
// Return ()=>{
// //unmount
// }
// },[ ])
