import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TeamComponent } from './team/team.component';
import { AnswertileComponent } from './answertile/answertile.component';
import { NavbuttonComponent } from './navbutton/navbutton.component';
import { DdImageComponent } from './dd-image/dd-image.component';

const routes:Routes = [
  {
  path: 'round/:id',
  component: GameboardComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    ScoreboardComponent,
    TeamComponent,
    AnswertileComponent,
    NavbuttonComponent,
    DdImageComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
