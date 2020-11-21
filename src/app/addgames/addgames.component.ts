import { Component, OnInit } from '@angular/core';
import { ListsService } from "../shared/lists.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addgames',
  templateUrl: './addgames.component.html',
  styleUrls: ['./addgames.component.css']
})
export class AddgamesComponent implements OnInit {

  stateForm: FormGroup;

  showDropDown = false;
  states = ['Pokemon Emerald', 'Overcooked 2',  'Pokemon Sword/Shield', 'Final Fantasy XII', 'Super Mario Galaxy', 'Legend of Zelda: Breath of the Wild',
  'Fortnite', 'Minecraft', 'District of Animal Crossing: New Horizons', 'Overwatch'
  , 'Overwaatch 2', 'Call of Duty: Modern Warfare', 'Starcraft', 'Starcraft 2', 'Mario Kart 8', 'League of Legends', 'Super Smash Bros. Ultimate', 'Final Fantasy VII', 'Luigis Mansion 3',
  , 'Luigis Mansion 2', 'Luigis Mansion', 'Mario Party', 'Minecraft Dungeons', 'Onigiri', 'Mount & Blade II', 'Fallout 4', 'Rise of the Tombraider',
  'Steins;Gate', 'Street Fighter IV', 'Samurai Warriors', 'Super Mario 3D World', 'Super Mario Maker', 'Super Mario Maker 2', 'New Super Mario Odyssey', 'Paradise Killer', 'Amnesia: Rebirth',
  'Mall Tycoon', 'Rollercoaster Tycoon', 'Fate/Extra', 'Boku no Natsuyasumi', 'Naruto Shippuden: Ultimate Ninja Impact', 'Dragon Ball Z: Shin Budokai', 'Monster Hunter Portable 3D', 'Naruto Shippuden: Ultimate Ninja Heros',
  'Chaos;Head', 'Shining Resonance Refrain', 'Kanon', 'Dies irae', 'Persona', 'Persona 2', 'Jump Force', 'Unravel 2', 'Ark Survival Evolved', 'Odin Sphere',
   'J Stars Victory VS+', 'Fairy Tail', 'One Punch Ma A Hero Nobody Knows', 'Tokyo Ghoul Jail'];

  constructor(public listsService: ListsService, private fb: FormBuilder, private router: Router ) {
    this.initForm()
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  ngOnInit() {}

  selectValue(value) {
    // this.stateForm.patchValue({"search": value});
    this.gameList.push(value);
    this.showDropDown = false;

  }
   closeDropDown() {
     this.showDropDown = !this.showDropDown;
   }

   openDropDown() {
     this.showDropDown = false;
   }

   getSearchValue() {
     return this.stateForm.value.search;
   }

  gameList = [];

  //addGame = game => this.gameList.push(game);
  //addGame = game => this.gameList.push(this.stateForm.value.search);

  removeGame = game => {
    let index = this.gameList.indexOf(game);
    if (index > -1) this.gameList.splice(index, 1);
  };

  onSubmit() {
    this.listsService.form.value.gameList = this.gameList;
    let data = this.listsService.form.value;

    this.listsService.createList(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/

    });

    this.router.navigate([ '/myGames' ]);
  }

}

