function figureStart() {
  figureon = true;
  figureControlCenter();
  figurexmovementtf = true;
  figuremovementmv[0] = 1;
  figureymovementtf = false;
  figuremovementmv[1] = 1;
}
function figureControlCenter() {
  figureMovement();
  figureCircle(figcircle, figurex, figurey, figimg);
}
function isMovingNearFigureCheck() {}
function figureAttack() {}
function figureChase() {}
function figureIdle() {}
function figurePathFinder() {}
function figureMovement() {
  if (figurexmovementtf === true) {
    figurex += 1 * figuremovementmv[0];
  }
  if (figureymovementtf === true) {
    figurey += 1 * figuremovementmv[1];
  }
}
function figureMovementChange(t) {
  if (t === 1) {
    figuremovementmv[0] = -1;
  } else if (t === 2) {
    figuremovementmv[0] = 1;
  } else if (t === 3) {
    figuremovementmv[1] = -1;
  } else if (t === 4) {
    figuremovementmv[1] = 1;
  }
}
function figureEnd() {}
function figureCircle(cg, x, y, img) {
  cg.noStroke();
  cg.fill(255);
  cg.circle(x - 27.5, y - 27.5, 45);

  img.mask(cg);
  image(img, x, y, 45, 45);
  figureControlCenter();
}
