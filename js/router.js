 window.TodoApp = new (Backbone.Router.extend({
   routes: {'' : 'index' },
   initialize: function() {
     this.todoItems = new TodoItems();
     this.todosView = new TodosView( { collection: this.todoItems} );
     this.todosView.render();

     $('.btn-clear').click(function(e) {
       window.TodoApp.todosView.filterCompleted();
     });

     $('.btn-success').click(function() {
       window.TodoApp.todoItems.add({val:$('#newTodo').val(), completed: false});
       $('#newTodo').val('');
     });
   },
   index: function() {
     var fixtures = [
     { val: "thing", completed: true },
     { val: "other thing", completed: true },
     { val: "more things", completed: false },
     { val: "cool things", completed: true },
     { val: "my thing", completed: false },
     { val: "your thing", completed: false}
   ];
     $('#app').html(this.todosView.el);
     this.todoItems.reset(fixtures);

   },
   start: function() {
     Backbone.history.start();
   }
 }));
