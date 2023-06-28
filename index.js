// process.stdout.write("Alguma coisa \n");

const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " > ");
};

ask();

const answers = [];
process.stdin.on("data", data => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
    Bacana Hugo!

    O que você aprendeu hoje foi:
      > ${answers[0]}

    O que te aborreceu:
      > ${answers[1]}

    O que você poderia melhorar foi:
      > ${answers[2]}

    O que te deixou feliz hoje:
      > ${answers[3]}

    Você ajudou ${answers[4]} pessoa(as) hoje!!
    
    Volte amanhã para novas reflexões!!
  `);
});