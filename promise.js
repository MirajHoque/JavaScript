//promise: an object used as placeholder for results that it will contains eventually sometime in future.

//has 3 stages: pending, fulfilled, rejected


var x=1+1; //boolean
let p=new Promise((resolve,reject)=>{ //resolve, rejected are methods
  if(x===3){ 
    resolve("I am successful")

  }
  else{
    reject("I am failed");

  }
});

//p.then((message)=>console.log(message));
//p.catch((message)=>console.log(message));
p.then((message)=>console.log(message)).catch((message)=>console.log(message));