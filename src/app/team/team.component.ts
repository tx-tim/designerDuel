import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() teamName: string;
  score: number = 0;
  addedPoints: number = 0;
  constructor() {
  }

  ngOnInit() {
    if(!this.teamName) {
      this.teamName = "team";
    }
  }

  computeScore(points) {
    this.score += this.addedPoints;
  }
}
