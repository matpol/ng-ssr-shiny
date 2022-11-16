import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  result$: Observable<any> | undefined;

  constructor(private articlesService: ArticlesService) {
    this.result$ = this.articlesService.getArticlesViaContentAPI('10');
  }

  ngOnInit(): void {}
}
