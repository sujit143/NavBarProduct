import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  arr1: Product[] = [];
  name: string = "watch";
  id: number;
  desc: string = "";
  price: number;
  qty: number;
  mfg: string = "";
  img: string = "";
  constructor(private _data: ProductdataService,private _router:Router) { }

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (data: Product[]) => {
        this.arr1 = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onProductDelete(item: Product) {
    this._data.deleteProduct(item.pro_id).subscribe((data: any) => {
      this.arr1.splice(this.arr1.indexOf(item), 1);
    });
  }
  onCollegeSave(f: NgForm)
  {
    this._data.addProduct(f.value).subscribe((data: any) => {
      this._data.getAllProducts().subscribe(
        (data: Product[]) =>
        {
         this.arr1 = data
        }

      );
      alert('Employee added');
    });
  }
  editemployeeget(item)
    {
       this.id = item.pro_id;
       this.name = item.pro_name;
       this.img = item.pro_img;
       this.mfg = item.pro_mfg;
       this.qty = item.pro_qty;
       this.desc = item.pro_desc;
       this.price = item.pro_price;
       console.log(item);
       console.log(item);
       this._data.getProductById(item.pro_id).subscribe
       (
         (data) => {

          console.log(data);
         }
       )
  }
  UpdateEmployee(f1){
    console.log(f1.value);
    var req = {
      pro_id: this.id,
      pro_name: f1.value.pro_name,
      pro_img: f1.value.pro_img,
      pro_mfg: f1.value.pro_mfg,
      pro_desc: f1.value.pro_desc,
      pro_qty: f1.value.pro_qty,
      pro_price: f1.value.pro_price,
      // isactive:this.employee[this.i1].isactive,
      // createdby:this.employee[this.i1].createdby,
      // createddate:this.employee[this.i1].createddate,
      // modifiedby:this.employee[this.i1].modifiedby,
      // modifieddate:this.employee[this.i1].modifieddate
    }
console.log(req);
    this._data.editemployee(req).subscribe((data: any) => {
      alert('Record Edited.');
      this.ngOnInit();
    });
  }
}
