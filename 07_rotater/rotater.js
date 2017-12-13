// function rotater(string){
//   return function rotate(num){
//     if (num > string.length){
//       rotated = num % string.length
//       string.slice((string.length - rotated), string.length).concat(string.slice(0, rotated))
//     }
//     return string.slice(0, num).concat(string.slice(string.length - num, string.length))
//   }
// }

function rotater(str) {
	var flip = false,
		rotatedStr;

	return function(steps){
		if(steps === str.length) {
			flip = !flip;
		}
		if(!flip) {
			rotatedStr = str.slice(steps) + str.slice(0,steps);
		} else {
			rotatedStr = str.slice(str.length - steps) + str.slice(0, str.length-steps);
		}
		
		return rotatedStr;
	};
}