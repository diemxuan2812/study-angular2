import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello app nha';
  date = new Date();
  percentNumber = 1.3495;
  e = 2.7184;
  object: Object = {foo: 'bar', bar: 'quz', nested: {xyz: 3, numbers: [1, 3, 5, 8, 7]}};
  collections: number [] = [1, 4, 5, 6, 8];
}
