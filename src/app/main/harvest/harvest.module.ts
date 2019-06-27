import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHarvestComponent } from './list-harvest/list-harvest.component';
import { NewHarvestComponent } from './new-harvest/new-harvest.component';

@NgModule({
  declarations: [ListHarvestComponent, NewHarvestComponent],
  imports: [
    CommonModule
  ]
})

const routes = [
    {
        path     : 'harvest/list',
        component: ListHarvestComponent
    },
    {
        path     : 'harvest/new',
        component: NewHarvestComponent
    }
];

export class HarvestModule { }
