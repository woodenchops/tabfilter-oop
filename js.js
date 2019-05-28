function TabFilter(props) {
    this._tab = props.tab;
    this._content = props.content;
    this._props = props;
    this._parent_element = props.parentElement;
    var parentElement = document.querySelector(this._parent_element);
    var tab = parentElement.querySelectorAll(this._tab);
    var tiles = parentElement.querySelectorAll(this._content);
    var self = this;


        tab.forEach(function(tab) {

            tab.addEventListener('click', function(e) {
                e.preventDefault();
                var clickedTabAttr = tab.getAttribute('data-category');
                var parentWrap = tab.parentNode.parentNode;
                document.querySelectorAll('.parent-wrap').forEach(function(parent) {
                    parent.classList.remove('active');
                });
                parentWrap.classList.add('active');
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

}

var TileTab = new TabFilter({
    parentElement: '#tile-wrap',
    tab: '.tab',
    content: '.item-container'
});

var TileTab2 = new TabFilter({
    parentElement: '#tile-wrap2',
    tab: '.tab',
    content: '.item-container'
});

var TileTab3 = new TabFilter({
    parentElement: '#img-wrap',
    tab: '.tab',
    content: '.img'
});
