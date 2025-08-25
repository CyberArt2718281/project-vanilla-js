export class ActivateUi {
   static isRouteInMenuCollapse(routePath) {
      const menuCollapseRoutes = ['/income', '/expenses'];
      const menuCollapsePatterns = [
         /^\/income(\/|$)/,
         /^\/expenses(\/|$)/,
      ];

      return menuCollapseRoutes.includes(routePath) ||
        menuCollapsePatterns.some(pattern => pattern.test(routePath));
   }

   static isIncomeExpensesRoute(routePath) {
      const incomeExpensesRoutes = ['/income-expenses'];
      const incomeExpensesPatterns = [
         /^\/income-expenses(\/|$)/,
      ];

      return incomeExpensesRoutes.includes(routePath) ||
        incomeExpensesPatterns.some(pattern => pattern.test(routePath));
   }

   static getParentRoute(routePath) {
      if (routePath.startsWith('/income')) {
         return '/income';
      } else if (routePath.startsWith('/expenses')) {
         return '/expenses';
      } else if (routePath.startsWith('/income-expenses')) {
         return '/income-expenses';
      }
      return routePath;
   }

   static activateMenuItem(route) {
      const allLinks = document.querySelectorAll('.sidebar .nav-link, .menu-collapse-link');
      const menuCollapse = document.getElementById('menu-select-nav-bar');
      const selectNavBar = document.getElementById('select-nav-bar');
      const mainLink = document.getElementById('main-link');
      const cacheLink = document.getElementById('cache-link');

      // Сбрасываем все активные состояния
      allLinks.forEach(link => {
         link.classList.remove('active');
         link.classList.remove('active-select');
      });

      // Восстанавливаем стандартные классы для основных ссылок
      if (mainLink) {
         mainLink.classList.add('nav-link');
         mainLink.classList.remove('nav-link-disabled');
      }
      if (cacheLink) {
         cacheLink.classList.add('nav-link');
         cacheLink.classList.remove('nav-link-disabled');
      }

      const isInMenuCollapse = this.isRouteInMenuCollapse(route.route);
      const isIncomeExpenses = this.isIncomeExpensesRoute(route.route);
      const parentRoute = this.getParentRoute(route.route);

      if (isInMenuCollapse) {
         if (selectNavBar) {
            selectNavBar.classList.add('active');
         }

         if (menuCollapse) {
            menuCollapse.classList.remove('d-none');
         }

         // Блокируем основные ссылки при открытом меню категорий
         if (mainLink) {
            mainLink.classList.remove('nav-link');
            mainLink.classList.add('nav-link-disabled');
         }
         if (cacheLink) {
            cacheLink.classList.remove('nav-link');
            cacheLink.classList.add('nav-link-disabled');
         }

         // Активируем родительский элемент
         const parentLink = document.querySelector(`.menu-collapse-link[href="${parentRoute}"]`);
         if (parentLink) {
            parentLink.classList.add('active-select');
         }

         // Активируем конкретный маршрут если он существует
         const targetLink = document.querySelector(`.menu-collapse-link[href="${route.route}"]`);
         if (targetLink) {
            targetLink.classList.add('active-select');
         }

      } else if (isIncomeExpenses) {
         // Для income-expenses и его дочерних страниц активируем cache-link
         if (cacheLink) {
            cacheLink.classList.add('active');
         }

         // Активируем конкретный маршрут если он существует
         const targetLink = document.querySelector(`.nav-link[href="${route.route}"]`);
         if (targetLink) {
            targetLink.classList.add('active');
         }

      } else {
         if (selectNavBar) {
            selectNavBar.classList.remove('active');
         }

         if (menuCollapse) {
            menuCollapse.classList.add('d-none');
         }

         // Активируем соответствующую ссылку
         allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === route.route) {
               link.classList.add('active');
            }
         });
      }
   }


}