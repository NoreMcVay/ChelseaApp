import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  public playerId: any;
  public player: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerId = params.id;
    });
    this.getPlayer(this.playerId);
  }

  getPlayer(Id) {
      this.http.get('/api/player/' + `${Id}`).subscribe((player) => {
        this.player = player[0]; // It returned an array and I want an object so I select the first object in the array by using [0].
        console.log('This Player :', this.player);
      });
  }
}
