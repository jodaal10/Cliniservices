import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm: FormGroup;
  submitted = false; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.ContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  processForm(contactForm: any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.ContactForm.invalid) {return;}

    if (contactForm.valid) {
      alert('mensaje enviado con exito');
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mbjzyljj',
        { name: email.name, replyto: email.email, message:'Número: '+ email.phone +'  '+email.message},
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }
  get f() { return this.ContactForm.controls; }
}
