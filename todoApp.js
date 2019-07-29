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
	searchText: ""
}

const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function (paragraph) {
	if (paragraph.textContent.includes("the")) {
		paragraph.remove()
	}
})

const renderTodos = (todos, filters) => {
	const filteredTodos = todos.filter( (todo) => {
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	const incompleteTodos = filteredTodos.filter(function(todo) {
	return !todo.isCompleted
})


	document.querySelector("#filtered-todos").innerHTML = ""

	const summary = document.createElement("h2")
	summary.textContent = `You have ${incompleteTodos.length} left`
	document.querySelector("#filtered-todos").appendChild(summary)

	filteredTodos.forEach(function(todo) {
		const allTodos = document.createElement("p")
		allTodos.textContent = todo.text
		document.querySelector("#filtered-todos").appendChild(allTodos)
	})
}

renderTodos(todos, filters)

document.querySelector("#filter-todos").addEventListener("input", (e) => {
	filters.searchText = e.target.value
	renderTodos(todos, filters)
})

document.querySelector("#add-todo").addEventListener("click", (e) => {
	console.log("You have added new Todo")
})

document.querySelector("#new-todo-text").addEventListener("input", (e) => {
	console.log(e.target.value)
})