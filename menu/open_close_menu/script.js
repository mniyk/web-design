function menu_open_close(
    button_id, 
    open_value, 
    close_value, 
    items_id, 
    items_display_value,
    contents_id,
    contents_display_value) {
    let menu_open_close_button = document.getElementById(button_id);
    let menu_items = document.getElementById(items_id);
    let contents = document.getElementById(contents_id);

    if (menu_open_close_button.innerText === open_value) {
        menu_open_close_button.innerText = close_value;

        menu_items.style.display = items_display_value;
        contents.style.display = 'none';
    } else {
        menu_open_close_button.innerText = open_value;

        menu_items.style.display = 'none';
        contents.style.display = contents_display_value;
    }
}