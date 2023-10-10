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
		let response = await axios.post('https://crudcrud.com/api/5183b84441ce4dcda70b2e546904a3f1/chocoData',chocoData)
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
  if (data.length > 0) {
    const index = data.length - 1; // Get the index of the last item
    const updatedQuant = data[ind].quant - 1;
    updateQuantity(ind, updatedQuant);
  }
}

// Function to handle "Buy 2" button click
function buyTwo(ind) {
  if (data.length > 0) {
    const index = data.length - 1; // Get the index of the last item
    const updatedQuant = data[ind].quant - 2;

    updateQuantity(ind, updatedQuant);
  }
}

// Function to handle "Buy 3" button click
function buyThree(ind) {
  if (data.length > 0) {
    const updatedQuant = data[ind].quant - 3;
    updateQuantity(ind, updatedQuant);
  }
}

// Function to update quantity and make API call
async function updateQuantity(index, updatedQuant) {
  if (index >= 0 && index < data.length) {
    const itemId = data[index]._id;
    const updatedData = {name:name.value,disc:disc.value,price:price.value, quant: updatedQuant };

    try {
      const response = await axios.put(`https://crudcrud.com/api/5183b84441ce4dcda70b2e546904a3f1/chocoData/${itemId}`, updatedData);
      console.log(response);

      // Update the local data and display on the screen
      data[index].quant = updatedQuant;
      displayOnScreen();
    }
     catch (error) {
      console.error('Error updating quantity:', error);
    }
  }
}


async function fetchData() {
  try {
    const response = await axios.get('https://crudcrud.com/api/5183b84441ce4dcda70b2e546904a3f1/chocoData');
    data = response.data;
    displayOnScreen();
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call fetchData when the page loads to retrieve all data
fetchData();

