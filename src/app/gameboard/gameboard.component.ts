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
  private activeRound: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.activeRound=params.id;
    });
    console.log(this.activeRound);
  }

  advance(paramId) {
    this.router.navigate(['/round', parseInt(paramId) + 1]);
  }

}
