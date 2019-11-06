import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from './emp';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  arr: Emp[] = [];
  id: string;
  name: string;
  description: string;
  constructor(private _data: EmpService) { }

  ngOnInit() {
    this._data.getAllEmployee().subscribe(
      (data: Emp[]) => {
        this.arr = data;
      }
    );
  }
  onEmpDel(id: number){
    this._data.delEmployee(id).subscribe(
      (data: any) => {
        this.ngOnInit();
        alert('delete');
      }
      );
      }
    editemployeeget(item)
    {
       this.id = item.id;
       this.name = item.name;
       this.description = item.description;
       console.log(item);
  }
  UpdateEmployee(f1){
    var req = {
      id: f1.value.id,
      name: f1.value.name,
      description: f1.value.description,
      // isactive:this.employee[this.i1].isactive,
      // createdby:this.employee[this.i1].createdby,
      // createddate:this.employee[this.i1].createddate,
      // modifiedby:this.employee[this.i1].modifiedby,
      // modifieddate:this.employee[this.i1].modifieddate
    }
    this._data.editemployee(req).subscribe((data: any) => {
      this._data.getAllEmployee().subscribe(
        (data: Emp[]) =>
        {
         this.arr = data
        }

      );
      alert('Record Edited.');
    });
  }
  onCollegeSave(f: NgForm)
  {
    this._data.addemployee(f.value).subscribe((data: any) => {
      this._data.getAllEmployee().subscribe(
        (data: Emp[]) =>
        {
         this.arr = data
        }

      );
      alert('Employee added');
    });
  }
}
