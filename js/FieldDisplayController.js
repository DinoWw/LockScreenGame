	
class FieldDisplayController {
	
	constructor(field, margin = 0, pointSize = 40, dimension = [600, 600]) {
		this.field = field;

		this.margin = margin;
		this.pointSize = pointSize;

		createCanvas(...dimension);

		// vertical and hortizontal distance between points will remain constant, based on the horizontal margin and number of points in a row
		this.spacing = 1.0 * (width - 2 * margin) / (field.dimX - 1);

	}




	displayField() {

		noStroke();
		fill(100, 0, 30);

		

		for(let i = 0; i < field.dimX; i += 1){
			for(let j = 0; j < field.dimY; j += 1){		
				ellipse(margin + i * this.spacing, margin + j * this.spacing, this.pointSize, this.pointSize);
			}
		}

		stroke(120, 20, 50);
		strokeWeight(20);
		for(let i = 0; i < field.chain.length - 1; i ++){
			const link = [field.chain[i], field.chain[i + 1]];

			line(margin + link[0].x * this.spacing, margin + link[0].y * this.spacing, margin + link[1].x * this.spacing, margin + link[1].y * this.spacing);

		}
	}


	get formattedPosArray() {

		let posArray = [];
		for(let i = 0; i < field.dimX; i += 1){
			for(let j = 0; j < field.dimY; j += 1){		
				posArray.push(
					{
						"screenPos": 
						{
							"x": margin + i * this.spacing,
							"y": margin + j * this.spacing
						},
						"fieldPos":
						{
							"x": i,
							"y": j
						}
					}
				);

			}
		}

		return posArray;
	}


}

