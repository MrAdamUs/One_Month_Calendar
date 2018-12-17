const calenderBtn = document.querySelector('.btn-start');
const calenderContainer = document.querySelector('.container');

const calenderDays = 24;

const openDoor = (path, e) => {
    e.target.parentNode.style.backgroundImage = `url(${path})`;
    e.target.style.opacity = '0'
    e.target.style.backgroundColor = '#521751'
}

const createCalender = () => {
     for(let i = 0; i< calenderDays; i++) {
         const calenderDoor = document.createElement('div');
         const calenderDoorText = document.createElement('div');

         calenderDoor.classList.add('img')
         calenderDoor.style.gridArea = 'door' + (i + 1);
         calenderContainer.appendChild(calenderDoor);

         calenderDoorText.classList.add('text');
         calenderDoorText.innerHTML = i + 1;
         calenderDoor.appendChild(calenderDoorText)

         courseNumber = i + 1;
         let coursePath = `./courses/course-${courseNumber}.jpg`;

         calenderDoorText.addEventListener('click', openDoor.bind(null, coursePath))
     }
}

calenderBtn.addEventListener('click', function(){
    
    createCalender()
    // document.querySelector('.img').style.backgroundImage = 'none'
})

