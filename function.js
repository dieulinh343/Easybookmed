const department = document.getElementById('department');
const appointment_name = document.getElementById('appointment_name');
const appointment_email = document.getElementById('appointment_email');
const appointment_date = document.getElementById('appointment_date');
const appointment_time = document.getElementById('appointment_time');
const phone = document.getElementById('phone');

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users/' + appointment_name.value).set({
        Department: department.value
        Email: appointment_email.value,
        Date: appointment_date.value,
        Time: appointment_time.value,
        Phone: phone.value
    })

})
