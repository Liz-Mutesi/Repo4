const products = [
    {id: 1, name: 'maize', qty: 3, isInStock: true},
    {id: 2, name: 'soyabean', qty: 2, isInStock: true},
    {id: 3, name: 'peas', qty: 1, isInStock: true},
    {id: 4, name: 'groundnuts', qty: 0, isInStock: false},
    {id: 5, name: 'beans', qty: 0, isInStock: false},
    
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
