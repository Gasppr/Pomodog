import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [

  {path: "menu" ,component: MenuComponent},
  {path: "" , component: MainPageComponent}
];
