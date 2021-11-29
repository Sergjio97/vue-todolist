const app = new Vue ({

    el: "#root",

    data : {

        todos: [

            {
                text: "Lillà e uva spina",
                done: false
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
                this.todos.push({text:this.inputValue});
                this.inputValue = "";
            }
            
        },

        removeTodo: function(index) {
            this.todos.splice(index);
        }

    }

});