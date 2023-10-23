import { Component } from '@angular/core';
import {MysteryService} from "../../services/mystery/mystery.service";
import {Mystery} from "../../services/mystery/mystery";

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.css']
})
export class EnigmaComponent {
  code: string = "";
  error: boolean = false;
  constructor(private readonly mysteryService: MysteryService) {
  }

  setCode(code: string) {
    if(typeof code == "string")
      this.code = code;
  }


  sendCode() {
    if(this.code.length > 0){
      this.mysteryService.getMystery(this.code).subscribe((mystery: Mystery) => {
        this.error = false;
        console.log(mystery);
      }, error => {
        this.error = true;
        this.code = "";
      })
    }
  }
}
