import Memo from './memo.js';
//import MemoService from './memoService';

var memoCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    createMemo();
    //memoCount += 1;
    //console.log("memoCount on DOMContentLoaded: ", memoCount);
});


// const createMemo = () => {
//     // return new Memo(
//     //     'memo_1',
//     //     'Content here',
//     //     {top: 100, left: 100},
//     //     {width: 200, height: 100},
//     //     1,
//     //     1   
//     // );
    
// }

const createMemo = () => {
    var background = document.getElementsByClassName('wrap')[0];
    background.addEventListener('contextmenu', (e) => {
        if(e.target !== e.currentTarget) return;
        e.preventDefault();
        console.log(e.pageX, " " ,e.pageY);
        console.log("count before returning memo: ", memoCount);
        memoCount += 1;
        return memo = new Memo (
            `memo_${memoCount}`,
            'Comment Here',
            {top: e.pageX, left: e.pageY},
            {width: 200, height: 100},
            memoCount
        );
    }, false);
    // memoCount = memoCount + 1;
    // console.log("memoCount after addEvent: ", memoCount);
}

