import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import bootstrap from "bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  currentPath: string = "/";

  constructor(private router: Router) { }

  ngOnInit(): void {   
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.currentPath = this.router.url;
  }

}
