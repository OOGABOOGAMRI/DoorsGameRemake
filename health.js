class Health {
  check() {
    stroke(0);
    strokeWeight(4);
    noFill();
    rect(10, 420, 150, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 420, map(health, 0, maxHealth, 0, 150), 20);
  }
}
