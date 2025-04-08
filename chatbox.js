    const chatbox = document.getElementById('chatbox');
    const chaticon = document.getElementById('chatbox__chaticon');
    const closeandlogo = document.getElementById('chatbox__closeandlogo');
    const messagesection = document.getElementById('chatbox__messagesection');

    function openup() {
        chatbox.classList.toggle('chatbox__udvidet');
        closeandlogo.classList.toggle('chatboxdisplay');

        if (chaticon.style.display === 'flex' || window.getComputedStyle(chaticon).display === 'flex') {
            chaticon.style.display = 'none'; // Hide chaticon
            messageconveration()
        } else {
            chaticon.style.display = 'flex'; // Show chaticon
        }

    }

    function messageconveration() {
        messagesection.innerHTML = ''
        setTimeout(() => {
            messagesection.innerHTML = '<div id="chatbox__messagerobot">' + '<p>' + 'Hej, mit navn er Sander! 🤖' + '</p>' + '</div>' + '<br>';
        }, "1000");

    }


    function sendbesked() {
        let input = document.getElementById('chatbox__writeinput').value;
        messagesection.innerHTML += '<div id="chatbox__messageyou">' + '<p>' + input + '</p>' + '</div>' + '<br>';
        answers()
        document.getElementById('chatbox__writeinput').value = '';
    }

    function scrollToBottom() {
        messagesection.scrollTop = messagesection.scrollHeight;
    }

    function answers() {
        if (document.getElementById('chatbox__writeinput').value === 'Hej') {
            setTimeout(() => {
                messagesection.innerHTML += '<div id="chatbox__messagerobot">' + '<p>' + 'Hej ven! 🤖' + '</p>' + '</div>' + '<br>';

                setTimeout(() => {
                    messagesection.innerHTML += '<div id="chatbox__messagerobot">' + '<p>' + 'Hvad kan jeg gøre for dig? 🤖' + '</p>' + '</div>' + '<br>';
                    scrollToBottom();
                }, "1000");
            }, "500");;

        } else {

            if (document.getElementById('chatbox__writeinput').value === 'Frivillig?') {
                setTimeout(() => {
                    messagesection.innerHTML += '<div id="chatbox__messagerobot">' + '<p>' + 'Øjebilk 🤖' + '</p>' + '</div>' + '<br>';
    
                    setTimeout(() => {
                        messagesection.innerHTML += '<div id="chatbox__messagerobot">' + '<p>' + '<b>Klik her</b>' + '</p>' + '</div>' + '<br>';
                        scrollToBottom();
                    }, "1000");
                }, "500");;
    
            } else {
    
    
                setTimeout(() => {
                    messagesection.innerHTML += '<div id="chatbox__messagerobot">' + '<p>' + 'Jeg forstår ikke 🤖' + '</p>' + '</div>' + '<br>';
                    scrollToBottom();
    
    
                    setTimeout(() => {
                        messagesection.innerHTML += '<div id="chatbox__messagerobot">' + '<p>' + 'Sorry ven' + '</p>' + '</div>' + '<br>';
                        scrollToBottom();
                    }, "1000");
    
    
                }, "1000");
    
            }

        }
        scrollToBottom();
    }