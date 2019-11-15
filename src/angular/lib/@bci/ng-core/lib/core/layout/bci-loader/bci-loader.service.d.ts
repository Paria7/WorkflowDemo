import { Observable } from 'rxjs';
export declare class BciLoaderService {
    private loaderSubject;
    loaderState: Observable<boolean>;
    private loaderQueueElements;
    constructor();
    showProgressBar(): LoaderQueueElement;
    hideProgressBar(element: LoaderQueueElement): void;
}
export declare class LoaderQueueElement {
    id: number;
}
