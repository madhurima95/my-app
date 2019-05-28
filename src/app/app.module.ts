import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule,MatPaginatorModule, MatChip, MatChipsModule, MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioListComponent } from './audio-list/audio-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InteractionServiceService } from './interaction-service.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AudioListComponent,
    BookmarkComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [InteractionServiceService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
