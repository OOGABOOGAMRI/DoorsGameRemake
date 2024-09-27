function rushjs() {
  background(rushdscreen);
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
  nloop();
}
function hideds() {
  background(hidedscreen);
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
  nloop();
}
function ambushjs() {
  background(0);
  image(ambushimg, 75, -10, 300, 300);
  textSize(35);
  fill(255);
  text("You died to ambush. He is just", 10, 325);
  text("like rush, but different. He", 10, 370);
  text("comes back again and again.", 10, 410);
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
  nloop();
}
function screechjs() {
  background(255, 255, 255);
  image(screech, 100, 15, 250, 250);
  fill(0, 0, 0);
  textSize(30);
  text("You died to screech. You have to", 20, 290);
  text("be careful and look at your player", 20, 320);
  text("more often. He will pop up every", 20, 350);
  text("now and then and bite you. To", 20, 380);
  text("stop this from happening, put", 20, 410);
  text("your mouse over him.", 20, 440);
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
  nloop();
}
function firejs() {
  background(0, 0, 0);
  image(fireimg, 0, 0, 450, 250);
  fill(255, 255, 255);
  textSize(40);
  text("You died to fire. You have", 15, 295);
  text("to try to go around it or ", 15, 340);
  text("you will take damage.", 15, 385);
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
  nloop();
}
function seekjs() {
  background(0);
  seekcircle.noStroke();
  seekcircle.fill(255);
  seekcircle.circle(0, 0, 270);

  seekeye.mask(seekcircle);
  image(seekeye, 45, -45, 360, 360);
  fill(255);
  textSize(35);
  text("You died to seek.", 25, 300);
  text("You have to run from him", 25, 340);
  text("and choose the correct way.", 25, 380);
  setInterval(nloop, 5);
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
}
function haltjs() {
  clearInterval(haltaroundtimer);
  clearInterval(haltaroundtimer2);
  halton = false;
  haltbackgroundturnaroundtf = false;
  clearInterval(haltaroundtimer);
  haltturnaroundtimertf = false;
  clearInterval(hideattackallowtimer);
  hideattackallow = false;
  hideattackallowtimertf = false;
  screechon = false;
  screechtimertf = false;
  sattf = false;
  clearInterval(screechtimer);
  background(0, 0, 0);
  image(haltimg, 125, 0, 200, 297);
  fill(255);
  textSize(35);
  text("You died to halt.", 25, 325);
  text("You have to be carefull and", 25, 365);
  text("go in the way he wants you to", 25, 405);
  text("go.", 25, 440);
  noLoop();
}
function nloop() {
  noLoop();
}
