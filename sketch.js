var bullet, wall;
var speed, weight, thickness;
var damage;
var ready = 0;
var go = 1;
var gameState = ready;
frameRate = 60;

function setup() {
    createCanvas(1600, 400);

    speed = Math.round(random(223, 321));
    weight = Math.round(random(30, 52));

    thickness = Math.round(random(22, 83));
    bullet = createSprite(50, 200, 17, 9);
    bullet.shapeColor = "white";
    wall = createSprite(1200, 200, thickness, 200);
    wall.shapeColor = (80, 80, 80);

    damage = (Math.round((0.5 * weight * speed ** 2 / thickness ** 3) * 100) / 100);

}

function draw() {
    background(0);

    if (gameState === ready) {
        textAlign(CENTER);
        textSize(45);
        fill("gold");
        stroke("aqua");
        text("Press \'Space\' to activate the bullet", 800, 200);
        if (keyDown("space")) {
            bullet.velocityX = speed;
            gameState = go;
        }

    }
    drawSprites();
    if (gameState === go) {
        textAlign(LEFT);
        textSize(24);
        fill("black");
        stroke("lime");
        strokeWeight(2);
        text("Weight: " + weight + "          Speed: " + speed + "          Wall Thickness: " + thickness + "          Rating: " + damage, 10, 20)
    }

    if (wall.x - bullet.x < wall.width / 2 + bullet.width / 2) {
        bullet.velocityX = 0;
        bullet.x = wall.x - thickness / 2 - bullet.width / 2;
        if (damage <= 10) {
            wall.shapeColor = "green";
        }
        if (damage > 10) {
            wall.shapeColor = "red";
        }
    }


}