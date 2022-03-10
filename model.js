
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
Drawing.prototype.changeForm = function(id,form){
    this.formsArray[id] = form;
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
Forme.prototype.Rectangle = function(baseX,baseY, weight, height, thickness, color){

    this.baseX=baseX;
    this.baseY=baseY;
    this.weight=weight;
    this.height=height;
    Forme.call(this, color, thickness);
}

// Fonction définissant la classe fille de Forme, Line.
// La  ligne est définie à partir des éléments de base de form, ainsi que par les coordonnées de son point
// de départ et de son point d'arrivée.
Forme.prototype.Line = function(baseX, baseY, finalX, finalY, thickness, color){

    this.baseX=baseX;
    this.baseY=baseY;
    this.finalX=finalX;
    this.finalY=finalY;
    Forme.call(this, color, thickness);
};