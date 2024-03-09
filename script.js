document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    var popup = document.getElementById('popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var guik = document.getElementById('fname').value;
        var dob = document.getElementById('dob').value; // Corrected id from 'dob' to 'mail'
        var gender = document.querySelector('input[name="gender"]').value; // Corrected name from 'gender' to 'user_password'
        console.log("Gender",gender);
        var address = document.getElementById('adress').value; // Corrected id from 'address' to 'adress'
        var email = document.getElementById('emaaail').value; // Corrected id from 'email' to 'emaaail'
        var language = '';
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(function(checkbox) {
            language += checkbox.id + ', ';
        });
        language = language.slice(0, -2);
        var message = `I am ${guik}, I am ${calculateAge(dob)} years old, I am ${gender}. I live in ${address}. You can contact me using ${email}. I love to speak ${language}.`;

        popup.innerText = message;
        popup.style.display = 'block';
    });

    
    function calculateAge(dob) {
        let today = new Date();
        let birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
});
