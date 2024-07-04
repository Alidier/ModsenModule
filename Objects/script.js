    const table = {
        id: '2',
        name: 'Television',
        company:"LG",
        amount:"5",
        price:1400,
        totalprice:7000
    };

    for (const key in table) {
        console.log(`Key : ${key} , Value : ${table[key]}  `)
   }

   const new_table = Object.assign(table);
   console.log(new_table);
   
   const new_obj = {
    
   };
   for (const key in new_table) {
       new_obj[key] = new_table[key];
   }
   console.log(new_obj);



   let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Javascript'
    }
    let developer2 = {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 23,
    language: 'Python'
    }
    function getLocation () {
         console.log(`Continent: ${this.continent}, Country: ${this.country}`);
    }

    developer1.getLocation = getLocation;

    developer2.getLocation = getLocation;

    developer1.getLocation();
    developer2.getLocation();

    const chart = {
        x: 0,
        y: 0,
        right: function() {
            this.x += 1;
            return this;
        },
        left: function() {
            this.x -= 1;
            return this;
        },
        up: function() {
            this.y += 1;
            return this;
        },
        down: function() {
            this.y -=1;
            return this;
        },
        showCoords: function() {
            console.log(`(${this.x}, ${this.y} )`);
            return this;
        }
        
    }
   chart.right().left().right().showCoords().up().down().up().showCoords();

   console.clear();
   