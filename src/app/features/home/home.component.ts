import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Button],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly technologies = ['Angular', 'TypeScript', 'C#', '.NET'] as const;

  readonly services = [
    {
      title: 'Développement full-stack',
      description:
        'Conception et réalisation d’applications web de bout en bout.',
    },
    {
      title: 'Frontend & backend',
      description:
        'Interfaces applicatives, APIs et systèmes côté serveur, selon le besoin du projet.',
    },
    {
      title: 'Architecture applicative',
      description:
        'Structuration technique pour des applications maintenables et évolutives.',
    },
    {
      title: 'Maintenance & évolution',
      description:
        'Reprise, stabilisation et amélioration d’applications existantes.',
    },
    {
      title: 'Conseil technique',
      description:
        'Accompagnement directement lié à l’ingénierie logicielle et aux choix techniques.',
    },
  ] as const;

  readonly differentiators = [
    {
      title: 'Des ingénieurs, pas un intermédiaire',
      description:
        'Vous collaborez avec des personnes qui conçoivent et écrivent le logiciel.',
    },
    {
      title: 'Exécution technique',
      description:
        'Priorité à la qualité du code, à la fiabilité et à la pérennité des solutions.',
    },
    {
      title: 'Approche pragmatique',
      description:
        'Des décisions concrètes, adaptées au contexte, sans jargon ni sur-promesses.',
    },
  ] as const;

  readonly expertiseAreas = [
    {
      title: 'Applications web',
      description: 'Conception et développement d’applications de bout en bout.',
    },
    {
      title: 'APIs et backends',
      description: 'Services, intégrations et logique métier côté serveur.',
    },
    {
      title: 'Architecture',
      description: 'Organisation technique claire, orientée durée de vie du logiciel.',
    },
    {
      title: 'Évolution de l’existant',
      description: 'Reprise de code, stabilisation et montée en qualité progressive.',
    },
  ] as const;
}
