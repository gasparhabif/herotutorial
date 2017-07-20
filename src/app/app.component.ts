import { Component } from '@angular/core';
import { Hero } from './components/hero';
import { HeroService } from './services/hero.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heros';
  selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

//heroes: Hero[];
