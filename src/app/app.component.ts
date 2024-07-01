import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
	<div id="main-layout">
		<app-cabecera id="main-header"></app-cabecera>
		
		<main id="main-content">
			<section>
			<router-outlet></router-outlet>
			</section>
		</main>
		
		<app-pie id="main-footer"></app-pie>

	</div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public constructor(private titleService: Title) { 
	this.titleService.setTitle("HomeTour");
  }
}
