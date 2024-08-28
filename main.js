
    async function bitcoinprice(){
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((a) => a.json())
        .catch((e) => {
            console.log(e);
        });
        document.getElementById('usdrate').innerHTML = response.bpi.USD.rate
        document.getElementById('gbprate').innerHTML = response.bpi.GBP.rate
        document.getElementById('eurrate').innerHTML = response.bpi.EUR.rate
        document.getElementById('usdd').innerHTML = response.bpi.USD.description
        document.getElementById('gbpd').innerHTML = response.bpi.GBP.description
        document.getElementById('eurd').innerHTML = response.bpi.EUR.description
        document.getElementById('disclaimer').innerHTML = response.disclaimer
    }
    bitcoinprice()    
