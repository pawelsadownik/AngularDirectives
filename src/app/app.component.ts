import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {of} from 'rxjs/internal/observable/of';
import {from} from 'rxjs/internal/observable/from';
import {map, filter, throttleTime, debounceTime, switchMap} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { DogsService } from './dogs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public search = new FormControl('');

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

  constructor(
    private fb: FormBuilder,
    private dogsService: DogsService

    ){
      this.search.valueChanges
        .pipe(
          switchMap(value => {
            console.log(value);
            return this.dogsService.getAllBreeds(value);
          })
        )
        .subscribe(value => console.log(value));
    //this.firstNAme.valueChanges.subscribe(value => console.log(value));


    //nasluchiwanie wydarzen
    const obs = of('test',2);    // pojedyncze
    const obs2 = from([1,2,3]); //tylko dla kolekcji

    //najwazniejsze
    const obs3 = fromEvent(document, 'click'); //dokument czyli cala strona w html, a click to nazwa eventu

    const el = document.getElementById('id'); //nastepie przekazujemy el jako dokument i mamy dostep do konkretnego elementu


    const obs4 = fromEvent(document, 'mousemove');

    obs4
    .pipe(
      debounceTime(200), //zwolnienie wczytywania danych
      map(ev => ev['y']),  //wyswietlenie tylko wartosci 'y'
      filter(y => y >200)  //tylko dla y wiekszych od 200
      ).subscribe(res => console.log(res));

    //obs4.subscribe(res => console.log(res)); wywolanie poszczegolnych obs1, obs2 ...



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

