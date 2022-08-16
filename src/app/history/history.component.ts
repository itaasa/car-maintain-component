import { Component, Input, OnInit } from '@angular/core';
import { oilChangeHistoryMock } from '../mocks/history-mocks';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input() history = oilChangeHistoryMock[0];
  constructor() {}

  ngOnInit(): void {}
}
