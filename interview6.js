var asterik = "*";
var number = 4;
var num;
function starsAndNumbers(x)
{
    for(var i=1; i<x+1; i++) {
        console.log(x * asterik);
        console.log(i.toString());
    }
}
starsAndNumbers(4);