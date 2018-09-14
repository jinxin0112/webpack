import './my.less';
import pic from './pic.jpg';
let root = document.getElementById('root');
let img = new Image();
img.src = pic;
root.appendChild(img);

function handsome(target) {
    target.prototype.face = 'handsome'
}

@handsome
class Person {

}

let king = new Person();


if(module.hot){
    module.hot.accept()
}