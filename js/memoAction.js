import Memo from './memo.js';
//import MemoService from './memoService';

var memoCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    createMemo();
    //memoCount += 1;
    //console.log("memoCount on DOMContentLoaded: ", memoCount);
});


const createMemo = () => {
    var background = document.getElementsByClassName('wrap')[0];  // why adding [0] is only possible..? also querySelector didnt work either
    background.addEventListener('contextmenu', (e) => {
        if(e.target !== e.currentTarget) return;
        e.preventDefault();
        console.log(e.pageX,e.pageY);
        console.log("count before returning memo: ", memoCount);
        memoCount += 1;
        return memo = new Memo (   // why does this generate error on console : "memo is not defined - uncaught reference error"
            `memo_${memoCount}`,
            'Comment Here',
            {top: e.pageY, left: e.pageX},   // currently having issue while generating memos. It appears on incorrect coordinates except the top left
            {width: 200, height: 100},              // So stupid. I put top: e.pageX while it should top: e.pageY !!! DUMBSHIT. 
            memoCount
        );
    }, false);
    // memoCount = memoCount + 1;
    // console.log("memoCount after addEvent: ", memoCount);
}

