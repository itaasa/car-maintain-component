import { Component, Input, OnInit } from '@angular/core';
import { History } from '../models/history.interface';

@Component({
  selector: 'app-all-history',
  templateUrl: './all-history.component.html',
  styleUrls: ['./all-history.component.scss'],
})
export class AllHistoryComponent implements OnInit {
  @Input() historyList: History[] = [];

  constructor() {}

  ngOnInit(): void {}
}
