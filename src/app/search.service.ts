import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  private searchItem = new Subject<string>();
  currentSearchItem = this.searchItem.asObservable();
  
  //searchItem = this.audioItem.asObservable();
  // constructor() { }
 
  searchByWord(keyWord :string){
    console.log("hi")
    this.searchItem.next(keyWord);
  }
  
}
