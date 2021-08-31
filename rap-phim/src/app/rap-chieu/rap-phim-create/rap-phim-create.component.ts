import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RapPhimService} from "../../service/rap-phim.service";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {XuatChieuService} from "../../service/xuat-chieu.service";
import {IXuatChieu} from "../../model/ixuat-chieu";
import {IRapPhim} from "../../model/irap-phim";

@Component({
  selector: 'app-rap-phim-create',
  templateUrl: './rap-phim-create.component.html',
  styleUrls: ['./rap-phim-create.component.css']
})
export class RapPhimCreateComponent implements OnInit {
  createMovie: FormGroup;
  xuatChieuList: IXuatChieu[];
  moviesList: IRapPhim[];
  alert = true;
  constructor(private rapPhimService: RapPhimService,
              private xuatChieuService: XuatChieuService,
              private route: Router,
              public  snackbar: MatSnackBar) {
    this.createMovie=new FormGroup({
      maXuatChieu: new FormControl('',[Validators.pattern('^CI-[0-9]{4}$'),Validators.required]),
      xuatChieu: new FormControl(''),
      ngayChieu: new FormControl(''),
      soLuongVe: new FormControl('',Validators.min(1))

    })
  }

  ngOnInit(): void {
    this.getXuatChieu();
    this.getAll();
  }
  getXuatChieu(){
    this.xuatChieuService.getAll().subscribe(value => {
      this.xuatChieuList=value;
    },error => {
      console.log(error);
    })
  }
 getAll() {
    this.rapPhimService.getAll().subscribe(value => {
      this.moviesList=value;
    })
 }
  addRapPhim(){
    console.log(this.moviesList.length);
    let num=0;
    for (let i = 0; i < this.moviesList.length; i++) {
      if (this.moviesList[i].maXuatChieu.includes(this.createMovie.value.maXuatChieu)){
        num++;
      }
    }
    if (num==0){
      this.rapPhimService.create(this.createMovie.value).subscribe(value => {
        this.route.navigateByUrl('');
        let config = new MatSnackBarConfig();
        config.duration = 2000;
        config.verticalPosition = "top";
        config.panelClass= ["alert-red"];
        this.snackbar.open("Create new Movie success","OK", config);
      },error => {
        console.log(error);
      })
    }else {
      this.alert=false;
    }

  }
}
