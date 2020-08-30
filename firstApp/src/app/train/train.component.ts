import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
})
export class TrainComponent implements OnInit {
  trainData;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève'
      )
      .subscribe((value) => {
        this.trainData = value;
      });

    //RxJS
    timer(1000, 2000)
      .pipe(map((number) => number + 1))
      .subscribe((number) => console.log(number));
  }
}

// PATTERN OBSERVER / OBSERVABLE
//Observable = sorgente di dati
//Observer è una funzione che si esegue in risposta alla sorgente di dati
//Observable.subscribers = [...] Un insieme di funzioni che aspettano di essere eseguite quando un osservable emette dei dati.
//Observable.subscribe( observer ) Scrivendo questo si dice all'Observable di aggiungere l'observer alla sua lista di callback
// === Observable.subscribers = [ ... , observer]
