import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './app-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCard {
  title= input.required()
}
