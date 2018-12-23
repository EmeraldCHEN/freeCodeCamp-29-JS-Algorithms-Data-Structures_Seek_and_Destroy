/**************   Solution #1     ***************************************************************************************/

function destroyer1(arr) {

    let argumentsArr = Array.prototype.slice.call(arguments);

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < argumentsArr.length; j++){
            if(arr[i] === argumentsArr[j]){
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean); /* The Boolean object is an object wrapper for a boolean value.
                                   If value parameter is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), 
                                      the object has an initial value of false    */

}
destroyer1([1, 2, 3, 1, 2, 3], 2, 3); // return [1, 1]
destroyer1([0, 1, 2, 3, 1, 2, 3], 2, 3); // return [1, 1] -> ERROR! As 0 has a value of false thus it's also filtered 




/**************   Solution #2  is the improved version of the above code    *************************************************/

function destroyer(arr) {
  let newArr = [];
  for(let i = 1; i < arguments.length; i++){
    newArr.push(arguments[i]);
  }      
  let updateArr =[];
  for(let j = 0; j <  arguments[0].length; j++){ // arguments[0].length === arr.length in this program
    if(newArr.includes(arguments[0][j]) === false ){
      updateArr.push(arguments[0][j]);     
    }
  }
  return updateArr;
}
destroyer2([0, 1, 2, 3, 1, 2, 3], 2, 3); // return [0, 1, 1]
destroyer2(   [1, 2, 3, 1, 2, 3], 2, 3); // return [1, 1]

destroyer2([1, 2, 3, 5, 1, 2, 3], 2, 3); // return [1, 5, 1]
destroyer2([3, 5, 1, 2, 2], 2, 3, 5); // return [1]
destroyer2([2, 3, 2, 3], 2, 3); // return []



/**************   Solution #3     **********************************************************************************/

function destroyer(arr) {
   let args = Array.from(arguments).slice(1); // Set args equal to a new Array object from() the arguments passed into the function
                                              // Then use the slice() method on args starting from the second index 
   return arr.filter(item => !args.includes(item));  //  Use includes() in the callback function to check if val is not in args
                                                     //  Return true to keep the value in the original array or false to remove it
}



/**************   Solution #4     **********************************************************************************/


function destroyer(arr,...args) { // Using spread operator to retrieve the arguments
   return arr.filter(value => !args.includes(value));
}





// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy/

