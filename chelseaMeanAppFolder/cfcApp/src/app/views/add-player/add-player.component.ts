import { Component, OnInit } from '@angular/core';
import { Player, PlayerInterface } from '../../_models/player';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  public player: PlayerInterface;
  public squadnumbers: number[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.player = new Player();
   this.squadnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                       11, 12, 13, 14, 15, 16, 17, 18, 19,
                       20, 21, 22, 23, 24, 25, 26, 27, 28,
                       29, 30, 31, 32, 33, 34, 35, 36, 37,
                       38, 39, 40, 41, 42, 43, 44, 45, 46,
                       47, 48, 49, 50];
  }

  addNewPlayer(addPlayerForm) { // the parameter is the form from the template
      console.log('playerForm: ', addPlayerForm.value); // we want the form values
      this.player = addPlayerForm.value; // set this.player to the form's values
      this.http.post('/api/add-player', this.player).subscribe(() => console.log('Successfully posted!'));
      addPlayerForm.resetForm(); // reset the form afterwards to clean it up
  }

}
