import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: Move to a config service
const CONTENT_REPOSITORY_BASE_URL: string =
  'http://content-repository.sitea.press.net/repository/content/v1/item/';
const CONTENT_API_BASE_URL: string =
  'https://content.api.pressassociation.io/v1/item/';
const CONTENT_API_KEY = '';

const pageSize: number = 12;

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getItem(uri: string) {
    return this.http.get(`${CONTENT_REPOSITORY_BASE_URL}${uri}`);
  }

  getArticleViaContentAPI(uri: string) {
    return this.http.get(
      `${CONTENT_API_BASE_URL}${uri}?product=paproduct:mediapoint&apikey=${CONTENT_API_KEY}`
    );
  }

  getArticlesViaContentAPI(number: string) {
    let offset = 0;
    if (number && Number(number)) {
      offset = (Number(number) - 1) * pageSize;
    }
    return this.http.get<any>(
      `${CONTENT_API_BASE_URL}?product=paproduct:mediapoint&profile=statement&andSubject=contributor:group:press-release-provider&apikey=${CONTENT_API_KEY}&limit=${number}&offset=${offset}`
    );
  }
}
