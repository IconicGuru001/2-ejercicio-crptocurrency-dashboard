// 1. Data array provided by the exercise
// 1. Array de datos proporcionado por el ejercicio
const cryptoData = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price_usd: 67234.50, market_cap_usd: 1320000000000, percent_change_24h: 2.34, image: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH", price_usd: 3456.78, market_cap_usd: 415000000000, percent_change_24h: -1.23, image: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" },
    { id: "tether", name: "Tether", symbol: "USDT", price_usd: 1.00, market_cap_usd: 112000000000, percent_change_24h: 0.01, image: "https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661" },
    { id: "bnb", name: "BNB", symbol: "BNB", price_usd: 598.75, market_cap_usd: 89000000000, percent_change_24h: 1.56, image: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970" },
    { id: "solana", name: "Solana", symbol: "SOL", price_usd: 172.30, market_cap_usd: 75000000000, percent_change_24h: -3.45, image: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756" },
    { id: "ripple", name: "XRP", symbol: "XRP", price_usd: 0.62, market_cap_usd: 34000000000, percent_change_24h: 1.89, image: "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442" },
    { id: "cardano", name: "Cardano", symbol: "ADA", price_usd: 0.45, market_cap_usd: 15800000000, percent_change_24h: 5.67, image: "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090" },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", price_usd: 0.1523, market_cap_usd: 21500000000, percent_change_24h: -0.89, image: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409" },
    { id: "polkadot", name: "Polkadot", symbol: "DOT", price_usd: 7.89, market_cap_usd: 10800000000, percent_change_24h: -0.78, image: "https://assets.coingecko.com/coins/images/12171/standard/polkadot.jpg?1766533446" },
    { id: "chainlink", name: "Chainlink", symbol: "LINK", price_usd: 14.56, market_cap_usd: 8500000000, percent_change_24h: 3.21, image: "https://assets.coingecko.com/coins/images/877/standard/Chainlink_Logo_500.png?1760023405" },
    { id: "avalanche", name: "Avalanche", symbol: "AVAX", price_usd: 38.92, market_cap_usd: 14500000000, percent_change_24h: -2.10, image: "https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369" },
    { id: "shiba-inu", name: "Shiba Inu", symbol: "SHIB", price_usd: 0.00002345, market_cap_usd: 13800000000, percent_change_24h: 8.76, image: "https://assets.coingecko.com/coins/images/11939/standard/shiba.png?1696511800" },
    { id: "matic", name: "Polygon", symbol: "MATIC", price_usd: 0.72, market_cap_usd: 6700000000, percent_change_24h: 4.32, image: "https://assets.coingecko.com/coins/images/32440/standard/pol.png?1759114181" },
    { id: "litecoin", name: "Litecoin", symbol: "LTC", price_usd: 72.45, market_cap_usd: 5400000000, percent_change_24h: -1.45, image: "https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501400" },
    { id: "uniswap", name: "Uniswap", symbol: "UNI", price_usd: 7.23, market_cap_usd: 5400000000, percent_change_24h: 0.56, image: "https://assets.coingecko.com/coins/images/12504/standard/uniswap-logo.png?1720676669" },
    { id: "cosmos", name: "Cosmos", symbol: "ATOM", price_usd: 8.91, market_cap_usd: 3500000000, percent_change_24h: -2.78, image: "https://assets.coingecko.com/coins/images/1481/standard/cosmos_hub.png?1696502525" },
    { id: "filecoin", name: "Filecoin", symbol: "FIL", price_usd: 8.12, market_cap_usd: 3900000000, percent_change_24h: 6.34, image: "https://assets.coingecko.com/coins/images/12817/standard/filecoin.png?1696512609" },
    { id: "theta", name: "Theta Network", symbol: "THETA", price_usd: 2.34, market_cap_usd: 2300000000, percent_change_24h: 1.23, image: "https://assets.coingecko.com/coins/images/2538/standard/theta-token-logo.png?1696503349" },
    { id: "vechain", name: "VeChain", symbol: "VET", price_usd: 0.03456, market_cap_usd: 2500000000, percent_change_24h: -0.34, image: "https://assets.coingecko.com/coins/images/1167/standard/VET.png?1742383283" },
    { id: "algorand", name: "Algorand", symbol: "ALGO", price_usd: 0.18, market_cap_usd: 1500000000, percent_change_24h: 0.78, image: "https://assets.coingecko.com/coins/images/4380/standard/download.png?1696504978" }
];

