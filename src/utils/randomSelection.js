export function selectRandomQuestions(allQuestions, count = 10) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  