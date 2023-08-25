import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private http: HttpClient,
  ) {}

  searchRecipe(query: string) {
    const apiURL = `${import.meta.env.NG_APP_API_URL}/complexSearch?apiKey=${import.meta.env.NG_APP_API_SECRET}&query=${query}&number=9`;

    return this.http.get(apiURL);
  }
}
