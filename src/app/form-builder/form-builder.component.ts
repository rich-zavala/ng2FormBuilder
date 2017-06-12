import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskModel } from '../models/task-model';
import { FormBuilderService } from './form-builder.service';

@Component({
  selector: 'app-form-builder',
  template: `
    <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div *ngFor="let question of questions" class="form-row">
          <app-form-placer [question]="question" [form]="form"></app-form-placer>
        </div>
        <div class="form-row">
          <button type="submit" [disabled]="!form.valid">Save</button>
        </div>
      </form>
      <div *ngIf="payLoad" class="form-row">
        <strong>Saved the following values</strong><br>{{payLoad}}
      </div>
    </div>
  `,
  styleUrls: ['./form-builder.component.css'],
  providers: [FormBuilderService]
})
export class FormBuilderComponent implements OnInit {

  @Input() questions: TaskModel<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: FormBuilderService) { }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
