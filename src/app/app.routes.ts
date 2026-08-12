import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'PRAGMA - Ingénierie logicielle',
    data: {
      description:
        'PRAGMA conçoit et fait évoluer des applications pour des environnements techniques exigeants. Ingénierie logicielle, full-stack, Angular, TypeScript, C# et .NET.',
    },
  },
  {
    path: 'expertises',
    loadComponent: () =>
      import('./features/expertises/expertises.component').then(
        (m) => m.ExpertisesComponent,
      ),
    title: 'Expertises - PRAGMA',
    data: {
      description:
        'Domaines d’intervention PRAGMA : frontend, backend, full-stack, API et intégration, architecture, maintenance et accompagnement technique. Socle Angular, TypeScript, C# et .NET.',
    },
  },
  {
    path: 'approche',
    loadComponent: () =>
      import('./features/approche/approche.component').then(
        (m) => m.ApprocheComponent,
      ),
    title: 'Approche - PRAGMA',
    data: {
      description:
        'L’approche PRAGMA : une ingénierie directe, sans intermédiation, orientée durée de vie du logiciel.',
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    title: 'Contact - PRAGMA',
    data: {
      description:
        'Formulaire de contact PRAGMA pour décrire un besoin logiciel. L’envoi automatique n’est pas encore connecté.',
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
    title: 'Page introuvable - PRAGMA',
    data: {
      description: 'La page demandée est introuvable sur le site PRAGMA.',
    },
  },
];
