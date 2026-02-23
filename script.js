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

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const sendBtn = document.getElementById('contact-send-btn');

  const fullNameError = document.getElementById('full-name-error');
  const contactMethodError = document.getElementById('contact-method-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  let nameTouched = false;
  let emailTouched = false;
  let phoneTouched = false;
  let subjectTouched = false;
  let messageTouched = false;

  function isBlank(value) {
    return !value || value.trim() === '';
  }

  function clearContactFormState() {
    const fields = contactForm.querySelectorAll('input, textarea');
    const errorNodes = contactForm.querySelectorAll('.form-error');

    contactForm.reset();

    fields.forEach((field) => {
      field.value = '';
      field.classList.remove('input-error');
      field.classList.remove('input-valid');
    });

    errorNodes.forEach((node) => {
      node.textContent = '';
    });

    nameTouched = false;
    emailTouched = false;
    phoneTouched = false;
    subjectTouched = false;
    messageTouched = false;
  }

  function setFieldError(input, errorNode, shouldShowError) {
    if (!input || !errorNode) {
      return;
    }

    if (shouldShowError) {
      input.classList.add('input-error');
      input.classList.remove('input-valid');
      errorNode.textContent = '*Response required*';
    } else {
      input.classList.remove('input-error');
      errorNode.textContent = '';
    }
  }

  function setFieldValid(input, shouldShowValid) {
    if (!input) {
      return;
    }

    if (shouldShowValid) {
      input.classList.add('input-valid');
      input.classList.remove('input-error');
    } else {
      input.classList.remove('input-valid');
    }
  }

  function validateName() {
    const hasValue = !isBlank(fullNameInput.value);
    const showError = nameTouched && !hasValue;
    setFieldError(fullNameInput, fullNameError, showError);
    setFieldValid(fullNameInput, hasValue);
    return !showError;
  }

  function validateMessage() {
    const hasValue = !isBlank(messageInput.value);
    const showError = messageTouched && !hasValue;
    setFieldError(messageInput, messageError, showError);
    setFieldValid(messageInput, hasValue);
    return !showError;
  }

  function validateSubject() {
    const hasValue = !isBlank(subjectInput.value);
    const showError = subjectTouched && !hasValue;
    setFieldError(subjectInput, subjectError, showError);
    setFieldValid(subjectInput, hasValue);
    return !showError;
  }

  function validateContactMethod() {
    const emailEmpty = isBlank(emailInput.value);
    const phoneEmpty = isBlank(phoneInput.value);
    const emailHasValue = !emailEmpty;
    const phoneHasValue = !phoneEmpty;
    const shouldCheck = emailTouched || phoneTouched;
    const showError = shouldCheck && emailEmpty && phoneEmpty;

    if (showError) {
      emailInput.classList.add('input-error');
      emailInput.classList.remove('input-valid');
      phoneInput.classList.add('input-error');
      phoneInput.classList.remove('input-valid');
      if (contactMethodError) {
        contactMethodError.textContent = '*Response required*';
      }
    } else {
      emailInput.classList.remove('input-error');
      phoneInput.classList.remove('input-error');
      setFieldValid(emailInput, emailHasValue);
      setFieldValid(phoneInput, phoneHasValue);
      if (contactMethodError) {
        contactMethodError.textContent = '';
      }
    }

    return !showError;
  }

  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      validateName();
    });

    fullNameInput.addEventListener('blur', () => {
      nameTouched = true;
      validateName();
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      validateMessage();
    });

    messageInput.addEventListener('blur', () => {
      messageTouched = true;
      validateMessage();
    });
  }

  if (subjectInput) {
    subjectInput.addEventListener('input', () => {
      validateSubject();
    });

    subjectInput.addEventListener('blur', () => {
      subjectTouched = true;
      validateSubject();
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      validateContactMethod();
    });

    emailInput.addEventListener('blur', () => {
      emailTouched = true;
      validateContactMethod();
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      validateContactMethod();
    });

    phoneInput.addEventListener('blur', () => {
      phoneTouched = true;
      validateContactMethod();
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      nameTouched = true;
      emailTouched = true;
      phoneTouched = true;
      subjectTouched = true;
      messageTouched = true;

      validateName();
      validateContactMethod();
      validateSubject();
      validateMessage();
    });
  }

  clearContactFormState();
  window.addEventListener('pageshow', clearContactFormState);
}

