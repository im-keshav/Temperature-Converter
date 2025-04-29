// Get all input elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const scaleFill = document.querySelector('.scale-fill');

// Add event listeners to all inputs
celsiusInput.addEventListener('input', convertFromCelsius);
fahrenheitInput.addEventListener('input', convertFromFahrenheit);
kelvinInput.addEventListener('input', convertFromKelvin);

// Function to update the temperature scale
function updateTemperatureScale(celsius) {
    // Convert celsius to percentage (assuming range from -100°C to 100°C)
    const percentage = ((celsius + 100) / 200) * 100;
    // Clamp the percentage between 0 and 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    // Update the scale fill width
    scaleFill.style.width = `${clampedPercentage}%`;
    
    // Update the color based on temperature
    if (celsius < 0) {
        scaleFill.style.background = 'linear-gradient(90deg, #4b69ff, #69b4ff)';
    } else if (celsius > 50) {
        scaleFill.style.background = 'linear-gradient(90deg, #ff4b4b, #ff8c00)';
    } else {
        scaleFill.style.background = 'linear-gradient(90deg, #69b4ff, #4bff4b)';
    }
}

// Conversion functions
function convertFromCelsius() {
    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        scaleFill.style.width = '50%';
        return;
    }
    
    // Convert to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    
    // Convert to Kelvin
    const kelvin = celsius + 273.15;
    kelvinInput.value = kelvin.toFixed(2);
    
    // Update the temperature scale
    updateTemperatureScale(celsius);
}

function convertFromFahrenheit() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
        celsiusInput.value = '';
        kelvinInput.value = '';
        scaleFill.style.width = '50%';
        return;
    }
    
    // Convert to Celsius
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
    
    // Convert to Kelvin
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    kelvinInput.value = kelvin.toFixed(2);
    
    // Update the temperature scale
    updateTemperatureScale(celsius);
}

function convertFromKelvin() {
    const kelvin = parseFloat(kelvinInput.value);
    if (isNaN(kelvin)) {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        scaleFill.style.width = '50%';
        return;
    }
    
    // Convert to Celsius
    const celsius = kelvin - 273.15;
    celsiusInput.value = celsius.toFixed(2);
    
    // Convert to Fahrenheit
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    
    // Update the temperature scale
    updateTemperatureScale(celsius);
}

// Initialize the scale at 0°C (50% width)
scaleFill.style.width = '50%'; 