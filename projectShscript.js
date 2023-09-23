console.log('sharpener project');

// name,disc,price,quant,subBtn

const name = document.querySelector('#name')
const disc = document.querySelector('#disc')
const price = document.querySelector('#price')
const quant = document.querySelector('#quant')

const dataList = document.querySelector('#data-list')
const subBtn = document.querySelector('#subBtn')



subBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const chocoData = {
		name: name.value,
		disc: disc.value,
		price: price.value,
		quant: quant.value,

	}

	// console.log(chocoData);
	postOnCrud(chocoData);
	name.value = ''
	disc.value = ''
	price.value = ''
	quant.value = ''
})


async function postOnCrud(chocoData){
	await axios.post('https://crudcrud.com/api/8b5717cd3c184bec8306b83a9de339d2/chocoData',chocoData)
		.then(response => {
			console.log(response)
			displayOnScreen()
		})
		.catch(err => console.log(err))
}

function displayOnScreen(){
	axios.get('https://crudcrud.com/api/8b5717cd3c184bec8306b83a9de339d2/chocoData')
		 .then(response => {
		 	dataList.innerHTML = ''
		 	response.data.forEach(element => {
		 		const li = document.createElement('li')
		 		li.innerHTML = `${element.name}, ${element.disc}, price: ${element.price},quantity: ${element.quant}, <button onclick="handleOne('${element._id}')">Buy 1</button><button onclick="handleTwo('${element._id}')">Buy 2</button><button onclick="handleThree('${element._id}')">Buy 3</button>`
		 		dataList.appendChild(li)
		 	})
		 })

}

async function handleOne(chocoId){
	await axios.get(`https://crudcrud.com/api/8b5717cd3c184bec8306b83a9de339d2/chocoData/${chocoId}`)
	.then(response => {
		const {name,disc,price,quant,_id} = response.data
		const singleData = {name,disc,price,quant: quant-1}
		updateOnCrud(singleData,_id)
	})
}

async function handleTwo(chocoId){
	await axios.get(`https://crudcrud.com/api/8b5717cd3c184bec8306b83a9de339d2/chocoData/${chocoId}`)
	.then(response => {
		const {name,disc,price,quant,_id} = response.data
		const singleData = {name,disc,price,quant: quant-2}
		updateOnCrud(singleData,_id)
	})
}

async function handleThree(chocoId){
	await axios.get(`https://crudcrud.com/api/8b5717cd3c184bec8306b83a9de339d2/chocoData/${chocoId}`)
	.then(response => {
		const {name,disc,price,quant,_id} = response.data
		const singleData = {name,disc,price,quant: quant-3}
		updateOnCrud(singleData,_id)
	})
}

async function updateOnCrud(singleData,id){
	await axios.put(`https://crudcrud.com/api/8b5717cd3c184bec8306b83a9de339d2/chocoData/${id}`,singleData)
	.then(response => {
		console.log(response.data)
		displayOnScreen();
	})
}

displayOnScreen()