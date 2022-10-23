import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showTutorial = false

  showDescriptionContent(): string {
    if (this.showTutorial) {
      return "main-container"
    } else {
      return "hiddenDescriptionContent main-container"
    }
  }

  hidden(): void {
    this.showTutorial = !this.showTutorial
  }
}
