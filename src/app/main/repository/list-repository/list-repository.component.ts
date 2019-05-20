import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '../i18n/en';
import { locale as espanol } from '../i18n/es';

import{RepositoryService} from "../../../core/services/repository/repository.service";

@Component({
  selector: 'app-list-repository',
  templateUrl: './list-repository.component.html',
  styleUrls: ['./list-repository.component.scss']
})
export class ListRepositoryComponent implements OnInit {

    repositorios: any;
    loading: boolean

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public repositoryService:RepositoryService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, espanol);
    }
  ngOnInit() {
        console.log('list repo');
        this.listadoRepositorios();

  }


  listadoRepositorios(){

      this.repositoryService.getRepository().subscribe(
          (response) => {
                console.log(response);
          }, (error) => {
          });
  }

}
