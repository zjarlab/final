import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class AppService
{
    //make a service class which will hold all the data
    quizDetails = [

    ]
    questionDetails = [

    ]
    createQuiz(id,name,max)
    {
        this.quizDetails.push({id,name,max});
    }
    createQuestion(text,option)
    {
        this.questionDetails.push({text,option});
    }
}