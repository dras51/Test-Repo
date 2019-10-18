const mongoose = require('mongoose');

const Schema = mongoose.Schema;

class Question {
  constructor(question, answer, type, score, options) {
    (this.question = question),
      (this.answer = answer),
      (this.type = type),
      (this.score = score),
      (this.options = options);
  }
}

const quizSchema = new Schema({
  category: String,
  question: Object,
  timer: Number,
  description: String,
  totalScore: Number
});

const Quiz = new mongoose.model('Quiz', quizSchema);

const testQuiz = new Quiz({
  category: 'Test',
  question: new Question('what is your name', 'test', 'yes or no', 3, [
    'option1',
    'option2',
    'option3'
  ]),
  timer: 5,
  description: 'this is a test',
  totalScore: 0
});

console.log(testQuiz.question.question);
