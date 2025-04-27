function Contact(firstName, lastName, phoneNumber, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }
  
  
  const contactForm = document.getElementById('contact-form');
  const contactList = document.getElementById('contact-list');
  const contactTableBody = document.querySelector('#contact-table tbody');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
  
    const newContact = new Contact(firstName, lastName, phoneNumber, email, address);
    
    addContactToList(newContact);
    addContactToTable(newContact);
  
    contactForm.reset();
  });
  
  function addContactToList(contact) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${contact.firstName} ${contact.lastName}</strong><br>
                     Phone: ${contact.phoneNumber}<br>
                     Email: ${contact.email}<br>
                     Address: ${contact.address}`;
    contactList.appendChild(li);
  }
  
  function addContactToTable(contact) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${contact.firstName} ${contact.lastName}</td>
      <td>${contact.email}</td>
      <td>${contact.phoneNumber}</td>
      <td>${contact.address}</td>
    `;
    contactTableBody.appendChild(row);
  }
  
  const todoForm = document.getElementById('todo-form');
  const taskList = document.getElementById('task-list');
  
  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const task = document.getElementById('task').value.trim();
    if (task) {
      addTaskToList(task);
      todoForm.reset();
    }
  });
  
  function addTaskToList(task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
    taskList.appendChild(li);
  }