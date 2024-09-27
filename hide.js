function closetCheck() {
  if (rrt2 === 1) {
    if (x === 22.5 && y === 382.5) {
      mupt = false;
    } else if (x === 22.5 && y === 202.5) {
      mdnt = false;
    } else if (x === 22.5 && y === 247.5) {
      mupt = false;
    } else if (x === 22.5 && y === 337.5) {
      mdnt = false;
    } else {
      mupt = true;
      mdnt = true;
    }
    if (x === 22.5 && (y === 247.5 || y === 292.5 || y === 337.5)) {
      in_closet = true;
      if (hideon === false) {
        startHide();
        hideon = true;
      }
    } else {
      endHideCheck();
      in_closet = false;
    }
  }
  if (rrt2 === 2) {
    if (x === 427.5 && y === 247.5) {
      mupt = false;
    } else if (x === 427.5 && y === 202.5) {
      mdnt = false;
    } else if (x === 427.5 && y === 382.5) {
      mupt = false;
    } else if (x === 427.5 && y === 337.5) {
      mdnt = false;
    } else {
      mupt = true;
      mdnt = true;
    }
    if (x === 427.5 && (y === 247.5 || y === 292.5 || y === 337.5)) {
      in_closet = true;
      if (hideon === false) {
        startHide();
        hideon = true;
      }
    } else {
      endHideCheck();
      in_closet = false;
    }
  }
  if (rrt2 === 3) {
    if (x === 22.5) {
      if (x === 22.5 && y === 382.5) {
        mupt = false;
      } else if (x === 22.5 && y === 202.5) {
        mdnt = false;
      } else if (x === 22.5 && y === 247.5) {
        mupt = false;
      } else if (x === 22.5 && y === 337.5) {
        mdnt = false;
      } else {
        mupt = true;
        mdnt = true;
      }
      if (x === 22.5 && (y === 247.5 || y === 292.5 || y === 337.5)) {
        in_closet = true;
        if (hideon === false) {
          startHide();
          hideon = true;
        }
      } else {
        endHideCheck();
        in_closet = false;
      }
    }
    if (x === 427.5) {
      if (x === 427.5 && y === 382.5) {
        mupt = false;
      } else if (x === 427.5 && y === 202.5) {
        mdnt = false;
      } else if (x === 427.5 && y === 247.5) {
        mupt = false;
      } else if (x === 427.5 && y === 337.5) {
        mdnt = false;
      } else {
        mupt = true;
        mdnt = true;
      }
      if (x === 22.5 && (y === 247.5 || y === 292.5 || y === 337.5)) {
        in_closet = true;
        if (hideon === false) {
          startHide();
          hideon = true;
        }
      } else {
        endHideCheck();
        in_closet = false;
      }
    } else if (x <= 427.5 && x >= 67.5) {
      mupt = true;
      mdnt = true;
      in_closet = false;
    } else if (x <= 382.5 && x > 22.5) {
      mupt = true;
      mdnt = true;
      in_closet = false;
    }
  }
  if (rrt2 === 4) {
    if (x === 427.5) {
      if (x === 427.5 && y === 337.5) {
        mupt = false;
      } else if (x === 427.5 && y === 157.5) {
        mdnt = false;
      } else if (x === 427.5 && y === 202.5) {
        mupt = false;
      } else if (x === 427.5 && y === 292.5) {
        mdnt = false;
      } else {
        mupt = true;
        mdnt = true;
      }
      if (x === 427.5 && (y === 202.5 || y === 247.5 || y === 292.5)) {
        in_closet = true;
        if (hideon === false) {
          startHide();
          hideon = true;
        }
      } else {
        endHideCheck();
        in_closet = false;
      }
    } else if (x <= 382.5 && x >= 22.5) {
      mupt = true;
      mdnt = true;
      in_closet = false;
    }
  }
  if (rrt2 === 5) {
    if (x === 22.5) {
      if (x === 22.5 && y === 337.5) {
        mupt = false;
      } else if (x === 22.5 && y === 157.5) {
        mdnt = false;
      } else if (x === 22.5 && y === 202.5) {
        mupt = false;
      } else if (x === 22.5 && y === 292.5) {
        mdnt = false;
      } else {
        mupt = true;
        mdnt = true;
      }
      if (x === 22.5 && (y === 202.5 || y === 247.5 || y === 292.5)) {
        in_closet = true;
        if (hideon === false) {
          startHide();
          hideon = true;
        }
      } else {
        endHideCheck();
        in_closet = false;
      }
    } else if (x >= 67.5 && x <= 427.5) {
      mupt = true;
      mdnt = true;
      in_closet = false;
    }
  }
  if (rrt2 === 4 || rrt2 === 5) {
    if (y === 427.5) {
      if (x === 112.5) {
        mrtt = false;
      } else if (x === 247.5) {
        mrtt = false;
      } else if (x === 157.5) {
        mltt = false;
      } else if (x === 292.5) {
        mltt = false;
      } else {
        mrtt = true;
        mltt = true;
      }
      if (y === 427.5 && (x === 157.5 || x === 202.5 || x === 247.5)) {
        in_closet = true;
        if (hideon === false) {
          startHide();
          hideon = true;
        }
      } else {
        endHideCheck();
        in_closet = false;
      }
    } else if (x <= 427.5 && x >= 67.5) {
      mrtt = true;
      mltt = true;
      in_closet = false;
    } // BOTTOM CLOSET END //
  }
}
function startHide() {
  if (in_closet === true) {
    hidecdn = setInterval(hideattack, hidelimittime);
    endHideCheck();
  } else {
    clearInterval(hidecdn);
    endHideCheck();
  }
}
function hideattack() {
  clearInterval(hidecdn);
  hideon = false;
  if (rrt2 === 1) {
    x = 67.5;
  } else if (rrt2 === 2) {
    x = 382.5;
  } else if (rrt2 === 3) {
    if (x === 427.5) {
      x = 382.5;
    } else if (x === 22.5) {
      x = 67.5;
    }
  } else if (rrt2 === 4) {
    if (y === 427.5) {
      y = 382.5;
    } else if (x === 427.5) {
    }
  }
  hideclosetstop = true;
  clearInterval(hideexittime);
  hideexittimems = 0;
  hideexittimeseconds = 4;
  hideclosetstoptimer = setInterval(hideclosetopen, 5000);
  if (health > 50) {
    health -= 50;
  } else if (health === 50 || health < 50) {
    setInterval(hideds, 2);
  }
}
function endHideCheck() {
  if (in_closet === false) {
    hideon = false;
    clearInterval(hidecdn);
  }
}
function hideclosetstopf() {
  if (rrt2 === 1 || rrt2 === 3) {
    if (x === 67.5 && (y === 247.5 || y === 292.5 || y === 337.5)) {
      mltt = false;
    } else {
      mltt = true;
    }
  }
  if (rrt2 === 2 || rrt2 === 3) {
    if (x === 382.5 && (y === 247.5 || y === 292.5 || y === 337.5)) {
      mltt = false;
    } else {
      mltt = true;
    }
  }
  if (rrt2 === 4) {
    if (y === 382.5 && (x === 202.5 || x === 247.5 || x === 292.5)) {
      mrtt = false;
    } else {
      mrtt = true;
    }
  }
  if (rrt2 === 5) {
    if (x === 67.5 && (y === 202.5 || y === 247.5 || y === 292.5)) {
      mltt = false;
    } else {
      mltt = true;
    }
  }
  console.log(rrt2);
  if (rrt2 === 4 || rrt2 === 5) {
    if (y === 382.5 && (x === 157.5 || x === 202.5 || x === 247.5)) {
      mdnt = false;
    } else {
      mdnt = true;
    }
  }
}
function hideclosetopen() {
  hideclosetstop = false;
  mltt = true;
  mrtt = true;
  mdnt = true;
  clearInterval(hideclosetstoptimer);
}
function hidetimeroutclosetcheck() {
  if (hideclosetstop === false) {
    hideexittime = setInterval(Restarthideoutclosetinterval, 16.5);
  } else {
  }
}
function hidetimeroutcloset1second() {
  if (hideexittimeseconds > 10) {
    hideexittimeseconds = 10;
  }
  hidelimittime = 1500 * hideexittimeseconds;
}
function Restarthideoutclosetinterval() {
  if (hideclosetstop === false) {
    clearInterval(hideexittime);
    hideexittimems += 1;
    if (hideexittimems === 45 || hideexittimems > 45) {
      hidetimeroutcloset1second();
      hideexittimems = 0;
      hideexittimeseconds += 1;
    }
  }
}
function inclosettimecheck() {
  if (in_closet === true) {
    if (ocwttf === true) {
      inclosettimelimit = hidelimittime;
      inclosettime = inclosettimelimit - 5000;
      ocwt2 = setInterval(ocwttff, 16.5);
      ocwttf = false;
    }
  } else {
  }
}
function ocwttff() {
  if (in_closet === true) {
    clearInterval(ocwt2);
    ocwt = setInterval(hideWarning, inclosettime);
  } else {
    ocwttf = true;
  }
}
function inclosetmsts() {
  if (in_closet === true) {
    clearInterval(inclosettimer);
    inclosettimems += 1;
    if (inclosettimems === 60 || inclosettimems > 60) {
      inclosettimems = 0;
      inclosettimeseconds += 1;
    }
  } else {
    clearInterval(inclosettimer);
    inclosettimems = 0;
    inclosettimeseconds = 0;
  }
}
function inclosettimef() {
  if (in_closet === true) {
    inclosettimer = setInterval(inclosetmsts, 16.5);
  }
}
function hideWarning() {
  if (in_closet === true) {
    hidewarningtf = true;
    fill(255, 0, 0);
    textSize(75);
    text("GET OUT", 50, 75);
    text("GET OUT", 50, 150);
    text("GET OUT", 50, 225);
    text("GET OUT", 50, 300);
    text("GET OUT", 50, 375);
  } else {
    hidewarningtf = false;
  }
}
