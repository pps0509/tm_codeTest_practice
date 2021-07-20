import memoService from './memoAction.js';

export default class Memo {
    constructor(id, content, position) {

        this.id = id; 
        this.content = content;
        this.position = position;

        this.createMemoDOM();

    }


    createMemoDOM() {
        $(".wrap").append(`
            <div id="memo_1"
                    class="memo"
                    style="top:100px; left:100px;">
            <div class="header">
                <h1 class="blind">Memo</h1>
                <button class="btn_close"><span class="blind">Close</span></button>
            </div>
            <div class="content">
            <div class="textarea"
                    contenteditable="true"
                    style="width:200px; height:100px;">Contents</div>
            </div>
                <button class="btn_size"><span class="blind">Adjust memo size</span></button>
            </div>
        `);
    }
}