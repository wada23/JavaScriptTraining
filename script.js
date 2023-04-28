function run() {
    document.body.style.background = '#50b8f5';
}

function pinkColor() {
    document.body.style.background = 'rgb(226, 43, 165)';
}


function mimi() {
    document.body.style.background = 'rgb(10, 214, 102)';
}



function replaceFunction() {
    let text = document.getElementById("replaceString").innerHTML;
    document.getElementById("replaceString").innerHTML = text.replace("Jasmine","Sarah");
}