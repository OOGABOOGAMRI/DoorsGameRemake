const Y_AXIS = 1;
const X_AXIS = 2;
let x,
  y,
  p1,
  randomroomsv2,
  figurex,
  figurey,
  figured,
  randomroomsv,
  seekmovetimer,
  haltimg,
  haltarrowx,
  haltarrowy,
  rrt2,
  haltturnaroundtimertf,
  spawnroompt,
  seekmovetimeron,
  halton,
  hytv,
  hxtv,
  haltbackgroundturnaroundtf,
  seekmoveon,
  hideattackallow,
  seekontimer,
  haltturnaroundsignal,
  lv,
  dv,
  figuremovementmv = [],
  seekrepostimer,
  seekontimertf2,
  ofade,
  cloth,
  seekontimerp3,
  fireds,
  seekdir,
  seekon,
  onfade,
  screechrandomtimerseconds,
  ofadeamount,
  sat,
  seekcircle,
  sattf,
  ocwt2,
  c1,
  c2,
  seekd1,
  hidewarningtf,
  ambushstimer,
  ambushds,
  seekd2,
  screechds,
  ambushgomax,
  ambushgocount,
  ambushon,
  hideon,
  seekshape,
  figimg,
  keyimg,
  rushx,
  atimer2,
  ambusha1,
  mltt,
  ambushy,
  hideclosetstop,
  hideattackallowtimer,
  hideattackallowtimertf,
  hideclosetstoptimer,
  hideexittime,
  hideexittimems,
  hidelimittime,
  hideexittimeseconds,
  inclosettime,
  inclosettimelimit,
  inclosettimer,
  inclosettimems,
  inclosettimeseconds,
  rushy,
  lightv,
  hidedscreen,
  seekontimertf,
  rushwait,
  health,
  maxHealth,
  fireimg,
  cmode,
  screech,
  mx,
  my,
  door,
  hidecdn,
  light = [],
  lightstat,
  figcircle,
  figurexmovementtf,
  figureymovementtf,
  ocwt,
  ocwttf,
  figureon,
  lock,
  ms,
  lwait,
  fcount,
  lf,
  lfc,
  mupt,
  mdnt,
  mrtt,
  rushimg,
  ambushimg,
  in_closet,
  rushpase,
  seekdirtf,
  rushon,
  screechrandoms,
  screechrandomtimer,
  screechtimertf,
  seekx,
  haltaroundtimer,
  haltaroundtimer2,
  seeky,
  table1,
  table2,
  table3,
  screechtimer,
  rushdscreen,
  rushdist,
  ambushx,
  seekeye,
  ambushdist;
