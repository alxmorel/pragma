import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

/**
 * Applique le title de route et la meta description (data.description).
 */
@Injectable()
export class PragmaTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(title);
    }

    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const description = route.data['description'] as string | undefined;
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
