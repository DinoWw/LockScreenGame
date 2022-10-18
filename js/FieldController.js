class FieldController {
	constructor({"field": field}) {
		this.field = field;

		this.displayer = new FieldDisplayController({field: this.field, margin: 70});

		this.interactor = new FieldInteractionController({field: this.field, posArray: this.displayer.formattedPosArray, influenceRange: this.displayer.pointSize});

	}

	doWork() {
		
		if(mouseIsPressed){
			this.interactor.interactPos(mouseX, mouseY);
		}

		this.displayer.displayField();

	}


}