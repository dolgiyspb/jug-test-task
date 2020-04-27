import { Component, OnInit } from '@angular/core';
import { PresentationsDataService } from './services/presentations-data.service';
import { combineLatest, Observable } from 'rxjs';
import { Presentation } from './interfaces/presentation.interface';
import { FormControl } from '@angular/forms';
import { Filters } from './interfaces/filters.interface';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

type FilterFunction = (presentation: Presentation) => boolean;

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.less']
})
export class PresentationsComponent implements OnInit {
  public presentations$!: Observable<Presentation[]>;
  public filtersControl!: FormControl;

  constructor(
    private readonly presentationsDataService: PresentationsDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.filtersControl = new FormControl(this.activatedRoute.snapshot.queryParams);
    this.filtersControl.setValue(this.activatedRoute.snapshot.queryParams);

    this.presentations$ = combineLatest(
      this.presentationsDataService.get$(),
      this.filtersControl.valueChanges.pipe(
        tap((value: Filters) => this.router.navigate(
          [],
          {queryParams: {...value}},
        )),
      ),
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
