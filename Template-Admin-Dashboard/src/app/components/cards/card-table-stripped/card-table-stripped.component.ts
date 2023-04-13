import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card, CardTable } from '../card';

@Component({
  selector: 'app-card-table-stripped',
  templateUrl: './card-table-stripped.component.html',
  styleUrls: ['./card-table-stripped.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTableStrippedComponent {
  @Input() card?: Card;
  @Input() table?: CardTable;

  ngOnInit(): void {
  }
}
