import { Component, OnInit } from '@angular/core';
import { PresentationsDataService } from './services/presentations-data.service';
import { combineLatest, Observable } from 'rxjs';
import { Presentation } from './interfaces/presentation.interface';
import { FormControl } from '@angular/forms';
import { Filters } from './interfaces/filters.interface';
import { map } from 'rxjs/operators';

type FilterFunction = (presentation: Presentation) => boolean;

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.less']
})
export class PresentationsComponent implements OnInit {
  public presentations$!: Observable<Presentation[]>;
  public filtersControl = new FormControl(undefined);

  constructor(private readonly presentationsDataService: PresentationsDataService) {}

  ngOnInit(): void {
    this.presentations$ = combineLatest(
      this.presentationsDataService.get$(),
      this.filtersControl.valueChanges,
    ).pipe(
      map(([presentations, filters]: [Presentation[], Filters]) => presentations.filter(this.createFilterFunction(filters))),
    );
  }

  private createFilterFunction({level, language, search}: Filters): FilterFunction {
    return (presentation) =>
      (!level.length || level.includes(presentation.level))
      && (!language.length || language.includes(presentation.language))
      && (!search.length || (presentation.title + presentation.author).toUpperCase().includes(search.toUpperCase()));
  }
}
