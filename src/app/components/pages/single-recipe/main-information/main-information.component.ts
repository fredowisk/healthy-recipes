import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css'],
})
export class MainInformationComponent implements OnInit {
  public loading: boolean = true;
  public recipeId: number = 1;
  public food: any = [];

  @Output() similarRecipeId!: number;

  constructor(
    private service: SingleRecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipeId();
    this.getRecipeInfo(this.recipeId);
    this.similarRecipeId = this.recipeId;
  }

  getRecipeId() {
    this.route.queryParams.subscribe((queryParams: any) => {
      this.recipeId = queryParams['id'];
    });
  }

  getRecipeInfo(id: number) {
    this.service
      .getRecipeInfo(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data: any) => (this.food = data));
  }
}
