class PuzzleFieldGenerator {
	constructor(fieldDimensionX, fieldDimensionY){
		this.fieldDimension = {"x":fieldDimensionX, "y":fieldDimensionY};
	}

	generate(){

		let field = new Field(this.fieldDimension.x, this.fieldDimension.y);
		
		for(let i = 0; i < 20; i++) {
			try {
				field.connectNext(Math.floor(Math.random()*this.fieldDimension.x), Math.floor(Math.random()*this.fieldDimension.x));
				
			}
			catch(err) {
				// can only really be point alreadyconnected error
				// console.log(err);
			}
		}
		return field;
	}


}