import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[]; //heroes recebe o mock-heroes

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() { 
    this.heroService.getHeroes() //subscribe espera a resposta (heroes) de getHeroes, que é Observable, 
      .subscribe(heroes => this.heroes = heroes); //e quando a obtém, atribui a resposta para a variável heroes.
  }

}
