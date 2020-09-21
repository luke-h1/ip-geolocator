const btn = document.getElementById('btn');
const address = document.getElementById('address');
const outputDiv = document.getElementById('output');





async function fetchIp() {
  const API_URL = `https://api.ip2country.info`;
  const USER_IP = address.value;
  const res = await fetch(`${API_URL}/ip?${USER_IP}`);
  const data = await res.json();
  showDataDOM(data);
}

function showDataDOM(data) {
  let output = '';
  output += `
  <h3>results</h3>
  <p>Country Code: ${data.countryCode3} </p>
  <p>Country: ${data.countryName} ${data.countryEmoji}</p>
  `;
  outputDiv.innerHTML = output;
}

// EVENT LISTENERS
btn.addEventListener('click', fetchIp);
