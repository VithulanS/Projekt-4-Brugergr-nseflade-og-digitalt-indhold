    const chatbox = document.getElementById('chatbox');
    const chaticon = document.getElementById('chatbox__chaticon');
    const closeandlogo = document.getElementById('chatbox__closeandlogo');
    const messagesection = document.getElementById('chatbox__messagesection');

    function addMessageYou() {
        let input = document.getElementById('chatbox__writeinput').value;


        if (input.length > 0) {
            const messageDiv = document.createElement('div');
            const pTag = document.createElement('p');
            const Span = document.createElement('span')
            Span.innerHTML = 'DIG'

            messageDiv.classList.add('chatbox__messageyou')
            pTag.innerHTML = input

            messageDiv.appendChild(pTag);
            messageDiv.appendChild(Span)
            messagesection.appendChild(messageDiv);
            robotAnswer();
            scrollToBottom();
        } else {

        }


    }

    function addMessageRobot(text) {
        const messageDivRobot = document.createElement('div');
        messageDivRobot.classList.add('chatbox__messagerobot')
        const pTagForRobot = document.createElement('p')


        setTimeout(() => {
            pTagForRobot.innerHTML = '.';
            scrollToBottom();
        }, "250");

        
        setTimeout(() => {
            pTagForRobot.innerHTML = '..';
            scrollToBottom();
        }, "500");

        setTimeout(() => {
            pTagForRobot.innerHTML = '...';
            scrollToBottom();
        }, "750");


        setTimeout(() => {
            pTagForRobot.innerHTML = text + ' ' + '🤖';
            scrollToBottom();
        }, "1000");

        messageDivRobot.appendChild(pTagForRobot);
        messagesection.appendChild(messageDivRobot);
        scrollToBottom();
    }

    function robotAnswer() {

        if (document.getElementById('chatbox__writeinput').value.includes('Hej')) {
            document.getElementById('chatbox__writeinput').value = '';

            setTimeout(() => {
                addMessageRobot('Hej du')
            }, "1000");
            scrollToBottom();
        }
      
        else {
            document.getElementById('chatbox__writeinput').value = '';
            setTimeout(() => {
                addMessageRobot('Hvad?')
                scrollToBottom();
            }, "1000");

        }
    }

    function clearMessages() {
        messagesection.innerHTML = '';
    }

    function openUp() {
        chatbox.classList.toggle('chatbox__udvidet');
        closeandlogo.classList.toggle('chatboxdisplay');
        clearMessages()
        addMessageRobot('Hejsa. Mit navn er Sander!')

        if (chaticon.style.display === 'flex' || window.getComputedStyle(chaticon).display === 'flex') {
            chaticon.style.display = 'none'; // Hide chaticon
        } else {
            chaticon.style.display = 'flex'; // Show chaticon
        }



    }


    function scrollToBottom() {
        messagesection.scrollTop = messagesection.scrollHeight;
    }




    /*

    function messageconveration() {
        messagesection.innerHTML = ''
        setTimeout(() => {
            messagesection.innerHTML = '<div class="chatbox__messagerobot">' + '<p>' + 'Hej, mit navn er Sander! 🤖' + '</p>' + '</div>' + '<br>';
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
                messagesection.innerHTML += '<div class="chatbox__messagerobot">' + '<p>' + 'Hej ven! 🤖' + '</p>' + '</div>' + '<br>';

                setTimeout(() => {
                    messagesection.innerHTML += '<div class="chatbox__messagerobot">' + '<p>' + 'Hvad kan jeg gøre for dig? 🤖' + '</p>' + '</div>' + '<br>';
                    scrollToBottom();
                }, "1000");
            }, "500");;

        } else {

            if (document.getElementById('chatbox__writeinput').value === 'Frivillig?') {
                setTimeout(() => {
                    messagesection.innerHTML += '<div class="chatbox__messagerobot">' + '<p>' + 'Øjebilk 🤖' + '</p>' + '</div>' + '<br>';
    
                    setTimeout(() => {
                        messagesection.innerHTML += '<div class="chatbox__messagerobot">' + '<p>' + '<b>Klik her</b>' + '</p>' + '</div>' + '<br>';
                        scrollToBottom();
                    }, "1000");
                }, "500");;
    
            } else {
    
    
                setTimeout(() => {
                    messagesection.innerHTML += '<div class="chatbox__messagerobot">' + '<p>' + 'Jeg forstår ikke 🤖' + '</p>' + '</div>' + '<br>';
                    scrollToBottom();
    
    
                    setTimeout(() => {
                        messagesection.innerHTML += '<div class="chatbox__messagerobot">' + '<p>' + 'Sorry ven' + '</p>' + '</div>' + '<br>';
                        scrollToBottom();
                    }, "1000");
    
    
                }, "1000");
    
            }

        }
        scrollToBottom();
    }

    */