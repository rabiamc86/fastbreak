const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = `Copyright ${new Date().getFullYear()} FAST BREAK. All rights reserved.`;
}

const heroImages = [
  {
    name: 'Giannis Antetokounmpo',
    team: 'Milwaukee Bucks',
    number: '34',
    year: '2018',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Giannis%20Antetokounmpo%20%2839004611954%29.jpg',
    position: '52% center',
  },
  {
    name: 'Austin Reaves',
    team: 'Los Angeles Lakers',
    number: '15',
    year: '2022',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Austin%20Reaves.jpg',
    position: '50% center',
  },
  {
    name: 'LeBron James',
    team: 'Los Angeles Lakers',
    number: '23',
    year: '2018',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/LeBron%20James%20Lakers.jpg',
    position: '50% center',
  },
        {
    name: 'Luka Doncic',
    team: 'Los Angeles Lakers',
    number: '77',
    year: '2025',
    url: 'https://images2.minutemediacdn.com/image/upload/c_crop%2Cw_7764%2Ch_4367%2Cx_0%2Cy_0/c_fill%2Cw_720%2Car_16%3A9%2Cf_auto%2Cq_auto%2Cg_auto/images/ImagnImages/mmsport/fastbreak/01jkw191b6zft3xzt6k4.jpg',
    position: '50% center',
  },{
    name: 'Jalen Brunson',
    team: 'New York Knicks',
    number: '11',
    year: '2023',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jalen%20Brunson.jpg',
    position: '50% center',
  },
  {
    name: 'Stephen Curry',
    team: 'Golden State Warriors',
    number: '30',
    year: '2016',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stephen%20Curry%20shooting.jpg',
    position: '50% center',
  },
  {
    name: 'Victor Wembanyama',
    team: 'San Antonio Spurs',
    number: '1',
    year: '2024',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Victor%20Wembanyama%20San%20Antonio%20Spurs%202024.jpg',
    position: '52% center',
  },
  {
    name: 'Jaylen Brown',
    team: 'Boston Celtics',
    number: '7',
    year: '2022',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jaylen%20Brown%20%2851840869654%29.jpg',
    position: '50% center',
  },
    {
    name: 'Kevin Durant',
    team: 'Houston Rockets',
    number: '7',
    year: '2025',
    url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kevin-durant-grant-burke.jpg',
    position: '50% center',
  },
        {
    name: 'James Harden',
    team: 'Cleveland Cavaliers',
    number: '1',
    year: '2026',
    url: 'https://images2.minutemediacdn.com/image/upload/c_crop%2Cx_0%2Cy_0%2Cw_5352%2Ch_3010/c_fill%2Cw_720%2Car_16%3A9%2Cf_auto%2Cq_auto%2Cg_auto/images/ImagnImages/mmsport/cavs_insider/01kh5024q40vcsj7mkgd.jpg',
    position: '50% center',
  },
  {
    name: 'Jayson Tatum',
    team: 'Boston Celtics',
    number: '0',
    year: '2018',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jayson%20Tatum%20%282018%29.jpg',
    position: '50% center',
  },
    {
    name: 'Kyrie Irving',
    team: 'Dallas Mavericks',
    number: '11',
    year: '2025',
    url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kyrie-irving-chris-schwegler.jpg',
    position: '50% center',
  },
        {
    name: 'Anthony Edwards',
    team: 'Minnesota Timberwolves',
    number: '5',
    year: '2021',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anthony%20Edwards%20Kentavious%20Caldwell-Pope%20%2851734745028%29.jpg',
    position: '46% center',
  },
];

const bgLayers = document.querySelectorAll('.hero-bg-image');
const labelNode = document.getElementById('hero-player-label');

function applySlide(layer, slide) {
  layer.style.backgroundImage = `url("${slide.url}")`;
  layer.style.backgroundPosition = slide.position || 'center center';
}

function updateLabel(slide) {
  if (!labelNode || !slide) {
    return;
  }
  labelNode.textContent = `${slide.name} - ${slide.team} (${slide.year}) (#${slide.number})`;
}

if (bgLayers.length === 2 && heroImages.length > 0) {
  let photoIndex = 0;
  let activeLayer = 0;

  applySlide(bgLayers[0], heroImages[0]);
  bgLayers[0].classList.add('is-visible');
  updateLabel(heroImages[0]);

  if (heroImages.length > 1) {
    applySlide(bgLayers[1], heroImages[1]);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      window.setInterval(() => {
        photoIndex = (photoIndex + 1) % heroImages.length;
        const nextLayer = 1 - activeLayer;

        applySlide(bgLayers[nextLayer], heroImages[photoIndex]);
        bgLayers[nextLayer].classList.add('is-visible');
        bgLayers[activeLayer].classList.remove('is-visible');
        updateLabel(heroImages[photoIndex]);

        activeLayer = nextLayer;
      }, 4000);
    }
  }
}






