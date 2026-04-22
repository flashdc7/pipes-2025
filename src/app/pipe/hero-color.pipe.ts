import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(value: Color, exadecimal: boolean=false): string {

    if( !exadecimal ){
      return Color[value]
      // if(value== 0){
      //   return 'Red'
      // }else if(value== 1){
      //   return 'Black'
      // }else if(value== 2){
      //   return 'Blue'
      // }else if(value== 3){
      //   return 'Green'
      // }else{
      //   return '';
      // }
    }else{
      if(value== 0){
        return ColorMap[Color.red]
      }else if(value== 1){
        return ColorMap[Color.black]
      }else if(value== 2){
        return ColorMap[Color.blue]
      }else if(value== 3){
        return ColorMap[Color.green]
      }else{
        return '';
      }
    }
  }
}
