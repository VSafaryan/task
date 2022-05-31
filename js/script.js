let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

let filteredItemsField = document.getElementById("filteredItemsField")
filteredItemsField.style.display = 'flex'
filteredItemsField.style.justifyContent = 'center'

let ul = document.createElement("ul");
ul.style.width = '500px'
ul.style.listStyle = 'none'

courses.map(course => {
    let li = document.createElement("li");

    li.style.border = '1px solid'
    li.style.padding = '10px 20px'
    li.style.borderRadius = '5px'
    li.style.marginBottom = '10px'
    li.style.textAlign = 'center'

    li.innerHTML = `${course.name}`

    ul.append(li)
    filteredItemsField.append(ul)
})


function filterHandler() {
    let min_value = document.getElementById('min_value').value
    let max_value = document.getElementById('max_value').value


    let filteredCourses = []
    courses.forEach(course => {
        if (course.prices[0] <= Number(min_value) && max_value === '') {
            filteredCourses.push(course)
        } else if (course.prices[1] <= Number(max_value) && min_value === '') {
            filteredCourses.push(course)
        } else if (course.prices[0] >= Number(min_value) && course.prices[1] <= Number(max_value)) {
            filteredCourses.push(course)
        }
    })
    filteredItemsField.innerHTML = ''

    if (filteredCourses.length) {
        let newUlElement = document.createElement("ul");
        newUlElement.style.width = '500px'
        newUlElement.style.listStyle = 'none'

        filteredCourses.map(course => {
            let li = document.createElement("li");

            li.style.border = '1px solid'
            li.style.padding = '10px 20px'
            li.style.borderRadius = '5px'
            li.style.marginBottom = '10px'
            li.style.textAlign = 'center'

            li.innerHTML = `${course.name}`

            newUlElement.append(li)
            filteredItemsField.append(newUlElement)
        })
    } else {
        let h1 = document.createElement('h1')
        h1.innerText = 'Courses not found'
        filteredItemsField.append(h1)
    }

    if (Number(min_value) > Number(max_value) || min_value === '' && max_value === '') {
        filteredItemsField.innerHTML = ''
        let h1 = document.createElement('h1')
        h1.innerText = 'Please type correct values'
        filteredItemsField.append(h1)
    }
}




