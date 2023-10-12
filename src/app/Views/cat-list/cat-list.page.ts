import { Component, OnInit } from '@angular/core';
import { ViewModelCat } from 'src/app/ViewModels/ViewModelCat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.page.html',
  styleUrls: ['./cat-list.page.scss'],
})
export class CatListPage implements OnInit {

  constructor(public viewModelCat: ViewModelCat) {}

  ngOnInit() {
    console.log("datos", this.viewModelCat.getCats());
  }

  getUrlImage(referenceImageId: string)
  {
    console.log("image", referenceImageId);
    return `https://cdn2.thecatapi.com/images/${referenceImageId}.jpg`;
  }

}
