

class Item {

    static lasId = 0;

    constructor(text){
        this.id =Item.lasId++;
        this.text = text;
        this.done = false;
    }

}

export default Item;