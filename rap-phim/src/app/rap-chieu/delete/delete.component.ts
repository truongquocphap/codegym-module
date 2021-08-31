import {Component, Inject, OnInit} from '@angular/core';
import {RapPhimService} from "../../service/rap-phim.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  maPhim: string;
  id:number;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public rapPhimService: RapPhimService,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.maPhim=this.data.name.maXuatChieu;
    this.id=this.data.name.id;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    this.rapPhimService.delete(this.id).subscribe(dataDialog => {
      this.dialogRef.close();
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      config.verticalPosition = "top";
      config.panelClass= ["alert-red"];
      this.snackbar.open("Delete new Movie success","OK", config);
    });
  }
}
