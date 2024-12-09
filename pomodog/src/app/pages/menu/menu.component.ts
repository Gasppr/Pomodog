import { Component } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TimerComponent, HeaderComponent, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
