import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { en } from '../../assets/i18n/en';
import { ch } from '../../assets/i18n/ch';

/* 多语言加载器 */
export class TranslateUniversalLoader implements TranslateLoader {
  constructor() {
  }

  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      if (lang === 'ch') {
        observer.next(ch);
      } else {
        observer.next(en);
      }
      observer.complete();
    });
  }
}
