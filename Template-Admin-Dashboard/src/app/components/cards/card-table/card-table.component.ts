import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Card, CardTable } from '../card';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTableComponent implements OnInit {
  @Input() card?: Card;
  @Input() table?: CardTable;

  ngOnInit(): void {
    if (this.table)
      this.setProgress(this.table);
  }

  setProgress(cardTable: CardTable) {
    cardTable.objects.forEach((obj, index) => {
      if (!obj.showProgress) {
        obj.progress = 0;
        return;
      }

      let valueA = obj[cardTable.titles[1].toLowerCase()];
      let valueB = obj[cardTable.titles[2].toLowerCase()];
      obj.progress = (valueB * 100) / valueA;
    })
  }
}
