function setZero(arr){
	let firstZeroRow = 0;
	let firstZeroCol = 0;
	let flag = false;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if(arr[i][j] == 0) {
				if(!flag) {
					firstZeroRow = i
					firstZeroCol = j
					flag = true
				}else{
					arr[i][firstZeroCol] = 0
					arr[firstZeroRow][j] = 0
				}
			}
		}
	}


	if(!flag) {
		return arr;
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if( i == firstZeroRow || j == firstZeroCol ) {
				continue;
			}
			if( arr[i][firstZeroCol] == 0 || arr[firstZeroRow][j] == 0 ) {
				arr[i][j] = 0
			}
		}
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i][firstZeroCol] = 0;
	}

	for (let j = 0; j < arr[firstZeroRow].length; j++) {
		arr[firstZeroRow][j] = 0;
	}

	return arr;
}

let arr = [
	[1,0,2,3,1],
	[2,3,0,1,1],
	[2,1,1,2,4],
	[3,0,1,1,1]
]

console.log(setZero(arr));
