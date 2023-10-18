let data = [];


const name = document.querySelector('#name')
const disc = document.querySelector('#disc')
const price = document.querySelector('#price')
const quant = document.querySelector('#quant')
const subBtn = document.querySelector('#subBtn')
const dataList = document.querySelector('#data-list')


subBtn.addEventListener('click', createData)


async function createData(e){
	e.preventDefault()
	const chocoData = {
		name:name.value,
		disc:disc.value,
		price:price.value,
		quant:quant.value
	}
	try {
		let response = await axios.post('https://crudcrud.com/api/dd1c137bd10f4ab29ffb49ddf149ab78/itemsData',chocoData)
		console.log(response.data)
		data.push(response.data)
		displayOnScreen()
	}
	 catch(err) {
		// statements
		console.log(err);
	}
}

function displayOnScreen(){
	dataList.innerHTML = '';

	data.forEach((item,index) => {
		const li = document.createElement('li')
		li.innerHTML = `${item.name},${item.disc},
						price: ${item.price},quantity:${item.quant}
						<button onclick="buyOne('${index}')">Buy 1</button>
						<button onclick="buyTwo('${index}')">Buy 2</button>
						<button onclick="buyThree('${index}')">Buy 3</button>`;
		dataList.appendChild(li);
	})

	
}

function buyOne(ind) {
	console.log('index is ',ind);
  if (data.length > 0) {
    const {_id,name,disc,price,quant} = data[ind];
    let updatedData = { _id,name,disc,price, quant: quant-1 };
    
    updateQuantity(ind,updatedData);
    
  }
}

// Function to handle "Buy 2" button click
function buyTwo(ind) {
	console.log('index is ',ind);
  if (data.length > 0) {
    const {_id,name,disc,price,quant} = data[ind];
    let updatedData = {_id,name,disc,price, quant: quant-2 };
    
    updateQuantity(ind,updatedData);
  }
}

// Function to handle "Buy 3" button click
function buyThree(ind) {
	console.log('index is ',ind);
  if (data.length > 0) {
    const {_id,name,disc,price,quant} = data[ind];
    let updatedData = {_id,name,disc,price, quant: quant-3 };
    
    updateQuantity(ind,updatedData);
  }
}

// Function to update quantity and make API call
async function updateQuantity(index,updatedData) {
  	const id = updatedData._id;
  	// console.log(updatedData)
    try {
      const response = await axios.put(`https://crudcrud.com/api/dd1c137bd10f4ab29ffb49ddf149ab78/itemsData/${id}`, updatedData)
      console.log(response.data);

      // Update the local data and display on the screen
      data[index] = updatedData;
      displayOnScreen();
    }
     catch (error) {
      console.error('Error updating quantity:', error);
    }
  
}


async function fetchData() {
  try {
    const response = await axios.get('https://crudcrud.com/api/dd1c137bd10f4ab29ffb49ddf149ab78/itemsData');
    console.log(response.data)
    data = response.data;
    displayOnScreen();
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call fetchData when the page loads to retrieve all data
fetchData();
console.log("data is ",data)

