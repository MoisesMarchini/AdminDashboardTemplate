import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-header',
  templateUrl: './card-with-header.component.html',
  styleUrls: ['./card-with-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWithHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() feedback: string = '';

}
