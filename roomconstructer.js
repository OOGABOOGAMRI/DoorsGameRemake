class RC {
  regBuild() {
    roombuilder.roombuild(randomroomsv[door]);
    rrt2 = randomroomsv[door];
  }
  d30() {
    // SEEK CHASE // START //
    background(ground);
    image(carpetImg, 150, 0, 150, 450);
  }
  d31() {
    background(ground);
    image(carpetImg, 150, 0, 150, 450);
    setGradient(180, 400, 90, 50, c2, c1, Y_AXIS);
  }
  d32() {
    background(ground);
    image(carpetImg, 150, 0, 150, 450);
    image(carpetImgr, 0, 150, 450, 150);
    if (
      x === 157.5 &&
      ((y >= 22.5 && y <= 112.5) || (y >= 337.5 && y <= 427.5))
    ) {
      mltt = false;
    } else {
      mltt = true;
    }
    if (
      x === 292.5 &&
      ((y >= 22.5 && y <= 112.5) || (y >= 337.5 && y <= 427.5))
    ) {
      mrtt = false;
    } else {
      mrtt = true;
    }
    if (
      ((x >= 22.5 && x <= 112.5) || (x >= 337.5 && x <= 427.5)) &&
      y === 292.5
    ) {
      mdnt = false;
    } else {
      mdnt = true;
    }
    if (
      ((x >= 22.5 && x <= 112.5) || (x >= 337.5 && x <= 427.5)) &&
      y === 157.5
    ) {
      mupt = false;
    } else {
      mupt = true;
    }
    fill(0);
    rect(0, 0, 135, 135);
    rect(0, 315, 135, 135);
    rect(315, 315, 135, 135);
    rect(315, 0, 135, 135);
    setGradient(0, 180, 50, 90, c2, c1, X_AXIS);
  }
  d33() {
    background(ground);
    image(carpetImg, 150, 0, 150, 450);
    image(carpetImgr, 0, 150, 450, 150);
    if (
      x === 157.5 &&
      ((y >= 22.5 && y <= 112.5) || (y >= 337.5 && y <= 427.5))
    ) {
      mltt = false;
    } else {
      mltt = true;
    }
    if (
      x === 292.5 &&
      ((y >= 22.5 && y <= 112.5) || (y >= 337.5 && y <= 427.5))
    ) {
      mrtt = false;
    } else {
      mrtt = true;
    }
    if (
      ((x >= 22.5 && x <= 112.5) || (x >= 337.5 && x <= 427.5)) &&
      y === 292.5
    ) {
      mdnt = false;
    } else {
      mdnt = true;
    }
    if (
      ((x >= 22.5 && x <= 112.5) || (x >= 337.5 && x <= 427.5)) &&
      y === 157.5
    ) {
      mupt = false;
    } else {
      mupt = true;
    }
    fill(0);
    rect(0, 0, 135, 135);
    rect(0, 315, 135, 135);
    rect(315, 315, 135, 135);
    rect(315, 0, 135, 135);
    setGradient(180, 400, 90, 50, c2, c1, Y_AXIS);
  }
  d34() {
    background(ground);
    image(carpetImg, 150, 0, 150, 450);
    image(carpetImgr, 0, 150, 450, 150);
    if (
      x === 157.5 &&
      ((y >= 22.5 && y <= 112.5) || (y >= 337.5 && y <= 427.5))
    ) {
      mltt = false;
    } else {
      mltt = true;
    }
    if (
      x === 292.5 &&
      ((y >= 22.5 && y <= 112.5) || (y >= 337.5 && y <= 427.5))
    ) {
      mrtt = false;
    } else {
      mrtt = true;
    }
    if (
      ((x >= 22.5 && x <= 112.5) || (x >= 337.5 && x <= 427.5)) &&
      y === 292.5
    ) {
      mdnt = false;
    } else {
      mdnt = true;
    }
    if (
      ((x >= 22.5 && x <= 112.5) || (x >= 337.5 && x <= 427.5)) &&
      y === 157.5
    ) {
      mupt = false;
    } else {
      mupt = true;
    }
    fill(0);
    rect(0, 0, 135, 135);
    rect(0, 315, 135, 135);
    rect(315, 315, 135, 135);
    rect(315, 0, 135, 135);
    setGradient(180, 400, 90, 50, c2, c1, Y_AXIS);
  }
  d35() {
    // SEEK CHASE // LAST ROOM // FIRE //
    background(ground);
    image(carpetImg, 150, 0, 150, 450);
    image(fireimg, 150, 150, 150, 75);
    image(fireimg, 300, 150, 150, 75);
    image(fireimg, 25, 275, 150, 75);
    image(fireimg, 275, 275, 150, 75);
    setGradient(180, 400, 90, 50, c2, c1, Y_AXIS);
  }
  d50() {
    roombuilder.roombuild(6);
  }
  d70() {
    // SEEK CHASE 2 START  //
  }
  d71() {}
  d72() {}
  d73() {}
  d74() {}
  d75() {
    // SEEK CHASE END //
  }

  d90() {
    // OUTSIDE START
    roombuilder.roombuild(randomroomsv.r90);
    rrt2 = randomroomsv.r90;
  }
  d91() {
    roombuilder.roombuild(randomroomsv.r91);
    rrt2 = randomroomsv.r91;
  }
  d92() {
    roombuilder.roombuild(randomroomsv.r92);
    rrt2 = randomroomsv.r92;
  }
  d93() {
    roombuilder.roombuild(randomroomsv.r93);
    rrt2 = randomroomsv.r93;
  }
  d94() {
    roombuilder.roombuild(randomroomsv.r94);
    rrt2 = randomroomsv.r94;
  }
  d95() {
    roombuilder.roombuild(randomroomsv.r95);
    rrt2 = randomroomsv.r95;
  }
  d96() {
    roombuilder.roombuild(randomroomsv.r96);
    rrt2 = randomroomsv.r96;
  }
  d97() {
    roombuilder.roombuild(randomroomsv.r97);
    rrt2 = randomroomsv.r97;
  }
  d98() {
    roombuilder.roombuild(randomroomsv.r98);
    rrt2 = randomroomsv.r98;
  }
  d99() {
    roombuilder.roombuild(randomroomsv.r99);
    rrt2 = randomroomsv.r99;
  }
  d100() {
    // FIGURE P2 //
    roombuilder.roombuild("fp2");
  }
}
