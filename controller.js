
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#52FF33';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	// Actif au moment du clic
	Pencil.prototype.onInteractionStart =function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode){
			// Le mode enclenché est en écriture de lignes
			case editingMode.line : {
				var ligne = new Line(DnD.getInitX(),DnD.getIniY(), DnD.getFinalX(), DnD.getFinalY(), 
				canvas.currLineWidth, canvas.currColor);
				drawing.addForms(ligne);
				break;
			}
			// Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				var rectangle = new Rectangle(DnD.getInitX(), DnD.getinitY(), (DnD.getFinalX()-DnD.getInitX()),
				(DnD.getFinalY()-DnD.getInitY()));
				drawing.addForms(rectangle);
				 break;
			}			
			//Point inaccessible
			default :{
				break;
			}
		}
	}
	//Actif tant que le clic est maintenu
	Pencil.prototype.onInteractionUpdate = function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode) {
			case editingMode.line : {
				var ligne = new Line(DnD.getInitX(),DnD.getIniY(), DnD.getFinalX(), DnD.getFinalY(), 
				canvas.currLineWidth, canvas.currColor);
				drawing.changeForm(ligne);
				break;
			}
			//Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				var rectangle = new Rectangle(DnD.getInitX(), DnD.getinitY(), (DnD.getFinalX()-DnD.getInitX()),
				(DnD.getFinalY()-DnD.getInitY()));
				drawing.ChangeForms(rectangle);
				break;

			} 
			//Point inaccessible
			default :{
				break;
			}
		}

	}
	//Actif au relâchement du clic - Le code est similaire à onInteractionUpdate, car on modifie
	// une dernière fois le pattern avant de l'enregistrer
	Pencil.prototype.onInteractionEnd = function(DnD){
		//On vérifie le mode d'écriture
		switch (this.currEditingMode) {
			case editingMode.line : {
				drawing.changeForm(DnD.getInitX(),DnD.getIniY(), DnD.getFinalX(), DnD.getFinalY(), 
				canvas.currLineWidth, canvas.currColor);
				break;
			}
			//Le mode enclenché est en écriture de rectangles
			case editingMode.rect : {
				drawing.ChangeForms(DnD.getInitX(), DnD.getinitY(), (DnD.getFinalX()-DnD.getInitX()),
				 (DnD.getFinalY()-DnD.getInitY()));
				 break;

			} 
			//Point inaccessible
			default :{
				break;
			}
		}
	}


}
