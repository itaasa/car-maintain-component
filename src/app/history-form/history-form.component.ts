import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styleUrls: ['./history-form.component.scss'],
})
export class HistoryFormComponent implements OnInit {
  inEditMode: boolean = false;

  historyForm = new FormGroup({
    dateCompleted: new FormControl(''),
    mileage: new FormControl(''),
    cost: new FormControl(''),
  });

  constructor(
    dialogRef: MatDialogRef<HistoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    this.inEditMode = this.data != null;
  }

  ngOnInit(): void {}

  onSubmit(): void {}
}
