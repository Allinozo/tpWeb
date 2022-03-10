
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(60, 20, 50, 100, 10, '33FFF0');
rec.paint(ctx);
var ligne = new Line(10, 10, 50, 50, 5, '#00CCC0');
ligne.paint(ctx);

//var draw=new Drawing();
//draw.addForms(rec);
//draw.addForms(ligne);
//draw.paint(ctx);

////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

