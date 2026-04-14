import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  localService= inject(LocaleService);
  currentLocale= signal(inject(LOCALE_ID))

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

  changeLocal(locale: AvailableLocale){
    console.log({locale});

    this.localService.changeLocale(locale);
  }
}
