var nums = [1,2,3]

log(...nums); //1,2,3



function returnFirstTwo(a,b){
  return [b,a]
}
var a = [1,2,3]
var c = returnFirstTwo(...a) // [2,1]


//pratical example of spread
let nums = [1,2,3]
let abcs = ["a","b","c"]

let alphanum = [...nums, ...abcs];  //[1,2,3,"a","b","c"]

function getNums(){

  return [1,2,3]
}

return ...getNums()
