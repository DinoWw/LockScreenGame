class FieldController {
	constructor(field) {
		this.field = field;

		this.display = FieldDisplayController(this.field, margin = 70);




		this.interactor = FieldInteractionController(this.field, display.formattedPosArray, display.pointSize);

	}

	doWork() {
		
		if(mouseIsPressed){
			interactor.interactPos(mouseX, mouseY);
		}

		display.displayField();

	}


}