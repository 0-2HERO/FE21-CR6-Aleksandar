import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  projectName: string;
  constructor() {
    this.projectName = "TravelAgency"
  }

  ngOnInit(): void {
  }

}
