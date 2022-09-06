"use strict";

const button = document.getElementById('button');
const surname = document.getElementById('surname');
const name = document.getElementById('name');
const patronymic = document.getElementById('patronymic');

const result = document.getElementById('result');

const convertName = () => {
    const fullName = document.getElementById('fullName').value;

    console.log(fullName);

    let fullNameFiltered = fullName.trim().toLowerCase().replace(/[^a-zа-яё\s]/g, '');
    fullNameFiltered = fullNameFiltered.replace(/\s+/g, " ");
    const nameArr = fullNameFiltered.split(" ");

    console.log(nameArr);

    nameArr.forEach((item, i) => {
        nameArr[i] = item[0].toUpperCase() + item.slice(1);
    });

    console.log(nameArr);

    result.classList.add("main__result");

    surname.innerHTML = `Фамилия: ${nameArr[0]}`;
    name.innerHTML = `Имя: ${nameArr[1]}`;
    patronymic.innerHTML = `Отчество: ${nameArr[2]}`;
};

button.addEventListener('click', convertName);
