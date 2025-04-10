    const chatbox = document.getElementById('chatbox');
    const chaticon = document.getElementById('chatbox__chaticon');
    const closeandlogo = document.getElementById('chatbox__closeandlogo');
    const messagesection = document.getElementById('chatbox__messagesection');


    
    /* appendChild: for når man selv skriver noget */
    function addMessageYou(event) {
        event.preventDefault(); // ✅ Prevent form reload
        let input = document.getElementById('chatbox__writeinput').value;


        if (input.length > 0) {  /* dit input skal være mindre end 0 tal */
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

    /* appendChild for robotten */
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
    }

    /* Checkliste for roboten, den tjekker: document.getElementById('chatbox__writeinput').value */

    function robotAnswer() {

        if (document.getElementById('chatbox__writeinput').value.includes('Hej')) {
            setTimeout(() => {
                addMessageRobot('Hej du')
                scrollToBottom();
            }, "1000");


            setTimeout(() => {
                addMessageRobot('<img src="https://media2.giphy.com/media/JFz7YZA0vhiGlAYCSn/giphy.gif?cid=6c09b952au32ejvfxre3kszw9tkv0aj7i8gnnvc24uaimrua&ep=v1_gifs_search&rid=giphy.gif&ct=g">')
                setTimeout(() => {
                    scrollToBottom();  
                }, "1000");
            }, "3000");


        }

        else if (document.getElementById('chatbox__writeinput').value.includes('frivillig') || document.getElementById('chatbox__writeinput').value.includes('Frivillig') || document.getElementById('chatbox__writeinput').value.includes('ensom') || document.getElementById('chatbox__writeinput').value.includes('Ensom')) {
            document.getElementById('chatbox__writeinput').value = '';

            setTimeout(() => {
                addMessageRobot('Øjeblik...')
            }, "1000");
            scrollToBottom();

            setTimeout(() => {
                addMessageRobot('<b> > Her er et link < </b>')
            }, "3000");
            scrollToBottom();
        }

        else if (document.getElementById('chatbox__writeinput').value.includes('tak') || document.getElementById('chatbox__writeinput').value.includes('Tak')) {
            setTimeout(() => {
                addMessageRobot('Altid, snuske')
            }, "1000");
            scrollToBottom();

            setTimeout(() => {
                addMessageRobot('Noget andet jeg kan gøre?')
            }, "3000");
            scrollToBottom();
        }
      
        else {
            document.getElementById('chatbox__writeinput').value = '';
            setTimeout(() => {
                addMessageRobot('Hvad?')
                scrollToBottom();
            }, "1000");

        }

        document.getElementById('chatbox__writeinput').value = '';
    }

    /* appendChild for FAQs */

    function addMessageFAQ(text) {
        const messageDivFAQ = document.createElement('div');
        messageDivFAQ.classList.add('chatbox__messagefaq')
        const pTagForFAQ = document.createElement('p')
        pTagForFAQ.innerHTML = text;
        messageDivFAQ.appendChild(pTagForFAQ);
        messagesection.appendChild(messageDivFAQ);
    }

    /* Fjerner alt inde i min messagesection div*/
    
    function clearMessages() {
        messagesection.innerHTML = '';
    }

    /* Array for spørgsmål og emner */

    const FAQs = [
        { question: 'Frivillig' },
        { question: 'Ensomhed' },
    ];    
    
    
    /* Når man åbner chatten */

    function openUp() {
        chatbox.classList.toggle('chatbox__udvidet');
        closeandlogo.classList.toggle('chatboxdisplay');
        clearMessages()
        addMessageRobot('Hejsa. Mit navn er Sander!')
        

        setTimeout(() => {
        for (i = 0; i < FAQs.length; i++) {

            addMessageFAQ('Emne: ' + FAQs[i].question)

        }
    }, "2000");





        if (chaticon.style.display === 'flex' || window.getComputedStyle(chaticon).display === 'flex') {
            chaticon.style.display = 'none'; // Hide chaticon
        } else {
            chaticon.style.display = 'flex'; // Show chaticon
        }



    }

    /* function der kører til bunden af højden på vinduet */

    function scrollToBottom() {
        messagesection.scrollTop = messagesection.scrollHeight;
    }



































    

    /* Gammel kode, burde fjernes men det viser noget historie */

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