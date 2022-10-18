class FieldInteractionController {

	// posArray contains positions of points in the array based on which the calculations in interactPos will be conducted
	// 		formatted as {screenPos: {x, y}, fieldPos: {x, y}}
	// influenceRange defines at which maximum distance from any given point will an interaction count
	constructor({field, posArray, influenceRange}) {
		this.field = field;

		this.posArray = posArray;
		this.influenceRange = influenceRange;

	}

	interactPos(x, y) {
		for(const point of this.posArray){
			if(dist(x, y, point.screenPos.x, point.screenPos.y) <= this.influenceRange){
				try {
					this.field.connectNext(point.fieldPos.x, point.fieldPos.y); 
				} 
				catch (e) {
					// only exception that can be thrown is Point already connected, but it is irrelevant 
				}
			}
		}
	}

}