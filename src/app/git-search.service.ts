import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})
export class GitSearchService {
  
  constructor(private http : HttpClient) {
  
   }



  gitSearch = (query: string) => {
    let promise = new Promise<GitSearch>((resolve, reject) => {
      
        this.http.get('https://api.github.com/search/repositories?q=' + query).toPromise().then(
          (response) =>{
            resolve(response as GitSearch)
          },(error)=>{
            reject(error);
          }
        )
    })
    return promise;
  }
}
