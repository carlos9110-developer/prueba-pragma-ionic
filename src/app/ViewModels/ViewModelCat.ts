import { Injectable } from '@angular/core';
import { ApiCatsService } from '../Services/api-cats.service';
import { Cat } from '../Interfaces/Cat';

@Injectable({
  providedIn: 'root',
})
export class ViewModelCat {
  cats: Cat[] = [];
  currentPage: number = 1;
  pageSize: number = 12;

  constructor(private catService: ApiCatsService) {}

  loadCats() {
    this.catService.getCats(this.currentPage, this.pageSize).subscribe((data) => {
      this.cats = data;
      this.cats = this.cats.filter((cat) => cat.reference_image_id);
    });
  }

  loadMoreCats() {
    this.currentPage++;
    this.catService.getCats(this.currentPage, this.pageSize).subscribe((data) => {
      this.cats = this.cats.concat(data);
      this.cats = this.cats.filter((cat) => cat.reference_image_id);
    });
  }


}
