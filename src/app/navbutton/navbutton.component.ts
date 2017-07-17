import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {

  private sub: any;
  activeRound: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.activeRound=params.id;
    });
    // this.route.paramMap.subscribe(params => {
    //   console.log("params")
    //   console.log(params.get('id'));
    //   this.activeRound= +params.get('id');
    // })
  }

  advance(paramId, operand) {
    console.log(this.activeRound)
    //this.router.navigate(['/round', parseInt(paramId) + operand]);
  }
}
