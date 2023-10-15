
function allPromises(promiseArray){
    let result=[];
    console.log(promiseArray);
        result=promiseArray.forEach((promise)=>{
          promise.then(res=>{
            return {value:res,status:'fulfilled'};
          }).catch(err=>{
            return {reason:err,status:'rejected'};
          });
        });
        console.log(result);
        return Promise.resolve(result);
  }
  
  var promise1=new Promise((resolve,reject)=>{
    resolve(1);
  });
  var promise2=new Promise((resolve,reject)=>{
    resolve(3);
  });
  var promise3=new Promise((resolve,reject)=>{
    reject('Rejected');
  });
  allPromises([promise1,promise2,promise3]).then(res=>{
     console.log(res);
  })