const recordVideoOne=new Promise((resolve,reject)=>{
  resolve('video One is recoreded');
});

const recordVideoTwo=new Promise((resolve,reject)=>{
  resolve('video Two is recoreded');
});

const recordVideoThree=new Promise((resolve,reject)=>{
  resolve('video Three is recoreded');
});

/*
//promise.all(): takes an array of promise as input, then it get resloved when all of them are resolved or any one of them are rejected
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages)=>{
  console.log(messages)
})
*/

//Promise.race(): return a promise 10000that fulfills or reject promise as soon as one of the promise in iterable fullfills or reject  
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message)=>{
  console.log(message);
})