// Función para validar una fecha en formato "dd/mm/yyyy"
const isValidDate = (dateString) => {
    // Validar formato usando una expresión regular
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);

    if (!match) {
        return false; // El formato no coincide
    }

    // Extraer día, mes y año
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    // Validar rangos de mes y día
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }

    // Días máximos en cada mes
    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Validar si el día está dentro del rango permitido para el mes
    return day <= daysInMonth[month - 1];
};

// Función para determinar si un año es bisiesto
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Capturar el formulario y mostrar el resultado
document.getElementById('date-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const dateInput = document.getElementById('date-input').value.trim();
    const isValid = isValidDate(dateInput);

    document.getElementById('result').textContent = 
        isValid ? `${dateInput} es una fecha válida.` : `${dateInput} no es una fecha válida.`;
});
