import {FileUtils} from "./utils/file-utils";
import {AuthUtils} from "./utils/auth-utils";
import {Main} from "./components/main";
import {ActivateUi} from "./utils/activateUi";
import {Income} from "./components/income/income";
import {Expense} from "./components/expenses/expenses";
import {EditExpense} from "./components/expenses/edit";
import {CreateExpense} from "./components/expenses/create";
import {EditIncome} from "./components/income/edit";
import {CreateIncome} from "./components/income/create";
import {EditIncomesExpenses} from "./components/income-expenses/edit";
import {CreateIncomesExpenses} from "./components/income-expenses/create";
import {IncomeExpenses} from "./components/income-expenses/income-expenses";
import {Login} from "./components/auth/login";
import {SignUp} from "./components/auth/sign-up";
import {Logout} from "./components/auth/logout";
import {BalanceService} from "./services/balance-service";

export class Router {
   constructor() {
      this.initEvents()
      this.titlePageElement = document.getElementById('title')
      this.contentPageElement = document.getElementById('content')
      this.adminLteStylesheetElement = document.getElementById('admin-lte-style')
      this.userName = null;
      this.navigationElements = document.getElementById('main-nav');
      this.routes = [
         {
            route: '/',
            title: 'Главная',
            filepathTemplate: '/templates/pages/main.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new Main(this.openNewRoute.bind(this));
            },
            styles: [
               'main.css'
            ],
            scripts: [
               'Chart.min.js',
            ]
         },
         {
            route: '/income',
            title: 'Доходы',
            filepathTemplate: '/templates/pages/income/income.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new Income(this.openNewRoute.bind(this))
            },
            styles: [
               'income.css'
            ]

         },
         {
            route: '/income/create',
            title: 'Создание',
            filepathTemplate: '/templates/pages/income/create.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new CreateIncome(this.openNewRoute.bind(this))
            },
            styles: [
               'create.css'
            ]
         },
         {
            route: '/income/edit',
            title: 'Редактирование',
            filepathTemplate: '/templates/pages/income/edit.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new EditIncome(this.openNewRoute.bind(this))
            },
            styles: [
               'edit.css'
            ]

         },
         {
            route: '/expenses',
            title: 'Расходы',
            filepathTemplate: '/templates/pages/expenses/expenses.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new Expense(this.openNewRoute.bind(this))
            },
            styles: [
               'income.css'
            ]

         },
         {
            route: '/expenses/create',
            title: 'Создание',
            filepathTemplate: '/templates/pages/expenses/create.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new CreateExpense(this.openNewRoute.bind(this))
            },
            styles: [
               'create.css'
            ]
         },
         {
            route: '/expenses/edit',
            title: 'Редактирование',
            filepathTemplate: '/templates/pages/expenses/edit.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new EditExpense(this.openNewRoute.bind(this))
            },
            styles: [
               'edit.css'
            ]
         },
         {
            route: '/income-expenses',
            title: 'Доходы и Расходы',
            filepathTemplate: '/templates/pages/income-expenses/income-expenses.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new IncomeExpenses(this.openNewRoute.bind(this))
            },
            styles: [
               'income-expenses.css'
            ]

         },
         {
            route: '/income-expenses/create',
            title: 'Доходы и Расходы | Создание',
            filepathTemplate: '/templates/pages/income-expenses/create.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new CreateIncomesExpenses(this.openNewRoute.bind(this))
            },
            styles: [
               'income-expenses-create.css'
            ]

         },
         {
            route: '/income-expenses/edit',
            title: 'Доходы и Расходы | Редактирование',
            filepathTemplate: '/templates/pages/income-expenses/edit.html',
            useLayout: '/templates/layout.html',
            load: () => {
               new EditIncomesExpenses(this.openNewRoute.bind(this))
            },
            styles: [
               'income-expenses-create.css'
            ]

         },
         {
            route: '/404',
            title: 'Страница не найдена',
            useLayout: false,
            filepathTemplate: '/templates/pages/404.html',
            styles: [
               'error-page.css'
            ]
         },
         {
            route: '/login',
            title: 'Авторизация',
            filepathTemplate: '/templates/pages/auth/login.html',
            useLayout: false,
            load: () => {
               new Login(this.openNewRoute.bind(this))
            },
            styles: [
               'form.css'
            ]
         },
         {
            route: '/sign-up',
            title: 'Регистрация',
            useLayout: false,
            filepathTemplate: '/templates/pages/auth/sign-up.html',
            load: () => {
               new SignUp(this.openNewRoute.bind(this))
            },
            unload: () => {
            },
            styles: [
               'form.css'
            ]
         },
         {
            route: '/logout', load: () => {
               new Logout(this.openNewRoute.bind(this))
            }
         }
      ]
   }

   initEvents() {
      window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this)) // при загрузке контента у нас будет срабатывать функция activateRoute
      window.addEventListener('popstate', this.activateRoute.bind(this)) // отлов событий когда у нас изменился url
      document.addEventListener('click', this.clickHandler.bind(this))
   }

   async openNewRoute(url) {
      const currentRoute = window.location.pathname
      history.pushState({}, '', url);
      await this.activateRoute(null, currentRoute);
   }

   async clickHandler(e) {

      let element = null
      if (e.target.nodeName === 'A') {
         element = e.target;

      } else if (e.target.parentNode.nodeName === 'A') {
         element = e.target.parentNode;
      }else if (e.target.closest('a')) {
         element = e.target.closest('a');
      }

      if (element) {
         e.preventDefault()

         const currentRoute = window.location.pathname
         const url = element.href.replace(window.location.origin, '')
         if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {
            return;
         }
         this.closeMobileSidebar();
         await this.openNewRoute(url)
      }
   }

   closeMobileSidebar() {
      if (window.innerWidth < 992) {
         const body = document.querySelector('body');
         const sidebar = document.querySelector('.main-sidebar');
         const overlay = document.querySelector('.sidebar-overlay');

         if (sidebar) sidebar.classList.remove('sidebar-open');
         if (body) body.classList.remove('sidebar-open');
         if (overlay) overlay.style.display = 'none';

         // Закрываем меню категорий если оно открыто
         if (this.navigationElements) {
            const { selectNavBar, menuSelectNavBar, cacheLink, mainLink } = this.navigationElements;
            if (selectNavBar) selectNavBar.classList.remove('active');
            if (menuSelectNavBar) menuSelectNavBar.classList.add('d-none');
            if (cacheLink) {
               cacheLink.classList.add('nav-link');
               cacheLink.classList.remove('nav-link-disabled');
            }
            if (mainLink) {
               mainLink.classList.add('nav-link');
               mainLink.classList.remove('nav-link-disabled');
            }
         }

         if (typeof $.fn.pushMenu !== 'undefined') {
            $('[data-widget="pushmenu"]').pushMenu('collapse');
         }
      }
   }


   async activateRoute(e, oldRoute = null) {
      if (oldRoute) {
         const currentRoute = this.routes.find(item => item.route === oldRoute);
         if (currentRoute.styles && currentRoute.styles.length > 0) {
            currentRoute.styles.forEach(style => {
               document.querySelector(`link[href='/css/${style}']`).remove();
            })
         }
         if (currentRoute.scripts && currentRoute.scripts.length > 0) {
            currentRoute.scripts.forEach(script => {
               document.querySelector(`script[src='/js/${script}']`).remove();
            })
         }
         if (currentRoute.unload && typeof currentRoute.unload === 'function') {
            currentRoute.unload()
         }
      }

      const urlRoute = window.location.pathname
      const newRoute = this.routes.find(item => item.route === urlRoute)

      if (newRoute) {
         this.closeMobileSidebar();

         this.contentPageElement.innerHTML = '<div class="loading">Загрузка...</div>';

         if (newRoute.styles && newRoute.styles.length > 0) {
            const stylePromises = newRoute.styles.map(style =>
              FileUtils.loadPageStyle('/css/' + style, this.adminLteStylesheetElement)
            );
            await Promise.all(stylePromises);
         }

         if (newRoute.scripts && newRoute.scripts.length > 0) {
            const scriptPromises = newRoute.scripts.map(script =>
              FileUtils.loadPageScript('/js/' + script)
            );
            await Promise.all(scriptPromises);
         }
         if (newRoute.title) {
            this.titlePageElement.innerText = newRoute.title ;
         }

         if (newRoute.filepathTemplate) {
            let contentBlock = this.contentPageElement
            if (newRoute.useLayout) {

               this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text())
               contentBlock = document.getElementById('content-layout')
               this.closeMobileSidebar();
               document.body.classList.add('sidebar-mini')
               document.body.classList.add('layout-fixed')
               let isLogout = false;
               const profileToggle = document.getElementById('profile-toggle');
               const logoutElement = document.getElementById('logout');

               profileToggle.addEventListener('click', () => {
                  if (!isLogout) {
                     // Показываем с анимацией
                     logoutElement.style.display = 'flex';
                     logoutElement.classList.remove('logout-hiding');
                     isLogout = true;
                  } else {
                     // Скрываем с анимацией
                     logoutElement.classList.add('logout-hiding');

                     // Обработчик завершения анимации
                     const handleAnimationEnd = () => {
                        logoutElement.style.display = 'none';
                        logoutElement.classList.remove('logout-hiding');
                        logoutElement.removeEventListener('animationend', handleAnimationEnd);
                     };

                     logoutElement.addEventListener('animationend', handleAnimationEnd);
                     isLogout = false;
                  }
               });
               const mainLinkElement = document.getElementById('main-link');


               const selectNevBarElement = document.getElementById('select-nav-bar');
               const menuSelectNavBar = document.getElementById('menu-select-nav-bar');
               const cacheLinkElement = document.getElementById('cache-link');
               let isActive = false;
               selectNevBarElement.addEventListener('click', function () {

                  if (!isActive) {
                     this.classList.add('active');
                     cacheLinkElement.classList.remove('nav-link');
                     mainLinkElement.classList.remove('nav-link');
                     cacheLinkElement.classList.add('nav-link-disabled');
                     mainLinkElement.classList.add('nav-link-disabled');
                     menuSelectNavBar.classList.remove('d-none');
                     isActive = true;
                     return true;
                  } else {
                     cacheLinkElement.classList.add('nav-link');
                     mainLinkElement.classList.add('nav-link');
                     cacheLinkElement.classList.remove('nav-link-disabled');
                     mainLinkElement.classList.remove('nav-link-disabled');
                     this.classList.remove('active');
                     menuSelectNavBar.classList.add('d-none');
                     isActive = false;
                     return false;
                  }
               });

               this.profileElement = document.getElementById('userFullName');
               this.userName = '';
               if (!this.userName) {
                  const userInfo = JSON.parse(AuthUtils.getAuthInfo(AuthUtils.userInfoKey));
                  if (userInfo && userInfo.name ) {
                     this.userName = userInfo.name;
                  }
               }

               const balance = await BalanceService.getBalance()
               this.balance = balance.balance ? balance.balance : 0;

               document.getElementById('amount-layout').innerText = `${this.balance}$`
               this.profileElement.innerText = this.userName;
               if (newRoute.route === '/income' || newRoute.route === '/expenses') {
                  selectNevBarElement.classList.add('active');
                  menuSelectNavBar.classList.remove('d-none');
                  isActive = true;

                  cacheLinkElement.classList.remove('nav-link');
                  mainLinkElement.classList.remove('nav-link');
                  cacheLinkElement.classList.add('nav-link-disabled');
                  mainLinkElement.classList.add('nav-link-disabled');
               }
               ActivateUi.activateMenuItem(newRoute);
            } else {
               document.body.classList.remove('sidebar-mini')
               document.body.classList.remove('layout-fixed')
            }
            contentBlock.innerHTML = await fetch(newRoute.filepathTemplate).then(response => response.text())
         }
         if (newRoute.load && typeof newRoute.load === 'function') {
            newRoute.load()
         }
      } else {
         history.pushState({}, '', '/404');
         await this.activateRoute(null, null);
      }
   }


}
