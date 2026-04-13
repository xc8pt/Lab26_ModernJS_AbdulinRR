const exchangeRates = {
    USD: 90,
    EUR: 98,
    GBP: 115,
    JPY: 0.6,
    CNY: 12.5
};

function convert(amountRub, targetCurrency) {
    const rate = exchangeRates[targetCurrency];
    if (!rate) return null;
    return amountRub / rate;
}

const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const amountRaw = amountInput.value.trim();
    if (amountRaw === '') {
        resultDiv.textContent = 'Ошибка: введите сумму.';
        return;
    }
    const amount = parseFloat(amountRaw);
    if (isNaN(amount)) {
        resultDiv.textContent = 'Ошибка: введите числовое значение.';
        return;
    }
    if (amount < 0) {
        resultDiv.textContent = 'Ошибка: сумма не может быть отрицательной.';
        return;
    }

    const selectedCurrency = currencySelect.value;
    const converted = convert(amount, selectedCurrency);

    if (converted === null) {
        resultDiv.textContent = 'Ошибка: неизвестная валюта.';
        return;
    }

    const formatted = converted.toFixed(2);
    const currencyNames = {
        USD: 'долларов США',
        EUR: 'евро',
        GBP: 'фунтов стерлингов',
        JPY: 'иен',
        CNY: 'юаней'
    };
    resultDiv.textContent = `${amount} RUB = ${formatted} ${currencyNames[selectedCurrency]}`;
});