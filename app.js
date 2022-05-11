const btn = document.querySelectorAll('.tabs__nav-btn');
const tabs = document.querySelectorAll('.tabs__item');

btn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( !currentBtn.classList.contains('active') ) {
            btn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabs.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn:nth-child(1)').click();




























































