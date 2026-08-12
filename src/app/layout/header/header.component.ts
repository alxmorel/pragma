import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from 'primeng/button';
import { LucideMenu, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Button, LucideMenu, LucideX],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly menuOpen = signal(false);

  readonly navItems = [
    { label: 'Expertises', path: '/expertises' },
    { label: 'Approche', path: '/approche' },
    { label: 'Contact', path: '/contact' },
  ] as const;

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
