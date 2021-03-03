const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./../.config/client_secret.json');

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
    const rows = await sheet.getRows();
    
    rows.forEach(row => {
        printAnimal(row);
    })
    // await promisify(doc.useServiceAccountAuth)(creds);
    // const info = await promisify(doc.getInfo)();
    // const sheet = info.worksheets[0];
    // console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
}

accessSpreadsheet();