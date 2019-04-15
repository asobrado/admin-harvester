import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';

@Component({
  selector: 'app-list-repository',
  templateUrl: './list-repository.component.html',
  styleUrls: ['./list-repository.component.scss']
})
export class ListRepositoryComponent implements OnInit {

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english);
    }

  ngOnInit() {
  }

}
