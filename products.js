const products = [
    {id: 1, name: 'phone', qty: 3, isInStock: true},
    {id: 2, name: 'tablet', qty: 2, isInStock: true},
    {id: 3, name: 'tv', qty: 1, isInStock: true},
    {id: 4, name: 'monitor', qty: 0, isInStock: false},
    {id: 5, name: 'charger', qty: 0, isInStock: false},
    {id: 6, name: 'mifi', qty: 4, isInStock: true}
]

function available(data){
    let availablePdt = [];
    for (const index in data) {
        if(data[index].isInStock === true){
            // console.log(data[index]);
            availablePdt.push(data[index])
        }
    }
    return availablePdt;
}

console.log('response', available(products));
