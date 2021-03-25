const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./../.config/client_secret.json');

const mongoose = require('mongoose');
const dbURI = require('../.config/keys').dbURI;
const Animal = require('../models/animal.model');



function printAnimal(animal) {
    console.log(`Order: ${animal.Order}`);
    console.log(`Genus: ${animal.ScientificName}`);
    console.log(`RedListTag: ${animal.RedListTag}`);
    console.log(`-------------------`);
}


async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1X6sr5pg9bcj7KOLnlBeK82GicQyxUQxiVYyCfmGUdw0');

    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    return sheet;
    // const rows = await sheet.getRows();
    
    // rows.forEach(row => {
    //     printAnimal(row);
    // })
    
    
    
    // await promisify(doc.useServiceAccountAuth)(creds);
    // const info = await promisify(doc.getInfo)();
    // const sheet = info.worksheets[0];
    // console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
}

async function uploadToDatabase() {
    sheet = await accessSpreadsheet();
    const rows = await sheet.getRows();

    // rows.forEach(row => {
    //     printAnimal(row);
    // })
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

    mongoose.connection.on('connected', () =>{
        console.log("MongoDB Connected...");
        console.log('About to begin uploading to database...');
        rows.forEach(row => {
            const data = {
                order: row.Order,
                suborder: row.Suborder,
                family: row.Family,
                genus: row.Genus,
                scientificName: row.ScientificName,
                commonName: row.CommonName,
                location: row.Location,
                RLT: row.RedListTag,
                attribution: row.Attribution,
                link: row.link
            }
            console.log(`Uploading: ${row.ScientificName}`);
            let newAnimal = new Animal(data);
            newAnimal.save(err => {
                if(err) {
                    console.error(err)
                }
            })
        });   
    })
    // mongoose.disconnect();
}
uploadToDatabase();

