
function newItem() {
    let text = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val(" ");
    $(".shopping-list").append(
    `<li>
    <span class="shopping-item">${text}</span> 
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
    <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
    <span class="button-label">delete</span>
    </button>
    </div>
    </li>`);
}

function add() {
    $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault();
        newItem()
    });
};
function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        $(this).closest('li').remove();
    });
}

function checked() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
    
}
function init() {
    add()
    deleteItem()
    checked()
}

init();
