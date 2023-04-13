import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFormComponent {
  card: Card = {
    title: 'teste',
    body: 'body'
  }
}
