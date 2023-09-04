let arr=[-1,-2,-3,-10,-5,-6];

let getescondLargetVal=(items)=>{
  if(items.length){
    let objectData={
      top:-Infinity,
      secondTop:-Infinity
    }
    for(let i=0;i<items.length;i++){
      
      if(items[i]>objectData.top){
        if(objectData.top>objectData.secondTop){
          objectData.secondTop=objectData.top;
        }
        
        objectData.top=items[i];
        
      }else{
        if(items[i]>objectData.secondTop){
          objectData.secondTop=items[i];
        }
      }
    }
    return objectData.secondTop;
  }
}

console.log(getescondLargetVal(arr))


//Closure

function makeFunc() {
    const name = "Mozilla";
    function displayName(param1) {
      console.log(`${name} : ${param1}`);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc('amol');

  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  console.log(makeAdder(10)(20))