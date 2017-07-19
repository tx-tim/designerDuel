import { Component, OnInit, HostListener } from '@angular/core';
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
  audio;
  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    this.audio = new Audio();
    this.audio.src = "../assets/sounds/ff-strike.mp3";
    this.audio.load();
    console.log(event.keyCode);
    if(event.keyCode === 32) {
      this.audio.play();
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.activeRound= +params.get('id');
    })
  }
}
