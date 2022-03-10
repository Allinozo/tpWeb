


// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getHeight(),   this.getWidth()); // Dessine le rectangle
    //ctx.strokeStyle = this.getColor; //Couleur du trait
    ctx.fillStyle = this.getColor();
    ctx.fillRect(this.getInitX(), this.getInitY(), this.getHeight(), this.getWidth()); 
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());   //Setup le point de base de la ligne
    ctx.lineTo(this.getFinalX(), this.getFinalY()); //Dessine la ligne entre (initX, initY) et (finalX,finalY)
    ctx.strokeStyle = this.getColor();
    ctx.stroke();
    
  };
  
  Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      
      eltDuTableau.paint(ctx);
    });
  };
  
