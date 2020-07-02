import { Component, OnInit } from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-search-github',
  templateUrl: './search-github.component.html',
  styleUrls: ['./search-github.component.css']
})
export class SearchGithubComponent {
  names: any[] = new Array<any>();
  searchRepository(searchValue: HTMLInputElement): any {
    let resultObject;
    fetch('https://api.github.com/search/repositories?q=angular')
      .then(res => res.json())
        .then(data => resultObject = data)
        .then(() => console.log(resultObject))
      .then(() => {
        const jsonParsed = JSON.stringify(resultObject);
        console.log(jsonParsed);
        const jsonObj = JSON.parse(jsonParsed);
        // tslint:disable-next-line:forin prefer-for-of
        for (let index = 0; index < jsonObj.items.length; index++) {
          const item = jsonObj.items[index];
          const test = item['name'];
          this.names.push(test);
        }
      });
    return resultObject;
  }
}
