// function should read inputs from command-line
let inputs = process.argv.slice(2, process.argv.length);
let intervals = []
// if an input is negative it should be skipped 
// if an input is not a number it should be skipped
// if no numbers are provided, it should not beep at all
inputs.forEach (input => {
  if (input > 0) {
    intervals.push(input);
  } 
})
const timer = () => {
  // function should return a "beep" noise at each interval specified
  intervals.forEach (interval => {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval * 1000)
  })
};

timer(intervals);