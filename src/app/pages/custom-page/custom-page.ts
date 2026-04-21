import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipe/toggle-case.pipe';
import { heroes } from '../../data/hero.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name= signal('Ricardo Dominguez')
  changeValue= signal(true);

  heroes= signal(heroes);
}
