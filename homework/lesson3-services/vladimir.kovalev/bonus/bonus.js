(function(){
    function Bonus() {
        this.updateList = []; /* Массив элементов для обновления DOM */
        this.model = {}; /* Модель */
    };
    /* Инициализация (подключение директив) */
    Bonus.prototype.init = function(){
        this.directive('b-show', this.vkShow.bind(this), this.vkShowHandler.bind(this));
        this.directive('b-hide', this.vkShow.bind(this), this.vkShowHandler.bind(this));
        this.directive('b-model', this.vkModel.bind(this), this.vkModelHandler.bind(this));
        this.directive('b-bind', this.vkBind.bind(this), this.vkBindHandler.bind(this));
        this.update( true );
    };
    Bonus.prototype.directive = function(tag, callback, handler){
        let elements = document.querySelectorAll('[bonus] ['+tag+']' );
        for (let i=0;i<elements.length;i++) {
            callback(tag, elements[i], handler);
        }
    };
    /* Выполнение скрипта в контексте модели */
    Bonus.prototype.eval = function ( expr, def = null ) {
        let val = def;
        try {
            with (this.model) {
                val = eval(expr);
            }
        } catch(err) {console.warn('"' + expr + '" не определен' )};
        return val;
    };
    /* Установка значения переменной модели */
    Bonus.prototype.setValue = function ( path, value ) {
        let objs = path.split('.');
        let obj = this.model;
        for (let i=0;i<objs.length-1;i++) {
            if (typeof(obj[objs[i]]) == 'undefined') obj[objs[i]] = {};
            obj = obj[objs[i]];
        }
        obj[objs[objs.length-1]] = value;
    };
    /* Обновление DOM */
    Bonus.prototype.update = function( force = false ) {
        for (let i=0; i<this.updateList.length; i++) {
            this.updateList[i].handler(this.updateList[i], force);
        };
    };
    /* Инициализация модели */
    Bonus.prototype.setModel = function ( state ) {
        this.model = state;
    };
    /* Show & Hide */
    Bonus.prototype.vkShow = function(tag, e, handler){
        this.updateList.push({
            type: tag,
            element: e,
            state: null,
            display: e.style.display,
            handler: handler
        });
    };
    Bonus.prototype.vkShowHandler = function( data, force = false ){
            let val = this.eval(data.element.getAttribute(data.type), true);
            switch (data.type) {
                case 'b-hide':
                    val = !val;
                case 'b-show':
                    if ((force && !val) || (!val && data.state)) {
                        data.element.style.display = 'none';
                        data.state = false;
                    }
                    if ((force && val) || (val && !data.state)) {
                        data.element.style.display = data.display;
                        data.state = true;
                    }
                    break;
            }
    };
    /* Model */
    Bonus.prototype.vkModel = function(tag, e, handler){
        this.updateList.push({
            type: tag,
            element: e,
            handler: handler
        });
        switch (e.tagName) {
            case 'INPUT':
                switch (e.getAttribute('type')) {
                    case 'checkbox':
                        e.addEventListener('change', this.vkModelOnElementChange.bind(this));
                        break;
                    default:
                        e.addEventListener('input', this.vkModelOnElementChange.bind(this));
                }
                break;
            case 'SELECT':
                e.addEventListener('change', this.vkModelOnElementChange.bind(this));
        }
        if (typeof(this.eval(e.getAttribute(tag))) == 'undefined') this.vkModelUpdate( e, false );
    };
    Bonus.prototype.vkModelOnElementChange = function ( event ) {
        this.vkModelUpdate( event.target );
    };
    Bonus.prototype.vkModelUpdate = function( e, update = true ) {
        let value = null;
        switch (e.tagName) {
            case 'INPUT':
                switch (e.getAttribute('type')) {
                    case 'checkbox':
                        value = e.checked;
                        break;
                    default:
                        value = e.value;
                }
                break;
            case 'SELECT':
                for (let i=0;i<e.children.length;i++) {
                    if (e.children[i].selected) value = e.children[i].value;
                }
        }
        this.setValue(e.getAttribute('b-model'), value);
        if (update) this.update();
    };
    Bonus.prototype.vkModelHandler = function( data, force = false ){
        let val = this.eval(data.element.getAttribute(data.type));
        switch (data.element.getAttribute('type')) {
            case 'checkbox':
                val = Boolean(val);
                if (force || (data.element.checked !== val)) {
                    data.element.checked = val;
                }
                break;
            case 'select':
                val = String(val);
                for (let i=0;i<data.element.children.length;i++) {
                    if (data.element.children[i].value == val) {
                        data.element.children[i].setAttribute('selected', true);
                    } else {
                        data.element.children[i].removeAttribute('selected');
                    }
                }
                break;
            default:
                val = String(val);
                if (force || (data.element.value !== val)) {
                    data.element.value = val;
                }
        }
    };
    /* Bind */
    Bonus.prototype.vkBind = function(tag, e, handler){
        this.updateList.push({
            type: tag,
            element: e,
            handler: handler
        });
    };
    Bonus.prototype.vkBindHandler = function( data, force = false ){
        let val = String(this.eval(data.element.getAttribute(data.type)));
        if (data.element.innerHML !== val) {
            data.element.innerHTML = val;
        }
    };

    /*Запуск*/
    window.bonus = new Bonus();

    document.addEventListener('DOMContentLoaded', function() {
        bonus.init();
    });

})();

