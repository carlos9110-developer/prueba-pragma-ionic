import { Injectable } from '@angular/core';
import { ApiCatsService } from '../Services/api-cats.service';
import { Cat } from '../Interfaces/Cat';

@Injectable({
  providedIn: 'root',
})
export class ViewModelCat {
  cats: Cat[] = [];

  constructor(private apiCatsService: ApiCatsService) {}

  getCats() {
    this.apiCatsService.getCats().subscribe((data) => {
      this.cats = data;
      this.cats =  this.cats.filter((cat) => cat.reference_image_id);
    });
  }
}
