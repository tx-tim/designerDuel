import {Component, OnInit, Input} from '@angular/core';
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

  @Input() text:string;
  @Input() param:number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.activeRound= +params.get('id');
    })
  }

  advance(operand) {
    this.router.navigate(['/round', this.activeRound + operand]);
  }
}
