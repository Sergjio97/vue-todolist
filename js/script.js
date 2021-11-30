const app = new Vue ({

    el: "#root",

    data : {

        todos: 
        
        [

            {
                text: "Lillà e uva spina",
                done: true
            },

            {
                text: "Trova Yennefer di Vengerberg",
                done: false
            },

            {
                text: "Un amico nei guai",
                done: false
            },

            {
                text: "Trova e libera Dandelion",
                done: false
            },

            {
                text: "Negromante",
                done: false
            },

            {
                text: "Aiuta Yennefer a estrarre informazioni dal cadavere di Skjall",
                done: false
            },

        ],

        inputValue: "",       

    },

    methods: {

        addTodo: function() {

            if (this.inputValue !== "") {
                this.todos.push({text:this.inputValue, done: false});
                this.inputValue = "";
            }
            
        },

        removeTodo: function(index) {
            this.todos.splice(index, 1);
        },

        doneTodo: function(index){
            // if (this.todos[index].done == true){
            //     this.todos[index].done = false;
            // } else {
            //     this.todos[index].done = true;
            // }
            
            this.todos[index].done = !this.todos[index].done; //sintassi contratta
        }

    }

});