const shoeCardsGrid = document.getElementById('shoe-cards-grid');
function getKnownShoeFamilyParts(name) {
  const raw = (name || '').trim();
  const n = raw.toLowerCase();

  const knownFamilies = [
    { key: 'lebron xxi', display: 'LeBron XXI', test: /lebron\s*xxi/ },
    { key: 'lebron xx', display: 'LeBron XX', test: /lebron\s*xx(?!i)/ },
    { key: 'lebron 22', display: 'LeBron 22', test: /lebron\s*22/ },
    { key: 'nike lebron nxxt gen', display: 'LeBron NXXT Gen', test: /lebron\s*nxxt\s*gen/ },
    { key: 'lebron 9', display: 'LeBron 9', test: /lebron\s*9\b/ },
    { key: 'lebron 7', display: 'LeBron 7', test: /lebron\s*7\b/ },
    { key: 'lebron 2', display: 'LeBron 2', test: /lebron\s*2\b/ },
    { key: 'kd 18', display: 'KD 18', test: /\bkd\s*18\b/ },
    { key: 'kd 17', display: 'KD 17', test: /\bkd\s*17\b/ },
    { key: 'kd 16', display: 'KD 16', test: /\bkd\s*16\b/ },
    { key: 'kd 15', display: 'KD 15', test: /\bkd\s*15\b/ },
    { key: 'kd 8', display: 'KD 8', test: /\bkd\s*8\b/ },
    { key: 'kd 7', display: 'KD 7', test: /\bkd\s*7\b|\bkd7\b/ },
    { key: 'harden vol. 9', display: 'Harden Vol. 9', test: /harden\s*vol\.?\s*9/ },
    { key: 'harden vol. 8', display: 'Harden Vol. 8', test: /harden\s*vol\.?\s*8/ },
    { key: 'harden vol. 7', display: 'Harden Vol. 7', test: /harden\s*vol\.?\s*7/ },
    { key: 'harden vol. 2', display: 'Harden Vol. 2', test: /harden\s*vol\.?\s*2/ },
    { key: 'harden vol. 1', display: 'Harden Vol. 1', test: /harden\s*vol\.?\s*1/ },
    { key: 'kai 1', display: 'KAI 1', test: /\bkai\s*1\b/ },
    { key: 'kai 2', display: 'KAI 2', test: /\bkai\s*2\b/ },
    { key: 'kyrie 7', display: 'Kyrie 7', test: /\bkyrie\s*7\b/ },
    { key: 'kyrie 3', display: 'Kyrie 3', test: /\bkyrie\s*3\b/ },
    { key: 'kyrie 1', display: 'Kyrie 1', test: /\bkyrie\s*1\b/ },
    { key: 'kobe 6', display: 'Kobe 6', test: /\bkobe\s*6\b/ },
    { key: 'kobe 5', display: 'Kobe 5', test: /\bkobe\s*5\b/ },
    { key: 'kobe 4', display: 'Kobe 4', test: /\bkobe\s*4\b/ },
    { key: 'kobe x low', display: 'Kobe X Low', test: /\bkobe\s*x\s*low\b/ },
    { key: 'tatum 3', display: 'Tatum 3', test: /\btatum\s*3\b/ },
    { key: 'tatum 2', display: 'Tatum 2', test: /\btatum\s*2\b/ },
    { key: 'tatum 1', display: 'Tatum 1', test: /\btatum\s*1\b/ },
    { key: 'luka 3', display: 'Luka 3', test: /\bluka\s*3\b/ },
    { key: 'luka 2', display: 'Luka 2', test: /\bluka\s*2\b/ },
    { key: 'luka 1', display: 'Luka 1', test: /\bluka\s*1\b/ },
    { key: 'freak 6', display: 'Freak 6', test: /\bfreak\s*6\b/ },
    { key: 'freak 5', display: 'Freak 5', test: /\bfreak\s*5\b/ },
    { key: 'freak 4', display: 'Freak 4', test: /\bfreak\s*4\b/ },
    { key: 'freak 3', display: 'Freak 3', test: /\bfreak\s*3\b/ },
    { key: 'freak 2', display: 'Freak 2', test: /\bfreak\s*2\b/ },
    { key: 'immortality 3', display: 'Giannis Immortality 3', test: /immortality\s*3/ },
    { key: 'g.t. hustle 3', display: 'G.T. Hustle 3', test: /g\.?t\.?\s*hustle\s*3/ },
    { key: 'g.t. hustle 2', display: 'G.T. Hustle 2', test: /g\.?t\.?\s*hustle\s*2/ },
    { key: 'nike air zoom gt run', display: 'Air Zoom GT Run', test: /air\s*zoom\s*gt\s*run/ },
    { key: 'curry 12', display: 'Curry 12', test: /\bcurry\s*12\b/ },
    { key: 'curry 6', display: 'Curry 6', test: /\bcurry\s*6\b/ },
    { key: 'curry 4', display: 'Curry 4', test: /\bcurry\s*4\b/ },
    { key: 'curry 1 low', display: 'Curry 1 Low', test: /\bcurry\s*1\s*low\b/ },
    { key: 'fox 1', display: 'Curry Fox 1', test: /\bfox\s*1\b/ },
    { key: 'under armour anatomix spawn flotro', display: 'Anatomix Spawn FloTro', test: /anatomix\s*spawn\s*flotro/ },
    { key: 'rigorer ar-2', display: 'Rigorer AR-2', test: /\bar-?2\b/ },
    { key: 'rigorer ar-1', display: 'Rigorer AR-1', test: /\bar-?1\b/ },
    { key: 'rigorer war ender', display: 'Rigorer War Ender', test: /war\s*ender/ },
    { key: 'sniper 2', display: 'Rigorer Sniper 2', test: /sniper\s*2/ },
    { key: 'sabrina 1', display: 'Sabrina 1', test: /sabrina\s*1/ },
    { key: 'air 37 low', display: 'Air 37 Low', test: /air\s*37\s*low/ },
    { key: 'air 37', display: 'Air 37', test: /air\s*37(?!\s*low)/ },
    { key: 'air 36', display: 'Air 36', test: /air\s*36/ },
    { key: 'air 35', display: 'Air 35', test: /air\s*35/ },
    { key: 'adidas ae1 low', display: 'AE1 Low', test: /\bae1\s*low\b/ },
    { key: 'adidas ae1', display: 'AE1', test: /\bae1\b/ },
    { key: 'adidas byw select', display: 'BYW Select', test: /byw\s*select/ },
    { key: 'dame 6', display: 'Dame 6', test: /dame\s*6/ },
    { key: 'bounce 2019 low', display: 'Pro Bounce 2019 Low', test: /pro\s*bounce\s*2019\s*low/ },
    { key: 'unknown 3', display: 'Unknown 3', test: /unknown\s*3/ },
    { key: '741', display: '741 Performance Rover', test: /741\s*performance\s*rover/ },
    { key: 'wave 5', display: 'Shock Wave 5 Pro', test: /shock\s*wave\s*5/ },
    { key: 'hyperdunk x low', display: 'Hyperdunk X Low', test: /hyperdunk\s*x\s*low/ },
  ];

  const matched = knownFamilies.find((family) => family.test.test(n));
  if (matched) {
    return { key: matched.key, display: matched.display };
  }

  return { key: n, display: raw };
}

