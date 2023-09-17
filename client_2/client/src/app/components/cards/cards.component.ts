import { Component } from '@angular/core';
import{ faChartLine,
  faLocationDot,
  faMoneyBill,
  faUsers,
  faHandshakeAngle,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  faHandshake = faHandshakeAngle;
  faDashboard = faChartLine;
  faLocation = faLocationDot;
  faMoneyBill = faMoneyBill;
  faUsers = faUsers;
}
