/*  Full list of 'Project Euler' problems: https://projecteuler.net/archives  */
//Problem #1 
export const findMult = (limit) => {
	let sum = 0;
	return (multiple) =>{
		return (multiple2) => {
			for (let i=0; i < limit; i++)
			{
				if (i % multiple === 0 || i % multiple2 === 0){
					sum += i;
				}
			}
			return sum;
		}
	}
}

//Problem #2 (Solved by:  Sam Majerus). 
export const findFibonacciEvens = (limit) => {
	let sum = 0;
	let limitReached = 1; 
	let currentNum = 0; 
	let prevNums = [1, 2];
	return (multiple) =>{
		let i = 1; 
		while(limitReached != 0)
		{
			currentNum = prevNums[i] + prevNums[i-1];
			if(currentNum >= limit){
				limitReached=0; 
			}else{
				prevNums[i+1] = currentNum; 
				console.log("Current array: " + prevNums + ".    \n CurrentNum right now is: " + currentNum);
				if (currentNum % multiple === 0){
					sum += currentNum;
				}
				i++;
			} 
		}
		return sum;
	}
}

export const largestPrimeFactor = (n) => {
let divisor=2;
while (divisor <= n)
{
  if (n%divisor == 0){
   n /= divisor
  } else {
    divisor++;
  }
}
return divisor; 
}


// export const largestPrimeFactor = (n) => {
//   let i=2;
// 	let primeFactor = 0;
//   while (i <= n)
//   {
//     if (n%i == 0){
//       for(let j=2; j < n; j++)
// 			{
// 				if (!i%j ==0)
// 				{
// 					primeFactor = i
// 				}
// 			}
//     } else {
//       i++;
//     }
//   }
//   return primeFactor; 
// }