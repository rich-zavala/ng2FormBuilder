import { Component } from "@angular/core";
import { FieldProvider } from "./form-helper/field-data-provider/field.provider";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-form-builder [fields]="fields"></app-form-builder>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fields: any[];
  constructor() {
    // this.questions = new FieldProvider().getQuestions();
    this.fields = new FieldProvider().fields;
  }
}
