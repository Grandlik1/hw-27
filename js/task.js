
const counter = () => {
    let number = 0
    let incCounter = 0
    let decCounter = 0
    let valCounter = 0

    const increase = () => {
        incCounter += 1;
        number += 1;
    }

    const decrease = () => {
        decCounter += 1;
        number -= 1;
    }

    const value = () => {
        valCounter += 1;
        return number;
    }
    const reset = () => {
        incCounter -= incCounter;
        decCounter -= decCounter
        valCounter -= valCounter
    }
    const getStatistic = () => {
        return{
            incCounter ,
            decCounter ,
            valCounter
        }
    }

    return {
        increase,
        decrease,
        value ,
        getStatistic,
        reset
    }
}

const newCounter = counter();
newCounter.increase()
newCounter.increase()
newCounter.increase()
console.log(newCounter.value())
console.log(newCounter.getStatistic())
newCounter.reset()
console.log(newCounter.getStatistic())
