function convertTemp() {
      let temp = parseFloat(document.getElementById("tempInput").value);
      let unit = document.querySelector('input[name="unit"]:checked').value;
      let result = "";

      if (isNaN(temp)) {
        result = "⚠ Please enter a valid number";
      } else {
        if (unit === "Celsius") {
          // Celsius → Fahrenheit
          let fahrenheit = (temp * 9/5) + 32;
          result = ${temp} °C = ${fahrenheit.toFixed(2)} °F;
        } else {
          // Fahrenheit → Celsius
          let celsius = (temp - 32) * 5/9;
          result = ${temp} °F = ${celsius.toFixed(2)} °C;
        }
      }

      document.getElementById("result").innerText = result;
    }
