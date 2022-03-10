
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	this.initX= 0;
  this.initY=0;
  this.endX=0;
  this.endY=0;
  this.active=false;


	// Developper les 3 fonctions gérant les événements

  //Fonction prenant en compte le clic de souris
  DnD.prototype.Pression = function(evt){
    this.initX=getMousePosition(canvas,evt).x;
    this.initY=getMousePosition(canvas,evt).y;
    // console.log('x = '+this.initX + ', y = '+ this.initY);
    this.active=true;
    interactor.onInteractionStart(this);
  }

  //Fonction prenant en compte le mouvement de la souris
  DnD.prototype.Move = function(evt){
    if (this.active = true){
      this.endX=getMousePosition(canvas,evt).x;
      this.endY=getMousePosition(canvas,evt).y;
    //  console.log('x = '+this.initX+', y = '+this.initY);
      interactor.onInteractionUpdate(this);
    
    }
  }
  //Fonction prenant en compte le relâchement du clic de souris
  DnD.prototype.Releasing = function(evt) {
    this.endX=getMousePosition(canvas,evt).x;
    this.endY=getMousePosition(canvas,evt).y;
    this.active=false;
   // console.log(' x = ' +this.endX + ', y = ' + this.endY)
    interactor.onInteractionEnd(this);
  }


	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.Pression, false);
  canvas.addEventListener('mousemove', this.Move, false)
  canvas.addEventListener('mouseup',this.Releasing, false)

};
// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

DnD.prototype.getInitX = function() {
  return this.initX;
}

DnD.prototype.getInitY = function() {
  return this.initY;
}

DnD.prototype.getEndX = function() {
  return this.endX;
}

DnD.prototype.getEndY = function() {
  return this.endY;
}

DnD.prototype.getActive = function() {
  return this.active;
}




