import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, filter, throttleTime, debounceTime} from 'rxjs/operators';



@Injectable()
export class DogsService {
  constructor(private http: HttpClient){
  }

  getAllBreeds(value) {
   return this.http.get('https://dog.ceo/api/breeds/list/all')
   .pipe(
     map((response: any) => response.message),
     map(breeds => Object.keys(breeds)
     .filter(breed => breed.includes(value))
     )
   );
  }
}
