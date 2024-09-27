function rushstart() {
  rushy = -300;
  rushpassed = false;
  Lflicker.start(1);
  rushwait = setInterval(rushcome, 5000);
}
function rushcome() {
  if (rushpassed === false) {
    rushon = true;
    rushy += 10;
    if (rushy === 700 || rushy > 700) {
      rushend();
      clearInterval(rushwait);
    }
  }
}
function rushend() {
  rushpassed = true;
  rushon = false;
}
