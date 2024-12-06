export function calculateScore(questions, userSelections) {
    let score = 0;
    for (let q of questions) {
      const userAnswer = userSelections[q.id] || [];
      const correct = q.correct.sort().join(',');
      const user = userAnswer.sort().join(',');
      if (correct === user) {
        score++;
      }
    }
    return score;
  }
  