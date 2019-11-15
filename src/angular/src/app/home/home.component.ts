import {Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public homeTemplate: SafeHtml;

  constructor(private domSanitizer: DomSanitizer, private http: HttpClient,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.http.get('assets/home.html', {responseType: 'text'}).pipe(
      map(html => this.domSanitizer.bypassSecurityTrustHtml(html)),
      tap(html => {
        this.homeTemplate = html;
      })
    ).subscribe();
  }
}
