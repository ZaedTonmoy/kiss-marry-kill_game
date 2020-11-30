var kiss= [
    'Alexandra',
    'Ashley',
    'Elizabeth',
    'Emma',
    'Monroe',
    'Nina',
    'Taylor',
    'Victoria'
];

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = '../images/kiss/alexandra.jpg';
imgArray[1] = new Image();
imgArray[1].src = '../images/kiss/ashley.jpg';
imgArray[2] = new Image();
imgArray[2].src = '../images/kiss/elizabeth.jpg';
imgArray[3] = new Image();
imgArray[3].src = '../images/kiss/emma.jpg';
imgArray[4] = new Image();
imgArray[4].src = '../images/kiss/Monroe.jpg';
imgArray[5] = new Image();
imgArray[5].src = '../images/kiss/nina.jpg';
imgArray[6] = new Image();
imgArray[6].src = '../images/kiss/taylor.png';
imgArray[7] = new Image();
imgArray[7].src = '../images/kiss/victoria.jpg';

var marry= [
    'A',
    'B',
    'C',
    'D'
];

var kill= [
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

var rkiss= Math.floor(Math.random()*kiss.length);
var rmarry= Math.floor(Math.random()*marry.length);
var rkill= Math.floor(Math.random()*kill.length);

var name=prompt("what is your name");
document.write("<h1>Hey <strong>"+name+ "</strong>, You will kiss"+' '+kiss[rkiss]+ ' '+ "marry"+ ' '+marry[rmarry]+' ' +"kill"+ ' ' +kill[rkill] +"</h1>");
document.write(imgArray[rkiss]);