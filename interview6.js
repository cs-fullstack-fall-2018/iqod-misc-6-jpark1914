var asterik = "*";
var something = "";

function starsAndNumbers(x)
{
    for(var i=1; i<x+1; i++) {
        something += (asterik);
        console.log(something + i)
    }
}
starsAndNumbers(50);
