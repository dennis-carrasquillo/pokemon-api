import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const pokemonEndpoint = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}`, +
        `body was: ${error.error}`
      );

      return throwError( 'Something bad happened; please try again later.');
    }

  }
    

}
