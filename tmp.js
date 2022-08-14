import express from "express";
import { readFile } from 'fs/promises';

const json = JSON.parse(await readFile(new URL('./settings/tmp.config.json', import.meta.url)));
const port = json.port

const app = express()

/* 
* Node Js Projeleri Request ve Response'dan ibaretdir.
* Kendimizde req & res dışında parametre ekleyebiliriz.
* Bunlara ("Middleware") Ara Birim Yazılımı [Ara Katman Yazılımı] Olarak Adlandırılır.
* Ben Nodemon Paketini Kullanarak Her Bir Güncelleme de Terminal Arayüzünden Projemi Açıp Kapatarak Zaman Kaybetmiyorum, Benim İçin -
* bu gorevi ("Nodemon") Paketi Yapıyor => npm i nodemon
*/

app.get("/", (req, res) => {
    res.send("Selam")
})

app.listen(port, () => {
    console.log(`Application running on the port: ${port}`)
})