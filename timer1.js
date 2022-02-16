let alarms = process.argv.slice(2);
let timer1 = (input) => {
  for (const time of input) {
    if (time > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time * 1000);
    }
  }
};

timer1(alarms);
