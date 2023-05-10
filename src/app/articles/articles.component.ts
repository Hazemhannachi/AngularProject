import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  titre: string = "Les articles du jour";
  listArticles!: Article[];
  nbrArticles!: number;
  constructor() { }

  ngOnInit(): void {
    this.listArticles = [
      { titre: 'Le championnat du monde', contenu: 'Le champion du monde de cette année est', auteur: 'Med Taher', date: '12/12/2005', categorie: 'Sport' }
      , { titre: ' Les nouveaux parents', contenu: 'Les nouveaux parents', auteur: 'Ahmed Said', date: '11/11/2018', categorie: 'Education' },
      { titre: 'Comment écrire votre CM', contenu: 'Pour réussir à décraucher un emploi', auteur: 'Marie Elsa', date: '02/04/2017', categorie: 'Travail' }
    ];
    this.nbrArticles = this.listArticles.filter(a => a.categorie !== 'Travail').length;
  }

  keyUp(event: any) {
    this.nbrArticles = event.target.value; 
  }

  

}
