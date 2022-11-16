import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  result$: Observable<any> | undefined;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.result$ = this.articlesService.getArticlesViaContentAPI('50');
  }
}
