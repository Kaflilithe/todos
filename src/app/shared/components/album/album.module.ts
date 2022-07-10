import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlbumsComponent
  ]
})
export class AlbumModule {
}
