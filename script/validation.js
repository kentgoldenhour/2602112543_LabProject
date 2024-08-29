function validate(event) {
  let error = 0
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var region = document.getElementById('region').value
  var message = document.getElementById('message').value

  // validate name
  if (name == '' || name == null) {
    document.getElementById('name_error').textContent = 'Invalid: Empty'
    error++
  } else {
    document.getElementById('name_error').textContent = ''
  }

  // validate email
  if (email === '') {
    document.getElementById('email_error').textContent = 'Invalid email: Empty'
    error++
  } else if (email.split('@').length !== 2) {
    document.getElementById('email_error').textContent = "Invalid email: '@' must be only one!"
    error++
  } else if (email.split('@')[0] === 0) {
    document.getElementById('email_error').textContent = "Invalid email: Don't start with '@'!"
    error++
  } else if (email.split('@')[1] === 0) {
    document.getElementById('email_error').textContent = "Invalid email: Don't end with '@'"
    error++
  } else if (!email.split('@')[1].includes('.')) {
    document.getElementById('email_error').textContent = "Invalid email: Your email doesn't contain .com"
    error++
  } else if (email.split('@')[1][0] === '.') {
    document.getElementById('email_error').textContent =
      "Invalid email: Please insert domain between '@ and '."
    error++
  } else if (email.split('.')[0] === 0) {
    document.getElementById('email_error').textContent = "Invalid email: Don't start with '.'"
    error++
  } else {
    document.getElementById('email_error').textContent = ''
  }

  // validate region
  if (region == '' || region == 'invalid') {
    document.getElementById('region_error').textContent = 'Invalid: Empty'
    error++
  } else {
    document.getElementById('region_error').textContent = ''
  }

  // validate message
  if (message == '' || message == 'invalid') {
    document.getElementById('message_error').textContent = 'Invalid: Empty'
    error++
  } else if (message.split(' ').length <= 9) {
    document.getElementById('message_error').textContent = 'Invalid: Minimum 10 words'
  } else {
    document.getElementById('message_error').textContent = ''
  }

  // validate submit
  let error_message = error > 1 ? ' errors' : ' error'
  if (error > 0) {
    document.getElementById('submit_error').textContent = 'You still have ' + error + error_message
    event.preventDefault()
  } else {
    document.getElementById('submit_error').textContent = ''
  }
}
