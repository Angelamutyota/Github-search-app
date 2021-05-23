import { Component, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchName!: string;
  @Output() searchResult = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchResult.emit(this.searchName);
    this.searchName= "";
  }

}
