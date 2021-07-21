function move(){

    let targetX = mouseX;
    let dx = targetX - bug.x;
    bug.x += dx * easing;

    bug.collide(wall1);
    bug.collide(wall2);

}