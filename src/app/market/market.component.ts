import { Component } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  showMarketDepth: boolean = false;
  openNewComponent(): void {
    this.showMarketDepth = true;
  }
}

