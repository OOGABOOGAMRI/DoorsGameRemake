class Movement {
  up() {
    if (y !== 22.5) {
      y -= 45;
    }
  }
  down() {
    if ((x === 202.5 && y === 427.5) || (x === 247.5 && y === 427.5)) {
      doorOpened(rrt2);
    }
    if (y !== 427.5) {
      y += 45;
    }
  }
  left() {
    doorOpened(rrt2);

    if (x !== 22.5) {
      x -= 45;
    }
  }
  right() {
    doorOpened(rrt2);

    if (x !== 427.5) {
      x += 45;
    }
  }
}
