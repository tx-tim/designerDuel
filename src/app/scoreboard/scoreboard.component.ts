import { Component, OnInit } from '@angular/core';
import {TeamComponent} from "../team/team.component";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  team1 = new TeamComponent();
  team2 = new TeamComponent();
  constructor() {
    // addEventListener('keypress', function(e) {
    //   console.log(e);
    // });
  }
  
  ngOnInit() {
  }


}
