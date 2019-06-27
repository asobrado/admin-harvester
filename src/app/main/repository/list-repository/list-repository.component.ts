import { Component, OnInit,ViewChild } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '../i18n/en';
import { locale as espanol } from '../i18n/es';

import{RepositoryService} from "../../../core/services/repository/repository.service";


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-list-repository',
  templateUrl: './list-repository.component.html',
  styleUrls: ['./list-repository.component.scss']
})
export class ListRepositoryComponent implements OnInit {

    repositorios: any;
    loading: boolean

    displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, {}) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;


    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public repositoryService:RepositoryService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, espanol);
        const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


/** Builds and returns a new User. */
    createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };

}

/*  listadoRepositorios(){

      this.repositoryService.getRepository().subscribe(
          (response) => {
                console.log(response);
          }, (error) => {
          });
  }
*/
}
