function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.hamburger-span').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

const gamerSections = document.querySelector('.gamer__sections');

const gamersList = [
  {
    name: 'Teezie',
    description: 'Professional player, he is one of the best players in the world.',
    imageLink: 'images/p5.jpeg',
    teamName: ['Loners Fc'],
  },
  {
    name: 'Kraken',
    description: 'Profesisonal player, he has won 5 MVP Medals and has been crowned as the best player of 2018',
    imageLink: 'images/p0.jpeg',
    teamName: ['Krakenstein'],
  },
  {
    name: 'Lieutenant',
    description: 'Professional player, he is an great competitor with incredible fighting.',
    imageLink: 'images/p1.jpeg',
    teamName: ['Fly with callings'],
  },
  {
    name: 'Tony',
    description: 'Profesisonal player, he has won 2 MVP Medals and has been crowned as the best player of 2021',
    imageLink: 'images/p2.jpeg',
    teamName: ['Mason'],
  },
  {
    name: 'PlayBoy',
    description: 'Profesisonal player, he has won 2 MVP Medals and has been crowned as the best player of 2020',
    imageLink: 'images/p3.jpeg',
    teamName: ['Noobs'],
  },
  {
    name: 'D`meg',
    description: 'professional player, he is a great competitor.',
    imageLink: 'images/p4.jpeg',
    teamName: ['Megatron'],
  },
];

gamerSections.innerHTML = '';
for (let i = 0; i < gamersList.length; i += 1) {
  gamerSections.innerHTML += `
      <div class='gamers'>
          <div class='gamers__image'>
            <img src='${gamersList[i].imageLink}' alt='gamer 1' class='img1' />
          </div>
          <div class='gamer__description'>
            <h2>${gamersList[i].name}</h2>
            <div class='short_desc'>
              <h4>${gamersList[i].teamName}</h4>
              <span></span>
            </div>
            <div class='long_desc'>
              <p>
                ${gamersList[i].description}
              </p>
    </div>
  `;
}
