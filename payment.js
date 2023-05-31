// Get the total amount from localStorage
const total = localStorage.getItem('total');
        
// Display the total amount on the page
document.getElementById('total').textContent = '₦' + total;

// Clear the localStorage
localStorage.removeItem('total');

   