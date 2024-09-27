class Lflicker {
  start(r) {
    if (r === 1) {
      lf = true;
      lv = true;
    } else if (r === 2) {
      dv = true;
      lf = true;
    }
    this.r = r;
  }
  lv() {
    if (lv === true) {
      if (fcount % 20 === 0) {
        if (lf === true) {
          if (lfc === 8 || lfc < 8) {
            if (lightstat === false) {
              lightv = light[0];
              lightstat = true;
            } else if (lightstat === true) {
              lightv = light[1];
              lightstat = false;
            }
          }
          if (lfc === 8) {
            lfc = 0;
            lightstat = true;
            lf = false;
            lv = false;
            lightv = light[0];
          }
          if (lfc < 8) {
            lfc += 1;
          }
        } else {
        }
      }
    }
  }
  dv() {
    if (dv === true) {
      if (fcount % 20 === 0) {
        if (lf === true) {
          if (lfc === 8 || lfc < 8) {
            if (lightstat === false) {
              lightv = light[0];
              lightstat = true;
            } else if (lightstat === true) {
              lightv = light[2];
              lightstat = false;
            }
          }
          if (lfc === 8) {
            lfc = 0;
            lightstat = true;
            lf = false;
            dv = false;
            lightv = light[0];
          }
          if (lfc < 8) {
            lfc += 1;
          }
        } else {
        }
      }
    }
  }
}
