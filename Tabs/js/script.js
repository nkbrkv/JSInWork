document.addEventListener('DOMContentLoaded', () => {
    
    const tabsMenu = document.querySelector('.tabs-menu');
    const tabsMenuItem = tabsMenu.querySelectorAll('.tabs-menu-link');
    const tabsParent = document.querySelector('.tabs-parent');
    const tabsItem = tabsParent.querySelectorAll('.tabs-item');

    function hideTabs(arr, mark) {

        arr.forEach( item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });

        mark.forEach( item => {
            item.classList.remove('is-active');
        });

    }

    function showTab(tabs, mark, i = 0,) {
        tabs[i].classList.remove('hide');
        tabs[i].classList.add('show');
        mark[i].classList.add('is-active');
    }


    hideTabs(tabsItem, tabsMenuItem);
    showTab(tabsItem, tabsMenuItem);

    tabsMenuItem.forEach( (item, i) => {

        
        item.addEventListener('click', event => {

            let target = event.target;

            if ( target && target.classList.contains('tabs-menu-link')) {
                
                hideTabs(tabsItem, tabsMenuItem);
                showTab(tabsItem, tabsMenuItem, i);

            }
        });
    });

});