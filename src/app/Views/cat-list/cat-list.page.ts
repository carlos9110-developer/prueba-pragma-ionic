import { Component, OnInit } from '@angular/core';
import { ViewModelCat } from 'src/app/ViewModels/ViewModelCat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.page.html',
  styleUrls: ['./cat-list.page.scss'],
})
export class CatListPage  {

  loadingText: string = "Cargando más razas de gatos...";

  constructor(public viewModelCat: ViewModelCat) {}

  ionViewDidEnter() {
    this.viewModelCat.loadCats();
  }

  loadMore(event: any) {
    setTimeout(() => {
      this.viewModelCat.loadMoreCats();
      event.target.complete();
    }, 2000);
  }

  getUrlImage(referenceImageId: string)
  {
    return `https://cdn2.thecatapi.com/images/${referenceImageId}.jpg`;
  }

}
