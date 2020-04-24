import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ],
})
export class CheckboxGroupComponent implements OnChanges, ControlValueAccessor {
  @Input() labels: string[] = [];

  public checkboxes = new FormArray([]);

  private onChange: any = () => {};
  private onTouch: any = () => {};

  ngOnChanges({labels}: SimpleChanges): void {
    if (labels.currentValue) {
      this.labels.forEach(() => this.checkboxes.push(new FormControl(false)));

      this.value = [];
    }
  }

  public set value(value: string[]) {
    this.labels.forEach((label: string, index: number) => {
      const checkbox = this.checkboxes.at(index);
      checkbox.setValue(value.includes(label));
    });

    this.notifyValueUpdated(value);
  }

  public get value(): string[] {
    return this.labels.filter((_: string, index: number) => this.checkboxes.at(index).value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.checkboxes.disable() : this.checkboxes.enable();
  }

  public writeValue(value: string[]): void {
    this.value = value;
  }

  public checkboxClicked(): void {
    this.notifyValueUpdated(this.value);
  }

  private notifyValueUpdated(value: string[]): void {
    this.checkboxes.updateValueAndValidity();
    this.onChange(value);
    this.onTouch(value);
  }
}
