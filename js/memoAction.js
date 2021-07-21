import Memo from './memo.js';
//import MemoService from './memoService';

document.addEventListener("DOMContentLoaded", () => {
    createMemo();
});


const createMemo = () => {
    return new Memo(
        'memo_1',
        'Content here',
        {top: 100, left: 100},
        {width: 200, height: 100},
        1   
    );
}