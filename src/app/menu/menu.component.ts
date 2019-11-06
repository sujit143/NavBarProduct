import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  todaydate = new Date();
  constructor() {
    setInterval(() => {
      this.todaydate = new Date();
      }, 1);
      // setTimeout(()=>{ this.todaydate = new Date(); }, 3000);
  }

  ngOnInit() {
  }

}
