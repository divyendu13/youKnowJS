function priceList(item){
    let price = 0

    switch(item){
        case 'coffee':
            price=5
            break
        case 'tea':
            price=12
            break
        case 'cake':
            price=20
            break
        default:
            return "you have not selected right item"

    }
    return `the price is $${price}`
}

console.log(priceList('tea'))

// fall-through 
// if break statement is missing it will print in all case for eg

switch(1){
    case 1:
        console.log('one')
    case 2:
        console.log('two')
    case 3:
        console.log('three')
        break;
    case 4:
        console.log('four')
}