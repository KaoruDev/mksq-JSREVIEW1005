

var landMines = [];
var currentRand

for(var i = 0; i < 3; ){
	//currentRand = parseInt(Math.random() * 100, 10) + 1;
	currentRand = parseInt(Math.random() * 100, 10) + 1;
	
	console.log("index of", landMines.indexOf(currentRand));
	if(landMines.indexOf(currentRand) === -1){
		landMines.push(currentRand);
		i++;
	}

	console.log(landMines);
}
