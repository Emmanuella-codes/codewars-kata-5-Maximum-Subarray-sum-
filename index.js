var maxSequence = function(arr){
  let currSum = 0
  let maxSum = 0
  
  // check if the array is empty
  if (arr.length === 0) return 0

  // iterate through the array
  for (let i = 0; i < arr.length; i++) {  
    // get the maximum number of the array and add the next number
    currSum = Math.max(arr[i], currSum + arr[i])
    // set the maxSum to equal the highest number between the maxSum and currSum
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) 
console.log(maxSequence([-2, -4, -1]))
