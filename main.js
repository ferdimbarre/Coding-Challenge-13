// function to fetch data
function productData() {
    const request = fetch("https://www.course-api.com/javascript-store-products").then((Response) =>
    { console.log(Response)
        return Response.json()
    }).then((data) => { //then consumes the promise 
        displayData(data) //will pass through function to display data after fetch complete
    }).catch((error) =>
    {
        alert(error) //this catches errors in case they happen and sends out alert
    }
    ).finally(() => 
    console.log("Failed to load products. Please try again later.")) //this explains to users what happened 
    
    }; productData();
    //created a function to fetch data, catch error and display message 