function preload() {
  carpetImgr = loadImage("carpetr.png");
  carpetImg = loadImage("carpet.png");
  rushimg = loadImage("RushIdle.jpeg");
  hidedscreen = loadImage("hideDScreen.png");
  ambushimg = loadImage("ambush.jpeg");
  ground = loadImage("wood.png");
  keyimg = loadImage("key.jpeg");
  screech = loadImage(
    "https://static.wikia.nocookie.net/doors-game/images/3/34/Screech_Render.png/revision/latest/scale-to-width-down/250?cb=20220807074802"
  );
  seekeye = loadImage("seekeye.jpg");
  lock = loadImage("lock.png");
  rushdscreen = loadImage("RushDScreen.png");
  light[0] = loadImage("lon.jpg");
  light[1] = loadImage("loff.jpg");
  light[2] = loadImage("dloff.png");
  fireimg = loadImage("ifre.png");
  cloth = loadImage("cloth.jpg");
  haltturnaroundsignal = loadImage("haltaroundback.jpg");
  haltimg = loadImage("halt.jpeg");
  figimg = loadImage("figure.jpeg");
}
function setup() {
  createCanvas(450, 450);
  Player = new Player();
  Movement = new Movement();
  RC = new RC();
  Lflicker = new Lflicker();
  Health = new Health();
  Table1 = new Table(100, 175, 1);
  Table2 = new Table(350, 150, 2);
  Table3 = new Table(300, 350, 3);
  randomrooms = new RandomRooms(
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    6,
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    int(random(1, 6)),
    7
  );
  roombuilder = new Roombuilder();
  seekcircle = createGraphics(45, 45);
  figcircle = createGraphics(45, 45);
  table1 = createGraphics(135, 135);
  table2 = createGraphics(135, 135);
  table3 = createGraphics(135, 135);
  lv = false;
  dv = false;
  x = 22.5;
  y = 22.5;
  cmode = false;
  door = 50;
  lightstat = true;
  seekontimertf = true;
  haltbackgroundturnaroundtf = false;
  seekontimertf2 = true;
  halton = false;
  haltturnaroundtimertf = true;
  ms = 0;
  lf = false;
  lfc = 0;
  mupt = true;
  mdnt = true;
  frameRate(60);
  in_closet = false;
  rushx = 100;
  rushy = -300;
  seekon = false;
  ambushx = 100;
  ambushy = -300;
  rushpassed = false;
  rushon = false;
  p1 = 0;
  health = 100;
  maxHealth = 100;
  hideon = false;
  hideclosetstop = false;
  mltt = true;
  mrtt = true;
  hideexittimems = 0;
  hideexittimeseconds = 5;
  ambushon = false;
  ambushgomax = 8;
  ambushgocount = 0;
  ambusha1 = true;
  ofade = 255;
  ofadeamount = 4;
  onfade = true;
  ocwttf = true;
  screechon = false;
  hidewarningtf = false;
  screechtimertf = true;
  sattf = true;
  c1 = color(255, 255, 255, 0);
  c2 = color(0, 200, 255);
  seekx = 0;
  seeky = -50;
  seekmovetimeron = true;
  seekmoveon = false;
  seekdir = 1;
  seekdirtf = 1;
  lightv = light[0];
  hideattackallow = false;
  hideattackallowtimertf = true;
  figureon = false;
  figurex = 50;
  figurey = 50;
  figuremovementmv[0] = 1;
  figuremovementmv[1] = 1;
}

