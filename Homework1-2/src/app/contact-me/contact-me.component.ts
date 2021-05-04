import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '../models/title';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  titlecontact: Title[];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.titlecontact = this.backendService.getTitleContact();
  }

}
