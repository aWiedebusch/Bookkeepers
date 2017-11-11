import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })

export class ISBNPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;

    console.log(searchText)

    return categories.filter(function(category){
      return category[0].isbn.indexOf(searchText) > -1;
    })
  }
}