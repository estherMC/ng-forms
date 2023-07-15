import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //Al afegit el ngForm a f, ja no és un HTMLFormElement, sinó NgForm
  // onSubmit(form: HTMLFormElement){
  onSubmit(form: NgForm){
    console.log(form);
  }
}
