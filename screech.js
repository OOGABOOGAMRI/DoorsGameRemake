function ScreechTimerCheck() {
  if (in_closet === false) {
    if (screechtimertf === true) {
      if (screechon === false) {
        screechrandomtimer = int(random(15, 46));
        screechrandoms = int(random(1, 9));
        screechrandomtimerseconds = createVector(screechrandomtimer, 0);
        screechrandomtimerseconds.mult(1000);
        screechtimer = setInterval(ScreechSpawn, screechrandomtimerseconds.x);
        screechtimertf = false;
        console.log(screechrandomtimerseconds.x / 1000);
        sattf = true;
      }
    }
  }
}
function ScreechAttack() {
  if (health <= 25) {
    screechon = false;
    screechtimertf = false;
    sattf = false;
    clearInterval(screechtimer);
    setInterval(screechjs, 10);
  } else {
    health = health - 25;
    screechon = false;
    screechtimertf = true;
    sattf = true;
  }
  clearInterval(sat);
}
function ScreechAttackTimer() {
  if (in_closet === false) {
    sat = setInterval(ScreechAttack, 5005);
  }
}
function ScreechSpawn() {
  if (in_closet === false) {
    if (sattf === true) {
      if (screechtimertf === false) {
        screechon = true;
        ScreechAttackTimer();
        clearInterval(screechtimer);
        sattf = false;
      }
    }
    if (screechon === true) {
      if (screechrandoms === 1) {
        image(screech, x - 50, y - 45, 45, 45);
      }
      if (screechrandoms === 2) {
        image(screech, x - 25, y - 45, 45, 45);
      }
      if (screechrandoms === 3) {
        image(screech, x - 50, y - 20, 45, 45);
      }
      if (screechrandoms === 4) {
        image(screech, x - 50, y, 45, 45);
      }
      if (screechrandoms === 5) {
        image(screech, x - 20, y + 15, 45, 45);
      }
      if (screechrandoms === 6) {
        image(screech, x + 10, y + 15, 45, 45);
      }
      if (screechrandoms === 7) {
        image(screech, x + 10, y - 20, 45, 45);
      }
      if (screechrandoms === 8) {
        image(screech, x + 10, y - 50, 45, 45);
      }
      Screechbyecheck();
    }
  } else {
    screechon = true;
    sattf = true;
    clearInterval(sat);
  }
}
function Screechbyecheck() {
  if (screechrandoms === 1) {
    if (mx > x - 50 && mx < x && my > y - 45 && my < y) {
      screechtimertf = true;
      sattf = true;
      clearInterval(sat);
      screechon = false;
    }
  }
  if (screechrandoms === 2) {
    if (mx > x - 25 && mx < x + 25 && my > y - 45 && my < y) {
      screechon = false;
      clearInterval(sat);
      sattf = true;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
  if (screechrandoms === 3) {
    if (mx > x - 50 && mx < x && my > y - 20 && my < y + 25) {
      screechon = false;
      clearInterval(sat);
      sattf = true;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
  if (screechrandoms === 4) {
    if (mx > x - 50 && mx < x && my > y && my < y + 45) {
      screechon = false;
      clearInterval(sat);
      sattf = true;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
  if (screechrandoms === 5) {
    if (mx > x - 20 && mx < x + 25 && my > y + 15 && my < y + 60) {
      screechon = false;
      clearInterval(sat);
      sattf = true;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
  if (screechrandoms === 6) {
    if (mx > x + 10 && mx < x + 55 && my > y + 15 && my < y + 60) {
      screechon = false;
      clearInterval(sat);
      sattf = true;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
  if (screechrandoms === 7) {
    if (mx > x + 10 && mx < x + 55 && my > y - 20 && my < y + 25) {
      screechon = false;
      clearInterval(sat);
      sattf = true;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
  if (screechrandoms === 8) {
    if (mx > x + 10 && mx < x + 55 && my > y - 50 && my < y - 5) {
      clearInterval(sat);
      sattf = true;
      screechon = false;
      clearInterval(sat);
      screechtimertf = true;
    }
  }
}
