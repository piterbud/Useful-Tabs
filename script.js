let chosenTab = "1";

const tabs = document.querySelectorAll('.tabs_upper_part div');
const tabsTexts = document.querySelectorAll('.tabs_bottom_part p');

tabs.forEach(item => item.addEventListener('click', changeTab));
window.addEventListener('load', () => tabsTexts[0].style.display = "block");

function changeTab() {
    document.querySelector(`[data-tab="${chosenTab}"]`).classList.remove('activeTab');
    chosenTab = this.dataset.tab;
    document.querySelector(`[data-tab="${chosenTab}"]`).classList.add('activeTab');

    tabsTexts.forEach(item => {
        item.style.display = "none";
        if (chosenTab === item.dataset.text) {
            item.style.display = "block";
        }
    });
}
