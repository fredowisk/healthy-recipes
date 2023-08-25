import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public query: string = '';
  public foods: any = [];

  constructor(private service: SearchService) {}

  ngOnInit(): void {}

  searchRecipe() {
    this.loading = true;
    this.service
      .searchRecipe(this.query)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data: any) => (this.foods = data.results));
  }
}
