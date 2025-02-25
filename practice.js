import {Buffer} from "node:buffer"
import path from "node:path";
import fs from "node:fs";
import { log } from "node:console";

//#region task_1

const buff_1 = Buffer.from("Hello Node.js!");
log(buff_1.toString());
const __dirname = import.meta.dirname;
const my_dir = path.join(__dirname, "files")
if (!fs.existsSync(my_dir))
    fs.mkdirSync(my_dir);
const our_file_1 = path.join(my_dir, "task_1.txt");
fs.writeFileSync(our_file_1, buff_1);

//#endregion


//#region task_2

const buff_2 = Buffer.from("Хомячки бывают разных размеров. Например, хомяк ростом c крупную собаку называется почему-то барсуком.");
if (!fs.existsSync(my_dir))
    fs.mkdirSync(my_dir);
const our_file_2 = path.join(my_dir, "task_2.txt");
fs.writeFileSync(our_file_2, buff_2);
const content_2 = fs.readFileSync(our_file_2);
log(content_2.toString());

//#endregion


//#region task_4

const buff_4_1 = Buffer.from("Hello! ");
const buff_4_2 = Buffer.from("I am not Hamster");
const buff_4 = Buffer.concat([buff_4_1, buff_4_2]);
if (!fs.existsSync(my_dir))
    fs.mkdirSync(my_dir);
const our_file_4 = path.join(my_dir, "task_4.txt");
fs.writeFileSync(our_file_4, buff_4);
const content_4 = fs.readFileSync(our_file_4);
log(content_4.toString());

//#endregion


//#region task_3

process.stdin.setEncoding('utf8');
console.log("Введите текст:");

process.stdin.on('data', (input) => {
    const inputString = input.trim();
    const buffer = Buffer.from(inputString);
    console.log("Буфер:", buffer);
    const backToString = buffer.toString();
    console.log("Рядок:", backToString);
    process.exit();
});

//#endregion