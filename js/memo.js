//import memoService from './memoAction.js';

export default class Memo {
    constructor(id, content, position, size, count) {

        this.id = id; 
        this.content = content;
        this.position = position;
        this.size = size;
        //this.opacity = opacity;
        this.count = count;

        this.draggerPivot = null;
        this.dragged = null;
        this.wrapper = null;
        this.initXPos = 0;
        this.initYPos = 0;

        this.createMemoDOM();

    }


    createMemoDOM() {
        $(".wrap").append(`
            <div id="${this.id}"
                class="memo"
                style="top:${this.position.top}px; left:${this.position.left}px; opacity:${this.opacity}">
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
        console.log("DOM created");
        this.bindDragEvent();
    }

    bindDragEvent() {
        this.draggerPivot = document.querySelector(`#${this.id} .header`);
        this.draggerPivot.addEventListener('mousedown', this.startDragEvent.bind(this), false);

        // enable memo being dragged, dropped on the wrap 
        this.wrapper = document.querySelector('.wrap');
        this.wrapper.addEventListener("dragenter", this.dragenter.bind(this), false);
        this.wrapper.addEventListener("dragover", this.dragover.bind(this), false);
        this.wrapper.addEventListener("drop", this.drop.bind(this), false);
        //console.log("bindDragEvent fired");
        
    }

    startDragEvent = (e) => {
        if(e.target.className !== 'header') {
            return;
        }
            this.dragged = document.querySelector(`#${this.id}`);
            this.dragged.setAttribute("draggable", true);
            
            this.dragged.addEventListener('dragstart', this.startDragging.bind(this),false);
            this.dragged.addEventListener('dragend', this.stopDragging.bind(this), false);  // originally I put "stopDragging" instead of "dragend" it didn't work. 
            //console.log("startDragEvent fired");
    } 

    startDragging = (e) => {
        //console.log("start Dragging ");
        //console.log(e.target.style);
        //e.target.style.opacity = .1; // >> 이것또 드래그가 끝난후에 적용이 됨..왜그러지?? 
        this.initXPos = e.pageX - this.dragged.offsetLeft; 
        this.initYPos = e.pageY - this.dragged.offsetTop; 
        //console.log("Positions: ",this.initXPos, this.initYPos);
        return true;

    }

    stopDragging = (e) => {
        //console.log("stopDragging event fired");
        //e.target.style.opacity = .1;   // >> 드래그가 끝난후에 적용됨. 
        var currXPos = e.pageX - this.initXPos; 
        var currYPos = e.pageY - this.initYPos;
        this.dragged.style.left = currXPos + 'px';
        this.dragged.style.top = currYPos + 'px';
        this.dragged.setAttribute('draggable', false);
        this.dragged.removeEventListener('startDragging', this.startDragging.bind(this),false);
        this.dragged.removeEventListener('stopDragging', this.stopDragging.bind(this),false);
        this.wrapper.removeEventListener('dragenter', this.dragenter.bind(this), false);
        this.wrapper.removeEventListener('dragover', this.dragover.bind(this), false);
        this.wrapper.removeEventListener('drop', this.drop.bind(this), false);
    }




    dragenter = (e) => {
        e.preventDefault();
        //console.log("drag Enter");
        return true;
    }

    dragover = (e) => {
        e.preventDefault();
        //console.log("drag Over");
    }

    drop = (e) => {
        e.stopPropagation();
        //console.log("dropped");
        return false;
    }

}