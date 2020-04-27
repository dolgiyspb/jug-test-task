import { Component, Input } from '@angular/core';
import { Presentation } from '../../interfaces/presentation.interface';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.less']
})
export class PresentationListComponent {
  @Input() presentations!: Presentation[];
}
