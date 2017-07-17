import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ROUNDS} from '../models';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  rounds = ROUNDS;
  private sub: any;
  private activeRound: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.activeRound=params.id;
    });
  }

  // onRevealed(e) {
  //   console.log(e)
  //   return e;
  // }

  advance(paramId, operand) {
    this.router.navigate(['/round', parseInt(paramId) + operand]);
  }

  enbiggenImage(evt) {
    console.log("what is x")
    console.log(evt.target.attributes.src);
    evt.target.style.height = '900px';
  }

  toggleEmbiggenImage(e) {
    //this.onRevealed.emit(this.isRevealed)
    // console.log(e)
    // if(this.isRevealed) {
    //   e.target.classList.add('revealed');
    // } else {
    //   e.target.classList.remove('revealed');
    // }
  }
}
