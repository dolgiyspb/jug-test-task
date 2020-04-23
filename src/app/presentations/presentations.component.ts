import { Component, OnInit } from '@angular/core';
import { PresentationsDataService } from './services/presentations-data.service';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.less']
})
export class PresentationsComponent implements OnInit {
  constructor(private readonly presentationsDataService: PresentationsDataService) {}

  ngOnInit(): void {
    this.presentationsDataService.get$().subscribe(v => console.log(v));
  }

}
