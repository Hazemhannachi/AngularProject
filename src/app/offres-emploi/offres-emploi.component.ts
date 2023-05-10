import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/emplois';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listEmploi!: Emploi[];
  filtredListEmploi!: Emploi[];
  nbrOffre!: number;

  constructor() { }

  ngOnInit(): void {
    this.listEmploi = [{ entreprise: "SOFRECOM", etat: false, reference: "098723122", titre: "SOFTWARE DEVELOPER" }, { entreprise: "VERMEG", etat: true, reference: "098736362", titre: "ANALYST DEVELOPER" }]
    this.filtredListEmploi = this.listEmploi;
  } 

  calculateBilan() {
    this.nbrOffre  = this.listEmploi.filter(e => e.etat).length
  }

  filter(event: any) {
    const text = event.target.value; 
    this.filtredListEmploi = this.listEmploi.filter(e => e.entreprise.includes(text));
  }

}
