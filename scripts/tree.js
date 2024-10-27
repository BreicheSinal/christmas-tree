var outputSec = document.getElementById("bodySec");
var colorBody = document.getElementById("bodySec");

do{
    var numInput = prompt("ENTER A NUMBER: ");
    if(numInput <= 0 || isNaN(numInput))
        alert("ENTER A NON ZERO 'NUMBER' :)")
    else{
        xmasTree(numInput)
    }
}while (numInput <= 0 || isNaN(numInput))

var colors = ['red', 'green']
var bgColors = ['white', 'black']
var index = 0;

function changeColors()
{
    bodySec.style.backgroundColor = bgColors[index];    
    bodySec.style.color = colors[index];
    index++;

    if (index >= colors.length) {
        index = 0;
    }
    setTimeout(changeColors, 700);
};

changeColors();

function xmasTree(num)
{
    var output = [];

    output.push("*");
    output.push('\n');

    for(var x = 1; x <= num; x++){
        output.push("*");
        for(var j = 1; j <= (2 * x - 1); j++){
            output.push('|');
            for (var y = 0; y < 10; y++)
                output.push(' ');
        }
    
        output.push('*');

        output.push('\n');
    }

    output.push('CHRISTMAS IS NOT A SEASON \n IT IS A \n FEELING!')
    outputSec.innerText = output.join('');
};