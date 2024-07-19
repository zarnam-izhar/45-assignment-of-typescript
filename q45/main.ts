function create_car(manufacturer: string, model: string, ...options: string[]){
    let car:{ manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    }

    options.forEach(options => {
        let[key,value] = options.split(":")

       car [key.trim()]= value.trim()
}
    )
    return car
}
let my_car = create_car("Toyota","Corolla","Color: Black","Sunroof:true")
console.log(my_car);
