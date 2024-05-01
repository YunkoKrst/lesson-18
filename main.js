

const Calculator = (() => {
    let memory = 0;

    // Приватні методи
    function add(x, y) {
        memory = x + y;
        return memory;
    }

    function subtract(x, y) {
        memory = x - y;
        return memory;
    }

    function clearMemory() {
        memory = 0;
    }

    function getMemoryAsString() {
        return memory.toString();
    }

    // Публічні методи
    return {
        add: (x, y) => {
            console.log(`Виконати додавання: ${x} + ${y}`);
            return add(x, y);
        },
        subtract: (x, y) => {
            console.log(`Виконати віднімання: ${x} - ${y}`);
            return subtract(x, y);
        },
        clearMemory: clearMemory,
        getMemoryAsString: getMemoryAsString
    };
})();


console.log(Calculator.add(5, 3)); 
console.log(Calculator.subtract(5, 3));
console.log(Calculator.getMemoryAsString()); 
Calculator.clearMemory(); 
console.log(Calculator.getMemoryAsString()); 