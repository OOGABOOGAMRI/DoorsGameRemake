function seekStart() {
  mupt = false;
  mltt = false;
  mdnt = false;
  mrtt = false;
  seekon = true;
  seekontimer = setInterval(seekStartp2, 2500);
  seekontimerp3 = setInterval(seekStartp3, 1);
  seekontimertf = false;
}
function seekStartp3() {
  clearInterval(seekontimerp3);
  seekx = 202.5;
  seeky = 90;
}
function seekStartp2() {
  clearInterval(seekontimer);
  mupt = true;
  mltt = true;
  mdnt = true;
  mrtt = true;
  seekon = true;
}
function seekCirclef(cg, x, y, img) {
  cg.noStroke();
  cg.fill(255);
  cg.circle(x - 22.5, y - 22.5, 45);

  img.mask(cg);
  image(img, x, y, 45, 45);
  if (seekmovetimeron === true) {
    seekmovetimer = setInterval(seekMove, 2500);
    seekmovetimeron = false;
  }
}
function seekMove() {
  clearInterval(seekmovetimer);
  seekmoveon = true;
  if (seekdir === 1) {
    seeky += 2.125;
  } else if (seekdir === 2) {
    if (seekdirtf === 1) {
      seeky += 2.25;
    } else if (seekdirtf === 2) {
      seekx -= 2.25;
    }
    if (seeky >= 225) {
      seekdirtf = 2;
      seeky = 225;
    }
  } else if (seekdir === 3) {
    if (seekdirtf === 1) {
      seekx -= 2.375;
    } else if (seekdirtf === 2) {
      seeky += 2.375;
    }
    if (seekx <= 225) {
      seekdirtf = 2;
      seekx = 225;
    }
  } else if (seekdir === 4) {
    if (seekdirtf === 1) {
      seeky += 2.5;
    } else if (seekdirtf === 2) {
      seekx -= 2.725;
    } else if (seekdirtf === 3) {
      seeky += 2.5;
    } else if (seekdirtf === 4) {
      seekx += 2.725;
    } else if (seekdirtf === 5) {
      seeky += 2.5;
    }
    if (seekdirtf === 1 && seeky >= 110) {
      seekdirtf = 2;
    } else if (seekdirtf === 2 && seekx <= 110) {
      seekdirtf = 3;
    } else if (seekdirtf === 3 && seeky >= 245) {
      seekdirtf = 4;
    } else if (seekdirtf === 4 && seekx >= 245) {
      seekdirtf = 5;
    }
  }
}
function seekDoorOpened() {
  if (seekdir === 1) {
    seeky = -50;
    seekx = 225;
  } else if (seekdir === 2) {
    seekx = 475;
    seeky = 225;
    seekdirtf = 1;
  } else if (seekdir === 3) {
    seeky = -50;
    seekx = 225;
  } else if (seekdir === 4) {
    seeky = -50;
    seekx = 0;
    seekon = false;
  }
  seekpostimer = setInterval(seekDoorOpenedp1, 500);
  seekdir = 0;
}
function seekDoorOpenedp2() {}
function seekDoorOpenedp1() {
  clearInterval(seekpostimer);
  if (door === 30 || door === 31) {
    seekdir = 1;
  } else if (door === 32) {
    seekdir = 2;
    seekdirtf = 1;
  } else if (door === 33) {
    seekdirtf = 1;
    seekdir = 3;
  } else if (door === 34) {
    seekdir = 1;
  } else if (door === 35) {
    seekdir = 4;
    seekdirtf = 1;
  }
}
function fireAttack() {
  if (fcount % 10 === 0) {
    if (health > 5) {
      health -= 5;
    } else {
      firejs();
    }
  }
}
function seekAttackCheck() {
  if (seekdir === 1) {
    if (seekd1 <= 45) {
      seekjs();
    }
  } else if (seekdir === 2) {
    if (seeky <= 110) {
      if (seekd1 <= 45) {
        seekjs();
      }
    } else {
      if (seekd2 <= 45) {
        noLoop();
      } else if (seekx <= x) {
        seekjs();
      }
      if (seekdirtf === 2) {
        if (x > seekx) {
          seekjs();
        }
        if (seeky >= 110) {
          if (x >= 157.5 && x <= 292.5 && y >= 337.5 && y <= 427.5) {
            seekjs();
          } else if (x >= 337.5 && x <= 427.5 && y >= 157.5 && y <= 292.5) {
            seekjs();
          }
        }
      }
    }
  } else if (seekdir === 3) {
    if (seekx >= 340) {
      if (seekd2 <= 45) {
        seekjs();
      } else if (seekx <= x) {
        seekjs();
      }
    } else {
      if (seekdirtf === 2) {
        if (y <= seeky) {
          seekjs();
        }
      }
    }
  } else if (seekdir === 4) {
    if (seekd1 <= 45) {
      seekjs()
    }
  }
}
