const { GoogleSpreadsheet } = require('google-spreadsheet');
const {promisify} = require('util');

const creds = require('./.config/client_secret.json');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1X6sr5pg9bcj7KOLnlBeK82GicQyxUQxiVYyCfmGUdw0');

    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
    });

    await doc.loadInfo();
    console.log(doc.title);

    // await promisify(doc.useServiceAccountAuth)(creds);
    // const info = await promisify(doc.getInfo)();
    // const sheet = info.worksheets[0];
    // console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
}

accessSpreadsheet();