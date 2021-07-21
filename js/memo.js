//import memoService from './memoAction.js';

export default class Memo {
    constructor(id, content, position, size) {

        this.id = id; 
        this.content = content;
        this.position = position;
        this.size = size;

        this.draggerPivot = null;
        this.dragged = null;
        this.wrapper = null;

        this.createMemoDOM();

    }


    createMemoDOM() {
        $(".wrap").append(`
            <div id="${this.id}"
                class="memo"
                style="top:${this.position.top}px; left:${this.position.left}px;">
                <div class="header">
                    <h1 class="blind">Memo</h1>
                    <button class="btn_close"><span class="blind">Close</span></button>
                </div>
                <div class="content">
                <div class="textarea"
                        contenteditable="true"
                        style="width:${this.size.width}px; height:${this.size.height}px;">${this.content}</div>
                </div>
                <button class="btn_size"><span class="blind">Adjust memo size</span></button>
            </div>
        `);
    }

    bindDragEvent() {
        this.draggerPivot = document.querySelector(`#${this.id} .header`);
        this.draggerPivot.addEventListener('mousedown', this.startDragEvent(), false);

        // enable memo being dragged, dropped on the wrap 
        this.wrapper = document.querySelector('.wrap');
        this.wrapper.addEventListener('dragEnter', this.dragEnter(), false);
        this.wrapper.addEventListener('dragOver', this.dragEnter(), false);
        this.wrapper.addEventListener('dropped', this.dragEnter(), false);
        
    }

    startDragEvent = (e) => {
        if(e.target.className !== 'header') { return false; }
        this.dragged = document.querySelector(`#${this.id}`);
        this.dragged.setAttribute('draggable', true);
        this.dragged.addEventListener('startDragging');
        this.dragged.addEventListener('stopDragging');

        
    } 

    startDragging = (e) => {
        
    }

    stopDragging = (e) => {

    }




    dragEnter = (e) => {
        e.preventDefault();
        return true;
    }

    dragOver = (e) => {
        e.preventDefault();
        
    }

    dropped = (e) => {
        e.preventDefault();
        return false;
    }

}