import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import { InteractionServiceService } from '../interaction-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
  
];
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  addedItem:string;
 
  displayedColumns: string[] = [ 'name'];
 
  bookmarkList=[]
  dataSource = this.bookmarkList;
  public count: number;
  constructor(private interactionService :InteractionServiceService) { }

  ngOnInit() {
    this.interactionService.currentAudioItem.subscribe(data => { console.log(data)
      this.addedItem = data;
      
      this.bookmarkList.indexOf(this.addedItem) === -1 ? this.bookmarkList.push(this.addedItem) : console.log("This item already exists");
      
      this.count=this.bookmarkList.length;
     
    this.countChanged.emit(this.count)})
    
  }
 
  deleteItem(event) {
    console.log(this.bookmarkList)
    console.log(event.target.parentElement.parentElement.firstElementChild.innerHTML)
    let value=event.target.parentElement.parentElement.firstElementChild.innerHTML;
    // event.target.parentElement.parentElement.style.display = 'none';
    this.bookmarkList.splice( this.bookmarkList.indexOf(value), 1 );
    this.count=this.count-1;
    this.countChanged.emit(this.count)
  }

  clearAllItem(event) {
    console.log(this.bookmarkList)
    console.log("clear")
    this.bookmarkList=[];
    // event.target.parentElement.previousSibling.innerHTML='';
    this.count=0;
    this.countChanged.emit(this.count)
  }
}
