import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <header class="app-header">
      <h1>ng-swiper-element</h1>
      <div class="version-selector">
        <label for="version-select">Angular Version:</label>
        <select id="version-select" [(ngModel)]="selectedVersion" (change)="onVersionChange()">
          <option *ngFor="let version of angularVersions" [value]="version">{{ version }}</option>
        </select>
      </div>
    </header>
    
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
    }
    
    h1 {
      margin: 0;
      font-size: 1.8rem;
      color: #333;
    }
    
    .version-selector {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    
    main {
      padding: 2rem;
      min-height: calc(100vh - 60px);
    }
  `],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule]
})
export class AppComponent implements OnInit {
  selectedVersion = '19';
  angularVersions: string[] = [];

  ngOnInit() {
    // Load available Angular versions
    this.loadAngularVersions();
  }

  loadAngularVersions() {
    try {
      // Read from our config file directly 
      const config = require('../../angular-versions-config.json');
      this.angularVersions = config.versions;
      
      // Set default to current version (19)
      if (!this.angularVersions.includes(this.selectedVersion)) {
        this.selectedVersion = '19';
      }
    } catch (error) {
      console.error('Failed to load versions:', error);
      // Fallback versions
      this.angularVersions = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];
    }
  }

  onVersionChange() {
    // Redirect to the selected version page
    window.location.hash = `/v${this.selectedVersion}`;
  }
}