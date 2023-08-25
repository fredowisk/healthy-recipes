import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingleRecipeService {
  constructor(private http: HttpClient) {}

  getRecipeInfo(id: number) {
    const apiURL = `${
      import.meta.env.NG_APP_API_URL
    }/${id}/information?apiKey=${import.meta.env.NG_APP_API_SECRET}`;

    return this.http.get(apiURL);
  }

  getSimilarRecipe(id: number) {
    const apiURL = `${import.meta.env.NG_APP_API_URL}/${id}/similar?apiKey=${
      import.meta.env.NG_APP_API_SECRET
    }&number=4`;

    return this.http.get(apiURL);
  }
}
