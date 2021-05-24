import { Injectable } from '@angular/core';
import {Users} from './users';
import {Repos} from './repos';
import {HttpClient} from '@angular/common/http';
import { environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  findUser: Users;
  allRepos: Repos;

  constructor(private http: HttpClient) { 
    this.findUser = new Users ("","","","",0,0,0, new Date)
    this.allRepos = new Repos ("","","","", new Date, "")
  }

  searchUser(SearchName: string){

    interface Responce {
      url: string;
      login: string;
      html_url:string;
      avatar_url:string;
      public_repos:number;
      followers: number;
      following:number;
      created_at:Date;
    }
  }
}
