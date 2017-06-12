import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskModel } from '../models/task-model';

@Component({
  selector: 'app-form-placer',
  template: `
    <div [formGroup]="form">
      <label [attr.for]="question.key">{{question.label}}</label>
      <div [ngSwitch]="question.controlType">
        <input *ngSwitchCase="'textbox'" [formControlName]="question.key"
                [id]="question.key" [type]="question.type">
        <select [id]="question.key" *ngSwitchCase="'dropdown'" [formControlName]="question.key">
          <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>
        </select>
      </div> 
      <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
    </div>
  `,
  styleUrls: ['./form-placer.component.css']
})
export class FormPlacerComponent {
  @Input() question: TaskModel<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
