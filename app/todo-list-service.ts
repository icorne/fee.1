import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoListItemsService {
    private defaultHeaders;

    constructor(private http:Http) {
        this.defaultHeaders = new Headers();
        this.defaultHeaders.append('Content-Type', 'application/json');
    };

    getItems() {
        return this.http.get('http://localhost:1337/item')
            .map(response => response.json());
    };

    createItem(newItemName:string) {
        return this.http.post('http://localhost:1337/item', JSON.stringify({
            "title": newItemName
        }), {
            headers: this.defaultHeaders
        }).map(response => response.json());
    };

    updateItem(item){
        this.http.put(item._links.self, JSON.stringify(item), {
            headers: this.defaultHeaders
        }).subscribe();
    };
}