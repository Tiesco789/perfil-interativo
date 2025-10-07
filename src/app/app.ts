import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageOne } from "./page-one/page-one";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageOne],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('playground');
}
