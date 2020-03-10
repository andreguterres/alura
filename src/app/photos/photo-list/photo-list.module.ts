import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/componets/card/card.module';
import { SearchComponent } from './Search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/darken-on-hover/darken-on-hover.module';

@NgModule({

  declarations:
    [
      PhotoListComponent,
      PhotosComponent,
      LoadButtonComponent,
      FilterByDescription,
      SearchComponent
    ],

  imports:
    [
      CommonModule,
      PhotoModule,
      CardModule,
      DarkenOnHoverModule

    ]

})
export class PhotoListModule { }
