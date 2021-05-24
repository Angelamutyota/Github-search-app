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
  

  constructor(public myService: UserserviceService, private repoService: UserserviceService) { }

  
  
  ngOnInit(): void {
  }

}
