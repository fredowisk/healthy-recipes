import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-similar-recipes',
  templateUrl: './similar-recipes.component.html',
  styleUrls: ['./similar-recipes.component.css'],
})
export class SimilarRecipesComponent implements OnInit {
  public loading = true;
  public similarRecipes: any = [];

  @Input() similarRecipeId!: number;

  constructor(private service: SingleRecipeService) {}

  ngOnInit(): void {
    this.getSimilarRecipes(this.similarRecipeId);
  }

  getSimilarRecipes(id: number) {
    this.service
      .getSimilarRecipe(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data: any) => (this.similarRecipes = data));
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
