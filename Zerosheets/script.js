async function getData() {
  const response = await fetch("https://api.zerosheets.com/v1/kdm", {
    method: "GET",
    headers: {
      Authorization: "Bearer qN2vG0VCgHUxHPDNQNqULlAd93zzOW7k",
    },
  });
  const data = await response.json();
  return data;
}

async function displayData() {
  const data = await getData();
  const productsContainer = document.getElementById("products");

  // Clear previous content
  productsContainer.innerHTML = "";

  // Check if data is not empty
  if (data && data.length > 0) {
    data.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.textContent = ` Name: ${product["Product Name"]}, Quantity: ${product["Quantity in Stock"]}, Price: ${product["Price per Unit"]}`;
      productsContainer.appendChild(productElement);
    });
  } else {
    productsContainer.textContent = "No products available.";
  }
}

// Call displayData when the page loads
window.onload = displayData;
