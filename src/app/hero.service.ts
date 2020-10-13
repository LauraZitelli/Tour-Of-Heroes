import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // método para acessar o array de heroes do mock-heroes. Quando for acessar um banco de dados, ele precisa
  getHeroes(): Observable<Hero[]> {// esperar a resposta do banco para retorná-la,
    this.messageService.add('HeroService: fetched heroes'); // portanto é uma função assíncrona. Usamos o Observable por ser assíncrono
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

