const Header = function() {
    const dashboardFilterItemsEvents = function() {
        const jsDashboardItems = document.querySelectorAll('.js-dashboard-item');

        jsDashboardItems.forEach((item) => {
            const icon = item.childNodes[1].childNodes[1];
            const iconName = icon.dataset.name;

            item.addEventListener('mouseenter', function() {
                item.classList.add('dashboard-filter--active');
                icon.classList.add(`${iconName}--active`);

            });

            item.addEventListener('mouseleave', function() {
                item.classList.remove('dashboard-filter--active');
                icon.classList.remove(`${iconName}--active`);
            });
        });
    };

    const dashboardButtonEvents = function() {
        const jsDashboardButton = document.querySelectorAll('.js-dashboard-button')[0];
        const icon = jsDashboardButton.childNodes[1];
        const iconName = icon.dataset.name;

        jsDashboardButton.addEventListener('mouseenter', function() {
            jsDashboardButton.classList.add('dashboard-button--active');
            icon.classList.add(`${iconName}--active`);
        });

        jsDashboardButton.addEventListener('mouseleave', function() {
            jsDashboardButton.classList.remove('dashboard-button--active');
            icon.classList.remove(`${iconName}--active`);
        });
    };

    dashboardFilterItemsEvents();
    dashboardButtonEvents();
};

export default Header;
