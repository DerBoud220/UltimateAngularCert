import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
      <h1> {{ title }} </h1>
      <h1 [innerHTML]="title"></h1>
      <img [src]="logo">
      <input type = "text" [value] = "name">
    </div>
  `
})

export class AppComponent {
  title: string
  name: string = "MemeMan"
  logo: string = 'img/lmao.png'
  constructor() {
    this.title = 'Ultimate Angular'
  }
}