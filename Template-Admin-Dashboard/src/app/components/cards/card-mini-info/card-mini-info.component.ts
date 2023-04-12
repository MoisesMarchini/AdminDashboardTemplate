import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-mini-info',
  templateUrl: './card-mini-info.component.html',
  styleUrls: ['./card-mini-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardMiniInfoComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() feedback: string = '';

}
