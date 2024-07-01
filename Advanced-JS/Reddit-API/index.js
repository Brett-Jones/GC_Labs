
const getRedditData = async () => {
	const url = "https://www.reddit.com/r/aww/.json"
	const res = await fetch(url)
	return (data = await res.json())
}

// getRedditData().then(data =>
// 	console.log(data.data.children)
// )

const displayData = async () => {
	const data = await getRedditData()
    console.log(data)
    const scrubbedData = data.data.children.map(child => {
        return child.data
    }) 
    console.log(scrubbedData)
	for (const datum of scrubbedData) {
		const div = document.createElement("div")
		div.innerText = datum.title
        const img = document.createElement("img")
        img.src=datum.thumbnail
        div.append(img)
        const link = document.createElement("a")
        link.href = "https://reddit.com/" + datum.permalink;
        link.innerText = "Click here to see original post!";
        div.append(link)
		document.body.append(div)
        console.log(div)
	}

    

    // const titles = scrubbedData.map(datum => datum.title)
    // console.log(titles)
}


displayData()

// const users = [
//     {id: 1},
//     {id: 2},
//     {id: 3},
//     {id: 4},
// ];

// const usedIds = [];
// users.forEach(user => {
//     userIds.push(user.id)
// });


// const usedIds2 = users.map(user => user.id);





