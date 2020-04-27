import { Component, Input } from '@angular/core';
import { Presentation } from '../../interfaces/presentation.interface';

@Component({
  selector: 'app-presentation-item',
  templateUrl: './presentation-item.component.html',
  styleUrls: ['./presentation-item.component.less']
})
export class PresentationItemComponent {
  @Input() presentation!: Presentation;
}
