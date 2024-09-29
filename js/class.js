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

    sortTask(target){
        
        const targetId = this.items.findIndex(item => {
            if(item.id === target){
                return true;
            }
        })

        this.items[targetId].isChecked = !this.items[targetId].isChecked;
        return this.items.sort((a,b) => { return a.isChecked - b.isChecked});
    }

    render(){
        const container = document.querySelector('.container');
        container.innerHTML = '';
        this.items.forEach(item => {
            container.innerHTML += `<div class="task ${item.isChecked ? 'done' : ''}" data-id="${item.id}">
            <span class="task-id">${item.id}</span>
            <div class="task-name">${item.name}</div>
            <input type="checkbox" ${item.isChecked ? 'checked' : ''} class="task-check">
            <button data-id="${item.id}" class="task-delete">Delete</button>
        </div>`
        });
    }
}