if (shoeCardsGrid) {
  const playerShoeData = [
    { player: 'LeBron James', shoes: [
      { name: 'Nike LeBron 22', image: 'https://nbashoesdb.com/images/models/847.png' },
      { name: 'Nike LeBron XXI', image: 'https://nbashoesdb.com/images/models/720.png' },
      { name: 'Nike LeBron XXI Father of Pearl', image: 'https://nbashoesdb.com/images/models/969.png' },
      { name: 'Nike LeBron NXXT Gen', image: 'https://nbashoesdb.com/images/models/713.png' },
      { name: 'Nike LeBron 7', image: 'https://nbashoesdb.com/images/models/556.png' },
      { name: 'Nike LeBron XX', image: 'https://nbashoesdb.com/images/models/471.png' },
      { name: 'Nike LeBron 2', image: 'https://nbashoesdb.com/images/models/509.png' },
      { name: 'Nike LeBron 9', image: 'https://nbashoesdb.com/images/models/537.png' },
    ] },
    { player: 'Stephen Curry', shoes: [
      { name: 'Under Armour Curry 12 Extraterrestial', image: 'https://nbashoesdb.com/images/models/1174.png' },
      { name: 'Under Armour Curry 12 Year of the Snake', image: 'https://nbashoesdb.com/images/models/999.png' },
      { name: 'Under Armour Curry 12', image: 'https://nbashoesdb.com/images/models/869.png' },
      { name: 'Under Armour Anatomix Spawn Flotro', image: 'https://nbashoesdb.com/images/models/761.png' },
      { name: 'Under Armour Curry 6 FloTro', image: 'https://nbashoesdb.com/images/models/895.png' },
      { name: 'Under Armour Curry Fox 1', image: 'https://nbashoesdb.com/images/models/855.png' },
      { name: 'Under Armour Curry 1 Low FloTro Lux', image: 'https://nbashoesdb.com/images/models/763.png' },
      { name: 'Under Armour Curry 4 FloTro', image: 'https://nbashoesdb.com/images/models/569.png' },
    ] },
    { player: 'Kevin Durant', shoes: [
      { name: 'Nike KD 17', image: 'https://nbashoesdb.com/images/models/812.png' },
      { name: 'Nike KD 17 Slim Reaper', image: 'https://nbashoesdb.com/images/models/1087.png' },
      { name: 'Nike KD 17 Easy Money All-Star', image: 'https://nbashoesdb.com/images/models/978.png' },
      { name: 'Nike KD 16', image: 'https://nbashoesdb.com/images/models/675.png' },
      { name: 'Nike KD 15', image: 'https://nbashoesdb.com/images/models/484.png' },
      { name: 'Nike KD 8', image: 'https://nbashoesdb.com/images/models/108.png' },
      { name: 'Nike KD 7', image: 'https://nbashoesdb.com/images/models/38.png' },
      { name: 'Nike KD 18', image: 'https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/032a22e1-ccad-4a8f-afdb-eb6e9cfd5b76/KD18.png' },
    ] },
    { player: 'James Harden', shoes: [
      { name: 'Adidas Harden Vol. 9', image: 'https://nbashoesdb.com/images/models/891.png' },
      { name: 'Adidas Harden Vol. 9 Cyber Metallic', image: 'https://nbashoesdb.com/images/models/903.png' },
      { name: 'Adidas Harden Vol. 8', image: 'https://nbashoesdb.com/images/models/754.png' },
      { name: 'Adidas Harden Vol. 7', image: 'https://nbashoesdb.com/images/models/480.png' },
      { name: 'Adidas Harden Vol. 2', image: 'https://nbashoesdb.com/images/models/267.png' },
      { name: 'Adidas Harden Vol. 1', image: 'https://nbashoesdb.com/images/models/186.png' },
      { name: 'Adidas Crazylight Boost 2.5', image: 'https://nbashoesdb.com/images/models/179.png' },
      { name: 'Adidas 2015 Crazylight Boost Primeknit', image: 'https://nbashoesdb.com/images/models/112.png' },
    ] },
    { player: 'Kyrie Irving', shoes: [
      { name: 'Anta KAI 1', image: 'https://nbashoesdb.com/images/models/796.png' },
      { name: 'Anta KAI 1 Santas Bag', image: 'https://nbashoesdb.com/images/models/1077.png' },
      { name: 'Anta KAI 1 Yin Triple Black', image: 'https://nbashoesdb.com/images/models/941.png' },
      { name: 'Anta KAI 1 Mountain Stone Grey', image: 'https://nbashoesdb.com/images/models/1045.png' },
      { name: 'Anta KAI 2', image: 'https://nbashoesdb.com/images/models/893.png' },
      { name: 'Nike Kyrie 1', image: 'https://nbashoesdb.com/images/models/14.png' },
      { name: 'Anta Shock Wave 5 Pro', image: 'https://nbashoesdb.com/images/models/731.png' },
      { name: 'Nike Kyrie 3', image: 'https://nbashoesdb.com/images/models/181.png' },
    ] },
    { player: 'Giannis Antetokounmpo', shoes: [
      { name: 'Nike Freak 6', image: 'https://nbashoesdb.com/images/models/841.png' },
      { name: 'Nike Freak 6 EP', image: 'https://nbashoesdb.com/images/models/1170.png' },
      { name: 'Nike Freak 6 Christmas', image: 'https://nbashoesdb.com/images/models/1128.png' },
      { name: 'Nike Freak 5', image: 'https://nbashoesdb.com/images/models/715.png' },
      { name: 'Nike Giannis Immortality 3', image: 'https://nbashoesdb.com/images/models/740.png' },
      { name: 'Nike Zoom Freak 2', image: 'https://nbashoesdb.com/images/models/388.png' },
      { name: 'Nike Zoom Freak 3', image: 'https://nbashoesdb.com/images/models/441.png' },
      { name: 'Nike Zoom Freak 4', image: 'https://nbashoesdb.com/images/models/462.png' },
    ] },
    { player: 'Luka Doncic', shoes: [
      { name: 'Jordan Luka 1', image: 'https://nbashoesdb.com/images/models/460.png' },
      { name: 'Jordan Luka 3', image: 'https://nbashoesdb.com/images/models/814.png' },
      { name: 'Jordan Luka 2', image: 'https://nbashoesdb.com/images/models/669.png' },
      { name: 'Jordan Air 35', image: 'https://nbashoesdb.com/images/models/396.png' },
      { name: 'Nike Hyperdunk X Low', image: 'https://nbashoesdb.com/images/models/292.png' },
    ] },
    { player: 'Jayson Tatum', shoes: [
      { name: 'Jordan Tatum 3', image: 'https://nbashoesdb.com/images/models/848.png' },
      { name: 'Jordan Tatum 3 6th Man', image: 'https://nbashoesdb.com/images/models/1033.png' },
      { name: 'Jordan Tatum 3 St. Louis', image: 'https://nbashoesdb.com/images/models/1098.png' },
      { name: 'Jordan Tatum 2', image: 'https://nbashoesdb.com/images/models/773.png' },
      { name: 'Jordan Tatum 1', image: 'https://nbashoesdb.com/images/models/650.png' },
      { name: 'Jordan Air 37 Low', image: 'https://nbashoesdb.com/images/models/528.png' },
      { name: 'Jordan Air 36', image: 'https://nbashoesdb.com/images/models/486.png' },
      { name: 'Jordan Air 37', image: 'https://nbashoesdb.com/images/models/485.png' },
    ] },
    { player: 'Anthony Edwards', shoes: [
      { name: 'Adidas AE1 Low', image: 'https://nbashoesdb.com/images/models/813.png' },
      { name: 'Adidas AE1 Low Nicks Gift', image: 'https://nbashoesdb.com/images/models/926.png' },
      { name: 'Adidas AE1 Low USA', image: 'https://nbashoesdb.com/images/models/1101.png' },
      { name: 'Adidas AE1 Low 3SSB Cotton Candy PE', image: 'https://nbashoesdb.com/images/models/1117.png' },
      { name: 'Adidas AE1', image: 'https://nbashoesdb.com/images/models/746.png' },
      { name: 'Adidas BYW Select', image: 'https://nbashoesdb.com/images/models/647.png' },
      { name: 'Adidas Harden Vol. 7', image: 'https://nbashoesdb.com/images/models/480.png' },
      { name: 'Adidas Unknown 3', image: 'https://nbashoesdb.com/images/models/570.png' },
    ] },
    { player: 'Victor Wembanyama', shoes: [
      { name: 'Nike G.T. Hustle 3', image: 'https://nbashoesdb.com/images/models/838.png' },
      { name: 'Nike G.T. Hustle 3 Mint', image: 'https://nbashoesdb.com/images/models/920.png' },
      { name: 'Nike Air Zoom GT Run', image: 'https://nbashoesdb.com/images/models/434.png' },
      { name: 'Nike G.T. Hustle 2', image: 'https://nbashoesdb.com/images/models/728.png' },
    ] },
    { player: 'Jalen Brunson', shoes: [
      { name: 'Nike Kobe 4 Protro', image: 'https://nbashoesdb.com/images/models/333.png' },
      { name: 'Nike Kobe 6', image: 'https://nbashoesdb.com/images/models/473.png' },
      { name: 'Nike Kobe 6 WNBA', image: 'https://nbashoesdb.com/images/models/908.png' },
      { name: 'Nike Kobe 6 Sail All-Star', image: 'https://nbashoesdb.com/images/models/925.png' },
      { name: 'Nike Kobe 5 Protro Year of the Mamba', image: 'https://nbashoesdb.com/images/models/929.png' },
      { name: 'Nike Kobe 6 Grinch', image: 'https://nbashoesdb.com/images/models/1004.png' },
      { name: 'Nike Kobe 5', image: 'https://nbashoesdb.com/images/models/379.png' },
      { name: 'Nike Sabrina 1', image: 'https://nbashoesdb.com/images/models/705.png' },
    ] },
    { player: 'Austin Reaves', shoes: [
      { name: 'Rigorer AR-2', image: 'https://nbashoesdb.com/images/models/884.png' },
      { name: 'Rigorer AR-2 Valentines Day', image: 'https://nbashoesdb.com/images/models/1079.png' },
      { name: 'Rigorer AR-1', image: 'https://nbashoesdb.com/images/models/726.png' },
      { name: 'Rigorer War Ender', image: 'https://nbashoesdb.com/images/models/579.png' },
      { name: 'Rigorer Sniper 2', image: 'https://nbashoesdb.com/images/models/474.png' },
      { name: 'Nike Kyrie 7', image: 'https://nbashoesdb.com/images/models/400.png' },
    ] },
    { player: 'Jaylen Brown', shoes: [
      { name: '741 Performance Rover', image: 'https://nbashoesdb.com/images/models/854.png' },
      { name: 'Nike Air Zoom G.T. Cut 2', image: 'https://nbashoesdb.com/images/models/481.png' },
      { name: 'Anta KAI 1', image: 'https://nbashoesdb.com/images/models/796.png' },
      { name: 'Nike Kobe 6', image: 'https://nbashoesdb.com/images/models/473.png' },
      { name: 'Nike Kobe 5', image: 'https://nbashoesdb.com/images/models/379.png' },
      { name: 'Nike Kobe X Low', image: 'https://nbashoesdb.com/images/models/534.png' },
      { name: 'Adidas Dame 6', image: 'https://nbashoesdb.com/images/models/380.png' },
      { name: 'Adidas Pro Bounce 2019 Low', image: 'https://nbashoesdb.com/images/models/344.png' },
    ] },
  ];

  function getShoePrice(shoeName) {
    const n = shoeName.toLowerCase();

    if (n.includes('lebron 22')) return '$180';
    if (n.includes('lebron xxi') || n.includes('lebron xx')) return '$200';
    if (n.includes('lebron nxxt')) return '$170';
    if (n.includes('lebron')) return '$180';

    if (n.includes('kd 17')) return '$150';
    if (n.includes('kd 16')) return '$160';
    if (n.includes('kd 15')) return '$150';
    if (n.includes('kd')) return '$150';

    if (n.includes('kobe')) return '$190';
    if (n.includes('kyrie')) return '$130';
    if (n.includes('freak 6')) return '$140';
    if (n.includes('freak 5')) return '$130';
    if (n.includes('freak')) return '$130';
    if (n.includes('immortality')) return '$85';
    if (n.includes('g.t. hustle 3')) return '$190';
    if (n.includes('g.t. hustle 2')) return '$170';
    if (n.includes('gt run')) return '$170';
    if (n.includes('luka')) return '$130';
    if (n.includes('tatum 3') || n.includes('tatum 2')) return '$125';
    if (n.includes('tatum 1')) return '$120';
    if (n.includes('air 37') || n.includes('air 36')) return '$185';

    if (n.includes('harden vol. 9') || n.includes('harden vol. 8')) return '$160';
    if (n.includes('harden')) return '$150';
    if (n.includes('ae1')) return '$120';
    if (n.includes('byw') || n.includes('dame') || n.includes('pro bounce')) return '$120';
    if (n.includes('curry 12')) return '$140';
    if (n.includes('curry')) return '$130';
    if (n.includes('kai 2')) return '$130';
    if (n.includes('kai 1')) return '$125';
    if (n.includes('shock wave')) return '$130';
    if (n.includes('rigorer ar-2')) return '$110';
    if (n.includes('rigorer ar-1')) return '$100';
    if (n.includes('rigorer')) return '$100';
    if (n.includes('741 performance rover')) return '$200';

    return '$150';
  }

  const allShoes = playerShoeData.flatMap((entry) =>
    entry.shoes.map((shoe) => ({
      name: shoe.name,
      image: shoe.image,
      player: entry.player,
      price: getShoePrice(shoe.name),
    })),
  );

  const displayShoes = [];
  const seenDisplayFamilies = new Set();
  allShoes.forEach((shoe) => {
    const family = getKnownShoeFamilyParts(shoe.name);
    const displayKey = `${shoe.player}|${family.key}`;
    if (seenDisplayFamilies.has(displayKey)) {
      return;
    }
    seenDisplayFamilies.add(displayKey);
    displayShoes.push({
      ...shoe,
      familyKey: family.key,
    });
  });

  const cardsHtml = displayShoes
    .map(
      (shoe, index) => `
        <article
          class="gallery-card"
          data-shoe-index="${index}"
          role="button"
          tabindex="0"
          aria-label="View ${shoe.name} details"
        >
          <img src="${shoe.image}" alt="${shoe.player} ${shoe.name}" loading="lazy" />
          <p class="shoe-title">${shoe.name}</p>
          <p class="shoe-player">${shoe.player}</p>
        </article>
      `,
    )
    .join('');

  shoeCardsGrid.innerHTML = cardsHtml;

  function openShoeDetailPage(index) {
    const shoe = displayShoes[index];
    if (!shoe) {
      return;
    }

    const selectedFamily = getKnownShoeFamilyParts(shoe.name);
    const selectedVariants = allShoes.filter(
      (entry) => entry.player === shoe.player && getKnownShoeFamilyParts(entry.name).key === selectedFamily.key,
    );

    try {
      sessionStorage.setItem('selectedShoe', JSON.stringify(shoe));
      sessionStorage.setItem('allShoes', JSON.stringify(allShoes));
      sessionStorage.setItem('selectedShoeVariants', JSON.stringify(selectedVariants));
    } catch (error) {
      // If storage is blocked, fall back to direct navigation.
    }
    window.location.href = 'shoe.html';
  }

  shoeCardsGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.gallery-card');
    if (!card) {
      return;
    }

    const index = Number(card.dataset.shoeIndex);
    openShoeDetailPage(index);
  });

  shoeCardsGrid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    const card = event.target.closest('.gallery-card');
    if (!card) {
      return;
    }

    event.preventDefault();
    const index = Number(card.dataset.shoeIndex);
    openShoeDetailPage(index);
  });
}

