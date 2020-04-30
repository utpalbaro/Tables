'use strict'

const createTableDetails = document.querySelector('[data-table-details-open]');
const closeTableDetails = document.querySelector('[data-table-details-close]');
const overlay = document.getElementById('overlay');

createTableDetails.addEventListener('click', () => {
    const tableDetailsWindow = document.querySelector(createTableDetails.dataset.tableDetailsOpen);
    openModal(tableDetailsWindow);
});

closeTableDetails.addEventListener('click', () => {
    const tableDetailsWindow = closeTableDetails.closest('.table-details');
    closeModal(tableDetailsWindow);
});

overlay.addEventListener('click', () => {
    const tableDetailsWindow = document.querySelector('.table-details.active');
    closeModal(tableDetailsWindow);
});

function openModal(modal) {
    if (modal) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function openRowColumn() {
    console.log('Opening ...')
}

function closeRowColumn() {
    
}

document.getElementById("create-table").addEventListener('click', openRowColumn);
document.getElementById("insert-row").addEventListener('click', insertRow);
document.getElementById("delete-row").addEventListener('click', deleteRow);
document.getElementById("insert-column").addEventListener('click', insertColumn);
document.getElementById("delete-column").addEventListener('click', deleteColumn);

function createTable() {
    console.log('Created table');
}

function insertRow() {
    console.log('row');
}

function deleteRow() {
    console.log('row');
}

function insertColumn() {
    console.log('row');
}

function deleteColumn() {
    console.log('row');
}