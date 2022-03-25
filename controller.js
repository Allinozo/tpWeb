
var editingMode = { rect: " Rectangle", line: " Ligne" };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#52FF33';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	// Actif au moment du clic
	this.onInteractionStart =function(DnD){
		
		if (document.getElementById('butLine').checked) {
			this.currEditingMode = editingMode.line;
		}

		if (document.getElementById('butRect').checked) {
			this.currEditingMode = editingMode.rect;
		}


		console.log(this.currColour)
		this.currLineWidth = document.getElementById('spinnerWidth').value;
		this.currColour = document.getElementById('colour').value;
		console.log(this.currColour)
		
		//On vérifie le mode d'écriture
		switch (this.currEditingMode){
			// Le mode enclenché est en écriture de lignes
			case editingMode.line : 
				var ligne = new Line(DnD.initX,DnD.initY, DnD.endX, DnD.endY, 
				this.currLineWidth, this.currColour);
				drawing.addForms(ligne);
				break;
			
			// Le mode enclenché est en écriture de rectangles
			case editingMode.rect : 
				var rectangle = new Rectangle(DnD.initX, DnD.initY, (DnD.endX-DnD.initX),
				(DnD.endY-DnD.initY), this.currLineWidth,this.currColour);
				drawing.addForms(rectangle);
				 break;
						
			//Point inaccessible
			default :{
				break;
			}
		}
		drawing.paint(ctx);
	}.bind(this)
	//Actif tant que le clic est maintenu
	this.onInteractionUpdate = function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode) {
			case editingMode.line : {
				var ligne = new Line(DnD.initX,DnD.initY, DnD.endX, DnD.endY, 
				this.currLineWidth, this.currColour);
				drawing.changeForm(ligne);
				break;
			}
			//Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				var rectangle = new Rectangle(DnD.initX, DnD.initY, (DnD.endX-DnD.initX),
				(DnD.endY-DnD.initY), this.currLineWidth, this.currColour);
				drawing.changeForm(rectangle);
				break;

			} 
			//Point inaccessible
			default :{
				break;
			}
			
		}
		drawing.paint(ctx);

	}.bind(this)
	//Actif au relâchement du clic - Le code est similaire à onInteractionUpdate, car on modifie
	// une dernière fois le pattern avant de l'enregistrer
	this.onInteractionEnd = function(DnD){
		var str = "d"+this.currentShape+this.currEditingMode;
		var element = document.createElement("p");
		element.innerHTML=str;
		document.getElementById('shape').appendChild(element);
		//On vérifie le mode d'écriture
		switch (this.currEditingMode) {
			case editingMode.line : {
				var ligne = new Line(DnD.initX,DnD.initY, DnD.endX, DnD.endY, 
				this.currLineWidth, this.currColour);
				drawing.changeForm(ligne);
				this.currentShape++;
				break;
			}
			//Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				var rectangle = new Rectangle(DnD.initX, DnD.initY, (DnD.endX-DnD.initX),
				(DnD.endY-DnD.initY), this.currLineWidth, this.currColour);
				drawing.changeForm(rectangle);
				this.currentShape++;
				break;

			} 
			//Point inaccessible
			default :{
				break;
			}
			
		}
		drawing.paint(ctx);
	}.bind(this)

}