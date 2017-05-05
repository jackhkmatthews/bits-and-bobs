// import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';

// @Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 500);
    });
  }

  getHeroSlowly(id: number): Promise<Hero> {
    return this.getHeroesSlowly()
                .then(heroes => heroes.find(hero => hero.id === id));
  }

}
