import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {

  private sub: any;
  private activeRound: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.activeRound=params.id;
    });
  }

  advance(paramId, operand) {
    this.router.navigate(['/round', parseInt(paramId) + operand]);
  }
}
