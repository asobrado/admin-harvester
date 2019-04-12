import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRepositoryComponent } from './list-repository/list-repository.component';
import { NewRepositoryComponent } from './new-repository/new-repository.component';
import { EditRepositoryComponent } from './edit-repository/edit-repository.component';

@NgModule({
  declarations: [ListRepositoryComponent, NewRepositoryComponent, EditRepositoryComponent],
  imports: [
    CommonModule
  ]
})
export class RepositoryModule { }
