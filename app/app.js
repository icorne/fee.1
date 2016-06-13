System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters:[],
        execute: function() {
            class App {
                constructor() {
                    this.message = 'Hello world!';
                    this.items = [
                        { title: 'Finish Polymer Demo', completed: false },
                        { title: 'Climb the Kilimanjaro', completed: false },
                        { title: 'Make a TODO-list', completed: true }
                    ];
                }
            }
            exports_1("App", App);
        }
    }
});
