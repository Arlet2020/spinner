process.stdout.write('hello from spinner1.js... \rheyyy\n');

var carach = ["'", "/", "-", "\\", "'", "/", "-", "\\", ]

var time = 0;

for (let cara of carach ) {
  setTimeout(() => {
    process.stdout.write(`\r${cara} `);
  }, time);

time += 200

}

//heyyy from spinner1.js...

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1500);

// // ... fill in the rest yourself ...

// // ... fill in the rest yourself ...