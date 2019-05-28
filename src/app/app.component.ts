import { Component, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from './search.service';
import { InteractionServiceService } from './interaction-service.service';
import { AudioListComponent } from './audio-list/audio-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements AfterViewInit{
  @ViewChild(AudioListComponent) child:AudioListComponent;
  @ViewChild(BookmarkComponent) child1:BookmarkComponent;
 alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  title = 'audioDictionary';
  //count=0;
  count:number;
  constructor(private searchService : SearchService){}
  ngAfterViewInit() {
    console.log("child")
    this.count = this.child1.count;
  }
  searchbyLetter(key: string) {
    console.log(key);
   this.child.Searchbyletter(key);
  }
}
