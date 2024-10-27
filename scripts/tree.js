var outputSec = document.getElementById("bodySec");
var colorBody = document.getElementById("bodySec");

do{
    var numInput = prompt("ENTER A NUMBER: ");
    if(numInput < 0 || isNaN(numInput))
        alert("ENTER A VALID NUMBER GREATER THAN ZERO :)")
    else{
        xmasTree(numInput)
    }
}
while (numInput < 0 || isNaN(numInput))

var colors = ['red', 'green']
var index = 0;

function changeColors()
{
    bodySec.style.color = colors[index];
    index++;

    if (index >= colors.length) {
        index = 0;
    }
    setTimeout(changeColors, 700);
};

changeColors();

function xmasTree(num){

    var output = [];
    console.log("im here");

    for(var x = 1; x <= num; x++){
        output.push("*");
        for(var j = 1; j <= (2 * x - 1); j++)
        {
            output.push('|');
            output.push(' ');
        }
        output.push('*');

        output.push('\n');
        console.log(output)
    }

    output.push('CHRISTMAS IS NOT A SEASON \n IT IS A \n FEELING!')
    outputSec.innerText = output.join('');
};