import {Component, ViewChild} from '@angular/core';

import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app nha';
  pepoles: string[] = ['Ms A', 'Ms B', 'Ms C', 'Ms D'];
  agree = 0;
  disgree = 0;
@ViewChild(HomeComponent)
private homeComponent: HomeComponent;
  changeName() {
    this.homeComponent.setname('change name in parent');
  }
  parentVote(agree: boolean) {
    if (agree) {
      this.agree++ ;
    } else {
      this.disgree++;
    }
  }
}
