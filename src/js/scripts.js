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