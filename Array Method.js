const countries = "https://restcountries.com/v3.1/all";

fetch(countries)
    .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error("something error occured");
    })
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const asia = data.filter(country => country.region === "Asia");

            asia.forEach(item => {
                console.log(`${item.name}`);
            });
        }
    })
    .catch(function(err) {
        console.log(err.message);
    });

// Population less than 2lack ==================

fetch(countries)
    .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error("something error occured");
    })
    .then(data => {
        const population = data.filter(item => item.population < 200000);

        population.forEach(item => {
            console.log(item.name, item.population);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });

//for Each================

fetch(countries)
    .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error("something error occured");
    })
    .then(data => {
        data.forEach(country => {
            console.log("Name:", country.name);
            console.log("Capital:", country.capital);
            console.log("flag:", country.flag);
        });
    })
    .catch(function(err) {
        console.log(err.message);
    });

//Total population============

fetch(countries)
    .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error("something error occured");
    })
    .then(data => {
        console.log(data);
        const totalPopulation = data.reduce((acc, country) => {
            if (country.population) {
                return acc + country.population;
            }
            return acc;
        }, 0);
        console.log("Total Population:", totalPopulation);
    })
    .catch(function(err) {
        console.log(err.message);
    });

//US Doller=========================

fetch(countries)
    .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error("something error occured");
    })
    .then(data => {
        const countryName = data[0].name.common;
        console.log(`Country using US dollars as currency: ${countryName}`);
    })
    .catch(function(err) {
        console.log(err.message);
    });