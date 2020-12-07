import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionDetails
  constructor(private quizServ : AppService) { }

  ngOnInit(): void {
    this.questionDetails = this.quizServ.questionDetails;
  }
}
