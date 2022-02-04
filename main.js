function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.hamburger-span').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.web-nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

const gamerSections = document.querySelector('.gamer__sections');

const gamersList = [
  {
    name: 'Teezie',
    description: 'Professional player, he is one of the best players in the world. Hoping to get his first MVP medal.',
    imageLink: 'images/p5.jpeg',
    teamName: ['Loners'],
  },
  {
    name: 'Kraken',
    description: 'Profesisonal player, he has won 5 MVP Medals and has been crowned as the best player of 2018',
    imageLink: 'images/p0.jpeg',
    teamName: ['Hell raiser'],
  },
  {
    name: 'Lieutenant',
    description: 'Professional player, he is an great competitor with incredible fighting spirit.',
    imageLink: 'images/p1.jpeg',
    teamName: ['Callings'],
  },
  {
    name: 'Tony Mason',
    description: 'Profesisonal player, he has won 2 MVP Medals and has been crowned as the best player of 2021',
    imageLink: 'images/p2.jpeg',
    teamName: ['papa Cummings'],
  },
  {
    name: 'Dapo',
    description: 'Profesisonal player, he has won 1 MVP Medals and has been crowned as the best player of 2020',
    imageLink: 'images/p3.jpeg',
    teamName: ['Playboy '],
  },
  {
    name: 'Megatron',
    description: 'professional player, he is a great competitor. A Tactician with high win rate hoping to get his first MVP.',
    imageLink: 'images/p4.jpeg',
    teamName: ['D`Meg'],
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
            <h3>${gamersList[i].name}</h3>
            <div class='short_desc'>
              <h4> ${gamersList[i].teamName}</h4>
              <span></span>
            </div>
            <div class='long_desc'>
              <p>
                ${gamersList[i].description}
              </p>
    </div>
  `;
}
