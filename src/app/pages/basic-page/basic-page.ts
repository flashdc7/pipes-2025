import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  nameLower= signal('ricardo')
  nameUpper= signal('RICARDO')
  fullName= signal('JUan RICARdo')

  customDate= signal( new Date() );

  tickinDateEffect= effect((onClean)=>{
    const interval= setInterval(() => {
      this.customDate.set( new Date() )
      console.log('tick')
    }, 1000);

    onClean(()=>{
      clearInterval(interval)
    })
  })
}
