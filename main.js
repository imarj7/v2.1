const images = [
    { src: 'dtuimg3.jpeg', alt: 'Image 3' },
    { src: 'executives2022.jpeg', alt: 'Image 1' },
    { src: 'dtuimg4.jpeg', alt: 'Image 4' },
    { src: 'dtuimg2.jpeg', alt: 'Image 2' },
    { src: 'dtuimg5.jpeg', alt: 'Image 5' },
];
const slider = document.querySelector('.slider');
let currentIndex = 0;

function createSlide(image) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    slide.appendChild(img);
    return slide;
}

function initSlider() {
    images.forEach(image => {
        slider.appendChild(createSlide(image));
    });
}

function moveSlide(direction) {
    const slideWidth = slider.querySelector('.slide').offsetWidth;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

function autoSlide() {
    moveSlide(1);
}

initSlider();

setInterval(autoSlide, 3500);



// accordian
const data = [
    { heading: 'How to get admission as an international Student at DTU?', content: ' You can take admission at DTU via 3modes. Mode1:  DASA, Mode2: ICCR, Mode 3: DTU-Portal., for Mode 3 , we have 3 categories: 3(a): Embassy Sponsored following all the minimum requisites criteria, 3(b) SAT,ACT, IELTS/TOEFL Valid score(Above 60 percentile), 3(c) JEE mains score (60 percentile and above) and class 12 marks not less than 60 percent' },
    { heading: 'Is JEE mains mandatory for B.Tech at DTU?', content: ' JEE mains is not mandatory, a valid IELTS/ TOEFL/ SAT score card is also accepted. For more details, download the brochure.' },
    {
    heading: "Is there any international hostel at DTU?",
    content:
      " Yes, we have a separate international hostel at DTU (for boys) and a newly constructed girls hostel with all needed facilities.",
  },
  {
    heading: "Is English Proficiency Certificate Mandatory?",
    content:
    " Yes, if you don’t have an EPT certificate such as IELTS or Duolingo, you can upload a certificate of the medium of instruction from your last alma mater. [may change based on mode of admission]",
  },
  {
    heading: "Is there any international student society at DTU?",
    content:
      " Yes, we have an international student society, DTU-ISS, which will be working as a mediator between you and us.",
  },
  {
    heading: "Where can I see the seat matrix and the eligibility criteria?",
    content:
      " You can download the international student brochure for details regarding seat matrix and eligibility criteria.",
  },
  ];

  const accordionContainer = document.getElementById('accordion');

  data.forEach((item, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    const accordionHeader = document.createElement('div');
    accordionHeader.classList.add('accordion-header');
    accordionHeader.textContent = item.heading;

    const accordionContent = document.createElement('div');
    accordionContent.classList.add('accordion-content');
    accordionContent.textContent = item.content;

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionContent);

    accordionContainer.appendChild(accordionItem);

    accordionHeader.addEventListener('click', () => {
      const isActive = accordionItem.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.display = 'none';
      });

      if (!isActive) {
        accordionItem.classList.add('active');
        accordionContent.style.display = 'block';
      }
    });
  });


  //javascript
  const testimonialContainer = document.querySelector('.testimonial-container')
  const testimonial = document.querySelector('.testimonial')
  const userImage = document.querySelector('.user-image')
  const username = document.querySelector('.username')
  const role = document.querySelector('.role')
  
  const testimonials = [
      {
          name: 'Aniket Raj Jha',
          position: 'ICCR Scholar',
          photo: 'Profile Picture.jpeg',
          text: 'Choosing Delhi Technological University (DTU) for my higher education has been a transformative experience. As an international student, I was warmly welcomed into a vibrant and diverse academic community that fosters innovation and excellence.'
      },
      {
          name: 'Sanskar Ojha',
          position: 'ICCR Scholar',
          photo: 'Sanskar .jpeg',
          text: 'Ever since I started my journey at DTU, I have been amazed by the commitment of the faculty and staff to our success. The professors are not only experts in their fields but are also approachable and genuinely care about their students. '
      },
      {
          name: 'Bishal Agrawal',
          position: 'DASA',
          photo: 'Bishal.jpeg',
          text: "Attending DTU has been a transformative experience for me. The quality of education here is exceptional, with professors who are not only experts in their fields but also deeply committed to their students' success. The small class sizes have allowed for personalized attention, and I've had the opportunity to engage in meaningful discussions and research projects."
      },
    ]
  
  let idx = 1
  
  function upadteTestimonial() {
      const { name, position, photo, text } = testimonials[idx]
  
      testimonial.innerHTML = text
      userImage.src = photo
      username.innerHTML = name
      role.innerHTML = position
  
      idx++
  
      if(idx > testimonials.length - 1) {
          idx = 0
      }
  }
  setInterval(upadteTestimonial, 10000)




 
// coursesoffered
document.addEventListener("DOMContentLoaded", function() {
    const courses = [
      { title: "Bachelor in Technology", link: "http://dtu.ac.in/Web/Academics/bacheloroftechnology.php" },
      { title: "Master in Technology", link: "http://dtu.ac.in/Web/AcademicsPG/mtech.php" },
      { title: "Bachelor of Business Administration", link: "http://www.dtu.ac.in/Web/Departments/eastcampus/usme/usme.php" },
      { title: "Bachelor of Arts in Economics", link: "http://dtu.ac.in/" },
      { title: "Bachelor of Design", link: "http://www.dtu.ac.in/Web/Departments/design/about/index.php" },
      { title: "Master of Science in Mathematics", link: "http://www.dtu.ac.in/Web/Departments/AppliedMathematics/about/" },
      { title: "Master of Science in Physics", link: "http://www.dtu.ac.in/Web/Departments/AppliedPhysics/about/" },
      { title: "Master of Science in Biotechnology", link: "http://www.dtu.ac.in/Web/Departments/BioTech/about/" },
      { title: "Master of Science in Chemistry", link: "http://www.dtu.ac.in/Web/Departments/AppliedChemistry/about/" },
      { title: "Master of Science in Interaction Design", link: "http://dtu.ac.in/" },
      { title: "Master of Business Administration", link: "http://dtu.ac.in/Web/Academics/bacheloroftechnology.php" },
      { title: "Master of Business Administration in Business Analytics", link: "http://dtu.ac.in/Web/AcademicsPG/" },
      { title: "Master of Business Administration (Family Business & Entrepreneurship)", link: "http://dtu.ac.in/Web/AcademicsPG/" },
      { title: "Master of Business Administration (Entrepreneurship, Innovation & Venture Development)", link: "http://dtu.ac.in/Web/AcademicsPG/" }
    ];
  
    const courseList = document.getElementById("courseList");
  
    courses.forEach(course => {
      const courseItem = document.createElement("div");
      courseItem.classList.add("course-item");
  
      const title = document.createElement("h3");
      title.classList.add("course-title");
      title.textContent = course.title;
  
      const link = document.createElement("a");
      link.href = course.link;
      link.textContent = "Learn More";
      link.target = "_blank";
      link.classList.add("coursebtn3");
  
      courseItem.appendChild(title);
      courseItem.appendChild(link);
  
      courseList.appendChild(courseItem);
    });
  });
  function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}
function toggleMenu() {
  var navMenu = document.querySelector('.nav_menu');
  if (navMenu.style.right === '-100%') {
      navMenu.style.right = '0';
  } else {
      navMenu.style.right = '-100%';
  }
}

  
