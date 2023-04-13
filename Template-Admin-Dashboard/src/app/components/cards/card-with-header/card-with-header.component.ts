import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-with-header',
  templateUrl: './card-with-header.component.html',
  styleUrls: ['./card-with-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWithHeaderComponent {
  @Input() card?: Card;

}
