import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chuckJokes';
  joke;

  constructor(update: SwUpdate, private data: DataService) {
    update.available.subscribe(() => {
      update.activateUpdate().then(() => document.location.reload());
    });
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit(){
    this.data.getJokes().subscribe(result => {
      this.joke = result;
    });
  }
}
