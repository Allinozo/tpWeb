


// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {

  console.log(this.color)

    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(),   this.getHeight()); // Dessine le rectangle
    //ctx.fillStyle = this.getColor();
    ctx.fillRect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight()); 
    ctx.strokeStyle = this.getColor();
    ctx.stroke();
    ctx.closePath();
  };
  
  Line.prototype.paint = function(ctx) {

    console.log(this.color)

    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());   //Setup le point de base de la ligne
    ctx.lineTo(this.getFinalX(), this.getFinalY()); //Dessine la ligne entre (initX, initY) et (finalX,finalY)
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getThickness();
    ctx.stroke();
    ctx.closePath();
    
  }

  Drawing.prototype.paint = function(ctx) {
   // console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      
      eltDuTableau.paint(ctx);
    });
  };
  
