import { Component } from "@angular/core";
import { FormCategory, CategoriesProvider } from "./form/providers/categories.provider";
import { task } from "./mock-data/task";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <pre>{{task.settings[0] | json}}</pre>
      <hr>
      <app-form-builder [categories]="categories"></app-form-builder>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  categories;
  task = task;
  constructor() {
    let catProvider = new CategoriesProvider(task);
    this.categories = catProvider.categories;
  }
}
