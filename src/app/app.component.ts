import { Component } from '@angular/core';
import { SimpleGreeting } from '../app/custom-components/filter-array';

// VVIMP line to render lit element
console.assert(SimpleGreeting !== undefined);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Lit Element';
  rankingsInSSCExam = ["Rohit", 80, "Abhi", 90];
}