const shoeDetailPage = document.getElementById('shoe-detail-page');
if (shoeDetailPage) {
  const shoeDetailImage = document.getElementById('shoe-detail-image');
  const shoeDetailName = document.getElementById('shoe-detail-name');
  const shoeDetailPrice = document.getElementById('shoe-detail-price');
  const shoeColorOptions = document.getElementById('shoe-color-options');
  const shoeActiveColor = document.getElementById('shoe-active-color');
  let selectedShoe = null;
  let allShoes = [];
  let selectedShoeVariants = [];
  const variantIdBySlug = {
    'ar-2': 884,
    'ar-2-valentines-day': 1079,
    'curry-12': 869,
    'curry-12-camp': 1181,
    'curry-12-extraterrestial': 1174,
    'curry-12-year-of-the-snake': 999,
    'curry-1-low': 876,
    'curry-1-low-flotro': 476,
    'curry-1-low-flotro-lux': 763,
    'curry-4': 239,
    'curry-4-flowtro': 569,
    'curry-4-low-flotro': 714,
    'curry-6': 316,
    'curry-6-flotro': 895,
    'curry-6-flotro-the-city': 1112,
    'freak-6': 841,
    'freak-6-christmas': 1128,
    'freak-6-ep': 1170,
    'freak-6-fright-night': 1060,
    'freak-6-humility': 1000,
    'freak-6-roses': 1089,
    'g-t-hustle-3': 920,
    'g-t-hustle-3-basketball': 838,
    'g-t-hustle-2': 728,
    'air-zoom-gt-run': 434,
    'anatomix-spawn-flotro': 761,
    'ar-1': 726,
    'gt-hustle-3-paige-bueckers': 1050,
    'harden-vol-8': 754,
    'harden-vol-8-eurocamp': 1147,
    'harden-vol-8-thunder': 1110,
    'harden-vol-9': 891,
    'harden-vol-9-cyber-metallic': 903,
    'kai-1': 796,
    'kai-1-garden-state': 1086,
    'kai-1-kai-feng': 1109,
    'kai-1-mothers-day': 1158,
    'kai-1-mountain-stone-grey': 1045,
    'kai-1-sacred-bond': 1070,
    'kai-1-santas-bag': 1077,
    'kai-1-speed-tribe': 1084,
    'kai-1-speed-young-at-heart': 1088,
    'kai-1-team': 917,
    'kai-1-triple-white': 1029,
    'kai-1-yin-triple-black': 941,
    'kd-16': 675,
    'kd-16-all-star': 1031,
    'kd-16-bad': 1155,
    'kd-16-boardroom': 1105,
    'kd-16-by-you': 1093,
    'kd-16-nrg-aunt-pearl': 912,
    'kd-16-ny-vs-ny': 1032,
    'kd-16-triple-black': 1038,
    'kd-17': 812,
    'kd-17-aunt-pearl': 968,
    'kd-17-bad': 937,
    'kd-17-christmas': 986,
    'kd-17-easy-money-all-star': 978,
    'kd-17-easy-money-sniper': 959,
    'kd-17-late-night': 1133,
    'kd-17-n7': 1017,
    'kd-17-nrg-the-alchemist': 1106,
    'kd-17-penny': 1066,
    'kd-17-slim-reaper': 1087,
    'kd-17-travel-ball': 1005,
    'kd-17-usa': 995,
    'kd-17-wolf-grey': 970,
    'kd-15': 484,
    'kd-8': 108,
    'kobe-4': 915,
    'kobe-4-anthony-davis': 1115,
    'kobe-4-protro': 333,
    'kobe-4-protro-del-sol': 1006,
    'kobe-4-protro-ftb-snake': 1171,
    'kobe-4-protro-gift-of-mamba': 900,
    'kobe-4-protro-girl-dad': 901,
    'kobe-4-protro-gold-medal': 984,
    'kobe-4-protro-mambacita': 958,
    'kobe-4-protro-philly': 954,
    'kobe-4-protro-undefeated': 940,
    'kobe-4-protro-undefeated-black-mamba': 1132,
    'kobe-4-protro-wizenard': 1135,
    'kobe-4-undefeated': 1001,
    'kobe-5': 379,
    'kobe-5-big-stage': 1023,
    'kobe-5-black-mamba-collection-fade-to-black': 1136,
    'kobe-5-blackout': 1130,
    'kobe-5-bruce-lee': 974,
    'kobe-5-chaos': 922,
    'kobe-5-del-sol': 1167,
    'kobe-5-eybl': 1149,
    'kobe-5-pj-tucker': 1054,
    'kobe-5-protro': 382,
    'kobe-5-protro-bruce-lee-alternate': 1073,
    'kobe-5-protro-kay-yow': 1111,
    'kobe-5-protro-undefeated-hall-of-fame': 990,
    'kobe-5-protro-undefeated-what-if-multi': 956,
    'kobe-5-protro-year-of-the-mamba': 929,
    'kobe-5-tb-yow-think-pink': 1104,
    'kobe-5-undefeated': 1092,
    'kobe-5-x-ray': 919,
    'kobe-5-zebra': 1103,
    'kobe-6': 473,
    'kobe-6-all-star': 1085,
    'kobe-6-bhm': 934,
    'kobe-6-black-mamba-collection-fade-to-black': 988,
    'kobe-6-blue-camo': 1148,
    'kobe-6-dodgers': 1065,
    'kobe-6-grinch': 1004,
    'kobe-6-italian-camo': 906,
    'kobe-6-kay-yow-think-pink': 960,
    'kobe-6-lakers-home': 1134,
    'kobe-6-mambacita-sweet-16': 955,
    'kobe-6-protro': 422,
    'kobe-6-reverse-grinch': 918,
    'kobe-6-sail-all-star': 925,
    'kobe-6-usa': 899,
    'kobe-6-white-del-sol': 924,
    'kobe-6-wnba': 908,
    'kyrie-3': 181,
    'kyrie-3-mamba-mentality': 1107,
    'kyrie-1': 14,
    'kyrie-7': 400,
    'kyrie-7-preheat-soundwave': 1096,
    'kyrie-7-rings': 1082,
    'kyrie-7-sisterhood': 985,
    'lebron-22': 847,
    'lebron-22-crown-jewel': 1099,
    'lebron-22-currency': 987,
    'lebron-22-limelight': 992,
    'lebron-22-mogul': 1153,
    'lebron-7': 556,
    'lebron-7-famu': 979,
    'lebron-9': 537,
    'lebron-9-low': 541,
    'lebron-9-ps-elite': 580,
    'lebron-nxxt-gen': 713,
    'lebron-nxxt-gen-ampd': 829,
    'lebron-nxxt-gen-ampd-usc': 1161,
    'lebron-nxxt-gen-faze-clan-bred': 938,
    'lebron-nxxt-gen-south-beach': 947,
    'lebron-xx': 471,
    'lebron-xx-all-star': 965,
    'lebron-xxi': 720,
    'lebron-xxi-conchiolin': 1007,
    'lebron-xxi-father-of-pearl': 969,
    'lebron-xxi-james-gang': 1154,
    'lebron-xxi-optimism': 1062,
    'lebron-xxi-premium-pearl-of-z': 1185,
    'lebron-xxi-resilient': 1016,
    'lebron-xxi-tahitian': 976,
    'lebron-xxi-the-world-is-your-oyster': 1140,
    'lebron-xx-miami-heat': 913,
    'lebron-xx-mimi-plange-ceremony': 1120,
    'lebron-xx-unknwn-message-in-a-bottle': 1051,
    'lebron-2': 509,
    'harden-vol-7': 480,
    'harden-vol-2': 267,
    'harden-vol-1': 186,
    'freak-5': 715,
    'zoom-freak-4': 462,
    'zoom-freak-3': 441,
    'zoom-freak-3-nrg-uno-red': 1039,
    'zoom-freak-3-tb': 1160,
    'zoom-freak-2': 388,
    'giannis-immortality-3': 740,
    'luka-1': 460,
    'luka-2': 669,
    'luka-3': 814,
    'tatum-1': 650,
    'curry-fox-1': 855,
    'curry-fox-1-happy-fox-day-alt': 933,
    'sabrina-1': 705,
    'sabrina-1-duke': 1058,
    'war-ender': 579,
    'sniper-2': 474,
    'dame-6': 380,
    'pro-bounce-2019-low': 344,
    'unknown-3': 570,
    '741-performance-rover': 854,
    'shock-wave-5-pro': 731,
    'tatum-2': 773,
    'tatum-2-lemonade': 1026,
    'tatum-3': 848,
    'tatum-3-6th-man': 1033,
    'tatum-3-st-louis': 1098,
    'tatum-3-welcome-to-the-garden-alternate': 1091,
    'tatum-3-year-of-the-snake': 1168,
    'tatum-3-zen': 1018,
  };
  const excludedVariantIdsByFamily = {
    'nike lebron nxxt gen': new Set([947, 1161]),
  };
  const curatedVariantSlugsByFamily = {
    'lebron xxi': {
      base: 'lebron-xxi',
      slugs: [
        'lebron-xxi',
        'lebron-xxi-conchiolin',
        'lebron-xxi-father-of-pearl',
        'lebron-xxi-james-gang',
        'lebron-xxi-optimism',
        'lebron-xxi-premium-pearl-of-z',
        'lebron-xxi-resilient',
        'lebron-xxi-tahitian',
        'lebron-xxi-the-world-is-your-oyster',
      ],
    },
    'lebron xx': {
      base: 'lebron-xx',
      slugs: [
        'lebron-xx',
        'lebron-xx-all-star',
        'lebron-xx-miami-heat',
        'lebron-xx-mimi-plange-ceremony',
        'lebron-xx-unknwn-message-in-a-bottle',
      ],
    },
    'lebron 22': {
      base: 'lebron-22',
      slugs: [
        'lebron-22',
        'lebron-22-crown-jewel',
        'lebron-22-currency',
        'lebron-22-limelight',
        'lebron-22-mogul',
      ],
    },
    'nike lebron nxxt gen': {
      base: 'lebron-nxxt-gen',
      slugs: [
        'lebron-nxxt-gen',
        'lebron-nxxt-gen-ampd',
        'lebron-nxxt-gen-ampd-usc',
        'lebron-nxxt-gen-faze-clan-bred',
        'lebron-nxxt-gen-south-beach',
      ],
    },
    'lebron 9': {
      base: 'lebron-9',
      slugs: ['lebron-9', 'lebron-9-low', 'lebron-9-ps-elite'],
    },
    'lebron 7': {
      base: 'lebron-7',
      slugs: ['lebron-7', 'lebron-7-famu'],
    },
    'kd 17': {
      base: 'kd-17',
      slugs: [
        'kd-17',
        'kd-17-aunt-pearl',
        'kd-17-bad',
        'kd-17-christmas',
        'kd-17-easy-money-all-star',
        'kd-17-easy-money-sniper',
        'kd-17-late-night',
        'kd-17-n7',
        'kd-17-nrg-the-alchemist',
        'kd-17-penny',
        'kd-17-slim-reaper',
        'kd-17-travel-ball',
        'kd-17-usa',
        'kd-17-wolf-grey',
      ],
    },
    'kd 16': {
      base: 'kd-16',
      slugs: [
        'kd-16',
        'kd-16-all-star',
        'kd-16-bad',
        'kd-16-boardroom',
        'kd-16-by-you',
        'kd-16-nrg-aunt-pearl',
        'kd-16-ny-vs-ny',
        'kd-16-triple-black',
      ],
    },
    'curry 12': {
      base: 'curry-12',
      slugs: [
        'curry-12',
        'curry-12-camp',
        'curry-12-extraterrestial',
        'curry-12-year-of-the-snake',
      ],
    },
    'curry 6': {
      base: 'curry-6',
      slugs: ['curry-6', 'curry-6-flotro', 'curry-6-flotro-the-city'],
    },
    'curry 4': {
      base: 'curry-4',
      slugs: ['curry-4', 'curry-4-flowtro', 'curry-4-low-flotro'],
    },
    'curry 1 low': {
      base: 'curry-1-low',
      slugs: ['curry-1-low', 'curry-1-low-flotro', 'curry-1-low-flotro-lux'],
    },
    'harden vol. 9': {
      base: 'harden-vol-9',
      slugs: ['harden-vol-9', 'harden-vol-9-cyber-metallic'],
    },
    'harden vol. 8': {
      base: 'harden-vol-8',
      slugs: ['harden-vol-8', 'harden-vol-8-eurocamp', 'harden-vol-8-thunder'],
    },
    'harden vol. 7': {
      base: 'harden-vol-7',
      slugs: ['harden-vol-7'],
    },
    'harden vol. 2': {
      base: 'harden-vol-2',
      slugs: ['harden-vol-2'],
    },
    'harden vol. 1': {
      base: 'harden-vol-1',
      slugs: ['harden-vol-1'],
    },
    'kai 1': {
      base: 'kai-1',
      slugs: [
        'kai-1',
        'kai-1-garden-state',
        'kai-1-kai-feng',
        'kai-1-mothers-day',
        'kai-1-mountain-stone-grey',
        'kai-1-sacred-bond',
        'kai-1-santas-bag',
        'kai-1-speed-tribe',
        'kai-1-speed-young-at-heart',
        'kai-1-team',
        'kai-1-triple-white',
        'kai-1-yin-triple-black',
      ],
    },
    'kai 2': {
      base: 'kai-2',
      slugs: ['kai-2'],
    },
    'kobe 6': {
      base: 'kobe-6',
      slugs: [
        'kobe-6',
        'kobe-6-all-star',
        'kobe-6-bhm',
        'kobe-6-black-mamba-collection-fade-to-black',
        'kobe-6-blue-camo',
        'kobe-6-dodgers',
        'kobe-6-grinch',
        'kobe-6-italian-camo',
        'kobe-6-kay-yow-think-pink',
        'kobe-6-lakers-home',
        'kobe-6-mambacita-sweet-16',
        'kobe-6-protro',
        'kobe-6-reverse-grinch',
        'kobe-6-sail-all-star',
        'kobe-6-usa',
        'kobe-6-white-del-sol',
        'kobe-6-wnba',
      ],
    },
    'kobe 5': {
      base: 'kobe-5',
      slugs: [
        'kobe-5',
        'kobe-5-big-stage',
        'kobe-5-black-mamba-collection-fade-to-black',
        'kobe-5-blackout',
        'kobe-5-bruce-lee',
        'kobe-5-chaos',
        'kobe-5-del-sol',
        'kobe-5-eybl',
        'kobe-5-pj-tucker',
        'kobe-5-protro',
        'kobe-5-protro-bruce-lee-alternate',
        'kobe-5-protro-kay-yow',
        'kobe-5-protro-undefeated-hall-of-fame',
        'kobe-5-protro-undefeated-what-if-multi',
        'kobe-5-protro-year-of-the-mamba',
        'kobe-5-tb-yow-think-pink',
        'kobe-5-undefeated',
        'kobe-5-x-ray',
        'kobe-5-zebra',
      ],
    },
    'kobe 4': {
      base: 'kobe-4',
      slugs: [
        'kobe-4',
        'kobe-4-anthony-davis',
        'kobe-4-protro',
        'kobe-4-protro-del-sol',
        'kobe-4-protro-ftb-snake',
        'kobe-4-protro-gift-of-mamba',
        'kobe-4-protro-girl-dad',
        'kobe-4-protro-gold-medal',
        'kobe-4-protro-mambacita',
        'kobe-4-protro-philly',
        'kobe-4-protro-undefeated',
        'kobe-4-protro-undefeated-black-mamba',
        'kobe-4-protro-wizenard',
        'kobe-4-undefeated',
      ],
    },
    'tatum 3': {
      base: 'tatum-3',
      slugs: [
        'tatum-3',
        'tatum-3-6th-man',
        'tatum-3-st-louis',
        'tatum-3-welcome-to-the-garden-alternate',
        'tatum-3-year-of-the-snake',
        'tatum-3-zen',
      ],
    },
    'tatum 2': {
      base: 'tatum-2',
      slugs: ['tatum-2', 'tatum-2-lemonade'],
    },
    'freak 6': {
      base: 'freak-6',
      slugs: ['freak-6', 'freak-6-christmas', 'freak-6-ep', 'freak-6-fright-night', 'freak-6-humility', 'freak-6-roses'],
    },
    'rigorer ar-2': {
      base: 'ar-2',
      slugs: ['ar-2', 'ar-2-valentines-day'],
    },
    'rigorer ar-1': {
      base: 'ar-1',
      slugs: ['ar-1'],
    },
    'rigorer war ender': {
      base: 'war-ender',
      slugs: ['war-ender'],
    },
    'sniper 2': {
      base: 'sniper-2',
      slugs: ['sniper-2'],
    },
    'sabrina 1': {
      base: 'sabrina-1',
      slugs: ['sabrina-1', 'sabrina-1-duke'],
    },
    'fox 1': {
      base: 'curry-fox-1',
      slugs: ['curry-fox-1', 'curry-fox-1-happy-fox-day-alt'],
    },
    'kyrie 7': {
      base: 'kyrie-7',
      slugs: ['kyrie-7', 'kyrie-7-preheat-soundwave', 'kyrie-7-rings', 'kyrie-7-sisterhood'],
    },
    'kyrie 1': {
      base: 'kyrie-1',
      slugs: ['kyrie-1'],
    },
    'kyrie 3': {
      base: 'kyrie-3',
      slugs: ['kyrie-3', 'kyrie-3-mamba-mentality'],
    },
    'g.t. hustle 3': {
      base: 'g-t-hustle-3',
      slugs: ['g-t-hustle-3', 'g-t-hustle-3-basketball', 'gt-hustle-3-paige-bueckers'],
    },
    'g.t. hustle 2': {
      base: 'g-t-hustle-2',
      slugs: ['g-t-hustle-2'],
    },
    'nike air zoom gt run': {
      base: 'air-zoom-gt-run',
      slugs: ['air-zoom-gt-run'],
    },
    'under armour anatomix spawn flotro': {
      base: 'anatomix-spawn-flotro',
      slugs: ['anatomix-spawn-flotro'],
    },
    'lebron 2': {
      base: 'lebron-2',
      slugs: ['lebron-2'],
    },
    'kd 15': {
      base: 'kd-15',
      slugs: ['kd-15'],
    },
    'kd 8': {
      base: 'kd-8',
      slugs: ['kd-8'],
    },
    'luka 1': {
      base: 'luka-1',
      slugs: ['luka-1'],
    },
    'luka 2': {
      base: 'luka-2',
      slugs: ['luka-2'],
    },
    'luka 3': {
      base: 'luka-3',
      slugs: ['luka-3'],
    },
    'tatum 1': {
      base: 'tatum-1',
      slugs: ['tatum-1'],
    },
    'freak 5': {
      base: 'freak-5',
      slugs: ['freak-5'],
    },
    'freak 4': {
      base: 'zoom-freak-4',
      slugs: ['zoom-freak-4'],
    },
    'freak 3': {
      base: 'zoom-freak-3',
      slugs: ['zoom-freak-3', 'zoom-freak-3-nrg-uno-red', 'zoom-freak-3-tb'],
    },
    'freak 2': {
      base: 'zoom-freak-2',
      slugs: ['zoom-freak-2'],
    },
    'immortality 3': {
      base: 'giannis-immortality-3',
      slugs: ['giannis-immortality-3'],
    },
    '741': {
      base: '741-performance-rover',
      slugs: ['741-performance-rover'],
    },
    'dame 6': {
      base: 'dame-6',
      slugs: ['dame-6'],
    },
    'bounce 2019 low': {
      base: 'pro-bounce-2019-low',
      slugs: ['pro-bounce-2019-low'],
    },
    'unknown 3': {
      base: 'unknown-3',
      slugs: ['unknown-3'],
    },
    'wave 5': {
      base: 'shock-wave-5-pro',
      slugs: ['shock-wave-5-pro'],
    },
  };

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function titleCaseFromSlug(slug) {
    return slug
      .split('-')
      .filter(Boolean)
      .map((word) => {
        if (/^(x|xx|xxi|xxii|xxiii|iv|v|vi|vii|viii|ix)$/i.test(word)) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  function getColorLabel(variantName, familyName) {
    const familyAnywhereRegex = new RegExp(`\\b${escapeRegExp(familyName)}\\b`, 'i');
    const label = variantName
      .replace(familyAnywhereRegex, '')
      .replace(/\b(under\s+armour|nike|adidas|jordan|anta|rigorer)\b/gi, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return label || 'Default';
  }

  function getModelIdFromImage(imageUrl) {
    const match = /\/models\/(\d+)\.png/i.exec(imageUrl || '');
    return match ? match[1] : '';
  }

  function dedupeVariants(variants, familyDisplayName) {
    const seenModels = new Set();
    const seenLabels = new Set();
    const unique = [];
    variants.forEach((variant) => {
      if (!variant || !variant.image) {
        return;
      }

      const modelId = getModelIdFromImage(variant.image);
      if (modelId && seenModels.has(modelId)) {
        return;
      }

      const normalizedLabel = getColorLabel(variant.name, familyDisplayName)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
      if (normalizedLabel && normalizedLabel !== 'default' && seenLabels.has(normalizedLabel)) {
        return;
      }

      if (modelId) {
        seenModels.add(modelId);
      }
      if (normalizedLabel && normalizedLabel !== 'default') {
        seenLabels.add(normalizedLabel);
      }
      unique.push(variant);
    });
    return unique;
  }

  function buildVariantFromSlug(slug, selectedFamily, selectedShoe, excludedVariantIds) {
    const variantId = variantIdBySlug[slug];
    if (!variantId || excludedVariantIds.has(variantId)) {
      return null;
    }

    const familyBase = (curatedVariantSlugsByFamily[selectedFamily.key] || {}).base || '';
    const suffix = familyBase && slug.startsWith(`${familyBase}-`)
      ? slug.slice(familyBase.length + 1)
      : slug === familyBase
        ? ''
        : slug;
    const variantName = suffix ? `${selectedFamily.display} ${titleCaseFromSlug(suffix)}` : selectedFamily.display;

    return {
      name: variantName,
      image: `https://nbashoesdb.com/images/models/${variantId}.png`,
      player: selectedShoe.player,
      price: selectedShoe.price,
    };
  }

  try {
    selectedShoe = JSON.parse(sessionStorage.getItem('selectedShoe') || 'null');
    allShoes = JSON.parse(sessionStorage.getItem('allShoes') || '[]');
    selectedShoeVariants = JSON.parse(sessionStorage.getItem('selectedShoeVariants') || '[]');
  } catch (error) {
    selectedShoe = null;
    allShoes = [];
    selectedShoeVariants = [];
  }

  if (!selectedShoe || !shoeDetailImage || !shoeDetailName || !shoeDetailPrice) {
    shoeDetailPage.innerHTML = `
      <div class="container">
        <p>Choose a shoe from the gallery first.</p>
        <p><a href="shoes.html" class="shoe-back-link">Go to Shoes</a></p>
      </div>
    `;
  } else {
    shoeDetailImage.src = selectedShoe.image;
    shoeDetailImage.alt = `${selectedShoe.player} ${selectedShoe.name}`;
    shoeDetailName.textContent = selectedShoe.name;
    shoeDetailPrice.textContent = `Price: ${selectedShoe.price}`;

    if (shoeColorOptions && shoeActiveColor) {
      const selectedFamily = getKnownShoeFamilyParts(selectedShoe.name);
      const familyVariants = allShoes.filter(
        (shoe) => shoe.player === selectedShoe.player && getKnownShoeFamilyParts(shoe.name).key === selectedFamily.key,
      );
      const curatedFamily = curatedVariantSlugsByFamily[selectedFamily.key];
      const excludedVariantIds = excludedVariantIdsByFamily[selectedFamily.key] || new Set();
      const curatedVariants = curatedFamily
        ? curatedFamily.slugs
          .map((slug) => buildVariantFromSlug(slug, selectedFamily, selectedShoe, excludedVariantIds))
          .filter(Boolean)
        : [];

      const familyDisplayName = selectedFamily.display;
      const colorVariants = dedupeVariants(curatedVariants.length > 0
        ? curatedVariants
        : selectedShoeVariants.length > 0
          ? selectedShoeVariants
        : familyVariants.length > 0
          ? familyVariants
          : [selectedShoe], familyDisplayName);

      const swatchesHtml = colorVariants
        .map(
          (variant, index) => `
            <button
              type="button"
              class="shoe-color-swatch${index === 0 ? ' is-active' : ''}"
              data-color-index="${index}"
              title="${getColorLabel(variant.name, familyDisplayName)}"
              aria-label="${getColorLabel(variant.name, familyDisplayName)}"
              aria-pressed="${index === 0 ? 'true' : 'false'}"
            >
              <img src="${variant.image}" alt="" loading="lazy" />
            </button>
          `,
        )
        .join('');

      shoeColorOptions.innerHTML = swatchesHtml;

      function applyColorway(index) {
        const selectedVariant = colorVariants[index];
        if (!selectedVariant) {
          return;
        }

        shoeDetailImage.src = selectedVariant.image;
        shoeDetailImage.alt = `${selectedVariant.player} ${selectedVariant.name}`;
        shoeDetailName.textContent = selectedVariant.name;
        shoeDetailPrice.textContent = `Price: ${selectedVariant.price}`;
        shoeActiveColor.textContent = getColorLabel(selectedVariant.name, familyDisplayName);

        const swatchButtons = shoeColorOptions.querySelectorAll('.shoe-color-swatch');
        swatchButtons.forEach((button, buttonIndex) => {
          const isActive = buttonIndex === index;
          button.classList.toggle('is-active', isActive);
          button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
      }

      shoeColorOptions.addEventListener('click', (event) => {
        const swatch = event.target.closest('.shoe-color-swatch');
        if (!swatch) {
          return;
        }

        const index = Number(swatch.dataset.colorIndex);
        applyColorway(index);
      });

      const initialIndex = Math.max(
        0,
        colorVariants.findIndex(
          (variant) => variant.image === selectedShoe.image || variant.name.toLowerCase() === selectedShoe.name.toLowerCase(),
        ),
      );
      applyColorway(initialIndex);
    }
  }
}






