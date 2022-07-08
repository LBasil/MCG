$(document).ready(function () {
    setTimeout("setBG2()", 10000);
});


function setBG2(){
    document.body.style.backgroundImage = `url("./images/image2.jpg")`;
    setTimeout("setBG3()", 10000);
}

function setBG3(){
    document.body.style.backgroundImage = `url("./images/image3.jpg")`;
    setTimeout("setBG4()", 10000); 
}

function setBG4(){
    document.body.style.backgroundImage = `url("./images/image4.jpg")`;
    setTimeout("setBG1()", 10000); 
}

function setBG1(){
    document.body.style.backgroundImage = `url("./images/image1.jpg")`;
    setTimeout("setBG2()", 10000); 
}