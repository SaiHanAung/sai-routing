import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '../models/title';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  titleabout: Title[];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.titleabout = this.backendService.getTitleAbout();
  }

}
