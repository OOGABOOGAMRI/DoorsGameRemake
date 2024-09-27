function ambushStart() {
  Lflicker.start(2);
  ambushgocount = 0;
  ambushgomax = int(random(3, 9));
  ambushstimer = setInterval(ambushGo, 5000);
}
function ambushGo() {
  ambushon = true;
  clearInterval(ambushstimer);
  if (ambushgocount % 2 === 0) {
    ambushy += 10;
  } else {
    ambushy -= 10;
  }
  if (ambushy === -300 || ambushy < -300 || ambushy === 725 || ambushy > 725) {
    if (ambusha1 === true) {
      ambushgocount += 1;
      ambusha1 = false;
      atimer2 = setInterval(ambusha1f, 2);
    }
  }
}
function ambusha1f() {
  clearInterval(atimer2);
  ambusha1 = true;
}
