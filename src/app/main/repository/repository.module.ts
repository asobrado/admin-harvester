import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRepositoryComponent } from './list-repository/list-repository.component';
import { NewRepositoryComponent } from './new-repository/new-repository.component';
import { EditRepositoryComponent } from './edit-repository/edit-repository.component';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import {SharedModule} from "../../shared/shared.module";

const routes = [
    {
        path     : 'repository/list',
        component: ListRepositoryComponent
    },
    {
        path     : 'repository/new',
        component: NewRepositoryComponent
    }
];


@NgModule({
  declarations: [ListRepositoryComponent, NewRepositoryComponent, EditRepositoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule,
      SharedModule
  ],
    exports     : [
        ListRepositoryComponent,
        NewRepositoryComponent,
        EditRepositoryComponent
    ]
})
export class RepositoryModule { }
