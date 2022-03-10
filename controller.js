
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#52FF33';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);
}
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	// Actif au moment du clic
	Pencil.prototype.onInteractionStart =function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode){
			// Le mode enclenché est en écriture de lignes
			case editingMode.line : {
				var ligne = new Line(DnD.initX,DnD.initY, DnD.endX, DnD.endY, 
				this.currLineWidth, this.currColor);
				drawing.addForms(ligne);
				break;
			}
			// Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				var rectangle = new Rectangle(DnD.initX, DnD.initY, (DnD.endX-DnD.initX),
				(DnD.endY-DnD.initY), this.currLineWidth,this.currColour);
				drawing.addForms(rectangle);
				 break;
			}			
			//Point inaccessible
			default :{
				break;
			}
		}
		drawing.paint(ctx);
	}
	//Actif tant que le clic est maintenu
	Pencil.prototype.onInteractionUpdate = function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode) {
			case editingMode.line : {
				var ligne = new Line(DnD.initX,DnD.iniY, DnD.finalX, DnD.finalY, 
				canvas.currLineWidth, canvas.currColor);
				drawing.changeForm(ligne);
				break;
			}
			//Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				var rectangle = new Rectangle(DnD.initX, DnD.initY, (DnD.endX-DnD.initX),
				(DnD.endY-DnD.entInitY));
				drawing.ChangeForms(rectangle);
				break;

			} 
			//Point inaccessible
			default :{
				break;
			}
			
		}
		drawing.paint(ctx);

	}
	//Actif au relâchement du clic - Le code est similaire à onInteractionUpdate, car on modifie
	// une dernière fois le pattern avant de l'enregistrer
	Pencil.prototype.onInteractionEnd = function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode) {
			case editingMode.line : {
				drawing.changeForm(DnD.initX,DnD.iniY, DnD.endX, DnD.endY, 
				canvas.currLineWidth, canvas.currColor);
				break;
			}
			//Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				drawing.ChangeForms(DnD.initX, DnD.initY, (DnD.endX-DnD.initX),
				 (DnD.endY-DnD.initY));
				 break;

			} 
			//Point inaccessible
			default :{
				break;
			}
		}
		drawing.paint(ctx);
	}

