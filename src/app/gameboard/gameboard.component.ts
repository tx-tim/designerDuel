import { Component, OnInit, HostListener } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ROUNDS} from '../models';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {
  rounds = ROUNDS;
  private sub:any;
  private activeRound:number;
  strikeAudio:any = new Audio();
  blipAudio:any = new Audio();
  keysub:Observable<any>;
  activeTeam:any = null;

  constructor(private router:Router, private route:ActivatedRoute) {
    this.strikeAudio.src = "../assets/sounds/ff-strike.mp3";
    this.strikeAudio.load();
    this.blipAudio.src = "../assets/sounds/ff-blip.wav";
    this.blipAudio.load();
  }


  @HostListener('document:keypress', ['$event'])
  onKeyPress(event:KeyboardEvent) {
    if (event.keyCode === 32) {
      this.strikeAudio.play();
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.activeRound = +params.get('id');
      this.activeTeam = null;
      this.keysub = Observable.fromEvent(window, "keypress").first();
      this.keysub.subscribe(e => {
        if (e.keyCode === 49 || e.keyCode === 50) {
          this.activeTeam = e.keyCode;
        }
      });
    });
  }

  onRevealed(isrevealed) {
    if (isrevealed) {
      this.blipAudio.play();
    }
  }
}
