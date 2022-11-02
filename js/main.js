
const gridDimension = 4;



const fieldMain = new Field(gridDimension, gridDimension);

let fieldController;


function setup() {

	fieldController = new FieldController({"field": fieldMain});

	// testing 
	/*
	field.connectNext(2, 2);
	field.connectNext(0, 0);
	field.connectNext(2, 1);
	*/
}


function draw(){
	
	background(150, 0, 30);

	fieldController.doWork();
}



