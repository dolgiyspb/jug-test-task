import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { PresentationLanguage } from '../../enums/presentation-language.enum';
import { PresentationLevel } from '../../enums/presentation-level.enum';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Filters } from '../../interfaces/filters.interface';
import { defaultFiltersState } from './default-filters-state';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => FiltersComponent),
      multi: true
    }
  ],
})
export class FiltersComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public filterForm = new FormGroup({
    language: new FormControl([]),
    level: new FormControl([]),
    search: new FormControl(''),
  });

  public readonly languages: PresentationLanguage[] = Object.values(PresentationLanguage);
  public readonly levels: PresentationLevel[] = Object.values(PresentationLevel);
  private onDestroy$ = new Subject<void>();

  private onChange: any = () => {};
  private onTouch: any = () => {};

  ngOnInit(): void {
    this.filterForm.valueChanges.pipe(
      debounceTime(100),
    ).subscribe((value: Filters) => this.notifyValueUpdated(value));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public get value(): Filters {
    return this.filterForm.value;
  }

  public set value(value: Filters) {
    this.filterForm.setValue(this.getNormalizedvalue(value));
  }


  public resetFilters(): void {
    this.filterForm.reset(defaultFiltersState);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.filterForm.disable() : this.filterForm.enable();
  }

  public writeValue(value: Filters): void {
    this.value = value;
  }

  private notifyValueUpdated(value: Filters): void {
    this.onChange(value);
    this.onTouch(value);
  }

  private getNormalizedvalue(value: Filters): Filters {
    const normalized = value || defaultFiltersState;

    return {
      level: normalized.level || [],
      language: normalized.language || [],
      search: normalized.search || '',
    };
  }
}
