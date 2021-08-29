import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  public todoName: string;
  public todoId: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoName = this.data.name.content;
    this.todoId = this.data.name.id;
    console.log(this.todoName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.todoService.delete(this.todoId).subscribe(dataDialog => {
      this.dialogRef.close();
    });
  }

}
