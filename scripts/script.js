function changeColor(car, color) {
    $('.image').attr("src", "Imagenes/" + car + "/" + color + ".png");
    $('hr').attr("color",color);
    console.log(car, color);
}

