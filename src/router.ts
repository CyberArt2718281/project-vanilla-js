import { Login } from './components/auth/login'
import { Logout } from './components/auth/logout'
import { SignUp } from './components/auth/sign-up'
import { CreateExpense } from './components/expenses/create'
import { EditExpense } from './components/expenses/edit'
import { Expense } from './components/expenses/expenses'
import { CreateIncomesExpenses } from './components/income-expenses/create'
import { EditIncomesExpenses } from './components/income-expenses/edit'
import { IncomeExpenses } from './components/income-expenses/income-expenses'
import { CreateIncome } from './components/income/create'
import { EditIncome } from './components/income/edit'
import { Income } from './components/income/income'
import { Main } from './components/main'
import { BalanceService } from './services/balance-service'
import type {
	IRouter,
	NavigationElements,
	UserInfo,
} from './types/router/index'
import type { Routes } from './types/router/routes.type'
import { AuthKeysValues } from './types/utils/auth-utils/auth-utils.type'
import { ActivateUi } from './utils/activateUi'
import { AuthUtils } from './utils/auth-utils'
import { FileUtils } from './utils/file-utils'

export class Router implements IRouter {
	private titlePageElement: HTMLElement | null
	readonly contentPageElement: HTMLElement | null
	readonly adminLteStylesheetElement: HTMLElement | null
	private navigationElements: NavigationElements | null
	private profileElement: HTMLElement | null
	private userName: string | null
	private balance: number = 0
	private routes: Routes[] = []

