//Factory

// A constructor for defining new toysDuck
function ToyDuck(color, price) {
    // some defaults
    this.color = options.color;
    this.price = options.price;
}

// A constructor for defining new toysCar
function ToyCar(color, price, name) {
    this.color = options.color;
    this.price = options.price;
    this.name = options.name;
}


// Define a skeleton toy factory
var Singleton = (function ToyFactory() {
    // Our default toyClass is Duck
    this.toy = ToyDuck;
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


// Our Factory method for creating new Toy instances
ToyFactory.prototype.createToy = function (options) {
    switch (options.toyType) {
        case "car":
            this.toy = ToyCar;
            break;
        case "duck":
            this.toy = ToyDuck;
            break;
        //defaults to ToyFactory.prototype.toyClass (Toy)
    }

    return new this.toy(options);
};

function testFactory() {
    // Create an instance of our factory that makes toys
    var toyFactory = new ToyFactory();
    var toy = toyFactory.createToy({
        toyType: "car",
        color: "yellow",
        price: "100",
        name: "Suzuki"
    });

    // Test to confirm our toy was created using the toyClass/prototype Toy

    // Outputs: true
    console.log(toy instanceof ToyCar);
    console.log(toy instanceof ToyDuck);

    // Outputs: Toy object of color "yellow", price: 100, name: Suzuki.
    console.log(toy);

}

function testSingleton() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    console.log("Same instance? " + (instance1 === instance2));
}


testFactory();
testSingleton();
