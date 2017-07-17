import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-answertile',
  templateUrl: './answertile.component.html',
  styleUrls: ['./answertile.component.scss']
})
export class AnswertileComponent implements OnInit {
  @Input() answer;
  @Input() num;
  //@Output() onRevealed = new EventEmitter<boolean>();
  isRevealed: boolean = false;
  constructor() {
  }

  ngOnInit() {
    this.num += 1;
  }

  toggleReveal(e) {
    this.isRevealed = !this.isRevealed;
    //this.onRevealed.emit(this.isRevealed)
    if(this.isRevealed) {
      e.target.parentElement.classList.add('revealed');
    } else {
      e.target.parentElement.classList.remove('revealed');
    }
  }
}
