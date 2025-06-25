
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === sectionId) {
          section.classList.add('active');
      }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});




function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  const footer = document.getElementById('footer');  // Select the footer element
  
  
  sections.forEach(section => {
      section.classList.remove('active');
  });


  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active');


  if (sectionId === 'home') {
      footer.style.display = 'block'; 
  } else {
      footer.style.display = 'none';  
  }
}


document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});






let cart = [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    alert(`${productName} added to cart!`);
    updateCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        cart = [];
        updateCart();
    }
}

function updateCart() {
    const cartSection = document.getElementById('cart');
    if (!cartSection) return;

    let cartHTML = `<h2>Your Cart</h2><ul>`;
    let total = 0;

    if (cart.length === 0) {
        cartHTML += "<li>Your cart is empty</li>";
    } else {
        cart.forEach(item => {
            cartHTML += `
                <li>
                    ${item.name} - ₹${item.price} x ${item.quantity}
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </li>`;
            total += item.price * item.quantity;
        });
    }

    cartHTML += `</ul><p><strong>Total: ₹${total}</strong></p>`;

    if (cart.length > 0) {
        cartHTML += `
            <button onclick="processPayment(${total})">Proceed to Payment</button>
            <button onclick="clearCart()">Clear Cart</button>
        `;
    }

    cartSection.innerHTML = cartHTML;
}


function processPayment(amount) {
    if (confirm(`Pay ₹${amount}?`)) {
        alert("Payment successful! Thank you for your purchase.");
        cart = [];
        updateCart();
    } else {
        alert("Payment cancelled.");
    }
}





function loginUser(event) {
    event.preventDefault(); // prevent form from submitting

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("loginMessage");

    // For demo: simple hardcoded check
    if (username === "admin" && password === "admin") {
        message.textContent = "Login successful!";
        message.style.color = "green";
        showSection('home');
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }

    return false;
}




  function loginWithGoogle() {
    // Redirect to Google login page (not connected to your site)
    window.location.href = "https://accounts.google.com/signin";
  }

  function loginWithFacebook() {
    // Redirect to Facebook login page (not connected to your site)
    window.location.href = "https://www.facebook.com/login/";
  }









var currentQuestion = 1;
var correctAnswers = 0;


var answers = {
  q1: "a", 
  q2: "c", 
  q3: "b", 
  q4: "c", 
  q5: "b",
  q6: "b", 
  q7: "c", 
  q8: "a", 
  q9: "b", 
  q10: "a" 
};


function nextQuestion(questionNumber) {

  document.getElementById("question" + questionNumber).style.display = "none";
  

  var selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  if (selectedAnswer && selectedAnswer.value === answers[`q${questionNumber}`]) {
      correctAnswers++;
  }
  
  
  if (questionNumber < 10) {
      document.getElementById("question" + (questionNumber + 1)).style.display = "block";
  }
}


function submitQuiz() {
  
  var selectedAnswer = document.querySelector(`input[name="q10"]:checked`);
  if (selectedAnswer && selectedAnswer.value === answers.q10) {
      correctAnswers++;
  }
  
  
  const quizContainer = document.getElementById('quizForm');
  const questions = quizContainer.querySelectorAll('.question');
  questions.forEach(question => question.style.display = 'none');
  
  
  const nextButtons = quizContainer.querySelectorAll('button');
  nextButtons.forEach(button => button.style.display = 'none');
  
 
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You scored ${correctAnswers} out of 10`;
  resultDiv.style.display = 'block';
}


