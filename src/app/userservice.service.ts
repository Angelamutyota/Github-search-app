import { Injectable } from '@angular/core';
import {Users} from './users';
import {Repos} from './repos';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  findUser: Users;
  allRepos: Repos;
  repoData= [];
  newUserData: any=[];


  constructor(private http: HttpClient) { 
    this.findUser = new Users ("","","",0,0,0, new Date)
    this.allRepos = new Repos ("","","","", new Date, "")
  }

  searchUser(SearchName: string){

    interface ApiResponce {
      login: string;
      bio:string;
      avatar_url:string;
      public_repos:number;
      followers: number;
      following:number;
      created_at:Date;
    }

    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponce>("https://api.github.com/users/" + SearchName).toPromise().then(response=>{
        this.findUser.login = response.login;
        this.findUser.bio = response.bio;
        this.findUser.avatar_url = response.avatar_url;
        this.findUser.public_repos = response.public_repos;
        this.findUser.followers = response.followers;
        this.findUser.following = response.following;
        this.findUser.created_at = response.created_at;

        resolve()
      },
      error=>{
        reject(error)
      })

      
      this.http.get<any>("https://api.github.com/users/" + SearchName + "/repos").toPromise().then(response=>{
        for (let i=0; i<response.length; i++){
          this.newUserData = new Repos(response[i].name, response[i].login, response[i].clone_url, response[i].description, response[i].created_at, response[i].language)
          this.repoData.push(this.newUserData);
        }
        resolve()
      },
      error=>{
        reject(error)
      })
    })
    return promise;
  }
}
