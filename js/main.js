
const gridDimension = 4;



const field = new Field(gridDimension, gridDimension);

let displayField;

function setup() {
	displayField = initializeDisplayField();


	// testing 
	field.connectNext(2, 2);
	field.connectNext(0, 0);
	field.connectNext(2, 1);

}


function draw(){

	background(150, 0, 30);

	displayField(field);
}


function onClick(){
	let 
}

