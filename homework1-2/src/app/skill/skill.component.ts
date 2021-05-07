import { Skill } from './../models/skill';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '../models/title';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[]
  titleskills: Title[]

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.titleskills = this.backendService.getTitleSkills();
    this.skills = this.backendService.getSkills();
  }

}
