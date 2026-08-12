import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ContactMessage,
  ContactSubmitResult,
} from './contact-message.model';

/**
 * Point d’entrée unique pour l’envoi du formulaire de contact.
 * V1 : aucun backend - retourne explicitement `not_configured`.
 *
 * TODO: remplacer l’implémentation par un appel HTTP (API / service externe).
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  submit(_payload: ContactMessage): Observable<ContactSubmitResult> {
    return of({ status: 'not_configured' });
  }
}
