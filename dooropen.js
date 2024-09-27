function doorOpened(t) {
  if (door === 30 || door === 31 || door === 33 || door === 34 || door === 35) {
    if (x === 202.5 && y === 427.5) {
      spawnroompt = setInterval(spawnRoom(202.5, 22.5, 1), 5);
      door += 1;
      if (seekon === true) {
        seekDoorOpened();
      }
    } else if (x === 247.5 && y === 427.5) {
      spawnroompt = setInterval(spawnRoom(247.5, 22.5), 5);
      door += 1;
      if (seekon === true) {
        seekDoorOpened();
      }
    }
  }
  if (door === 84) {
    clearInterval(haltaroundtimer);
    clearInterval(haltaroundtimer2);
    halton = false;
    haltbackgroundturnaroundtf = false;
    clearInterval(haltaroundtimer);
    haltturnaroundtimertf = false;
    clearInterval(hideattackallowtimer);
    hideattackallow = false;
    hideattackallowtimertf = false;
    spawnroompt = setInterval(spawnRoom(247.5, 22.5), 16);
    door += 1;
  }
  if (door === 32) {
    if (x === 22.5 && (y === 202.5 || y === 247.5)) {
      door += 1;
      spawnroompt = setInterval(spawnRoom(427.5, y), 5);
      if (seekon === true) {
        seekDoorOpened();
      }
    }
  }
  if (t === 1 || t === 2 || t === 3) {
    if (x === 202.5 && y === 427.5) {
      spawnroompt = setInterval(spawnRoom(202.5, 22.5, 1), 5);
      door += 1;
    } else if (x === 247.5 && y === 427.5) {
      spawnroompt = setInterval(spawnRoom(247.5, 22.5, 1), 5);
      door += 1;
    }
  }
  if (t === 4) {
    if (x === 22.5 && y === 247.5) {
      spawnroompt = setInterval(spawnRoom(427.5, 202.5, 2), 5);
      door += 1;
    } else if (x === 22.5 && y === 202.5) {
      spawnroompt = setInterval(spawnRoom(427.5, 202.5, 2), 5);
      door += 1;
    }
  }
  if (t === 5) {
    if (x === 427.5 && y === 202.5) {
      spawnroompt = setInterval(spawnRoom(22.5, 202.5,3), 5);
      door += 1;
    } else if (x === 427.5 && y === 247.5) {
      spawnroompt = setInterval(spawnRoom(22.5, 247.5,3), 5);
      door += 1;
    }
  }
}
function spawnRoom(px, py, t) {
  if (t === 1) {
    x = px;
    y = py - 45;
  } else if (t === 2) {
    x = px + 45;
    y = py;
  } else if (t === 3) {
    x = px - 45;
    y = py;
  }

  clearInterval(spawnroompt);
}
