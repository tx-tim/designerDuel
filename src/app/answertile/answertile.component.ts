import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answertile',
  templateUrl: './answertile.component.html',
  styleUrls: ['./answertile.component.scss']
})
export class AnswertileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rotate(e) {
    console.log("rotate");
    console.log(e.target.parentElement);
    e.target.parentElement.style.backgroundColor="yellow";
    e.target.parentElement.style.transform="rotateX(360deg)";
  }
}
