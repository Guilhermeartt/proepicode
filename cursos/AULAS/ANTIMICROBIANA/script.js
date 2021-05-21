//const data = Array.from(document.getElementsByTagName("tr"))

const data = Array.from(document.body.childNodes[1].childNodes[7].childNodes[1].children)

console.log(data)

let perPage = 5 
const state = {
	page: 1,
	perPage,
	totalPage: Math.ceil(data.length / perPage),
	maxVisibleButtons: 5
}


const html = {
	get(element) {
		return document.querySelector(element)
	}
}

const list = {
	create(item) {
		

		item.classList.remove("anime")
		
		html.get('.list').appendChild(item)
		
	},
	
	uptade() {
		html.get('.list').innerHTML = ""
		
		
		let page = state.page - 1
		let start = page * state.perPage
		let end = start + state.perPage
		
		const paginatesItems = data.slice(start, end)
		
		paginatesItems.forEach(list.create)
	}
}

const buttons = {
	element: html.get('.controls .numbers'),
	create(number) {
		const button = document.createElement('div')
		
		button.innerHTML = number;

		if (state.page == number) {
			button.classList.add('active')
		}

		button.addEventListener('click', (event) => {
			const page = event.target.innerText
			
			controls.goTo(page)
			update()
		})
		
		buttons.element.appendChild(button)
		
	},
	update() {
		buttons.element.innerHTML = ""
		
		const { maxLeft, maxRight } = buttons.calculteMaxVisible()
		
		for(let page = maxLeft; page <= maxRight; page++) {
			buttons.create(page)
		}
	},
	calculteMaxVisible() {
		const { maxVisibleButtons } = state
		
		let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
		let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))
		
		
		if (maxLeft < 1) {
			maxLeft = 1
			maxRight = maxVisibleButtons
		}
		
		if (maxRight > state.totalPage) {
			maxLeft = state.totalPage - (maxVisibleButtons - 1)
			maxRight = state.totalPage
			
			if(maxLeft < 1) maxLeft = 1		
		}
		
		return {maxLeft, maxRight}
	}
		
}

const controls = {
	next() {
		state.page++
		if(state.page > state.totalPage) {
			state.page--;		
		}
	},
	prev() {
		state.page--
		
		if(state.page < 1) {
			state.page++;
		}
	},
	goTo(page) {
		if (page < 1) {
			page = 1
		}
		
		state.page = +page
		if (page > state.totalPage) {
			state.page = state.totalPage
		}
	},

	createListners() {
		html.get('.first').addEventListener('click', () => {
			controls.goTo(1)
			update()
		})
		
		html.get('.last').addEventListener('click', () => {
			controls.goTo(state.totalPage)
			update()
		})
		html.get('.next').addEventListener('click', () => {
			controls.next()
			update()
		})
		html.get('.prev').addEventListener('click', () => {
			controls.prev()
			update()
		})
	}
}

function update() {  
	list.uptade()
	buttons.update()
}

function init() {
	update()
	controls.createListners()
}

init()



