import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Config } from './core/config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { HeaderComponent } from './shared/components/core/header/header.component';
import { FooterComponent } from './shared/components/core/footer/footer.component';
import { PhotosComponent } from './photos/photos.component';
import { ModalComponent } from './modal/modal.component';
import { DialogModule } from '@angular/cdk/dialog';
import { TabsModule } from './lib/components/tabs/tabs.module';
import { TodoModule } from './shared/components/todo/todo.module';
import { AlbumModule } from './shared/components/album/album.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserSelectComponent,
    HeaderComponent,
    FooterComponent,
    PhotosComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TabsModule,
    TodoModule,
    AlbumModule
  ],
  providers: [
    Config,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