function draw() {
  for (let i = 0; i <= 98; i += 1) {
    randomroomsv2 = i + 1;
    if (randomroomsv[i] === 5 && randomroomsv[randomroomsv2] === 5) {
      randomroomsv[randomroomsv2] = int(random(1, 5));
    }
    if (randomroomsv[i] === 4 && randomroomsv[randomroomsv2] === 4) {
      randomroomsv[randomroomsv2] = int(random(1, 4));
    }
    if (randomroomsv[i] === 4 && randomroomsv[randomroomsv2] === 5) {
      randomroomsv[randomroomsv2] = int(random(1, 4));
    }
    if (randomroomsv[i] === 5 && randomroomsv[randomroomsv2] === 4) {
      randomroomsv[randomroomsv2] = int(random(1, 4));
    }
    if (randomroomsv[i] === 5) {
      randomroomsv[randomroomsv2] = 2;
    }
    if (randomroomsv[i] === 4) {
      randomroomsv[randomroomsv2] = 1;
    }
  }
  doorcount();
  closetCheck();
  mx = mouseX;
  my = mouseY;
  seekd1 = dist(p1, seeky, p1, y);
  seekd2 = dist(seekx + 45, p1, x, p1);
  rushdist = dist(rushx, y, rushx, rushy + 125);
  ambushdist = dist(ambushx, y, ambushx, ambushy + 125);
  figured = dist(figurex, figurey, x, y);
  fcount = frameCount;
  noStroke();
  fill(0, 0, 255);
  circle(x, y, 45);
  image(rushimg, rushx, rushy, 250, 250);
  image(ambushimg, ambushx, ambushy, 250, 250);
  if (cmode === true) {
    console.log(x, y);
  }
  if (rushon === true) {
    rushcome();
  }
  Lflicker.lv();
  Lflicker.dv();
  image(lightv, 0, 145, 22.5, 22.5);
  image(lightv, 0, 175, 22.5, 22.5);
  image(lightv, 427.5, 145, 22.5, 22.5);
  image(lightv, 427.5, 175, 22.5, 22.5);
  image(keyimg, x - 10, y - 10, 50, 50);
  Health.check();
  Player.dcr();
  Player.dca();
  Player.pfc();
  if (hideclosetstop === true) {
    hideclosetstopf();
  }
  hidetimeroutclosetcheck();
  inclosettimecheck();
  inclosettimef();
  if (ambushon === true) {
    ambushGo();
  }
  if (ambushgocount === ambushgomax) {
    ambushon = false;
    ambushy = -300;
  }
  if (onfade === true) {
    textFont("NerkoOne");
    textSize(100);
    fill(0, 0, 0, ofade);
    text("THE", 125, 200);
    text("HOTEL", 75, 275);
  }
  if (onfade === true) {
    ofade -= ofadeamount;
  }
  if (ofade === 0 || ofade < 0) {
    onfade = false;
  }
  if (hidewarningtf === true) {
    hideWarning();
  } else {
  }
  closetCheck();
  endHideCheck();
  if (screechon === true) {
    ScreechSpawn();
  } else {
    ScreechTimerCheck();
  }
  if (door === 30 && y === 292.5) {
    if (seekontimertf === true) {
      seekStart();
      seekx = 45;
      seeky = 45;
    }
  }
  if (seekon === true) {
    seekCirclef(seekcircle, seekx, seeky, seekeye);
  }
  if (seekmoveon === true) {
    seekMove();
  }
  seekAttackCheck();
  if (halton === true) {
    haltControlCenter();
  }
  if (figureon === true) {
    figureControlCenter();
  }
}
function keyPressed() {
  if (figureon === false) {
    figureStart();
  }
  if (keyCode === 87 || keyCode === 38) {
    if (mupt === true) {
      Movement.up();
    }
  }
  if (keyCode === 65 || keyCode === 37) {
    if (mltt === true) {
      Movement.left();
    }
  }
  if (keyCode === 83 || keyCode === 40) {
    if (mdnt === true) {
      Movement.down();
    }
  }
  if (keyCode === 68 || keyCode === 39) {
    if (mrtt === true) {
      Movement.right();
    }
  }
  if (keyCode === 67) {
    if (cmode === false) {
      cmode = true;
    } else if (cmode === true) {
      cmode = false;
    }
  }
  if (keyCode === 82) {
    rushstart();
  }
  if (keyCode === 13) {
    ambushStart();
  }
}
function doorcount() {
  if (door === 30) {
    RC.d30();
  } else if (door === 31) {
    RC.d31();
  } else if (door === 32) {
    RC.d32();
  } else if (door === 33) {
    RC.d33();
  } else if (door === 34) {
    RC.d34();
  } else if (door === 35) {
    RC.d35();
  } else if (door === 50) {
    RC.d50();
  } else if (door === 90) {
    RC.d90();
  } else if (door === 91) {
    RC.d91();
  } else if (door === 92) {
    RC.d92();
  } else if (door === 93) {
    RC.d93();
  } else if (door === 94) {
    RC.d94();
  } else if (door === 95) {
    RC.d95();
  } else if (door === 96) {
    RC.d96();
  } else if (door === 97) {
    RC.d97();
  } else if (door === 98) {
    RC.d98();
  } else if (door === 99) {
    RC.d99();
  } else if (door === 100) {
    RC.d100();
  } else if (door === 84) {
    randomroomsv[81] = 1;
  } else {
    RC.regBuild();
  }
}
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // bottom to top gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c2, c1, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
class Table {
  constructor(tablex, tabley, tablenumb) {
    this.tablex = tablex;
    this.tabley = tabley;
    this.tnum = tablenumb;
  }
  build() {
    fill(70, 50, 25);
    strokeWeight(1);
    stroke(0);

    rect(this.tablex - 100, this.tabley - 25, 45, 45);
    rect(this.tablex - 100, this.tabley - 25, 5, 45);

    rect(this.tablex + 50, this.tabley - 25, 45, 45);
    rect(this.tablex + 90, this.tabley - 25, 5, 45);

    rect(this.tablex - 25, this.tabley - 100, 45, 45);
    rect(this.tablex - 25, this.tabley - 100, 45, 5);

    rect(this.tablex - 25, this.tabley + 60, 45, 45);
    rect(this.tablex - 25, this.tabley + 100, 45, 5);

    fill(255);
    strokeWeight(0);
    if (this.tnum === 1) {
      table1.circle(this.tablex, this.tabley, 135);

      cloth.mask(table1);
      image(cloth, this.tablex, this.tabley, 135, 135);
    }
    if (this.tnum === 2) {
      table2.noStroke();
      table2.fill(255);
      table2.circle(this.tablex, this.tabley, 135);

      cloth.mask(table2);
      image(cloth, this.tablex, this.tabley, 135, 135);
    }
    if (this.tnum === 3) {
      table3.clear();
      table3.noStroke();
      table3.fill(255);
      table3.circle(this.tablex, this.tabley, 135);

      cloth.mask(table3);
      image(cloth, this.tablex, this.tabley, 135, 135);
    }
  }
}
class RandomRooms {
  constructor(
    v1,
    v2,
    v3,
    v4,
    v5,
    v6,
    v7,
    v8,
    v9,
    v10,
    v11,
    v12,
    v13,
    v14,
    v15,
    v16,
    v17,
    v18,
    v19,
    v20,
    v21,
    v22,
    v23,
    v24,
    v25,
    v26,
    v27,
    v28,
    v29,
    v30,
    v31,
    v32,
    v33,
    v34,
    v35,
    v36,
    v37,
    v38,
    v39,
    v40,
    v41,
    v42,
    v43,
    v44,
    v45,
    v46,
    v47,
    v48,
    v49,
    v50,
    v51,
    v52,
    v53,
    v54,
    v55,
    v56,
    v57,
    v58,
    v59,
    v60,
    v61,
    v62,
    v63,
    v64,
    v65,
    v66,
    v67,
    v68,
    v69,
    v70,
    v71,
    v72,
    v73,
    v74,
    v75,
    v76,
    v77,
    v78,
    v79,
    v80,
    v81,
    v82,
    v83,
    v84,
    v85,
    v86,
    v87,
    v88,
    v89,
    v90,
    v91,
    v92,
    v93,
    v94,
    v95,
    v96,
    v97,
    v98,
    v99,
    v100
  ) {
    randomroomsv = [
      0,
      2,
      v2,
      v3,
      v4,
      v5,
      v6,
      v7,
      v8,
      v9,
      v10,
      v11,
      v12,
      v13,
      v14,
      v15,
      v16,
      v17,
      v18,
      v19,
      v20,
      v21,
      v22,
      v23,
      v24,
      v25,
      v26,
      v27,
      v28,
      v29,
      v30,
      v31,
      v32,
      v33,
      v34,
      v35,
      v36,
      v37,
      v38,
      v39,
      v40,
      v41,
      v42,
      v43,
      v44,
      v45,
      v46,
      v47,
      v48,
      v49,
      v50,
      v51,
      v52,
      v53,
      v54,
      v55,
      v56,
      v57,
      v58,
      v59,
      v60,
      v61,
      v62,
      v63,
      v64,
      v65,
      v66,
      v67,
      v68,
      v69,
      v70,
      v71,
      v72,
      v73,
      v74,
      v75,
      v76,
      v77,
      v78,
      v79,
      v80,
      v81,
      v82,
      v83,
      v84,
      v85,
      v86,
      v87,
      v88,
      v89,
      v90,
      v91,
      v92,
      v93,
      v94,
      v95,
      v96,
      v97,
      v98,
      v99,
      v100,
    ];
  }
}
class Roombuilder {
  roombuild(room_type) {
    if (room_type === 1) {
      background(ground);
      image(carpetImg, 150, 0, 150, 450);
      fill(150, 75, 0);
      rect(0, 225, 45, 135);
    } else if (room_type === 2) {
      background(ground);
      image(carpetImg, 150, 0, 150, 450);
      fill(150, 75, 0);
      rect(405, 225, 45, 135);
    } else if (room_type === 3) {
      background(ground);
      image(carpetImg, 150, 0, 150, 450);
      fill(150, 75, 0);
      rect(0, 225, 45, 135);
      rect(405, 225, 45, 135);
      if (fcount % 5 === 0) {
        console.log(in_closet);
      }
    } else if (room_type === 4) {
      background(ground);
      image(carpetImg, 150, 0, 150, 450);
      image(carpetImgr, 0, 150, 450, 150);
      fill(150, 75, 0);
      rect(405, 180, 45, 135);
      rect(135, 405, 135, 45);
    } else if (room_type === 5) {
      background(ground);
      image(carpetImg, 150, 0, 150, 450);
      image(carpetImgr, 0, 150, 450, 150);
      fill(150, 75, 0);
      rect(0, 180, 45, 135);
      rect(135, 405, 135, 45);
    } else if (room_type === 6) {
      background(ground);
    } else if (room_type === 7) {
    }
  }
}
