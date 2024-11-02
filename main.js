// function to fetch data using promises 
function productData() {
    const request = fetch("https://www.course-api.com/javascript-store-products").then((Response) =>
    { console.log(Response)
        return Response.json()
    }).then((data) => { //then consumes the promise 
        displayData(data) //will pass through function to display data after fetch complete
    }).catch((error) => //this catches the errors
    {
        alert(error) //this catches errors in case they happen and sends out alert
    }
    ).finally(() => 
    console.log("Failed to load products. Please try again later.")) //this explains to users what happened 
    
    }; productData();
    //created a function to fetch data, catch error and display message 

    // create the function to display product data 
    function displayData(products) {
        const productPlace = document.getElementById("product-data")
        let productInHTML = ``;
        products.forEach((product) => {
            const {
                company, 
                price, 
                name, 
                image
            } = product.fields ; //separates product data in fields 
        
             productInHTML += 
            `<section class="product">
            <img src="${image[0].url}" />
            <h3>${name}</h3>
            <p>Company: ${company}</p>
            <p>Price: $${(price / 100)}</p>
        </section>`;
        }); // this will update dynamically in the html file 
        
        productPlace.innerHTML = productInHTML ; 
        }; 