class Todo{
    constructor(items){
        this.items = items;
    }

    getItems(){
        console.log(this.items);
    }

    deleteTask(id){
        const currentId = Number(id);
        const target = this.items.findIndex(item => {
            if(item.id === currentId){
                return true;
            }
        })
        return this.items.splice(target, 1);
    }   

    sortTask(){
        
    }

    render(){
        const container = document.querySelector('.container');
        container.innerHTML = '';
        this.items.forEach(item => {
            container.innerHTML += `<div class="task">
            <span class="task-id">${item.id}</span>
            <div class="task-name">${item.name}</div>
            <input type="checkbox" class="task-check">
            <button data-id="${item.id}" class="task-delete">Delete</button>
        </div>`
        });
    }
}















