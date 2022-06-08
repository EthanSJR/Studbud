let oInput = document.getElementById('input');
let oUl = document.getElementById('list');
let oLi = document.getElementsByClassName('item');
let oHidden = document.getElementById('hidden');

//when enter keys pressed - keycode no longer supported (?)
document.onkeydown = function (ev) {
    ev = ev || window.event;
    if (ev.key === 'Enter') {
        let value = oInput.value;
        //alert when no input value
        if (value === '') {
            alert('please drop down ur urls');
        } else {
            //generated li tags and the 2 inner tags
            let li = document.createElement('li');
            let p = document.createElement('p');
            let span = document.createElement('span');

            //class name the tags
            li.className = "item"
            p.className = "infor"
            span.className = "del"
            //add in value
            p.innerHTML = value;
            span.innerHTML = "x"

            //append child
            li.appendChild(p);
            li.appendChild(span);
            
            oUl.appendChild(li);
            //clear 
            oInput.value = '';
            //X FOR CLEAR
            span.onclick = function () {
                oUl.removeChild(this.parentNode)
            }
            //Hide / expand
            oHidden.onclick = function () {
                oUl.classList.toggle('change');
            }
        }
    }
}
//search keywords & highlight
function select() {
    oInput.addEventListener('keyup', function (e) {    //Check keys pressed
        let str = e.target.value;
        let reg = new RegExp('(' + str + ')', 'g');          //same keys would turn red

        for (var i = 0; i < oLi.length; i++) {
            let one = oLi[i].getElementsByTagName('p')[0];
            let newStr = one.innerText.replace(reg, '<font color=red>$1</font>');//innerTEXT makes sure the HTML tag wouldnt change, caused bugs in previous attempt using inner HTml
            if (one.innerText.indexOf(str) !== -1) {                         
                one.innerHTML = newStr;                                       
            }
        }
    });
}
select();  //runs
