import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddPlayerComponent } from './views/add-player/add-player.component';
import { PlayersComponent } from './views/players/players.component';
import { EditPlayerComponent } from './views/edit-player/edit-player.component';
import { PlayerProfileComponent } from './views/player-profile/player-profile.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@ NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    PlayersComponent,
    EditPlayerComponent,
    PlayerProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
