import { Component } from '@angular/core';
import { FormService } from './form.service';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-form-builder [questions]="questions"></app-form-builder>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions: any[];
  constructor(service: FormService) {
    this.questions = service.getQuestions();
  }
}
