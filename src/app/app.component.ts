import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['female', 'male'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    //Amb el següent exemple sobreescribim tot el contingut
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ' '
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  //Al afegit el ngForm a f, ja no és un HTMLFormElement, sinó NgForm
  // onSubmit(form: HTMLFormElement){
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }
}
