import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter:string, prop:string): any {

    if(value.length===0 || filter===''){
      return value
    }
    const filteredArray=[]
    for(let item of value){
      if(item[prop]===filter){
        filteredArray.push(item)
    }
    }
   
    return filteredArray;
  }

}