// 2. DOM Elements
// 2. Elementos del DOM
const cryptoContainer = document.getElementById('crypto-container');
const performanceFilter = document.getElementById('performance-filter');
const searchInput = document.getElementById('search-input');
const resultsCounter = document.getElementById('results-counter');

// 3. Formatting functions (Instructions provided in the PDF)
// 3. Funciones de formateo (Pistas proporcionadas en el PDF)
function formatPrice(price) {
    if (price >= 1) {
        return price.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else {
        return price.toLocaleString('en-US', {
            minimumFractionDigits: 6,
            maximumFractionDigits: 8
        });
    }
}

function formatMarketCap(marketCap) {
    if (marketCap >= 1e12) return '$' + (marketCap / 1e12).toFixed(2) + 'T';
    if (marketCap >= 1e9) return '$' + (marketCap / 1e9).toFixed(2) + 'B';
    if (marketCap >= 1e6) return '$' + (marketCap / 1e6).toFixed(2) + 'M';
    return '$' + marketCap.toFixed(2);
}

// 4. Render cards in the DOM
// 4. Renderizar tarjetas en el DOM
function renderDashboard(data) {
    cryptoContainer.innerHTML = ''; // Limpiar pantalla - Clear screen
    resultsCounter.textContent = `Resultados: ${data.length}`; // Contador avanzado - Advanced counter

    data.forEach(coin => {
        const isPositive = coin.percent_change_24h >= 0;
        const statusClass = isPositive ? 'positive' : 'negative';
        const trendIcon = isPositive ? '▲' : '▼';

        const card = document.createElement('div');
        card.classList.add('crypto-card');

        card.innerHTML = `
            <div class="card-header">
                <img src="${coin.image}" alt="${coin.name}">
                <div>
                    <h3>${coin.name}</h3>
                    <span>${coin.symbol}</span>
                </div>
            </div>
            <div class="price">$${formatPrice(coin.price_usd)}</div>
            <div class="${statusClass}">
                ${trendIcon} ${isPositive ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%
            </div>
            <div class="market-cap">Cap. de Mercado: ${formatMarketCap(coin.market_cap_usd)}</div>
        `;
        cryptoContainer.appendChild(card);
    });
}

// 5. Combined logic of real-time filtering and search
// 5. Lógica combinada de Filtro y Búsqueda en tiempo real
function filterData() {
    const searchText = searchInput.value.toLowerCase();
    const performanceValue = performanceFilter.value;

    const filtered = cryptoData.filter(coin => {
        // Search engine validation (by name or symbol)
        // Validación del buscador (por nombre o símbolo)
        const matchesSearch = coin.name.toLowerCase().includes(searchText) || 
                              coin.symbol.toLowerCase().includes(searchText);
        
         // Performance selector validation                     
        // Validación del selector de rendimiento
        let matchesPerformance = true;
        if (performanceValue === 'positive') matchesPerformance = coin.percent_change_24h >= 0;
        if (performanceValue === 'negative') matchesPerformance = coin.percent_change_24h < 0;

        return matchesSearch && matchesPerformance;
    });

    renderDashboard(filtered);
}

// 6. Listeners to detect user changes
// 6. Listeners para detectar cambios del usuario
searchInput.addEventListener('input', filterData);
performanceFilter.addEventListener('change', filterData);

// 7. ADVANCED EXTRA: Simulate ticks in real time (Modifies prices every 3 seconds)
// 7. EXTRA AVANZADO: Simular ticks en tiempo real (Modifica precios cada 3 segundos)
setInterval(() => {
    cryptoData.forEach(coin => {

        // Generates a random percentage variation between -1.5% and +1.5%
        // Genera una variación porcentual aleatoria entre -1.5% y +1.5%
        const variation = (Math.random() * 3 - 1.5) / 100;
        coin.price_usd += coin.price_usd * variation;
        coin.percent_change_24h += variation * 100;
    });
    filterData(); // Re-filtra y actualiza la UI con los nuevos precios - Re-filter and update the UI with the new prices
}, 3000);

// Ejecución inicial al cargar la página - Initial execution when the page loads
renderDashboard(cryptoData);
