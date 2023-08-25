import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomRecipesService {
  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiURL = `${import.meta.env.NG_APP_API_URL}/random?apiKey=${
      import.meta.env.NG_APP_API_SECRET
    }&number=${take}`;

    return this.http.get(apiURL);
  }
}
