import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../../_models/player';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
    public player: any;
    public playerId: any;
    public squadnumbers: number[];

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router)  { }

    ngOnInit() {
        this.player = new Player();
        this.squadnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28,
          29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50];
        this.route.params.subscribe(params => { // gets the route parameter which will be the player's ObjectId
            this.playerId = params.id;
            console.log('route params: ', params);
        });
        this.getPlayer(this.playerId); // call the getPlayer function using the player's Object Id
    }

    getPlayer(playerId) {
        console.log('PLAYER ID: ', playerId);
// tslint:disable-next-line: whitespace
        this.http.get('/api/player/' + playerId).subscribe((details) => {
            console.log('getPlayer: ', details);
            this.player = details[0];
            console.log('THIS PLAYER: ', this.player);
        });
    }

    updateplayer(editPlayerForm: NgForm) {
        console.log('playerForm: ', editPlayerForm.value);
        // tslint:disable-next-line:max-line-length
        this.player = Object.assign(this.player, editPlayerForm.value);
        console.log('Player Updated details', this.player);
        this.http.put('/api/update-player', this.player).subscribe(() => console.log('Successfully posted!'));
        editPlayerForm.resetForm();
    }
}
