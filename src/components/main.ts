import type { Operation } from '@/types/operations/operation-service/operation.type'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ErrorTypes } from '@/types/services/error.type'
import Chart from 'chart.js'
import { OperationsService } from '../services/operations-service'
import { AuthUtils } from '../utils/auth-utils'

export class Main {
	readonly openNewRoute: OpenNewRouteType
	private isAllBtn!: boolean
	private allBtn!: HTMLButtonElement | null
	private dayBtn!: HTMLButtonElement | null
	private weekBtn!: HTMLButtonElement | null
	private monthBtn!: HTMLButtonElement | null
	private yearBtn!: HTMLButtonElement | null
	private intervalBtn!: HTMLButtonElement | null
	private pieChartCanvas!: CanvasRenderingContext2D | null
	private pieChartCanvas2!: CanvasRenderingContext2D | null


	private pieChart: Chart | null = null
	private pieChart2: Chart | null = null

	private isIntervalMode: boolean = false
	constructor(openNewRoute: (arg: string) => void) {
		this.openNewRoute = openNewRoute

		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}
				this.findElements()
				this.isAllBtn = true

				this.start().then()
				this.setupToggleButtons()
				this.setupIntervalButton()
			}
		)
	}

	findElements() {
		this.allBtn = document.getElementById('all') as HTMLButtonElement
		this.yearBtn = document.getElementById('year') as HTMLButtonElement
		this.monthBtn = document.getElementById('month') as HTMLButtonElement
		this.weekBtn = document.getElementById('week') as HTMLButtonElement
		this.dayBtn = document.getElementById('day') as HTMLButtonElement
		this.intervalBtn = document.getElementById('interval') as HTMLButtonElement

		this.pieChartCanvas = (
			document.getElementById('donutChart') as HTMLCanvasElement
		).getContext('2d')
		this.pieChartCanvas2 = (
			document.getElementById('donutChart2') as HTMLCanvasElement
		).getContext('2d')
	}

	setupIntervalButton() {
		this.intervalBtn?.addEventListener('click', () => {
			this.toggleIntervalMode()
		})
	}
	toggleIntervalMode() {
		this.isIntervalMode = !this.isIntervalMode

		if (this.isIntervalMode) {
			this.showDateInputs()
		} else {
			this.hideDateInputs()
		}
	}
	showDateInputs() {
		const dateFromInput = document.createElement('input')
		dateFromInput.type = 'date'
		dateFromInput.id = 'dateFromInput'
		dateFromInput.className = 'date-input'

		const dateToInput = document.createElement('input')
		dateToInput.type = 'date'
		dateToInput.id = 'dateToInput'
		dateToInput.className = 'date-input'

		const saveButton = document.createElement('button')
		saveButton.id = 'saveInterval'
		saveButton.className = 'save-interval-btn'
		saveButton.textContent = 'Сохранить'
		saveButton.addEventListener('click', () => this.saveInterval())

		const dateCurrentDiv = document.querySelector(
			'.date-current'
		) as HTMLElement
		dateCurrentDiv.innerHTML = ''

		const fromSpan = document.createElement('div')
		fromSpan.textContent = 'c '
		dateCurrentDiv.appendChild(fromSpan)
		dateCurrentDiv.appendChild(dateFromInput)

		const toSpan = document.createElement('div')
		toSpan.textContent = ' по '
		dateCurrentDiv.appendChild(toSpan)
		dateCurrentDiv.appendChild(dateToInput)

		dateCurrentDiv.appendChild(saveButton)

		this.intervalBtn?.classList.add('active')
	}
	hideDateInputs() {
		const dateCurrentDiv = document.querySelector(
			'.date-current'
		) as HTMLElement
		dateCurrentDiv.innerHTML =
			'c <span id="dateFrom">Дата</span> по <span id="dateTo">Дата</span>'

		this.intervalBtn?.classList.remove('active')
		this.isIntervalMode = false
	}
	private async saveInterval() {
		const dateFromInput: HTMLInputElement | null = document.getElementById(
			'dateFromInput'
		) as HTMLInputElement
		const dateToInput: HTMLInputElement | null = document.getElementById(
			'dateToInput'
		) as HTMLInputElement
		if (!dateFromInput || !dateToInput) return
		const dateFrom = dateFromInput.value
		const dateTo = dateToInput.value

		if (!dateFrom || !dateTo) {
			alert('Пожалуйста, выберите обе даты')
			return
		}

		if (new Date(dateFrom) > new Date(dateTo)) {
			alert('Дата "с" не может быть позже даты "по"')
			return
		}

		const data = await this.getOperationsIntervalData(dateFrom, dateTo)
		if (data) {
			this.createPieChart(data as Operation[])
		}
	}
	private async start() {
		if (this.isAllBtn) {
			this.allBtn?.classList.add('active')
			const data = await this.getOperationsAllData()
			if (data) {
				this.createPieChart(data as Operation[])
			}
		} else {
			this.allBtn?.classList.remove('active')
		}
	}

	private async getOperationsAllData() {
		const response = await OperationsService.getOperationsAll()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.operations
	}

	private async getOperationsDayData() {
		const response = await OperationsService.getOperationsDay()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.operations
	}

	private async getOperationsMonthData() {
		const response = await OperationsService.getOperationsMonth()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.operations
	}

	private async getOperationsWeekData() {
		const response = await OperationsService.getOperationsWeek()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.operations
	}

	private async getOperationsYearData() {
		const response = await OperationsService.getOperationsYear()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.operations
	}

	private async getOperationsIntervalData(
		dateFrom: string,
		dateTo: string
	): Promise<null | Operation[] | ErrorTypes | []> {
		const response = await OperationsService.getOperationsInterval(
			dateFrom,
			dateTo
		)
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return null
			}
			return null
		}
		if (!response.operations) return []
		return response.operations
	}
	private setupToggleButtons() {
		const buttons = [
			this.allBtn,
			this.dayBtn,
			this.weekBtn,
			this.monthBtn,
			this.yearBtn,
			this.intervalBtn,
		]

		buttons.forEach(btn => {
			btn?.addEventListener('click', async () => {
				if (btn.id !== 'interval') {
					this.isIntervalMode = false
					this.hideDateInputs()
				}
				buttons.forEach(b => b?.classList.remove('active'))

				btn.classList.add('active')
				if (btn.id === 'interval') {
					return
				}

				let data
				switch (btn.id) {
					case 'day':
						data = await this.getOperationsDayData()
						break
					case 'week':
						data = await this.getOperationsWeekData()
						break
					case 'month':
						data = await this.getOperationsMonthData()
						break
					case 'year':
						data = await this.getOperationsYearData()
						break
					default: // 'all'
						data = await this.getOperationsAllData()
						break
				}

				if (data) {
					this.createPieChart(data as Operation[])
				}
			})
		})
	}

	private createPieChart(operationsData: Operation[]) {
		const incomeOperations = operationsData.filter(op => op.type === 'income')
		const incomeData = this.groupDataByCategory(incomeOperations)

		const expenseOperations = operationsData.filter(op => op.type === 'expense')
		const expenseData = this.groupDataByCategory(expenseOperations)

		if (
			incomeData.labels.length > 0 &&
			incomeData.amounts.length > 0 &&
			incomeData.amounts.some(amount => (amount as number) > 0)
		) {
			this.createChart(
				this.pieChartCanvas,
				incomeData.labels,
				incomeData.amounts,
				'Доходы по категориям',
				'pieChart'
			)
		} else {
			this.clearChart('pieChart')
		}

		if (
			expenseData.labels.length > 0 &&
			expenseData.amounts.length > 0 &&
			expenseData.amounts.some(amount => (amount as number) > 0)
		) {
			this.createChart(
				this.pieChartCanvas2,
				expenseData.labels,
				expenseData.amounts,
				'Расходы по категориям',
				'pieChart2'
			)
		} else {
			this.clearChart('pieChart2')
		}
	}
	private groupDataByCategory(operations: Operation[]) {
		const categories: { [key: string]: number } = {}

		operations.forEach(operation => {
			const category = operation.category || 'Без категории'

			if (!categories[category]) {
				categories[category] = 0
			}
			categories[category] += Number(operation.amount)
		})

		const sortedCategories = Object.entries(categories).sort(
			([, a], [, b]) => b - a
		)

		return {
			labels: sortedCategories.map(([category]) => category),
			amounts: sortedCategories.map(([, amount]) => amount),
		}
	}
	private clearChart(chartName: 'pieChart' | 'pieChart2'): void {
		const chart = chartName === 'pieChart' ? this.pieChart : this.pieChart2

		if (chart) {
			chart.destroy()
			if (chartName === 'pieChart') {
				this.pieChart = null
			} else {
				this.pieChart2 = null
			}
		}

		const canvasId = chartName === 'pieChart' ? 'donutChart' : 'donutChart2'
		const canvas = document.getElementById(canvasId) as HTMLCanvasElement
		canvas.classList.remove('chartjs-render-monitor')
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null
		if (!ctx) return
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		ctx.fillStyle = '#6C757D'
		ctx.font = '16px Roboto'
		ctx.textAlign = 'center'
		ctx.fillText(
			'Нет данных для отображения',
			canvas.width / 2,
			canvas.height / 2
		)
	}

	private createChart(
		canvas: CanvasRenderingContext2D | null,
		labels: string[],
		data: number[],
		title: string,
		chartName: 'pieChart' | 'pieChart2'
	): void {
	
		const existingChart =
			chartName === 'pieChart' ? this.pieChart : this.pieChart2
		if (existingChart) {
			existingChart.destroy()
		}

		if (!canvas) return

		const backgroundColors = [
			'#f56954',
			'#00a65a',
			'#f39c12',
			'#00c0ef',
			'#3c8dbc',
			'#d2d6de',
			'#FF6384',
			'#36A2EB',
			'#FFCE56',
			'#4BC0C0',
			'#9966FF',
			'#FF9F40',
			'#FF6384',
			'#C9CBCF',
			'#4BC0C0',
			'#FFCD56',
			'#36A2EB',
			'#FF6384',
		]

		const pieData = {
			labels: labels,
			datasets: [
				{
					data: data,
					backgroundColor: backgroundColors.slice(0, labels.length),
					borderWidth: 1,
					hoverOffset: 4,
				},
			],
		}

		const pieOptions = {
			maintainAspectRatio: false,
			responsive: true,
			plugins: {
				title: {
					display: true,
					text: title,
					font: {
						size: 16,
						weight: 'bold',
					},
					padding: 20,
				},
				legend: {
					position: 'bottom',
					labels: {
						boxWidth: 12,
						padding: 15,
						font: {
							size: 12,
						},
					},
				},
				tooltip: {
					callbacks: {
						label: function (context: any) {
							const label = context.label || ''
							const value = context.raw || 0
							const total = context.dataset.data.reduce(
								(a: number, b: number) => a + b,
								0
							)
							const percentage = ((value / total) * 100).toFixed(1)
							return `${label}: $${value} (${percentage}%)`
						},
					},
				},
			},
		}

		const newChart = new Chart(canvas, {
			type: 'pie',
			data: pieData,
			options: pieOptions,
		})

		if (chartName === 'pieChart') {
			this.pieChart = newChart
		} else {
			this.pieChart2 = newChart
		}
	}
}
