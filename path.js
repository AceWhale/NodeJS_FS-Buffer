import { log } from "node:console";
import path from "node:path";
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
log(path.sep); // выводит разделитель
log(path.join("users", "logs", "log.txt")); // users\logs\log.txt
log(path.resolve("users", "logs", "log.txt")); // D:\VS\JS\Node\less5\users\logs\.log.txt
log(path.parse(__filename));    // выводит объект пути
log(path.extname(path.join(__dirname, "db.json"))); // .json
log(path.isAbsolute("users" + path.sep + "logs"));  // false - т.к. путь является не абсолютным
log(path.isAbsolute(__dirname)); // true - т.к. путь является абсолютным (т.е. в пути указывается диск)
log(path.dirname("desktop" + path.sep + "users" + path.sep + "logs"));  // desktop\users

log(path.resolve(__dirname, ".//users", "logs"));   // D:\VS\JS\Node\less5\users\logs - наводит порядок