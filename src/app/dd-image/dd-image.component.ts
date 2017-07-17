import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dd-image',
  templateUrl: './dd-image.component.html',
  styleUrls: ['./dd-image.component.scss']
})
export class DdImageComponent implements OnInit {
  @Input() imgsrc: string;
  enbiggen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  enbiggenate() {
    this.enbiggen = !this.enbiggen;
  }

}
