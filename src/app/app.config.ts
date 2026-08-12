import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideLucideConfig } from '@lucide/angular';

import { routes } from './app.routes';
import { PragmaPreset } from './core/theme/pragma.preset';
import { PragmaTitleStrategy } from './core/seo/pragma-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: PragmaTitleStrategy },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: PragmaPreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
    provideLucideConfig({
      size: 20,
      strokeWidth: 1.75,
    }),
  ],
};
