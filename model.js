
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.formsArray=new Array; // Array contenant toutes les formes créées.

}

// Fonction ajoutant la forme donnée à la fin de notre Array.
Drawing.prototype.addForms = function(form) {
    this.formsArray.push(form);
}

// Fonction permettant de changer un élément de notre array si on modifie un tableau.
Drawing.prototype.changeForm = function(form){
    this.formsArray.pop();
    this.formsArray.push(form);
}

// Fonction permettant de récupérer le tableau.
Drawing.prototype.getForms = function(){
    return this.formsArray;
}

// Fonction définissant la classe Forme de base. 
function Forme(color, thickness){
    this.color=color;
    this.thickness=thickness;

}

// Fonction définissant la classe fille de Forme, Rectangle.
// Le rectangle est défini à partir des éléments de base de form, ainsi que par son point en haut à gauche,
// par sa hauteur et par sa largeur
function Rectangle(initX,initY, width, height, thickness, color){

    Forme.call(this, color, thickness);
    this.initX=initX;
    this.initY=initY;
    this.width=width;
    this.height=height;
    
    this.getInitX = function(){
        return this.initX;
   }.bind(this);
   
  this.getInitY = function(){
       return this.initY;
   }.bind(this);
   
   this.getWidth = function(){
       return this.width;
   }.bind(this);
   
   this.getHeight = function(){
       return this.height;
   }.bind(this);
   
   this.getColor = function(){
       return this.color;
   }.bind(this);
   
   this.getThickness = function(){
       return this.thickness;
   }.bind(this);
   
}
// Tous les getters pour la class Rectangle

// Fonction définissant la classe fille de Forme, Line.
// La  ligne est définie à partir des éléments de base de form, ainsi que par les coordonnées de son point
// de départ et de son point d'arrivée.
function Line(initX, initY, finalX, finalY, thickness, color){
    Forme.call(this, color, thickness);
    console.log(color)

    this.initX=initX;
    this.initY=initY;
    this.finalX=finalX;
    this.finalY=finalY;
    
    this.getInitX = function(){
        return this.initX;
}.bind(this);

this.getInitY = function(){
    return this.initY;
}.bind(this);

this.getFinalX = function(){
    return this.finalX;
}.bind(this);

this.getFinalY = function(){
    return this.finalY;
}.bind(this);

this.getColor = function(){
    return this.color;
}.bind(this);

this.getThickness = function(){
    return this.thickness;
}.bind(this);


}    

// Tous les getters pour la class Line

