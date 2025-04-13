//Ilyas Javascript - DON'T TOUCH!!!

//CONST
const dropdownData = {
    ensom: ["Find din lokale Ventilen", "Råd til pårørende", "Projekt Netwerk"],
    stot: [
      { title: "Shop", images: ["shop1.png", "shop2.png"] },
      { title: "Donation", images: ["donate1.png", "donate2.png"] }
    ],
    ressourcer: [
      { title: "Om os", images: ["ressource1.png", "ressource2.png"] },
      { title: "Book oplæg", images: ["book1.png", "book2.png"] },
      { title: "Kontakt os", images: ["kontakt1.png", "kontakt2.png"] }
    ],
    frivillig: ["Lokal frivillig", "Gruppe Frivillig", "National frivillig"]
  };
  
//Funktion
  function setupImageSwitch(sectionClass, data) {

    const container = document.querySelector(`.ilyasdropdown--${sectionClass}`);
    
//LOOP
    data.forEach(item => {
      let index = 0; 
      let img = document.createElement("img");
      img.className = "ilyasdropdown__img";
      img.src = `images/${item.images[0]}`;
  
      let span = document.createElement("span");
      span.textContent = item.title;
  //dom
      let div = document.createElement("div");
      div.className = "ilyasdropdown__item";
      div.appendChild(img);
      div.appendChild(span);
      container.appendChild(div);
  

      setInterval(() => {
        index = (index + 1) % item.images.length; 
        img.src = `images/${item.images[index]}`;
      }, 2000);
    });
  }
  

  function setupTextDropdown(sectionClass, list) {

    const container = document.querySelector(`.ilyasdropdown--${sectionClass}`);
    

    list.forEach(text => {
      let div = document.createElement("div"); 
      div.className = "ilyasdropdown__item";
      div.textContent = text;
      container.appendChild(div);
    });
  }
  

  setupTextDropdown("ensom", dropdownData.ensom);
  setupImageSwitch("stot", dropdownData.stot);
  setupImageSwitch("ressourcer", dropdownData.ressourcer);
  setupTextDropdown("frivillig", dropdownData.frivillig);
  
//events
  document.getElementById("ilyassearchBtn").addEventListener("click", () => {

    const input = document.getElementById("ilyassearchInput").value.toLowerCase(); 
    const allItems = [
      ...dropdownData.ensom,
      ...dropdownData.frivillig,
      ...dropdownData.stot.map(x => x.title),
      ...dropdownData.ressourcer.map(x => x.title)
    ];
    const allDropdownItems = document.querySelectorAll('.ilyasdropdown__item');
  
//if else
    if (allItems.some(item => item.toLowerCase() === input)) {
      document.getElementById("ilyasmessageBox").textContent = "Søgning fundet!";
  

      allDropdownItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
          item.classList.add('highlight');
        } else {
          item.classList.remove('highlight');
        }
      });
    } else {
      document.getElementById("ilyasmessageBox").textContent = "Intet fundet. Prøv igen.";
      allDropdownItems.forEach(item => item.classList.remove('highlight'));
    }
  });
  
//Boolean datatyope
  const stats = {
    total: dropdownData.ensom.length + dropdownData.frivillig.length + dropdownData.stot.length + dropdownData.ressourcer.length,
    active: true 
  };
  

  if (stats.active && stats.total > 0) {
    console.log("Dropdowns er aktive");
  }
  console.log("Totalt antal dropdowns: " + stats.total);
  
