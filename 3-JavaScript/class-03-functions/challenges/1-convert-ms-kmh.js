function msKmh(ms) {
    const kmh = ms * 3.6;
    return kmh;
}

const ms = parseFloat(prompt("Digite a velocidade em m/s:"));
const convert = msKmh(ms);
window.alert(`⚠️ ${ms} m/s equivale à ${convert} Km/h.`);                       