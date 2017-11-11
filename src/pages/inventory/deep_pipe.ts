import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'more_filter' })

export class DeepPipe implements PipeTransform {
    transform(categories: any, searchText: any, target: any): any {
        if (searchText == null || searchText == "") return categories;

        console.log(target)

        return categories.filter(function (category) {
            switch (target) {
                case "author": {
                    console.log(category[0])
                    return category[0].author.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
                }
                case "publisher": {
                    return category[0].publisher.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
                }
                case "title": {
                    return category[0].title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
                }
                case "genre": {
                    return category[0].genre.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
                }
            }
        })
    }
}