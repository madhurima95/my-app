import {Component,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { InteractionServiceService } from '../interaction-service.service';
import { SearchService } from '../search.service';


export interface PeriodicElement {
  id: number;
  word: string;
  description: string;
  audio_url: string;
}


/**
 * @title Table with filtering
 */

@Component({
  selector: 'audio-list',
  styleUrls: ['audio-list.component.css'],
  templateUrl: 'audio-list.component.html',
})
export class AudioListComponent {
 
  data: PeriodicElement[] = [];
  displayedColumns: string[] = ['word', 'description'];
  //dataSource= new MatTableDataSource(this.data);
  dataSource= new MatTableDataSource(this.data);
  searchKeyword="";
  //data: PeriodicElement[] = [];
  public list:PeriodicElement;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private interactionService :InteractionServiceService, private searchservice : SearchService) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchservice.currentSearchItem.subscribe(data => { console.log(data)
    this.applyFilter(data)})
    let that = this;
    this.interactionService.getEmployee()
    .subscribe( data => {
      that.data = data;
      that.dataSource = new MatTableDataSource(data); 
    console.log(that.dataSource)
    //
    //this.dataSource= new MatTableDataSource(this.data);});
    console.log(that.dataSource);
  });
}
  Searchbyletter(filterValue: string) {
    this.dataSource.filterPredicate = (data:
      {word: string}, filterValue: string) =>
      data.word.charAt(0).trim().toLowerCase().indexOf(filterValue) !== -1;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();


  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  // }

  this.dataSource.filterPredicate = (data:
    {word: string}, filterValue: string) =>
    data.word.trim().toLowerCase().startsWith(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

}
  addTobookmark(list) {
    console.log(list);
    this.interactionService.addBookMark(list.word);

// console.log(element);
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */