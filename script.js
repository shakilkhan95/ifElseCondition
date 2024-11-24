document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', function(event) {
      // Prevent the form from submitting the traditional way
      event.preventDefault();

      // Retrieve the form data
      const nationality = document.getElementById('nationality').value;
      const age = document.getElementById('age').value;
      const license = document.getElementById('license').value;

      if(nationality === 'Bangladesh' && age >= 18 && license == 'yes'){
        alert('You can drive any vehicle in Bangladesh');
      }else if(nationality === 'Bangladesh' && age >= 18 && license == 'no'){
        alert('You can apply for driving license');
      }else if(nationality == 'Bangladesh' && age < 18){
        alert('You are too young to drive a vehicle');
      } else{
        alert('Only a Bangladeshi can get a license here');
      }
  });
});
