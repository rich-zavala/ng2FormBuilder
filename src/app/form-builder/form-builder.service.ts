import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskModel } from '../models/task-model';

@Injectable()
export class FormBuilderService {
  constructor() { }

  toFormGroup(tasks: TaskModel<any>[]) {
    let group: any = {};

    tasks.forEach(task => {
      group[task.key] = task.required ? new FormControl(task.value || '', Validators.required)
        : new FormControl(task.value || '');
    });

    return new FormGroup(group);
  }
}
