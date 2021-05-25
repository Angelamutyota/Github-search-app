import { Component, OnInit } from '@angular/core';
import { UserserviceService}  from '../userservice.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo!: Repos;

  constructor(public repoService: UserserviceService) { }
  
  repoSearcher(searchName:string){
    this.repoService.getRepos(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearcher('Angelamutyota')
  }

}
