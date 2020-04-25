import { Component, Input, OnInit, Output } from '@angular/core';
import { PresentationLanguage } from '../../enums/presentation-language.enum';
import { PresentationLevel } from '../../enums/presentation-level.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { Filters } from '../../interfaces/filters.interface';

const defaultFiltersState = {
  language: [],
  level: [],
  search: '',
};

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.less']
})
export class FilterFormComponent implements OnInit {
  @Input() filters: Filters = defaultFiltersState;

  public filterForm = new FormGroup({
    language: new FormControl([]),
    level: new FormControl([]),
    search: new FormControl(''),
  });


  public readonly languages: PresentationLanguage[] = Object.values(PresentationLanguage);
  public readonly levels: PresentationLevel[] = Object.values(PresentationLevel);

  ngOnInit(): void {
    this.filterForm.valueChanges.pipe(
    ).subscribe(v => console.log(v));
  }

  public resetFilters(): void {
    this.filterForm.reset(defaultFiltersState);
  }
}
