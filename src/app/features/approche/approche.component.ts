import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-approche',
  imports: [RouterLink, Button],
  templateUrl: './approche.component.html',
})
export class ApprocheComponent {
  readonly principles = [
    {
      title: 'Sans intermédiaire.',
      affirm:
        'Les personnes qui comprennent le problème participent à sa résolution.',
    },
    {
      title: 'La complexité n’est pas un objectif.',
      affirm:
        'L’architecture doit servir le logiciel, pas l’inverse.',
    },
    {
      title: 'Regarder la dette en face.',
      affirm:
        'Faire évoluer un logiciel implique aussi de comprendre ce qui existe déjà.',
    },
    {
      title: 'Le discours ne remplace pas le travail.',
      affirm:
        'Nous parlons de code, de contraintes et de décisions techniques -concrètement.',
    },
    {
      title: 'Ancrés dans le contexte.',
      affirm:
        'Une solution utile part du terrain : l’existant, les limites, et ce qui doit durer.',
    },
  ] as const;
}
