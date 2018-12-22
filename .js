function destroyer(arr) {

  let newArr = [];

  for(let i = 1; i < arguments.length; i++){
    newArr.push(arguments[i]);
  }      
  let updateArr =[];

  for(let j = 0; j <  arguments[0].length; j++){
    if(newArr.includes(arguments[0][j]) === false ){
      updateArr.push(arguments[0][j]);     
    }
  }
  return updateArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // return [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // return [1, 5, 1]

destroyer([3, 5, 1, 2, 2], 2, 3, 5); // return [1]

destroyer([2, 3, 2, 3], 2, 3); // return []
