function haltStart() {
  halton = true;
  haltdir = 1;
  hxtv = x;
  hytv = y;
}
function haltControlCenter() {
  if (fcount % 90 === 0) {
    haltmovingcheck();
    haltplayerposcheck();
  }
  if (y != (22.5 || 427.5)) {
    if (haltturnaroundtimertf === true) {
      haltaroundtimer = setInterval(
        haltturnaround,
        int(random(2.5, 7.5)) * 1000
      );
      haltturnaroundtimertf = false;
    }
  } else {
    clearInterval(haltaroundtimer);
    haltturnaroundtimertf = true;
    clearInterval(hideattackallowtimer);
    hideattackallow = false;
    hideattackallowtimertf = true;
  }
  fill(0, 255, 255, 75);
  if (haltdir === 1) {
    haltarrowx = 400;
    haltarrowy = 300;
    triangle(
      haltarrowx,
      haltarrowy,
      haltarrowx - 25,
      haltarrowy - 50,
      haltarrowx + 25,
      haltarrowy - 50
    );
    rect(haltarrowx - 12.5, haltarrowy - 125, 25, 75);
  } else if (haltdir === 2) {
    haltarrowx = 400;
    haltarrowy = 225;
    triangle(
      haltarrowx,
      haltarrowy - 50,
      haltarrowx - 25,
      haltarrowy,
      haltarrowx + 25,
      haltarrowy
    );
    rect(haltarrowx - 12.5, haltarrowy, 25, 75);
  }
}
function haltplayerposcheck() {
  if (fcount % 90 === 0) {
    hxtv = x;
    hytv = y;
  }
}
function haltmovingcheck() {
  if (y != 22.5 && y != 427.5) {
    if (hideattackallow === true) {
      if (haltdir === 1) {
        if (hytv < y) {
        } else {
          if (health >= 51) {
            health -= 50;
          } else {
            health -= 50;
            haltjs();
          }
          hideattackallow = false;
        }
      } else if (haltdir === 2) {
        if (hytv > y) {
        } else {
          if (health >= 51) {
            health -= 50;
          } else {
            health -= 50;
            haltjs();
          }
          hideattackallow = false;
        }
      }
    } else {
      hideattackallowtimerf();
    }
  }
}
function haltturnaround() {
  clearInterval(haltaroundtimer);
  haltaroundtimer2 = setInterval(haltturnaround2, 1000);
  halton = false;
  haltbackgroundturnaroundtf = true;
}

function haltturnaround2() {
  haltbackgroundturnaroundtf = false;
  clearInterval(haltaroundtimer2);
  halton = true;
  if (haltdir === 1) {
    haltdir = 2;
  } else if (haltdir === 2) {
    haltdir = 1;
  }
  haltturnaroundtimertf = true;
}

function hideattackallowtimerf() {
  if (hideattackallowtimertf === true) {
    hideattackallowtimer = setInterval(hideattackallowtimerfp2, 2000);
    hideattackallowtimertf = false;
  }
}
function hideattackallowtimerfp2() {
  clearInterval(hideattackallowtimer);
  hideattackallow = true;
  hideattackallowtimertf = true;
}
