const chatbox = document.getElementById('chatbox');
const chaticon = document.getElementById('chatbox__chaticon');
const closeandlogo = document.getElementById('chatbox__closeandlogo');

function openup () {
    chatbox.classList.toggle("chatbox__udvidet");
    closeandlogo.style.display = 'flex';
    chaticon.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
}

function sendbesked() {
    let input = document.getElementById('chatbox__writeinput').value;
    document.getElementById('chatbox__messagesection').innerHTML += '<div id="chatbox__messageyou">' + '<p>' + input + '</p>' + '</div>' + '<br>';
}
