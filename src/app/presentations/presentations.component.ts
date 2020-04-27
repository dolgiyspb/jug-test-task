import { Component, OnInit } from '@angular/core';
import { PresentationsDataService } from './services/presentations-data.service';
import { Observable } from 'rxjs';
import { Presentation } from './interfaces/presentation.interface';
import { FormControl } from '@angular/forms';

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
    this.presentations$ = this.presentationsDataService.get$();
    this.filtersControl.valueChanges.subscribe(v => console.log(v));
  }
}
