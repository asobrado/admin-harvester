import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {Repository} from "../../models/repository";



@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

    private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*','Content-Type': 'application/json', 'Authorization': environment.token});
    public endpoint: string;

    constructor(private httpClient: HttpClient) {
        this.endpoint = environment.apiBaseUrl;
    }

    public getRepository(): Observable<any> {

        return this.httpClient.get(this.endpoint + '/repository', {headers: this.headers})

    }

    public newRepository(): Observable<any> {

        return this.httpClient.put(this.endpoint + '/v1/repository', {}, { headers: this.headers})
    }



    public editRepository(): Observable<any> {

            return this.httpClient.put(this.endpoint + '/v1/repository', {}, { headers: this.headers})
    }


    public setRepository(data){
        const repository = new Repository();
        repository.contactEmail=data.email;
    }


}
