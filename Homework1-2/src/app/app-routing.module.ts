import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillComponent } from './skill/skill.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component: AboutMeComponent
  },
  {
  path: 'skill',
  component: SkillComponent
  },
  {
  path: 'contact',
  component: ContactMeComponent
  },
  {
  path: 'portfolio',
  component: PortfolioComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
