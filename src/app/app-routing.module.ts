import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'User', component : UsersComponent},
  { path: 'repositories', component: RepositoriesComponent },
  { path: '', redirectTo:"/User", pathMatch: "full"},
  { path: '**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
