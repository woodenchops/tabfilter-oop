function TabFilter(props) {
    this._el = props.el;
    this._content = props.content;
    this._props = props;
    this._parent_element = props.parentElement;
    var parentElement = document.querySelector(this._parent_element);
    var tab = parentElement.querySelectorAll(this._el);
    var tiles = parentElement.querySelectorAll(this._content);
    var self = this;

    var init = (function () {

        tab.forEach(function (tab) {

            tab.addEventListener('click', function (e) {
                e.preventDefault();
                var clickedTabAttr = tab.getAttribute('data-category');
                tiles.forEach(function (tile) {
                    var tileAttr = tile.getAttribute('data-category');
                    if (clickedTabAttr === 'all') {
                        tile.classList.remove('hide');
                    } else if (clickedTabAttr === tileAttr) {
                        tile.classList.remove('hide');
                    } else {
                        tile.classList.add('hide');
                    }
                });

            }.bind(self));

        });

    })();


    return {
        init: init
    }



}

var TileTab = new TabFilter({
    parentElement: '#tile-wrap',
    el: '.tab',
    content: '.item-container'
});

var TileTab2 = new TabFilter({
    parentElement: '#tile-wrap2',
    el: '.tab',
    content: '.item-container'
});

var TileTab3 = new TabFilter({
    parentElement: '#img-wrap',
    el: '.tab',
    content: '.img'
});