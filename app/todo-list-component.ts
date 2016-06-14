import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodoListItemComponent} from './todo-list-item-component';
import {TodoListItem} from './todo-list-item';
import {TodoListItemsService} from './todo-list-service';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo-list.html',
    directives: [TodoListItemComponent],
    providers: [HTTP_PROVIDERS, TodoListItemsService]
})
export class TodoListComponent implements OnInit {
    public todoItems:Array<TodoListItem>;
    public newItemName:string;

    constructor(private itemsService:TodoListItemsService) {
    };

    onSubmit() {
        this.itemsService.createItem(this.newItemName).subscribe((newItem) => {
            this.todoItems.push(newItem);
            this.newItemName = undefined;
        });
    }

    ngOnInit():any {
        this.itemsService.getItems().subscribe(
            (items:any) => {
                this.todoItems = items._embedded.items;
            }, (error) => {
                console.error(error);
            }
        );
    }
}
;