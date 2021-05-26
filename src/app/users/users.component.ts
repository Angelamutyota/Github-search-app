import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service'
import { Users } from '../users'
import { Repos } from '../repos'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  user: Users;
  repo: Repos
  repoDetails = []
  userserviceService: UserserviceService;
  
  

  constructor(userserviceService: UserserviceService) {
    this.userserviceService = userserviceService
   }
  
  

  ngOnInit() {
  
     this.user = this.userserviceService.findUser;
     this.repoDetails = this.userserviceService.repoData;
 
  }
}
