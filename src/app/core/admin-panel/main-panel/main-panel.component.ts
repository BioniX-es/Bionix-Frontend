import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('#particles').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    jQuery('.intro').css({
      'margin-top': -(jQuery('.intro').height() / 2)
    });
  }

}
