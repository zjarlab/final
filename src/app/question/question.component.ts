import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionDetails
  constructor(private app : AppService) { }
  ngOnInit(): void {
    this.questionDetails = this.app.questionDetails;
  }
  text : string;
  option : Number;
  addQuestion()
  {
    this.questionDetails.createQuestion(this.text,this.option);
  }
}
