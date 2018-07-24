import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
      <button (click) = "handleClick(username.value)">
        Get Value
      </button>
      <input type = "text" #username>
      <div> {{ name }} </div>
    </div>
  `
})

export class AppComponent {
  title: string
  name: string = "MemeMan"
  logo: string = 'img/lmao.png'

  handleClick(value: string) {
    console.log(value)
    this.name = value
  }

  constructor() {
    this.title = 'Ultimate Angular'
  }
}