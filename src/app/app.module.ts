import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Config } from './core/config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumsComponent } from './albums/albums.component';
import { MainComponent } from './main/main.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HeaderComponent } from './shared/components/core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlbumsComponent,
    UserSelectComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
