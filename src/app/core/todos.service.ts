import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

export interface TodoDto {
  'userId': number,
  'id': number,
  'title': string,
  'completed': boolean
}
export interface AlbumDto{
  'userId': number,
  'id': number,
  'title': string
}
export interface PhotoDto{
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}
export interface UserDto {
  'id': number,
  'name': string,
  'username': string,
  'email': string,
  'address': {
    'street': string,
    'suite': string,
    'city': string,
    'zipcode': string,
    'geo': {
      'lat': string,
      'lng': string
    }
  },
  'phone': string,
  'website': string,
  'company': {
    'name': string,
    'catchPhrase': string,
    'bs': string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  get url() {
    return this.config.host
  }

  constructor(
    private config: Config,
    private http: HttpClient
  ) {
  }

  getUsers() {
    return this.http.get<UserDto[]>(`${this.url}/users`);
  }

  getTodos(userId: number) {
    return this.http.get<TodoDto[]>(`${this.url}/todos?userId=${userId}`);
  }
  getAlbums(userId: number){
    return this.http.get<AlbumDto[]>(`${this.url}/albums?userId=${userId}`)
  }
  getPhotos(albumId:number){
    return this.http.get<PhotoDto[]>(`${this.url}/photos?albumId=${albumId}`)
  }
}
