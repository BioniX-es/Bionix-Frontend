import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-core',
  template: `<router-outlet></router-outlet>`
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
