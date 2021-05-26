import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { UserserviceService  } from '../userservice.service'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchName: string;
  userserviceService : UserserviceService;

  submitUsername(){
    this.userserviceService.searchUser(this.searchName);
  }
  constructor(userserviceService: UserserviceService) {
    this.userserviceService = userserviceService
   }

  ngOnInit(): void {
  }

}
