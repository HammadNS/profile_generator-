const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptables :) ', (name) => {
  console.log(`${name}`);

rl.question('Whats an activity you like doing? ', (activity) => {
  console.log(` ${activity}`);

 rl.question('What do you listen to while doing that? ', (music) => {
    console.log(` ${music}`);


 rl.question('which meal is your favourite (eg. dinner,lunch and brunch) ', (meal) => {
    console.log(`Thank you for your valuable feedback: ${meal}`);


  rl.question('What is your favourite thing to eat for that meal ', (eat) => {
    console.log(`${eat}`);

  rl.question('Which sport is your absolute favourite? ', (sport) => {
      console.log(`${sport}`);

 rl.question('What is superpower? tell us in a few words what you are amazing at ', (superpower) => {
        console.log(`${superpower}`);
  

  rl.close();
});
});
});
});
});
});
});
