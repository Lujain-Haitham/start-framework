import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";

@Component({
  selector: 'app-protfolio',
  imports: [TitleComponent, PortfolioCardComponent],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css',
})
export class ProtfolioComponent {
  componentName ='PORTFOLIO COMPONENT'
  isDark = true
  image1= './images/poert1.png'
  image2= './images/port2.png'
  image3= './images/port3.png'

}
