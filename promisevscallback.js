//callback

/*
const userLeft=true; //boolean
const userWatchingMeme=false; //boolean

function watchTutorialCallback(callback,errorCallback){ //callback,errorCallback are function.
  //pass as reference(callback,errorCallback) 
  if(userLeft){ //userLeft===true
    errorCallback({
      name: 'User Left',
      message: ':)'
    })
  }
  else if(userWatchingMeme){
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDev simlified < cat'
    })
      
  }
  else
  callback('thums up & subscribe');

}


*/

//same thing avobe, do this with promise


const userLeft=true; //boolean
const userWatchingMeme=false; //boolean

function watchTutorialPromise(){ 
  return new Promise((resolve,reject)=>{
    if(userLeft){ //userLeft===true
      reject({
        name: 'User Left',
        message: ':)'
      })
    }
    else if(userWatchingMeme){
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDev simlified < cat'
      })
        
    }
    else
    resolve('thums up & subscribe');

  }) 
 

}
watchTutorialPromise().then((message)=>{
  console.log("success: "+ message);
}).catch((error)=>{
  console.log(error.name+' '+ error.message)
})

