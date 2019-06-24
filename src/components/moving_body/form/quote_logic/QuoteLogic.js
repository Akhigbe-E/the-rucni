
    const mutual = (state) => {



        const vehicles = state.field.vehicles
        let quoteSum = 0
        let quoteSummer = 0;

        vehicles.forEach(element => {
            const {drivers} = state.field
            const driver = drivers[0];

            const gender = driver.gender;
            const maritalStatus = driver.additionalInfodriver.question1;
            const accident = driver.additionalInfodriver.question3;
            const usage = element.additionalInfovehicle.question2;

            const { year } = element;
            let qs = 7000000

            const yearInt = parseInt(year)
            if (yearInt >= 2018){
                qs = (130000)+(13000000*0.04)
            } else if(yearInt >= 2010 && yearInt <= 2017) {
                qs = (117500)+(11750000*0.04)
            } else if( yearInt >= 2000 && yearInt <= 2009){
                qs = (61650)+(6165000*0.04)
            } else if( yearInt >=1990 && yearInt <= 1999){
                qs = (40000)+(4000000*0.04)
            }else{
                quoteSum = 0 
            }
            

            if( usage.one === true) {
                quoteSum = qs+(qs*.001)
            }else if( usage.two === true) {
                quoteSum = qs+(qs*.001)
            } else if( usage.three === true ){
                quoteSum = qs+(qs*.004)
            } else if ( usage.four === true){
                quoteSum = qs+(qs*.004)
            }
            else {
                quoteSum += 0
            }

            if(gender.toLowerCase() === 'male' && maritalStatus.two !== true){
                quoteSum +=(qs*.004)
            } else if(gender.trim().toLowerCase() === 'female'){
                quoteSum +=(qs*.002)
            }else if(gender.toLowerCase() === 'male' && maritalStatus.two === true){
                quoteSum += 0
            }
            else {
                quoteSum += 0
            }

            if(accident.one === true){
                quoteSum +=(qs*0.016)
            }else if(accident.two === true){
                quoteSum += 0
            }else{
                quoteSum += 0
            }
            quoteSummer += quoteSum
        });
        return quoteSummer;

        // const vehicle = state.field.vehicle
        // const driver = state.field.driver
        // const { year } = vehicle;

        // const ownership = vehicle.additionalInfovehicle.question1;
        // // const usage = vehicle.additionalInfovehicle.question2;
        // let park = vehicle.additionalInfovehicle.question3;

        // // const gender = driver.gender;
        // // const maritalStatus = driver.additionalInfodriver.question1;
        // // const homeOwnership = driver.additionalInfodriver.question2;
        // // const accident = driver.additionalInfodriver.question3;

        // let qs = 7000000

        //     const yearInt = parseInt(year)
        //     if (yearInt >= 2018){
        //         qs = (130000)+(13000000*0.042)
        //     } else if(yearInt >= 2010 && yearInt <= 2017) {
        //         qs = (117500)+(11750000*0.042)
        //     } else if( yearInt >= 2000 && yearInt <= 2009){
        //         qs = (61650)+(6165000*0.042)
        //     } else if( yearInt >=1990 && yearInt <= 1999){
        //         qs = (40000)+(4000000*0.042)
        //     }else{
        //         quoteSum = 0 
        //     }
        //     let quoteSum = qs
        //     console.log(quoteSum);
            
        //     // if( ownership.one === true){
        //     //     quoteSum += 60000
        //     // } else if( ownership.two === true){
        //     //     quoteSum += 60000
        //     // }else if( ownership.three === true){
        //     //     quoteSum += 100000
        //     // }
        //     // else {
        //     //     quoteSum += 100000
        //     // }


        //     // if( usage.one === true) {
        //     //     quoteSum = qs+(qs*.001)
        //     // }else if( usage.two === true) {
        //     //     quoteSum = qs+(qs*.001)
        //     // } else if( usage.three === true ){
        //     //     quoteSum = qs+(qs*.004)
        //     // } else if ( usage.four === true){
        //     //     quoteSum = qs+(qs*.004)
        //     // }
        //     // else {
        //     //     quoteSum += 0
        //     // }

        //     // park = park.toLowerCase();
        //     // if( park === '' || park.includes('lekki') || park.includes('island') || park.includes('magodo') || park.includes('ikeja')|| park.includes('surulere')|| park.includes('omole')){
        //     //     quoteSum += 70000
        //     // } else if( park.includes('mushin') || park.includes('ikorodu') || park.includes('ajegunle') || park.includes('oshodi') || park.includes('mile 2') || park.includes('agege')){
        //     //     quoteSum += 120000
        //     // } else {
        //     //     quoteSum += 100000
        //     // }
        


        //     // if(gender.toLowerCase() === 'male' && maritalStatus.two !== true){
        //     //     quoteSum = qs+(qs*.004)
        //     // } else if(gender.trim().toLowerCase() === 'female'){
        //     //     quoteSum = qs+(qs*.002)
        //     // }else if(gender.toLowerCase() === 'male' && maritalStatus.two === true){
        //     //     quoteSum += 0
        //     // }
        //     // else {
        //     //     quoteSum += 0
        //     // }

        //     // if(homeOwnership.one === true){
        //     //     quoteSum += 40000
        //     // } else if( homeOwnership.two === true){
        //     //     quoteSum += 70000
        //     // }else if( homeOwnership.three === true){
        //     //     quoteSum += 45000
        //     // }else if( homeOwnership.four === true){
        //     //     quoteSum += 80000;
        //     // }else {
        //     //     quoteSum += 100000
        //     // }

        //     // if(accident.one === true){
        //     //     quoteSum = qs+(qs*0.016)
        //     // }else if(accident.two === true){
        //     //     quoteSum += 0
        //     // }else{
        //     //     quoteSum += 0
        //     // }
        // return quoteSum;
    }

    const cornerstone = (state) => {

        const vehicles = state.field.vehicles
        let quoteSum = 0
        vehicles.forEach(element => {
            const { year } = element;
            let qs = 7000000

            const yearInt = parseInt(year)
            if (yearInt >= 2018){
                qs = (130000)+(13000000*0.04)
            } else if(yearInt >= 2010 && yearInt <= 2017) {
                qs = (117500)+(11750000*0.04)
            } else if( yearInt >= 2000 && yearInt <= 2009){
                qs = (61650)+(6165000*0.04)
            } else if( yearInt >=1990 && yearInt <= 1999){
                qs = (40000)+(4000000*0.04)
            }else{
                quoteSum = 0 
            }
            quoteSum += qs
        });
        return quoteSum
        // const vehicle = state.field.vehicle
        // const driver = state.field.driver
        // const { year } = vehicle;

        // const ownership = vehicle.additionalInfovehicle.question1;
        // const usage = vehicle.additionalInfovehicle.question2;
        // let park = vehicle.additionalInfovehicle.question3;

        // const gender = driver.gender;
        // const maritalStatus = driver.additionalInfodriver.question1;
        // const homeOwnership = driver.additionalInfodriver.question2;
        // const accident = driver.additionalInfodriver.question3;

        // let qs = 7000000

        //     const yearInt = parseInt(year)
        //     if (yearInt >= 2018){
        //         qs = (130000)+(13000000*0.04)
        //     } else if(yearInt >= 2010 && yearInt <= 2017) {
        //         qs = (117500)+(11750000*0.04)
        //     } else if( yearInt >= 2000 && yearInt <= 2009){
        //         qs = (61650)+(6165000*0.04)
        //     } else if( yearInt >=1990 && yearInt <= 1999){
        //         qs = (40000)+(4000000*0.04)
        //     }else{
        //         quoteSum = 0 
        //     }
        //     let quoteSum = qs
        //     console.log(quoteSum);
            
            // if( ownership.one === true){
            //     quoteSum += 60000
            // } else if( ownership.two === true){
            //     quoteSum += 60000
            // }else if( ownership.three === true){
            //     quoteSum += 100000
            // }
            // else {
            //     quoteSum += 100000
            // }


            // if( usage.one === true) {
            //     quoteSum = qs+(qs*.001)
            // }else if( usage.two === true) {
            //     quoteSum = qs+(qs*.001)
            // } else if( usage.three === true ){
            //     quoteSum = qs+(qs*.004)
            // } else if ( usage.four === true){
            //     quoteSum = qs+(qs*.004)
            // }
            // else {
            //     quoteSum += 0
            // }

            // park = park.toLowerCase();
            // if( park === '' || park.includes('lekki') || park.includes('island') || park.includes('magodo') || park.includes('ikeja')|| park.includes('surulere')|| park.includes('omole')){
            //     quoteSum += 70000
            // } else if( park.includes('mushin') || park.includes('ikorodu') || park.includes('ajegunle') || park.includes('oshodi') || park.includes('mile 2') || park.includes('agege')){
            //     quoteSum += 120000
            // } else {
            //     quoteSum += 100000
            // }
        


            // if(gender.toLowerCase() === 'male' && maritalStatus.two !== true){
            //     quoteSum = qs+(qs*.004)
            // } else if(gender.trim().toLowerCase() === 'female'){
            //     quoteSum = qs+(qs*.002)
            // }else if(gender.toLowerCase() === 'male' && maritalStatus.two === true){
            //     quoteSum += 0
            // }
            // else {
            //     quoteSum += 0
            // }

            // if(homeOwnership.one === true){
            //     quoteSum += 40000
            // } else if( homeOwnership.two === true){
            //     quoteSum += 70000
            // }else if( homeOwnership.three === true){
            //     quoteSum += 45000
            // }else if( homeOwnership.four === true){
            //     quoteSum += 80000;
            // }else {
            //     quoteSum += 100000
            // }

            // if(accident.one === true){
            //     quoteSum = qs+(qs*0.016)
            // }else if(accident.two === true){
            //     quoteSum += 0
            // }else{
            //     quoteSum += 0
            // }
            return quoteSum;
    }

    const aiico = (state) => {

        const vehicles = state.field.vehicles
        let quoteSum = 0
        vehicles.forEach(element => {
            const { year } = element;
            let qs = 7000000

            const yearInt = parseInt(year)
            if (yearInt >= 2018){
                qs = (130000)+(13000000*0.03)
            } else if(yearInt >= 2010 && yearInt <= 2017) {
                qs = (117500)+(11750000*0.03)
            } else if( yearInt >= 2000 && yearInt <= 2009){
                qs = (61650)+(6165000*0.03)
            } else if( yearInt >=1990 && yearInt <= 1999){
                qs = (40000)+(4000000*0.03)
            }else{
                quoteSum = 0 
            }
            quoteSum += qs
        });


        // const vehicle = state.field.vehicle
        // const driver = state.field.driver
        // const { year } = vehicle;

        // const ownership = vehicle.additionalInfovehicle.question1;
        // const usage = vehicle.additionalInfovehicle.question2;
        // let park = vehicle.additionalInfovehicle.question3;

        // const gender = driver.gender;
        // const maritalStatus = driver.additionalInfodriver.question1;
        // const homeOwnership = driver.additionalInfodriver.question2;
        // const accident = driver.additionalInfodriver.question3;

        // let qs = 7000000

        //     const yearInt = parseInt(year)
        //     if (yearInt >= 2018){
        //         qs = (130000)+(13000000*0.03)
        //     } else if(yearInt >= 2010 && yearInt <= 2017) {
        //         qs = (117500)+(11750000*0.03)
        //     } else if( yearInt >= 2000 && yearInt <= 2009){
        //         qs = (61650)+(6165000*0.03)
        //     } else if( yearInt >=1990 && yearInt <= 1999){
        //         qs = (40000)+(4000000*0.03)
        //     }else{
        //         quoteSum = 0 
        //     }
        //     let quoteSum = qs
        //     console.log(quoteSum);
            
            // if( ownership.one === true){
            //     quoteSum += 60000
            // } else if( ownership.two === true){
            //     quoteSum += 60000
            // }else if( ownership.three === true){
            //     quoteSum += 100000
            // }
            // else {
            //     quoteSum += 100000
            // }


            // if( usage.one === true) {
            //     quoteSum = qs+(qs*.001)
            // }else if( usage.two === true) {
            //     quoteSum = qs+(qs*.001)
            // } else if( usage.three === true ){
            //     quoteSum = qs+(qs*.004)
            // } else if ( usage.four === true){
            //     quoteSum = qs+(qs*.004)
            // }
            // else {
            //     quoteSum += 0
            // }

            // park = park.toLowerCase();
            // if( park === '' || park.includes('lekki') || park.includes('island') || park.includes('magodo') || park.includes('ikeja')|| park.includes('surulere')|| park.includes('omole')){
            //     quoteSum += 70000
            // } else if( park.includes('mushin') || park.includes('ikorodu') || park.includes('ajegunle') || park.includes('oshodi') || park.includes('mile 2') || park.includes('agege')){
            //     quoteSum += 120000
            // } else {
            //     quoteSum += 100000
            // }
        


            // if(gender.toLowerCase() === 'male' && maritalStatus.two !== true){
            //     quoteSum = qs+(qs*.004)
            // } else if(gender.trim().toLowerCase() === 'female'){
            //     quoteSum = qs+(qs*.002)
            // }else if(gender.toLowerCase() === 'male' && maritalStatus.two === true){
            //     quoteSum += 0
            // }
            // else {
            //     quoteSum += 0
            // }

            // if(homeOwnership.one === true){
            //     quoteSum += 40000
            // } else if( homeOwnership.two === true){
            //     quoteSum += 70000
            // }else if( homeOwnership.three === true){
            //     quoteSum += 45000
            // }else if( homeOwnership.four === true){
            //     quoteSum += 80000;
            // }else {
            //     quoteSum += 100000
            // }

            // if(accident.one === true){
            //     quoteSum = qs+(qs*0.016)
            // }else if(accident.two === true){
            //     quoteSum += 0
            // }else{
            //     quoteSum += 0
            // }

            return quoteSum;
    }

    const zenith = (state) => {
        const vehicles = state.field.vehicles
        let quoteSum = 0
        vehicles.forEach(element => {
            const { year } = element;
            let qs = 7000000

            const yearInt = parseInt(year)
            if (yearInt >= 2018){
                qs = (130000)+(13000000*0.03)
            } else if(yearInt >= 2010 && yearInt <= 2017) {
                qs = (117500)+(11750000*0.03)
            } else if( yearInt >= 2000 && yearInt <= 2009){
                qs = (61650)+(6165000*0.03)
            } else if( yearInt >=1990 && yearInt <= 1999){
                qs = (40000)+(4000000*0.03)
            }else{
                quoteSum = 0 
            }
            quoteSum += qs
        });

        // const driver = state.field.driver
        

        // const ownership = vehicle.additionalInfovehicle.question1;
        // const usage = vehicle.additionalInfovehicle.question2;
        // let park = vehicle.additionalInfovehicle.question3;

        // const gender = driver.gender;
        // const maritalStatus = driver.additionalInfodriver.question1;
        // const homeOwnership = driver.additionalInfodriver.question2;
        // const accident = driver.additionalInfodriver.question3;

        
            // console.log(quoteSum);
            
            // if( ownership.one === true){
            //     quoteSum += 60000
            // } else if( ownership.two === true){
            //     quoteSum += 60000
            // }else if( ownership.three === true){
            //     quoteSum += 100000
            // }
            // else {
            //     quoteSum += 100000
            // }


            // if( usage.one === true) {
            //     quoteSum = qs+(qs*.001)
            // }else if( usage.two === true) {
            //     quoteSum = qs+(qs*.001)
            // } else if( usage.three === true ){
            //     quoteSum = qs+(qs*.004)
            // } else if ( usage.four === true){
            //     quoteSum = qs+(qs*.004)
            // }
            // else {
            //     quoteSum += 0
            // }

            // park = park.toLowerCase();
            // if( park === '' || park.includes('lekki') || park.includes('island') || park.includes('magodo') || park.includes('ikeja')|| park.includes('surulere')|| park.includes('omole')){
            //     quoteSum += 70000
            // } else if( park.includes('mushin') || park.includes('ikorodu') || park.includes('ajegunle') || park.includes('oshodi') || park.includes('mile 2') || park.includes('agege')){
            //     quoteSum += 120000
            // } else {
            //     quoteSum += 100000
            // }
        


            // if(gender.toLowerCase() === 'male' && maritalStatus.two !== true){
            //     quoteSum = qs+(qs*.004)
            // } else if(gender.trim().toLowerCase() === 'female'){
            //     quoteSum = qs+(qs*.002)
            // }else if(gender.toLowerCase() === 'male' && maritalStatus.two === true){
            //     quoteSum += 0
            // }
            // else {
            //     quoteSum += 0
            // }

            // if(homeOwnership.one === true){
            //     quoteSum += 40000
            // } else if( homeOwnership.two === true){
            //     quoteSum += 70000
            // }else if( homeOwnership.three === true){
            //     quoteSum += 45000
            // }else if( homeOwnership.four === true){
            //     quoteSum += 80000;
            // }else {
            //     quoteSum += 100000
            // }

            // if(accident.one === true){
            //     quoteSum = qs+(qs*0.016)
            // }else if(accident.two === true){
            //     quoteSum += 0
            // }else{
            //     quoteSum += 0
            // }
            return quoteSum;
    }

    const sovereignTrust = (state) => {

        const vehicles = state.field.vehicles
        let quoteSum = 0
        vehicles.forEach(element => {
            const { year } = element;
            let qs = 7000000

            const yearInt = parseInt(year)
            if (yearInt >= 2018){
                qs = (130000)+(13000000*0.01)
            } else if(yearInt >= 2010 && yearInt <= 2017) {
                qs = (117500)+(11750000*0.01)
            } else if( yearInt >= 2000 && yearInt <= 2009){
                qs = (61650)+(6165000*0.01)
            } else if( yearInt >=1990 && yearInt <= 1999){
                qs = (40000)+(4000000*0.01)
            }else{
                quoteSum = 0 
            }
            quoteSum += qs
        });
        
        return quoteSum;
    }

    export {mutual, cornerstone, aiico, sovereignTrust, zenith}

    // const vehicle = state.field.vehicle
    // const driver = state.field.driver
    // const { year } = vehicle;

    // const ownership = vehicle.additionalInfovehicle.question1;
    // const usage = vehicle.additionalInfovehicle.question2;
    // let park = vehicle.additionalInfovehicle.question3;

    // const gender = driver.gender;
    // const maritalStatus = driver.additionalInfodriver.question1;
    // const homeOwnership = driver.additionalInfodriver.question2;
    // const accident = driver.additionalInfodriver.question3;

    // let qs = 7000000

    //     const yearInt = parseInt(year)
    //     if (yearInt >= 2018){
    //         qs = (130000)+(13000000*0.042)
    //     } else if(yearInt >= 2010 && yearInt <= 2017) {
    //         qs = (117500)+(11750000*0.042)
    //     } else if( yearInt >= 2000 && yearInt <= 2009){
    //         qs = (61650)+(6165000*0.042)
    //     } else if( yearInt >=1990 && yearInt <= 1999){
    //         qs = (40000)+(4000000*0.042)
    //     }else{
    //         quoteSum = 0 
    //     }
    //     let quoteSum = qs
    //     console.log(quoteSum);
        
    //     // if( ownership.one === true){
    //     //     quoteSum += 60000
    //     // } else if( ownership.two === true){
    //     //     quoteSum += 60000
    //     // }else if( ownership.three === true){
    //     //     quoteSum += 100000
    //     // }
    //     // else {
    //     //     quoteSum += 100000
    //     // }


    //     if( usage.one === true) {
    //         quoteSum = qs+(qs*.001)
    //     }else if( usage.two === true) {
    //         quoteSum = qs+(qs*.001)
    //     } else if( usage.three === true ){
    //         quoteSum = qs+(qs*.004)
    //     } else if ( usage.four === true){
    //         quoteSum = qs+(qs*.004)
    //     }
    //     else {
    //         quoteSum += 0
    //     }

    //     // park = park.toLowerCase();
    //     // if( park === '' || park.includes('lekki') || park.includes('island') || park.includes('magodo') || park.includes('ikeja')|| park.includes('surulere')|| park.includes('omole')){
    //     //     quoteSum += 70000
    //     // } else if( park.includes('mushin') || park.includes('ikorodu') || park.includes('ajegunle') || park.includes('oshodi') || park.includes('mile 2') || park.includes('agege')){
    //     //     quoteSum += 120000
    //     // } else {
    //     //     quoteSum += 100000
    //     // }
    


    //     if(gender.toLowerCase() === 'male' && maritalStatus.two !== true){
    //         quoteSum = qs+(qs*.004)
    //     } else if(gender.trim().toLowerCase() === 'female'){
    //         quoteSum = qs+(qs*.002)
    //     }else if(gender.toLowerCase() === 'male' && maritalStatus.two === true){
    //         quoteSum += 0
    //     }
    //     else {
    //         quoteSum += 0
    //     }

    //     // if(homeOwnership.one === true){
    //     //     quoteSum += 40000
    //     // } else if( homeOwnership.two === true){
    //     //     quoteSum += 70000
    //     // }else if( homeOwnership.three === true){
    //     //     quoteSum += 45000
    //     // }else if( homeOwnership.four === true){
    //     //     quoteSum += 80000;
    //     // }else {
    //     //     quoteSum += 100000
    //     // }

    //     if(accident.one === true){
    //         quoteSum = qs+(qs*0.016)
    //     }else if(accident.two === true){
    //         quoteSum += 0
    //     }else{
    //         quoteSum += 0
    //     }

    // return quoteSum;


