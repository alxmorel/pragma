import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-expertises',
  imports: [RouterLink, Button],
  templateUrl: './expertises.component.html',
})
export class ExpertisesComponent {
  readonly domains = [
    {
      title: 'Développement frontend',
      description:
        'Interfaces applicatives : structure, lisibilité du code et maintenance dans la durée.',
    },
    {
      title: 'Développement backend',
      description:
        'Logique métier, services et traitements côté serveur.',
    },
    {
      title: 'Développement full-stack',
      description:
        'Intervention sur le frontend et le backend lorsqu’une continuité technique est nécessaire.',
    },
    {
      title: 'API et intégration',
      description:
        'Conception et évolution d’APIs, et intégration entre applications et systèmes.',
    },
    {
      title: 'Architecture logicielle',
      description:
        'Structuration technique des applications : organisation du code, frontières et choix de conception.',
    },
    {
      title: 'Évolution et maintenance applicative',
      description:
        'Reprise, stabilisation et évolution d’applications existantes.',
    },
    {
      title: 'Accompagnement technique',
      description:
        'Conseil lié à l’ingénierie logicielle et aux décisions techniques du projet.',
    },
  ] as const;

  readonly stack = [
    {
      name: 'Angular',
      role: 'Applications web frontend.',
    },
    {
      name: 'TypeScript',
      role: 'Typage et structuration du code applicatif.',
    },
    {
      name: 'C#',
      role: 'Développement backend et logique métier.',
    },
    {
      name: '.NET',
      role: 'APIs, services et applications serveur.',
    },
  ] as const;
}
