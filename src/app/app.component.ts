import { Component, OnInit } from '@angular/core';

import { ROUNDS } from './models';
import {TeamComponent} from "./team/team.component";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  rounds = ROUNDS;
  team1 = new TeamComponent();
  team2 = new TeamComponent();
  title = 'Designer Duel: Usability Edition';
  gameStarted = false;

  ngOnInit() {
    this.gameStarted = false;
  }

}