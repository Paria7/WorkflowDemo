import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-orchestration',
  templateUrl: './orchestration.component.html',
  styleUrls: ['./orchestration.component.scss']
})
export class OrchestrationComponent implements OnInit {

  public orbitUrl: string;
  iframe: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.orbitUrl = "http://localhost:1880/#flow/c240e855.215638";

    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.orbitUrl);
  }

  ngOnInit() {
  }
  //public url$ = this.sanitizer.bypassSecurityTrustResourceUrl(this.orbitUrl);
}
