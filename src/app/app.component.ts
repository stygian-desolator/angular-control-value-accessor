import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'custom-control-value-accessor';
  counter = 0;
  formGroup = this.fb.group({
    counter: 5,
  });
  constructor(private fb: FormBuilder) {}
}
