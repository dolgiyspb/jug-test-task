import { Component, Input, OnInit } from '@angular/core';
import { Presentation } from '../../interfaces/presentation.interface';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.less']
})
export class PresentationListComponent implements OnInit {
  @Input() presentations!: Presentation[];

  ngOnInit() {
  }

}
