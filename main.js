var canvas = new fabric.Canvas("myCanvas");

superhero_x = 10;
superhero_y = 10;

superhero_height = 30;
superhero_width = 30;

superhero_image = ""
superhero_raw_image = ""

superhero_raw_image_width = ""
superhero_raw_image_height = ""


function superhero_update() {
    fabric.Image.fromURL("Avenger Background Image.jpg", function (Img){
        superhero_image = Img;
        superhero_image.scaleToWidth(150),
        suuperhero_image.scaleToHeight(140),
        superhero_image.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(superhero_image)
    });
}

function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img){
        superhero_raw_image = Img;
        superhero_raw_image.scaleToWidth(superhero_raw_image_width),
        superhero_raw_image.scaleToHeight(superhero_raw_image_height),
        superhero_raw_image.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(superhero_raw_image)
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPress = e.keyCode;
    
    console.log("When any key is pressed = " + keyPress);
    
    if(e.shiftKey == true && keyPress == "80") {
        console.log("When shift and p is pressed Increase size")
        superhero_raw_image =  + 10;
        superhero_raw_image = + 10;
        document.getElementById("current-width").innerHTML = superhero_raw_image_width;
        document.getElementById("current-height").innerHTML = superhero_raw_image_height;
    }
    
    if(e.shiftKey == true && keyPress == "77") {
        console.log("When shift and m is pressed Decrease size")
         superhero_raw_image = superhero_raw_image - 10;
         superhero_raw_image = superhero_raw_image - 10;
        document.getElementById("current-width").innerHTML = superhero_raw_image_width;
        document.getElementById("current-height").innerHTML = superhero_raw_image_height;
    }

    if (keyPress == '70') {
        block_update('ironman_face.png');
        console.log("f")
    }


    if (keyPress == '66') {
        block_update('spiderman_body.png');
        console.log("b")
    }
    
    if (keyPress == '76') {
        block_update('hulk_legs.png');
        console.log("l")
    }
    
    if (keyPress == '82') {
        block_update('thor_right_hand.png');
        console.log("r")
    }
    
    if (keyPress == '72') {
        block_update('captain_america_left_hand');
        console.log("h")
    }
    
    if (keyPress == '38') {
        up()
        console.log("up")
    }
    
    if (keyPress == '40') {
        down()
        console.log("down")
    }

    if (keyPress == '37') {
        left()
        console.log("left")
    }

    if (keyPress == '39') {
        right()
        console.log("right")
    }
}

function up() {
    if (superhero_y >= 0) {
        superhero_y = superhero_y - superhero_height;
        console.log("Superhero height = " + superhero_height);
        console.log("When up arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_image);
        superhero_update();
    }
}

function down() {
    if (superhero_y <= 700) {
        superhero_y = superhero_y + superhero_height;
        console.log("Superhero height = " + superhero_height);
        console.log("When down arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_image);
        superhero_update();
    }
}

function left() {
    if (superhero_x >= 0) {
        superhero_x = superhero_x - superhero_width;
        console.log("Superhero width = " + superhero_width);
        console.log("When left arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_image);
        superhero_update();
    }
}

function right() {
    if (superhero_x <= 900) {
        superhero_x = superhero_y + superhero_width;
        console.log("Superhero width = " + superhero_width);
        console.log("When right arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_image);
        superhero_update();
    }
}