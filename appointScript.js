const form = document.getElementById("data-form");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const message = document.getElementById("message");
        const dataList = document.getElementById("data-list");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                name: nameInput.value,
                email: emailInput.value,
            };

            try {
                const response = await axios.post("https://crudcrud.com/api/1f263326b7064fef8eda679e10820694/allUserData", data);
                console.log(response.data);

                message.textContent = "Data saved successfully.";

                // Clear input fields
                nameInput.value = "";
                emailInput.value = "";

                // Fetch and display data
                fetchAndDisplayData();
            } catch (error) {
                console.error(error);
                message.textContent = "Error occurred while saving data.";
            }
        });

        function fetchAndDisplayData() {
            axios.get("https://crudcrud.com/api/1f263326b7064fef8eda679e10820694/allUserData")
                .then((response) => {
                    dataList.innerHTML = ""; // Clear previous data
                    response.data.forEach((item) => {
                        const listItem = document.createElement("li");
                        listItem.textContent = `Name: ${item.name}, Email: ${item.email}`;
                        dataList.appendChild(listItem);
                    });
                })
                .catch((error) => {
                    console.error(error);
                    message.textContent = "Error occurred while fetching data.";
                });
        }

        // Initial data fetch and display
        fetchAndDisplayData();