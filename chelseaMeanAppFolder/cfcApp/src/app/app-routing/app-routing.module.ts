import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from '../views/add-player/add-player.component';
import { PlayersComponent } from '../views/players/players.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { EditPlayerComponent } from '../views/edit-player/edit-player.component';
import { PlayerProfileComponent } from '../views/player-profile/player-profile.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'add-player',
        component: AddPlayerComponent
    },
    {
        path: 'players',
        component: PlayersComponent,
    },
    {
        path: 'player-profile/:id',
        component: PlayerProfileComponent
    },
    {
        path: 'edit-players/:id',
        component: EditPlayerComponent
    },
    {
        path: '**',
        component: DashboardComponent
    },
];

@ NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
