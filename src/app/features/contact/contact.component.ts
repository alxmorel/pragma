import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputText } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { Textarea } from 'primeng/textarea';
import { ContactService } from './contact.service';

type FormStatus = 'idle' | 'submitting' | 'pending_backend' | 'error';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    Button,
    Checkbox,
    InputText,
    Textarea,
    Message,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  readonly formStatus = signal<FormStatus>('idle');
  readonly submitted = signal(false);

  private readonly fieldIds: Record<string, string> = {
    name: 'contact-name',
    company: 'contact-company',
    email: 'contact-email',
    subject: 'contact-subject',
    message: 'contact-message',
    consent: 'contact-consent',
  };

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    consent: [false, Validators.requiredTrue],
  });

  showError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted());
  }

  errorId(controlName: string): string {
    return `contact-${controlName}-error`;
  }

  onSubmit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.focusFirstInvalid();
      return;
    }

    this.formStatus.set('submitting');

    this.contactService.submit(this.form.getRawValue()).subscribe({
      next: (result) => {
        if (result.status === 'not_configured') {
          this.formStatus.set('pending_backend');
          return;
        }
        if (result.status === 'sent') {
          this.formStatus.set('idle');
          this.form.reset({
            name: '',
            company: '',
            email: '',
            subject: '',
            message: '',
            consent: false,
          });
          this.submitted.set(false);
          return;
        }
        this.formStatus.set('error');
      },
      error: () => {
        this.formStatus.set('error');
      },
    });
  }

  private focusFirstInvalid(): void {
    const order = [
      'name',
      'company',
      'email',
      'subject',
      'message',
      'consent',
    ] as const;

    for (const key of order) {
      if (this.form.controls[key].invalid) {
        const el = document.getElementById(this.fieldIds[key]);
        el?.focus();
        break;
      }
    }
  }
}
