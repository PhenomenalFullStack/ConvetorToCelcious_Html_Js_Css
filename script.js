// script.js

(() => {
  // DOM Elements
  const inputTemp = document.getElementById('inputTemp');
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  const convertBtn = document.getElementById('convertBtn');
  const clearBtn = document.getElementById('clearBtn');
  const resultLabel = document.getElementById('resultLabel');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const historyList = document.getElementById('historyList');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const conversionChartCanvas = document.getElementById('conversionChart');

  // Unit names for display
  const unitNames = {
    C: '°C',
    F: '°F',
    K: 'K',
    R: '°R',
    Re: '°Ré',
  };

  // Initialize dark mode from localStorage or system
  function initDarkMode() {
    const saved = localStorage.getItem('darkMode');
    if (
      saved === 'true' ||
      (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.body.classList.add('dark-mode');
      if (darkModeToggle) darkModeToggle.checked = true;
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', darkModeToggle.checked);
    });
  }
  initDarkMode();

  // Conversion functions
  function toCelsius(value, unit) {
    switch (unit) {
      case 'C':
        return value;
      case 'F':
        return (value - 32) * (5 / 9);
      case 'K':
        return value - 273.15;
      case 'R':
        return (value - 491.67) * (5 / 9);
      case 'Re':
        return value * 1.25;
      default:
        throw new Error('Unsupported unit ' + unit);
    }
  }

  function fromCelsius(value, unit) {
    switch (unit) {
      case 'C':
        return value;
      case 'F':
        return value * (9 / 5) + 32;
      case 'K':
        return value + 273.15;
      case 'R':
        return (value + 273.15) * (9 / 5);
      case 'Re':
        return value * 0.8;
      default:
        throw new Error('Unsupported unit ' + unit);
    }
  }

  // Parsing input like "100F" or "37 C"
  function parseInput(inputStr) {
    const regex = /^\s*(-?\d+(?:\.\d*)?)\s*([CFKRRecfkrre]{0,2})\s*$/;
    const match = inputStr.match(regex);
    if (!match) return null;

    const val = parseFloat(match[1]);
    let unit = match[2].toUpperCase();

    if (!unit) {
      // no unit typed, will rely on dropdown
      return { val, unit: null };
    }

    // Normalize unit for Réaumur (could be Re or Ré)
    if (unit === 'RE' || unit === 'RÉ') unit = 'Re';

    if (!['C', 'F', 'K', 'R', 'RE', 'Re'].includes(unit)) return null;
    if (unit === 'RE') unit = 'Re';

    return { val, unit };
  }

  // Save conversion to localStorage history
  function saveToHistory(entry) {
    try {
      let history = JSON.parse(localStorage.getItem('tempHistory') || '[]');
      history.push(entry);
      if (history.length > 50) history.shift(); // keep max 50
      localStorage.setItem('tempHistory', JSON.stringify(history));
    } catch {
      // ignore
    }
  }

  // Show result + save to history
function convert() {
  let inputValRaw = inputTemp.value.trim();

  // Remove previous error state
  inputTemp.classList.remove('input-error');
  const existingErrorMsg = document.querySelector('.error-message');
  if (existingErrorMsg) existingErrorMsg.remove();

  if (!inputValRaw) {
    inputTemp.classList.add('input-error');
    showInputError('Please enter a temperature.');
    return;
  }

  const parsed = parseInput(inputValRaw);
  if (!parsed) {
    inputTemp.classList.add('input-error');
    showInputError('Invalid input format.');
    return;
  }

  let inputVal = parsed.val;
  let inputUnit = parsed.unit || fromUnit.value;
  let outputUnit = toUnit.value;

  if (!inputUnit) {
    inputTemp.classList.add('input-error');
    showInputError('Please specify or select the input unit.');
    return;
  }

  try {
    const celsiusVal = toCelsius(inputVal, inputUnit);
    const convertedVal = fromCelsius(celsiusVal, outputUnit);
    const rounded = Math.round(convertedVal * 100) / 100;

    // Show result
    const resultText = `${inputVal} ${unitNames[inputUnit]} = ${rounded} ${unitNames[outputUnit]}`;
    resultLabel.textContent = resultText;

    // Save history
    saveToHistory({
      inputVal,
      inputUnit,
      outputVal: rounded,
      outputUnit,
      timestamp: Date.now(),
    });
  } catch (e) {
    inputTemp.classList.add('input-error');
    showInputError('Error during conversion.');
  }
}

// Helper to show error message below input
function showInputError(message) {
  const errorEl = document.createElement('div');
  errorEl.className = 'error-message';
  errorEl.textContent = message;
  inputTemp.insertAdjacentElement('afterend', errorEl);
}

  // Clear inputs & result
  function clear() {
    inputTemp.value = '';
    resultLabel.textContent = '';
  }

  // Add keyboard shortcuts on index page
  if (convertBtn && clearBtn && inputTemp && fromUnit && toUnit) {
    convertBtn.addEventListener('click', convert);
    clearBtn.addEventListener('click', clear);

    document.addEventListener('keydown', (e) => {
      if (e.target === inputTemp) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          convert();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          clear();
        }
      }
    });
  }

  // -- Chart Page --
  if (conversionChartCanvas) {
    let history = JSON.parse(localStorage.getItem('tempHistory') || '[]');
    if (history.length === 0) {
      conversionChartCanvas.parentElement.insertAdjacentHTML(
        'beforeend',
        '<p>No data to display chart.</p>'
      );
    } else {
      // Prepare data for chart: show last 20 conversions
      history = history.slice(-20);
      const labels = history.map((h) =>
        new Date(h.timestamp).toLocaleTimeString()
      );
      const inputVals = history.map((h) => h.inputVal);
      const outputVals = history.map((h) => h.outputVal);

      // Show chart: input vs output values over time
      const ctx = conversionChartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Input Value',
              data: inputVals,
              borderColor: '#007bff',
              backgroundColor: 'rgba(0, 123, 255, 0.2)',
              fill: false,
              tension: 0.3,
            },
            {
              label: 'Converted Value',
              data: outputVals,
              borderColor: '#28a745',
              backgroundColor: 'rgba(40, 167, 69, 0.2)',
              fill: false,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              title: {
                display: true,
                text: 'Temperature',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Time',
              },
            },
          },
        },
      });
    }
  }

  // Accessibility: Add aria-live polite to resultLabel for announcements handled via HTML

  // Theme toggle across pages: sync toggle if present
  window.addEventListener('storage', (e) => {
    if (e.key === 'darkMode') {
      if (e.newValue === 'true') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = false;
      }
    }
  });
})();
