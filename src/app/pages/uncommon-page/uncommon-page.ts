import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AppCard } from "../../components/app-card/app-card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1= {
  name: 'Ricardo',
  gender: 'male',
  age: 43,
  address: 'Mexico city'
}
const client2= {
  name: 'Irina',
  gender: 'female',
  age: 44,
  address: 'Edo Mex'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [AppCard, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe, ],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {
  // i18n Select
  client= signal(client1);

  invitationMap={
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if( this.client()=== client1){
      this.client.set(client2)
      return
    }

    this.client.set(client1);
  }

  // i18n plural
  clientsMap= signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })
  clients= signal([
    'Ricardo',
    'Juan',
    'Irina',
    'Yali',
    'Natalia',
  ])
  deleteClient(){
    this.clients.update((prev)=> prev.slice(1))
  }

  // keyValue Pipe
  profile={
    name: 'Ricardo',
    age: '43',
    address: 'Mexico, City'
  }

  // Async Pipe
  promiseValue: Promise<string>= new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      resolve('Tenemos data en la promesa.')
      console.log('Promesa finalizada');
    }, 3500)
  })

  myObservableTimer= interval(2000).pipe(
    tap((value)=>console.log('tap: ', value))
  )
}
