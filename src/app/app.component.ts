import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formy';
  //public firstNAme = new FormControl('');

  //public userData = new FormGroup ( {

    //firstName: new FormControl(''),
    //lastName: new FormControl(''),

    //address: new FormGroup({

    //city: new FormControl(''),
    //street: new FormControl(''),
  //})

  public userData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
      })


  });

  constructor(private fb: FormBuilder){
    //this.firstNAme.valueChanges.subscribe(value => console.log(value));
  }

  setName(){
    //this.firstNAme.setValue("ssss")
    this.userData.patchValue({
      firstName: "aaaaa",
      lastName: "bbbbb",
    })
  }

  onSubmit(){
    console.table(this.userData.value)
  }

  };

