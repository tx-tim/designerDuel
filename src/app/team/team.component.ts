import {Component, OnInit, Input, HostListener} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//import { GameboardComponent } from '../gameboard/gameboard.component.spec';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() teamName: string;
  @Input() triggerKey: number;
  score: number = 0;
  addedPoints: number = 0;
  bellAudio:any = new Audio();

  constructor(private route: ActivatedRoute) {
    this.bellAudio.src = "../assets/sounds/ff-bell.wav";
    this.bellAudio.load();
  }

  ngOnInit() {
    if(!this.teamName) {
      this.teamName = "team" + this.triggerKey;
    }
  }

  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if(event.keyCode === this.triggerKey) {
      //and active team is not null!!! doh!
      this.bellAudio.play();
    }
  }

  computeScore(points) {
    this.score += this.addedPoints;
  }
}
