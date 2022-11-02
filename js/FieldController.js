class FieldController {
	constructor({"field": field}) {
		
		/**/
		// testing
		this.generator = new PuzzleFieldGenerator(field.dimX, field.dimY);
		this.field = this.generator.generate();
		console.log(this.field);
		// end testing
		/**/
		
		//this.field = field;
		//console.log(this.field);

		this.displayer = new FieldDisplayController({"field": this.field, margin: 70});

		this.interactor = new FieldInteractionController({"field": this.field, posArray: this.displayer.formattedPosArray, influenceRange: this.displayer.pointSize});

	}

	doWork() {
		
		if(mouseIsPressed){
			this.interactor.interactPos(mouseX, mouseY);
			//console.log(this.field)
		}

		this.displayer.displayField();

	}


}