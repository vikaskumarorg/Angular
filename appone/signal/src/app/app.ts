import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillerSearchComponent } from './biller-search.component/biller-search.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
    imports: [RouterOutlet, BillerSearchComponent],
})
export class App {
  protected readonly title = signal('signal');
}
