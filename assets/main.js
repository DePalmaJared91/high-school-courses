var firebaseConfig = {
    apiKey: "AIzaSyC634hxcXtO4H9rffkxgQ2nPqwNb8IPmks",
    authDomain: "education-bb817.firebaseapp.com",
    databaseURL: "https://education-bb817.firebaseio.com",
    projectId: "education-bb817",
    storageBucket: "education-bb817.appspot.com",
    messagingSenderId: "306439939476",
    appId: "1:306439939476:web:99a43218dea314acab9b81",
    measurementId: "G-209CPYEPY1"
    
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var school = getInputVal('school');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, school, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, school, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      school:school,
      email:email,
      phone:phone,
      message:message
    });
  }
