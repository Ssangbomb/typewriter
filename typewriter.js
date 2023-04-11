const sentence = "hello there from lighthouse labs";
let time = 0
const typeSlowly = (sen) => {
  for (const char of sen) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time)
  time += 50; 
  }
}

typeSlowly(sentence+'\n');