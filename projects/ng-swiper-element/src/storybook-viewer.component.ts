import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storybook-viewer',
  template: `
    <div class="storybook-container">
      <h2>Storybook for Angular {{ version }}</h2>
      <iframe 
        [src]="storybookUrl" 
        width="100%" 
        height="800px"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
        frameborder="0">
      </iframe>
    </div>
  `,
  styles: [`
    .storybook-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    h2 {
      margin: 0;
      color: #333;
    }
    
    iframe {
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: white;
    }
  `],
  standalone: true
})
export class StorybookViewerComponent implements OnInit {
  @Input() version: string = '19';
  storybookUrl: string = '';

  ngOnInit() {
    // Set the URL to load specific storybook version based on config  
    // We want to allow loading from the configured versions directory
    if (this.version && this.version !== '') {
      this.storybookUrl = `/storybook-static/${this.version}/index.html`;
    } else {
      this.storybookUrl = `/storybook-static/index.html`;
    }
  }
}