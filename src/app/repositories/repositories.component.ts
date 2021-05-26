import { Component, OnInit } from '@angular/core';
import { UserserviceService}  from '../userservice.service';
import { Users } from '../users';
import { Repos } from '../repos';



@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
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
