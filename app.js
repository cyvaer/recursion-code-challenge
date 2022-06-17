const data = require('./data_records');

const cleanse = (dataObject) => {

    for (let key in dataObject) {

        let value = dataObject[key];

        if(value === null || value === undefined){
            delete dataObject[key];
        }

        if(parseFloat(value)){
            dataObject[key] = parseFloat(value);
        }

        if(typeof value === 'object'){
            cleanse(value);
        }

    }

}

copiedData = {...data};

cleanse(copiedData);

console.log(JSON.stringify(copiedData));
