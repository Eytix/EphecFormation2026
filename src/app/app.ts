import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {Header} from '../layout/header/header';
import {Footer} from '../layout/footer/footer';
import {Sidenav} from '../layout/sidenav/sidenav';
import {Content} from '../layout/content/content';

@Component({
  imports: [
    MatSidenavModule,
    Header,
    Footer,
    Sidenav,
    Content
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  // Sous le breakpoint md de Tailwind (768px), la sidenav passe en tiroir superposé
  isMobile = toSignal(
    inject(BreakpointObserver).observe('(max-width: 767.98px)').pipe(map(result => result.matches)),
    {initialValue: false}
  );

}
