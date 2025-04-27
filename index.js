//запуск node index.js

const childProcess = require('child_process');
const cors = require('cors');
const express = require("express");
const fs = require('fs');
const port = 3000;

const app = express();

app.use(cors())

app.use('/', (req, res) => {
    const path = req.query.path;
    let data = []

    try {
        if (path)
            data = fs.readdirSync(path, { withFileTypes: true })
                .map(d => d.name);
        else
            data = tom();
    }
    catch (exception) { console.log(exception.message) }

    res.send(data);
})

function tom() {
    const buffer = childProcess.execSync('wmic logicaldisk get Caption  /format:list').toString();
    const lines = buffer.split('\r\r\n');
    const disks = [];
    for (const line of lines) {
        if (!line) {
            continue;
        }

        const lineData = line.split('=');
        console.log(lineData)
        disks.push(lineData[1] + '\\');
    }
    return disks;
}

app.listen(port);
console.log(`Сервер запущен на ${port} порту`);
