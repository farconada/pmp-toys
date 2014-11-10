$(function() {
    $( ".draggable" ).draggable({ revert: "invalid" });
    $( ".droppable" ).droppable({
        drop: function( event, ui ) {
            deleteItem(ui.draggable);
            addToCell(ui.draggable, $(this));
        },
        accept: function (dropElement) {
            if (dropElement.data("solid") == $(this).data("colid")) {
                return true;
            }
            return false;
        }
    });

    function deleteItem(item) {
        item.remove();
    }

    function addToCell(item, tableCell) {
        if(tableCell[0].childElementCount == 0) {
            tableCell.html('<ul></ul>');
        }
        tableCell.find('ul').append('<li>'+item[0].innerHTML +'</li>')

    }

    $('#procesos').randomize();
});

$.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random());
        }).detach().appendTo(this);
    });

    return this;
};