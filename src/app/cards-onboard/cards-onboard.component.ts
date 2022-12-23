import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-onboard',
  templateUrl: './cards-onboard.component.html',
  styleUrls: ['./cards-onboard.component.scss']
})
export class CardsOnboardComponent {
  boardDetails = [
    { id: 0, name: "What went well", cardsCount: 0 },
    { id: 1, name: "What can be improved", cardsCount: 0 },
    { id: 2, name: "Start doing", cardsCount: 0 },
    { id: 3, name: "Action items", cardsCount: 0 }];

  constructor() { }

  addCard(clickedSectionId: number) {
    this.boardDetails[clickedSectionId].cardsCount = this.boardDetails[clickedSectionId].cardsCount + 1;
    setTimeout(() => {
      document.getElementById("bd" + clickedSectionId + (this.boardDetails[clickedSectionId].cardsCount - 1))?.focus();
    }, 0);
  }
}
