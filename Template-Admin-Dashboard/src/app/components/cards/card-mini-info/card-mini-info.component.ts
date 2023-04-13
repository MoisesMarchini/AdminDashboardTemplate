import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card, CardMiniInfo } from '../card';

@Component({
  selector: 'app-card-mini-info',
  templateUrl: './card-mini-info.component.html',
  styleUrls: ['./card-mini-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardMiniInfoComponent {
  @Input() cards?: {card: Card, info: CardMiniInfo}[];
}
