import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.7s ease-in', style({
    opacity: 1
  }))
]);

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
  animations: [
    fadeIn
  ]
})
export class ClubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
