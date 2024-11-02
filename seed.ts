import { db } from "./db";

const createTable = db.prepare("CREATE TABLE posts (title TEXT)").run();
const insert = db.prepare('INSERT INTO posts (title) VALUES (?)').run("hello");
const allPosts = db.prepare("SELECT * FROM posts").all();

console.log(allPosts)

