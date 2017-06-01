/**
 * Created by Balyuk-D on 25.05.2017.
 */

let ctrl = {
    items: ["a","b","c","d","e"],
    items2: ["Мы","Другой","Массив"]
};

document.addEventListener('DOMContentLoaded', function(){
    var elem = document.querySelectorAll("*[ng-an_sim-repeat]");

    for(let i=0;i<elem.length;i++){
        let elem_this = elem[i],
            elem_parent = elem[i].parentNode,
            attribute = elem[i].getAttribute('ng-an_sim-repeat');

        let src_arr = attribute.slice(attribute.match(/in /).index+3),
            var_repeat = attribute.slice(0,attribute.match(/ in/).index);

        for(let key in ctrl){
            if(key == src_arr){
                src_arr = ctrl[key];

                scope_simulation(elem_this, elem_parent, var_repeat, src_arr);
                elem_this.remove();
            }
        }
    }
});

function scope_simulation(el, parent, var_repeat, src_arr){

    for(let i=src_arr.length-1;i>=0;i--){
        let el_html = el.outerHTML.replace('$$'+var_repeat+'$$',src_arr[i])
        parent.children[0].insertAdjacentHTML('afterEnd',el_html);
    }
}