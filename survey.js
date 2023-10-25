const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question('What\'s your nickname? Nicknames are also acceptable: ', (answer) => {
  answers.name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answers.activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.music = answer;
      rl.question('Which meal is your favorite (eg. dinner, brunch, etc.) ', (answer) => {
        answers.meal = answer;
        rl.question('What\'s your favorite thing to eat for that meal? ', (answer) => {
          answers.dish = answer;
          rl.question('Which sport is your absolute favorite? ', (answer) => {
            answers.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at: ', (answer) => {
              answers.superpower = answer;
              console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.dish} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
