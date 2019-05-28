import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material';
import { InteractionServiceService } from '../interaction-service.service';
import { SearchService } from '../search.service';

export interface search {
  name: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService :SearchService) { }

  ngOnInit() {
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  searchWord: search[] = [
    {name: 'test'},
    {name: 'music'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.searchWord.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

}
remove(deleteTag: search): void {
  const index = this.searchWord.indexOf(deleteTag);

  if (index >= 0) {
    this.searchWord.splice(index, 1);
  }
}
search(keyword: string) {
  this.searchService.searchByWord(keyword);
}
}
