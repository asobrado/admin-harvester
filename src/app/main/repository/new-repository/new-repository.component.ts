import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params, RouterLinkActive} from "@angular/router";
import {RepositoryService} from "../../../core/services/repository/repository.service";

@Component({
  selector: 'app-new-repository',
  templateUrl: './new-repository.component.html',
  styleUrls: ['./new-repository.component.scss']
})
export class NewRepositoryComponent implements OnInit {

    newRepositoryForm: FormGroup;
    loading: boolean;
    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                public repositoryService: RepositoryService
    ) {
    }

  ngOnInit() {
      this.createForm();
  }

  createForm() {
    this.newRepositoryForm =  this.fb.group({
        cuil_cuit: new FormControl('', [Validators.required,Validators.minLength(11)]),
        nombre: new FormControl('', Validators.required),
        email: new FormControl('', Validators.pattern("[^ @]*@[^ @]*"))
    });
}
  submitForm() {
      const data = {
         name : this.newRepositoryForm.controls['nombre'].value+' '+this.newRepositoryForm.controls['apellido'].value,
         email: this.newRepositoryForm.controls['email'].value,
         cuit:  this.newRepositoryForm.controls['cuil_cuit'].value.replace(/\D/g, ''),
      };

      this.repositoryService.setRepository(data);
      this.newRepository();
  }

    newRepository(){
        this.loading = true;
        this.repositoryService.newRepository().subscribe(
            (response) => {
                this.loading = false;
                if (response.status === 'success') {
                }
            },(error) => {
                this.loading = false;
                console.log(error);
            });
    }



}
