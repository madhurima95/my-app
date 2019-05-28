import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  word: string;
  description: string;
  audio_url: string;
}
@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {
   private url='assets/data/audio_list.json'
  private audioItem = new Subject<string>();
  currentAudioItem = this.audioItem.asObservable();
  searchItem = this.audioItem.asObservable();
  constructor(private http : HttpClient) { }
  addBookMark(itemword:string) {
    console.log("hiiiiiiiiii")
    this.audioItem.next(itemword);
  }
  getEmployee(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.url);
  }
  // searchByWord(keyWord :string){
  //   console.log("hi")
  //   this.audioItem.next(keyWord);
  // }
}
