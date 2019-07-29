const todos = [{
	text: "Feed baby",
	isCompleted: true
}, 
{
	text: "Learn JS",
	isCompleted: true
}, 
{
	text: "Go to work",
	isCompleted: false
}, 
{
	text: "Do dishes",
	isCompleted: true
}, 
{
	text: "Clean car",
	isCompleted: false
}];

const filters = {
	searchText: "",
	hideCompleted: false
}

const renderTodos = (todos, filters) => {
	let filteredTodos = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	filteredTodos = filteredTodos.filter( (todo) => {
		if(filters.hideCompleted) {
			return !todo.isCompleted
		} else {
			return true
		}
	})

	const incompleteTodos = filteredTodos.filter( (todo) =>  {
		return !todo.isCompleted
	})

	document.querySelector("#filtered-todos").innerHTML = ""

	const summary = document.createElement("h2")
	summary.textContent = `You have ${incompleteTodos.length} left`
	document.querySelector("#filtered-todos").appendChild(summary)

	filteredTodos.forEach((todo) => {
		const allTodo = document.createElement("p")
		allTodo.textContent = todo.text
		document.querySelector("#filtered-todos").appendChild(allTodo)
	})
}



renderTodos(todos, filters)

document.querySelector("#filter-todos").addEventListener("input", (e) => {
	filters.searchText = e.target.value
	renderTodos(todos, filters)
})

document.querySelector("#add-todo").addEventListener("submit", (e) => {
	e.preventDefault()
	todos.push({
		text: e.target.elements.newTodo.value,
		isCompleted: false
	})
	renderTodos(todos, filters)
	e.target.elements.newTodo.value = ""

})

document.querySelector("#completed-todos").addEventListener("change", (e) =>{
		filters.hideCompleted = e.target.checked
		renderTodos(todos, filters)
})