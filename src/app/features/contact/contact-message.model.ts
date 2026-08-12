export interface ContactMessage {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

/** Résultat d’un envoi - le backend réel pourra étendre ce contrat. */
export type ContactSubmitResult =
  | { status: 'not_configured' }
  | { status: 'sent' }
  | { status: 'error'; message: string };
