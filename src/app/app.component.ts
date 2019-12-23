import {Component, OnInit} from '@angular/core';
import {Question, QuizService} from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questions: Question[] = [];

  constructor(private quizservice: QuizService) {
  }

  ngOnInit(): void {
    this.questions.push(this.quizservice.getNextQuestion());
  }
}
