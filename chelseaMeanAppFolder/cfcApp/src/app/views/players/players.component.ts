import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../../_models/player';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@ Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public players: any;
  public player: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.http.get('/api/players').subscribe(players => {
      this.players = players;
      console.log('GET PlAYERS: ', this.players);
    });
  }

  // tslint:disable-next-line:max-line-length
  getPlayerToEdit(index) {  // Notice on Line 6 of the html file,let i = index and then we pass i to the function. This is the index number of the fighter in the fighters array so we can locate the selected fighter
      console.log('button works');
      this.player = this.players[index];
      this.router.navigate(['/edit-players', this.player._id]); // navigate the browser to /edit-fighters/this.fighters._id
  }

  getPlayerProfile(index) { // same thing with the index again
      this.player = this.players[index];
      this.router.navigate(['/player-profile', this.player._id]);
  }

  deletePlayer(index) {
      console.log(index);
      const playerId = this.players[index]._id; // CHANGED TO CONST
      this.http.delete('/api/delete-player/' + `${playerId}`).subscribe((players) => {
          this.players = players;
          console.log('Delete Player Worked along with automatic data refresh!');
      });
  }
}
