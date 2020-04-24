import { Component, OnInit } from '@angular/core';
import { PresentationsDataService } from './services/presentations-data.service';
import { Observable } from 'rxjs';
import { Presentation } from './interfaces/presentation.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { PresentationLanguage } from './enums/presentation-language.enum';
import { PresentationLevel } from './enums/presentation-level.enum';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.less']
})
export class PresentationsComponent implements OnInit {
  public filterForm = new FormGroup({
    language: new FormControl([]),
    level: new FormControl([]),
    search: new FormControl(''),
  });

  public presentations$!: Observable<Presentation[]>;
  public readonly languages: PresentationLanguage[] = Object.values(PresentationLanguage);
  public readonly levels: PresentationLevel[] = Object.values(PresentationLevel);

  constructor(private readonly presentationsDataService: PresentationsDataService) {}

  ngOnInit(): void {
    this.presentations$ = this.presentationsDataService.get$();
    this.filterForm.valueChanges.pipe(
    ).subscribe(v => console.log(v));
  }

  public resetFilters(): void {
    this.filterForm.setValue({
      language: [],
      level: [],
      search: '',
    });
  }
}
