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

    return new Promise((resolve, reject)=>{
      this.http.get<Responce>(environment.apiUrl).toPromise().then(
        (result)=>{
          this.findUser = result
          resolve(resolve)
        },
        (error)=>{
          reject();
        }
      );
    });
  }
  getRepos(searchName:string){
    interface Repos{
      name: string;
      login: string;
      html_url: string;
      description: string;
      created_at: Date;
      language: string;
    }
    return new Promise((resolve, reject)=>{
      this.http.get <Repos>(environment.apiUrl).toPromise().then(
        (results)=>{
          this.allRepos = results;
          resolve(resolve);
        },
        (error)=> {
          reject();;
        }
      );
    });
  }
}
