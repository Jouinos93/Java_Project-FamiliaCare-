import { Component } from '@angular/core';
import{ faChartLine,
  faLocationDot,
  faMoneyBill,
  faUsers,
  faHandshakeAngle,
  faBellConcierge,
  faComment
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faHandshake = faHandshakeAngle;
  faDashboard = faChartLine;
  faLocation = faLocationDot;
  faMoneyBill = faMoneyBill;
  faUsers = faUsers;
  faBellConcierge = faBellConcierge;
  faComment=faComment;

}
