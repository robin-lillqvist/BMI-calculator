const calculateBMI = () => {
    let heightInput = document.getElementById("height")
    let weightInput = document.getElementById("weight")
    
    let results = calculateMetricBMI(weightInput.value, heightInput.value)
    let message = getBMIClassicifation(parseFloat(results))

    let displayResultsElement = document.getElementById('results')
    displayResultsElement.innerHTML = `<h2>Your BMI value is: ${results} And you are deemed to be ${message}</h2>`
    displayResultsElement.classList.add('notification')
} 