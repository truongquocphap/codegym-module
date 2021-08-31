import { Component, OnInit } from '@angular/core';
import {IRapPhim} from "../../model/irap-phim";
import {RapPhimService} from "../../service/rap-phim.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteComponent} from "../delete/delete.component";

@Component({
  selector: 'app-rap-chieu-list',
  templateUrl: './rap-chieu-list.component.html',
  styleUrls: ['./rap-chieu-list.component.css']
})
export class RapChieuListComponent implements OnInit {
     rapPhimList: IRapPhim[]=[];
  constructor(private rapPhimService: RapPhimService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.rapPhimService.getAll().subscribe(value => {
      this.rapPhimList=value;
    },error => {
      console.log(error);
    })
  }
  openDialog(id: any): void {
    console.log(id);
    this.rapPhimService.findById(id).subscribe(dataDialog => {
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
