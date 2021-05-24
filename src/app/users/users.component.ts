import { Component, OnInit } from '@angular/core';
import {  UserserviceService } from '../userservice.service'
import {Users} from '../users'
import {Repos} from '../repos'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  constructor(public myService: UserserviceService, private repoService: UserserviceService) { 
  }
  user!: Users;
  repo!: Repos;

  searcher (searchName: string){
    this.myService.searchUser(searchName).then (
      (success)=>{
        this.user = this.myService.findUser;
      },
      (error)=>{
      }
    );
    this.repoService.getRepos( searchName).then(
      (results)=>{
        this.repo= this.repoService.allRepos
      },
      (error)=>{
      }
    )
  }
  
  
  ngOnInit() {
    this.searcher('Angelamutyota');
  }

}
