import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() name: string;
  @Output() onVote = new EventEmitter<boolean>();
  voted = false;
  result;

  setname(name: string) {
    this.name = name;
  }

  vote(agree: boolean) {
    this.voted = true;
    this.result = agree;
    this.onVote.emit(agree);
  }
}
