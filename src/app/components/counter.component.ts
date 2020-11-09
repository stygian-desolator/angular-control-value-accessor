import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <span>{{ value }}</span>
      <br/>
      <button (click)="increase()">increase</button>
      <button (click)="decrease()">decrease</button>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true,
    },
  ],
})
export class CounterComponent implements ControlValueAccessor {
  onChanged: (value: any) => void = (_: any) => {};
  onTouched: (value: any) => void = (_: any) => {};

  private _value = 0;

  get value() {
    return this._value;
  }

  set value(val: number) {
    if (val !== this._value) {
      this._value = val;
      this.onChanged(val);
    }
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }

  writeValue(val: number): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
