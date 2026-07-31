import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {

  contactForm!: FormGroup;

  submitted = false;

  loading = false;

  successMessage = '';

  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.contactForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      subject: [
        '',
        Validators.required
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }

  submitForm(): void {

    this.submitted = true;

    this.successMessage = '';

    this.errorMessage = '';

    if (this.contactForm.invalid) {

      this.errorMessage =
        'Please complete all required fields correctly.';

      return;
    }

    this.loading = true;

    setTimeout(() => {

      console.log('Contact Form');

      console.log(this.contactForm.value);

      this.loading = false;

      this.successMessage =
        '🎉 Thank you! Your message has been received successfully. Our team will contact you shortly.';

      this.contactForm.reset();

      this.submitted = false;

      setTimeout(() => {

        this.successMessage = '';

      },5000);

    },1800);

  }

}