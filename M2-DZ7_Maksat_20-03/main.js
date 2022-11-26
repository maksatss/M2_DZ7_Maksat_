class Cars {
    static type ="CARS"

    constructor(params) {
        this.model = params.model
        this.color = params.color
        this.wheels = params.wheels
    }

    start() {
        console.log('Машина заведена');
    }
}

const ferrari = new Cars({
    model: 'ferrari f8 tributo',
    color: 'red',
    wheels: 4
})


class SportCars extends Cars {
    static type = "SPORT_CAR"

    constructor(params) {
        super(params)
        this.speed = params.speed
    }

    start() {
        console.log('Врррpууум, машина заведена');
    }
}
// const bugatti = new hiperCars({
//     model: 'bugatti Veyron',
//     color: 'black',
//     wheels: 4,
//     speed: "257.86mph"
// })
//
//
class sportcars extends Cars {
    static type = "hipercar"

    constructor(params) {
        super(params)
        this.height = params.height
    }

    start() {
        console.log(' машина заведена');
    }
}
const audi = new sportcars({
    model: 'audi r8',
    color: 'grey',
    wheels: 4,
    height: '2,650 mm'
})


class ElectroCars extends Cars {
    static type = "ELECTRO_CAR"

    constructor(params) {
        super(params)
        this.battery = params.battery
    }

    start() {
        console.log('Ваша машина заведена');
    }
}

const lusidair = new ElectroCars({
    model: 'lusid air',
    color: 'golden',
    wheels: 4,
    battery: '118 kWh'
})


// console.log(bugatti, bugatti.start())
console.log(audi,audi .start())
console.log(lusidair, lusidair.start())
console.log(ferrari,ferrari .start())