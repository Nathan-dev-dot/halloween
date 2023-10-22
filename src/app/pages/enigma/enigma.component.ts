import { Component } from '@angular/core';

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.css']
})
export class EnigmaComponent {


  setCode(code: string) {
    console.log(code)
  }


  sendCode() {
    console.log("send");
  }
}
