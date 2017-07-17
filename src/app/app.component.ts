import {Component, OnInit, AfterContentInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';

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
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(/round/.test(window.location.href));

    if(/round/.test(window.location.href)) {
      this.gameStarted = true;
    }


  }
}