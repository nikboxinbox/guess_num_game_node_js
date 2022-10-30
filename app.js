#!/usr/bin/env node
const readline = require("readline");

const input = readline.createInterface(process.stdin);

input.on("close", () => console.log("Конец игры"));

const rundomNum = Math.floor(Math.random() * 100) + 1;

console.log("Загадано число в диапазоне от 0 до 100 \nВведите ваш ответ");

input.on("line", (data) => {
    if (data > rundomNum) {
        console.log("Меньше");
    }
    if (data < rundomNum) {
        console.log("Больше");
    }
    if (data == rundomNum) {
        console.log("Отгадано число", data);
        input.close();
    }
});