	constructor() {
		this.initEvents()
		this.titlePageElement = document.getElementById('title')
		this.contentPageElement = document.getElementById('content')
		this.adminLteStylesheetElement = document.getElementById('admin-lte-style')
		this.userName = null
		this.navigationElements = null
		this.profileElement = null

		this.routes = [
			{
				route: '/',
				title: 'Главная',
				filepathTemplate: '/templates/pages/main.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new Main(this.openNewRoute.bind(this))
				},
				styles: ['main.css'],
				scripts: ['Chart.min.js'],
			},
			{
				route: '/income',
				title: 'Доходы',
				filepathTemplate: '/templates/pages/income/income.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new Income(this.openNewRoute.bind(this))
				},
				styles: ['income.css'],
			},
			{
				route: '/income/create',
				title: 'Создание',
				filepathTemplate: '/templates/pages/income/create.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new CreateIncome(this.openNewRoute.bind(this))
				},
				styles: ['create.css'],
			},
			{
				route: '/income/edit',
				title: 'Редактирование',
				filepathTemplate: '/templates/pages/income/edit.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new EditIncome(this.openNewRoute.bind(this))
				},
				styles: ['edit.css'],
			},
			{
				route: '/expenses',
				title: 'Расходы',
				filepathTemplate: '/templates/pages/expenses/expenses.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new Expense(this.openNewRoute.bind(this))
				},
				styles: ['income.css'],
			},
			{
				route: '/expenses/create',
				title: 'Создание',
				filepathTemplate: '/templates/pages/expenses/create.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new CreateExpense(this.openNewRoute.bind(this))
				},
				styles: ['create.css'],
			},
			{
				route: '/expenses/edit',
				title: 'Редактирование',
				filepathTemplate: '/templates/pages/expenses/edit.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new EditExpense(this.openNewRoute.bind(this))
				},
				styles: ['edit.css'],
			},
			{
				route: '/income-expenses',
				title: 'Доходы и Расходы',
				filepathTemplate:
					'/templates/pages/income-expenses/income-expenses.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new IncomeExpenses(this.openNewRoute.bind(this))
				},
				styles: ['income-expenses.css'],
			},
			{
				route: '/income-expenses/create',
				title: 'Доходы и Расходы | Создание',
				filepathTemplate: '/templates/pages/income-expenses/create.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new CreateIncomesExpenses(this.openNewRoute.bind(this))
				},
				styles: ['income-expenses-create.css'],
			},
			{
				route: '/income-expenses/edit',
				title: 'Доходы и Расходы | Редактирование',
				filepathTemplate: '/templates/pages/income-expenses/edit.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new EditIncomesExpenses(this.openNewRoute.bind(this))
				},
				styles: ['income-expenses-create.css'],
			},
			{
				route: '/404',
				title: 'Страница не найдена',
				useLayout: false,
				filepathTemplate: '/templates/pages/404.html',
				styles: ['error-page.css'],
			},
			{
				route: '/login',
				title: 'Авторизация',
				filepathTemplate: '/templates/pages/auth/login.html',
				useLayout: false,
				load: () => {
					new Login(this.openNewRoute.bind(this))
				},
				styles: ['form.css'],
			},
			{
				route: '/sign-up',
				title: 'Регистрация',
				useLayout: false,
				filepathTemplate: '/templates/pages/auth/sign-up.html',
				load: () => {
					new SignUp(this.openNewRoute.bind(this))
				},
				unload: () => {},
				styles: ['form.css'],
			},
			{
				route: '/logout',
				load: () => {
					new Logout(this.openNewRoute.bind(this))
				},
			},
		]
	}

	private initEvents(): void {
		window.addEventListener(
			'DOMContentLoaded',
			this.handleDOMContentLoaded.bind(this)
		)
		window.addEventListener('popstate', this.handlePopState.bind(this))
		document.addEventListener('click', this.clickHandler.bind(this))
	}

	private handleDOMContentLoaded = (): void => {
		this.activateRoute().catch(console.error)
	}

	private handlePopState = (): void => {
		this.activateRoute().catch(console.error)
	}

	async openNewRoute(url: string): Promise<void> {
		const currentRoute: string = window.location.pathname
		history.pushState({}, '', url)
		await this.activateRoute(currentRoute)
	}

	private async clickHandler(e: Event): Promise<void> {
		let element = null
		const targetElement = e.target as HTMLElement | null
		if (!targetElement) return
		if (targetElement.nodeName === 'A') {
			element = targetElement
		} else if (targetElement.parentNode?.nodeName === 'A') {
			element = targetElement.parentNode
		} else if (targetElement.closest('a')) {
			element = targetElement.closest('a')
		}

		if (element) {
			e.preventDefault()

			const currentRoute = window.location.pathname
			const url = (element as HTMLLinkElement).href.replace(
				window.location.origin,
				''
			)
			if (
				!url ||
				currentRoute === url.replace('#', '') ||
				url.startsWith('javascript:void(0)')
			) {
				return
			}
			this.closeMobileSidebar()
			await this.openNewRoute(url)
		}
	}

	closeMobileSidebar(): void {
		if (window.innerWidth < 992) {
			const body = document.querySelector('body')
			const sidebar = document.querySelector('.main-sidebar')
			const overlay = document.querySelector('.sidebar-overlay')

			if (sidebar) sidebar.classList.remove('sidebar-open')
			if (body) body.classList.remove('sidebar-open')
			if (overlay) (overlay as HTMLElement).style.display = 'none'

			// Закрываем меню категорий если оно открыто
			if (this.navigationElements) {
				const { selectNavBar, menuSelectNavBar, cacheLink, mainLink } =
					this.navigationElements
				if (selectNavBar) selectNavBar.classList.remove('active')
				if (menuSelectNavBar) menuSelectNavBar.classList.add('d-none')
				if (cacheLink) {
					cacheLink.classList.add('nav-link')
					cacheLink.classList.remove('nav-link-disabled')
				}
				if (mainLink) {
					mainLink.classList.add('nav-link')
					mainLink.classList.remove('nav-link-disabled')
				}
			}

			if (typeof ($ as JQueryStatic).fn.pushMenu !== 'undefined') {
				$('[data-widget="pushmenu"]').pushMenu('collapse')
			}
		}
	}

	private async activateRoute(oldRoute: string | null = null): Promise<void> {
		if (oldRoute) {
			const currentRoute: Routes | undefined = this.routes.find(
				item => item.route === oldRoute
			)
			if (currentRoute) {
				if (currentRoute.styles && currentRoute.styles.length > 0) {
					currentRoute.styles.forEach(style => {
						document.querySelector(`link[href='/css/${style}']`)?.remove()
					})
				}
				if (currentRoute.scripts && currentRoute.scripts.length > 0) {
					currentRoute.scripts.forEach(script => {
						document.querySelector(`script[src='/js/${script}']`)?.remove()
					})
				}
				if (currentRoute.unload && typeof currentRoute.unload === 'function') {
					currentRoute.unload()
				}
			}
		}

		const urlRoute = window.location.pathname
		const newRoute: Routes | undefined = this.routes.find(
			item => item.route === urlRoute
		)

		if (newRoute) {
			this.closeMobileSidebar()
			if (this.contentPageElement) {
				this.contentPageElement.innerHTML =
					'<div class="loading">Загрузка...</div>'
			}

			if (newRoute.styles && newRoute.styles.length > 0) {
				const stylePromises = newRoute.styles.map(style =>
					FileUtils.loadPageStyle(
						'/css/' + style,
						this.adminLteStylesheetElement as HTMLElement
					)
				)
				await Promise.all(stylePromises)
			}

			if (newRoute.scripts && newRoute.scripts.length > 0) {
				const scriptPromises = newRoute.scripts.map(script =>
					FileUtils.loadPageScript('/js/' + script)
				)
				await Promise.all(scriptPromises)
			}
			if (newRoute.title) {
				if (this.titlePageElement) {
					this.titlePageElement.innerText = newRoute.title
				}
			}

			if (newRoute.filepathTemplate) {
				let contentBlock = this.contentPageElement
				if (newRoute.useLayout) {
					if (!this.contentPageElement) return
					this.contentPageElement.innerHTML = await fetch(
						newRoute.useLayout as string
					).then(response => response.text())
					contentBlock = document.getElementById('content-layout')
					this.closeMobileSidebar()
					document.body.classList.add('sidebar-mini')
					document.body.classList.add('layout-fixed')
					let isLogout = false
					const profileToggle = document.getElementById('profile-toggle')
					const logoutElement = document.getElementById('logout')
					if (logoutElement) {
						if (profileToggle) {
							profileToggle.addEventListener('click', () => {
								if (!isLogout) {
									// Показываем с анимацией
									logoutElement.style.display = 'flex'
									logoutElement.classList.remove('logout-hiding')
									isLogout = true
								} else {
									// Скрываем с анимацией
									logoutElement.classList.add('logout-hiding')

									// Обработчик завершения анимации
									const handleAnimationEnd = () => {
										logoutElement.style.display = 'none'
										logoutElement.classList.remove('logout-hiding')
										logoutElement.removeEventListener(
											'animationend',
											handleAnimationEnd
										)
									}

									logoutElement.addEventListener(
										'animationend',
										handleAnimationEnd
									)
									isLogout = false
								}
							})
						}
					}

					const mainLinkElement = document.getElementById('main-link')

					const selectNevBarElement = document.getElementById('select-nav-bar')
					const menuSelectNavBar = document.getElementById(
						'menu-select-nav-bar'
					)
					const cacheLinkElement = document.getElementById('cache-link')

					// Инициализируем navigationElements
					if (
						selectNevBarElement &&
						menuSelectNavBar &&
						cacheLinkElement &&
						mainLinkElement
					) {
						this.navigationElements = {
							selectNavBar: selectNevBarElement,
							menuSelectNavBar: menuSelectNavBar,
							cacheLink: cacheLinkElement,
							mainLink: mainLinkElement,
						}
					}

					this.profileElement = document.getElementById('userFullName')

					let isActive = false
					if (selectNevBarElement) {
						selectNevBarElement.addEventListener('click', function () {
							if (!isActive) {
								this.classList.add('active')
								cacheLinkElement?.classList.remove('nav-link')
								mainLinkElement?.classList.remove('nav-link')
								cacheLinkElement?.classList.add('nav-link-disabled')
								mainLinkElement?.classList.add('nav-link-disabled')
								menuSelectNavBar?.classList.remove('d-none')
								isActive = true
								return true
							} else {
								cacheLinkElement?.classList.add('nav-link')
								mainLinkElement?.classList.add('nav-link')
								cacheLinkElement?.classList.remove('nav-link-disabled')
								mainLinkElement?.classList.remove('nav-link-disabled')
								this.classList.remove('active')
								menuSelectNavBar?.classList.add('d-none')
								isActive = false
								return false
							}
						})
					}

					this.userName = ''
					if (!this.userName) {
						const userInfoString = AuthUtils.getAuthInfo(
							AuthKeysValues.userInfo
						)
						if (userInfoString) {
							const userInfo: UserInfo = JSON.parse(userInfoString)
							if (userInfo && userInfo.name) {
								this.userName = userInfo.name
							}
						}
					}

					const balance = await BalanceService.getBalance()
					if (balance.redirect) {
						this.openNewRoute(balance.redirect)
						return
					}
					this.balance = balance.balance ? balance.balance : 0

					const amountElement = document.getElementById('amount-layout')
					if (amountElement) {
						amountElement.innerText = this.balance.toString() + '$'
					}

					if (this.profileElement && this.userName) {
						this.profileElement.innerText = this.userName
					}
					if (newRoute.route === '/income' || newRoute.route === '/expenses') {
						if (selectNevBarElement) {
							selectNevBarElement.classList.add('active')
						}
						if (menuSelectNavBar) {
							menuSelectNavBar.classList.remove('d-none')
						}
						isActive = true

						if (cacheLinkElement) {
							cacheLinkElement.classList.remove('nav-link')
							cacheLinkElement.classList.add('nav-link-disabled')
						}
						if (mainLinkElement) {
							mainLinkElement.classList.remove('nav-link')
							mainLinkElement.classList.add('nav-link-disabled')
						}
					}
					ActivateUi.activateMenuItem(newRoute)
				} else {
					document.body.classList.remove('sidebar-mini')
					document.body.classList.remove('layout-fixed')
				}
				if (contentBlock && newRoute.filepathTemplate) {
					contentBlock.innerHTML = await fetch(newRoute.filepathTemplate).then(
						response => response.text()
					)
				}
			}
			if (newRoute.load && typeof newRoute.load === 'function') {
				newRoute.load()
			}
		} else {
			history.pushState({}, '', '/404')
			await this.activateRoute()
		}
	}
}
