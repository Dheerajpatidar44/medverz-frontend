export interface University {
  id: string;
  name: string;
  slug: string;
  image: string;
  logo?: string;
  description: string;
  location: string;
  ranking: string;
  established: string;
  medium: string;
  duration: string;
  fees: {
    tuition: string;
    hostel: string;
    mess?: string;
    medicalVisa?: string;
    oneTime?: string;
    total: string;
  };
  overview: string;
  whyStudy: string[];
  admissionProcess: string[];
  documentsRequired: string[];
  hostelFacility: string;
  gallery: string[];
}

export interface Country {
  id: string;
  name: string;
  slug: string;
  image: string;
  flag?: string;
  description: string;
  startingPrice: string;
  uniCount: number;
  universities: University[];
  overview?: string;
  whyStudy?: string[];
  admissionProcess?: string[];
  documentsRequired?: string[];
  eligibilityCriteria?: string[];
  faqs?: { question: string; answer: string }[];
}

export const mbbsData: Country[] = [
  {
    id: 'russia',
    name: 'Russia',
    slug: 'russia',
    flag: '/flag-russia.png',
    image: '/images/countries/russia.png',
    description: 'Russia is the most popular destination for Indian students due to its world-class medical universities and affordable fee structure.',
    startingPrice: '₹15 Lakhs',
    uniCount: 56,
    universities: [
      {
        id: 'amur-state',
        name: 'Amur State Medical Academy',
        slug: 'amur-state-medical-academy',
        image: '/images/universities/russia/Amur State Medical Academy.jpeg',
        description: 'A leading medical institution in Blagoveshchensk, Russia.',
        location: 'Blagoveshchensk, Russia',
        ranking: 'Top Tier Academy',
        established: '1952',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,15,000 / Year', hostel: '₹24,000 / Year', total: '₹20,34,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'bashkir-state',
        name: 'Bashkir State Medical University',
        slug: 'bashkir-state-medical-university',
        image: '/images/universities/russia/Bashkir-State-Medical-University.webp',
        description: 'Established in 1932 and situated in Ufa City, Bashkortostan, Russia, Bashkir State Medical University is amongst the top ten universities in Russia.',
        location: 'Ufa, Russia',
        ranking: 'Top Ten in Russia',
        established: '1932',
        medium: 'English',
        duration: '6 Years (5 + 1 year of internship)',
        fees: {
          tuition: '2,82,186 ₽ / Year',
          hostel: '14,400 ₽ / Year',
          medicalVisa: '8,500 ₽ / Year (Insurance + Checkup)',
          oneTime: '5,000 ₽ (Vaccination - 1st Year)',
          total: '₹26,10,000 (Approx. 6 Years)'
        },
        overview: `Established in 1932 and situated in Ufa City, Bashkortostan, Russia, Bashkir State Medical University is amongst the top ten universities in Russia. The university is the center of medical and pharmaceutical science of Bashkortostan Republic. Bashkir State Medical University has been licensed by the Ministry of Education of the Russian Federation to train international students.

For the last 80 years, Bashkir State Medical University has been training specialists in healthcare, scientific, and pedagogical work in the field of professional medical and pharmaceutical education of the Russian Federation. Among the Indian students, BMSU is one of the popular Universities for many years to pursue MBBS in Russia.

Bashkir State Medical University is recognized by various organizations of global reputation such as:
- National Medical Commission (erstwhile Medical Council of India)
- Medical Council of Canada
- Ministry of Science and Higher Education, Russia
- World Directory of Medical Schools (WDOMS)
- Education Commission for Foreign Medical Graduates (ECFMG)
- Registered with Foundation for Advancement of International Medical Education and Research (FAIMER)

Eligibility For Admission:
- At least 50% score in Physics, Chemistry, and Biology in Class 12.
- Age requirement is at least 17 years as on 31st December in the admission year.
- Qualified NEET exam. (50th percentile for general/EWS category and 40th percentile for unreserved category)

Faculties At Bashkir State Medical University:
- General Medical Faculty
- Pediatric Faculty
- Dentistry Faculty
- Pharmaceutical Faculty
- Preventive Medicine Faculty
- Faculty of Management and Graduate Nurses
- Faculty of International Relation`,
        whyStudy: [
          'Best university for MBBS in Russia',
          'Affordable medical education',
          'Hassle-free admission process',
          '1500+ international students studying MBBS at the university',
          '85+ years of historical background',
          'Well-equipped laboratories with modern equipment.',
          'Provides Russian language training for bilingual coaching',
          'Highly-qualified medical staff and faculties',
          'Well-furnished hostel facility available to international students',
          'Indian students can appear for the FMGE exam to practice in India',
          'Advanced infrastructure such as well-equipped laboratories, modern classrooms, sports facilities, libraries, etc.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the admission form online of Bashkir State Medical University.',
          'Submission of the required documents with the admission form.',
          'Get an admission/acceptance letter from the university by mail.',
          'Apply for the student visa at the Russian Embassy in India.',
          'Pay all the outstanding dues when taking an education loan.',
          'Make arrangements for travel to Russia.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Copy of international passport',
          'Passport-size photographs',
          'Health fitness certificate (with information of your vaccination)'
        ],
        hostelFacility: `There are a total of five hostels in the university.
Every hostel room is fully furnished and well-equipped with proper bedding.
Separate rooms are given to boys and girls.
Hostels in the university have internet facilities like broadband and WiFi.
The hostels are guarded well by the police.
The university has a department for extracurricular activities like basketball, soccer, volleyball, chess, powerlifting, and mountain climbing.
There are arrangements for the summer sport camp for the students.`,
        gallery: [
          'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 'buryat-state',
        name: 'Buryat State University',
        slug: 'buryat-state-university',
        image: '/images/universities/russia/Buryat State University.webp',
        description: 'Buryat State University is one of the oldest universities in Siberia.',
        location: 'Ulan-Ude, Russia',
        ranking: 'Siberian Hub',
        established: '1932',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,20,000 / Year', hostel: '₹25,000 / Year', total: '₹20,70,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'chechen-state',
        name: 'Chechen State University',
        slug: 'chechen-state-university',
        image: '/images/universities/russia/Chechen State University.avif',
        description: 'A prominent university in Grozny, offering a range of medical programs.',
        location: 'Grozny, Russia',
        ranking: 'Prominent University',
        established: '1938',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,00,000 / Year', hostel: '₹82,200 / Year', total: '₹22,93,200 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'chita-state',
        name: 'Chita State Medical University',
        slug: 'chita-state-medical-university',
        image: '/images/universities/russia/Chita State Medical University.jpg',
        description: 'Located in Chita, this university is known for its medical research.',
        location: 'Chita, Russia',
        ranking: 'Research Focused',
        established: '1953',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,20,000 / Year', hostel: '₹43,000 / Year', total: '₹21,78,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'crimean-federal',
        name: 'Crimean Federal University',
        slug: 'crimean-federal-university',
        image: '/images/universities/russia/Crimean Federal University.webp',
        description: 'One of the leading federal universities in Russia.',
        location: 'Simferopol, Russia',
        ranking: 'Federal Ranking',
        established: '1918',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,30,000 / Year', hostel: '₹20,000 / Year', total: '₹21,00,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [
          'Transparent fee structure with no hidden costs.',
          'Quality medical education with global recognition.'
        ],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'dagestan-state',
        name: 'Dagestan State Medical University',
        slug: 'dagestan-state-medical-university',
        image: '/images/universities/russia/Dagestan-State-Medical-University.webp',
        description: 'Dagestan State Medical University was founded in 1932. This University is situated in the Makhachkala City which is the capital of Dagestan Republic.',
        location: 'Makhachkala, Russia',
        ranking: 'Historical University',
        established: '1932',
        medium: 'English',
        duration: '6 years (Including one year of internship)',
        fees: { tuition: '₹4,20,000 / Year', hostel: '₹25,000 / Year', total: '₹26,70,000 (Approx. 6 Years)' },
        overview: `Dagestan State Medical University was founded in 1932. This University is situated in the Makhachkala City which is the capital of Dagestan Republic. Makhachkala City is a very well-built and picturesque modern city.

Since the University has started, it has trained over 25,000 specialists, 100 doctors of Sciences and 350 candidates of Science. The students who graduated from here are now scientists, organizers of health protection and are working in different countries.

At present, there are 5200 students in Dagestan State Medical University out of which 170 students are international students from 12 countries. There are 6 specialization courses in the University. The students are provided with both undergraduate and postgraduate courses.

Over 83 years, this medical University has become a real school of medicine. The University has served over 27,000 successful doctors who have graduated from the University which includes 700 foreign students from different countries. This University is known for its strong educational background obtained at this higher educational institution.

Faculties of Dagestan State Medical University:
- Faculty of General Medicine
- Faculty of Pediatrics
- Faculty of Dentistry
- Faculty of Preventive Medicine
- Faculty of Pharmacy

Eligibility Criteria for Admission:
- Students must complete 17 years of age as on 31 December in the year of admission.
- Students must have passed class 12th with 50% in Physics, Chemistry, and Biology from a recognized board.
- Students must have passed the NEET exam.`,
        whyStudy: [
          'Low-cost MBBS fees',
          'Easy admission process',
          'High-quality medical education guaranteed',
          'Highly-qualified medical staff',
          'State-of-the-art infrastructure of university campus',
          'Cutting-edge technology and well-equipped laboratories',
          'Fully furnished and comfortable hostel facilities',
          'Advanced classrooms',
          'English is a medium of instruction',
          'Holistic development of students',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the online application form of the university.',
          'Attach and submit the required documents along with the form.',
          'In two weeks time, the university will send an admission letter to the applicant through mail.',
          'The applicant can now apply for the student visa by submitting the passport and admission letter at the Russian Embassy in India.',
          'On receiving the student visa, the applicant can book tickets.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Dagestan State Medical University is known to have a world-class educational background full of opportunities and ideas.
There are 14 laboratories to meet educational requirements of the students.
At DSU, students are encouraged to take part in the extracurricular activities and athletic programs.
The Year-Round Recreation Program is held which include activities from sports through to arts, social and other intellectual pursuits and enriching activities.
The students can enjoy playing football, tennis, basketball, swimming in summer or skiing and skating in winter.
The hostels are fully furnished and have access to basic amenities such as ACs, fans, beds, chairs, tables, bathrooms, wardrobe, etc.
Round-the-clock CCTV surveillance and internet connectivity.`,
        gallery: []
      },
      {
        id: 'far-eastern-federal',
        name: 'Far Eastern Federal University',
        slug: 'far-eastern-federal-university',
        image: '/images/universities/russia/Far-Eastern-Federal-University.webp',
        description: 'Far Eastern Federal University was founded in the year 1899 at Vladivostok in Eastern Russia. Vladivostok is also known as Russia\'s San Francisco.',
        location: 'Vladivostok, Russia',
        ranking: 'Federal University',
        established: '1899',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹5,00,000 / Year', hostel: '₹65,000 / Year', total: '₹33,90,000 (Approx. 6 Years)' },
        overview: `Far Eastern Federal University was founded in the year 1899 at Vladivostok in Eastern Russia. Vladivostok is also known as Russia's San Francisco and this is the administrative centre of Primorsky Krai.

Far Eastern Federal University is considered to be one of the top Universities selected by the Russian Ministry of Education and Science. It helps in enhancing the international competitiveness of Russian Universities among the world's leading research and education centres.

With over 200 highly skilled and specialized staff, the university's Medical Centre provides special medical facilities to their patients. These specialized doctors have been invited to other parts of Russia as well as to other countries.

Far Eastern Federal University has been the flag bearer of the high tech education system. Its medical equipment has been produced by the leaders of the medical industry with high tech medical assistance.

Faculties At Far Eastern Federal University:
- School of Natural Sciences
- Institute of Oriental Studies
- School of Arts
- Culture and Sports
- School of Economics and Management
- School of Education
- School of Engineering
- School of Humanities
- School of Law and the School of Medicine

The School of Medicine is one of the most popular choices for international students. At present, more than 500 students from 25+ countries are currently studying for their medical degree at Far Eastern Federal University.

Eligibility Criteria For Admission:
- The student should have qualified class 10 and 12 from any recognised education board/institution
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)
- The student must be of 17 years of age
- The student should qualify the NEET-UG exam with the required marks. (50th percentile for general/EWS, 45th for PwD, 40th for SC/ST/OBC)
- The students must possess a valid NEET Score card.`,
        whyStudy: [
          'Far Eastern Federal University is the only classical university in Eastern Russia.',
          '120+ years of successful academic education and research.',
          'Scientific and venture funds for supporting promising innovative projects',
          'Comfortable dormitory accommodation and safe environment',
          'A combination of education, research, sports and creative activities.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill in the admission Form',
          'Submit it after attaching all the required documents',
          'Receive the admission/acceptance letter from the university',
          'Apply for the Student Visa',
          'Prepare & travel to your university',
          'Complete the formalities at the university',
          'From filling up the admission form, arranging the documents, applying for visa, loan assistance, travel, formalities at the university, arranging accommodations till the hostels are provided, etc, the team of Rus Education assists you at every step.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Far Eastern Federal University has the accommodation options available for students: double rooms, two-room suites for 3 students, and two-room suites for 4 students.
The University has various options for physical fitness such as Gym, Fitness Center, Dance classes, Competitive Athletics, etc.
The University also has Internal Campus Transit, ATM, Shopping Center, Banking Facility, Medical Center and Far Eastern Federal University Hotel Complex etc.`,
        gallery: []
      },
      {
        id: 'sechenov-moscow',
        name: 'I.M. Sechenov First Moscow State Medical University',
        slug: 'sechenov-first-moscow-state-medical-university',
        image: '/images/universities/russia/I.-M.-Sechenov-First-Moscow-State-Medical-University.webp',
        description: 'Top Medical Universities in Russia. University had begun its history in 1758 as the medical faculty at Imperial Moscow University.',
        location: 'Moscow, Russia',
        ranking: 'Rank 1 in Medical',
        established: '1758',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹13,00,000 / Year', hostel: '₹2,00,000 / Year', total: '₹90,00,000 (Approx. 6 Years)' },
        overview: `I.M. Sechenov First Moscow State Medical University (Sechenov University) is considered as one of the Top Medical Universities in Russia. University had begun its history in 1758 as the medical faculty at Imperial Moscow University. Sechenov University has been a pioneer in the Russian Healthcare System. Many renowned scientists and physicians have already worked at the University, who are known for their significant contributions to the progress of medicine.

Today, the University has grown up into an academic, research, and Resource Centre of Excellence in the Russian Healthcare System. It enforces the development of Medicine of the Future, based on a strong academic foundation in clinical medicine, expanding frontiers in advanced multidisciplinary research.

University's target model drives its sustainable transformation into a world-class University with a balanced focus on multidisciplinary education, research, and partnership with industry.

At present, Sechenov University is the only member of the Russian Academic Excellence Project in QS World University Ranking by Subject (Medicine). Its clinical competence is a key advantage for cross-disciplinary basic research and the discovery of new horizons in health and care.

The University has about 3,500 international students among the 19,000 undergraduate students. The current student cohorts represent 90 countries of all continents. The biggest number of foreign students is from Iran, India, Malaysia, China, Azerbaijan, Namibia, South Africa, etc.

Faculties At I. M. Sechenov First Moscow State Medical University:
- Faculty of Medicine
- Faculty of Preventive Medicine
- Faculty of Pediatrics
- Faculty of Preparatory Studies

Eligibility Criteria For Admission:
- The student should have qualified class 10 and 12 from any recognised education board/institution
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)
- The student must be of 17 years of age
- The student should qualify the NEET-UG exam with the required marks. (50th percentile for general/EWS, 45th for PwD, 40th for SC/ST/OBC)
- The students must possess a valid NEET Score card.`,
        whyStudy: [
          'Largest research medical school in Russia, established in 1758.',
          'It offers several undergraduate and postgraduate courses taught in English for all areas of medicine, biology and biotechnology, including bachelor\'s degrees, master\'s programs, clinical residency programs, specialist degrees, etc.',
          'The university has a scientific library which has a unique collection of scientific publications in medicine and healthcare.',
          'There is no entrance exam for admission to this university and no donation required.',
          'Out of the overall 19,000 presently enrolled students at the university, out of which 3,500 are international students from around 90 countries all over the world.',
          'It is quite easy for new students to adapt and assimilate into new places and cultures of Russia, as there are a lot of International Students in the First Moscow State Medical University from various countries. Also, the staff of this university is also friendly and caring.'
        ],
        admissionProcess: [
          'Fill in the admission Form',
          'Submit it after attaching all the required documents',
          'Receive the admission/acceptance letter from the university',
          'Apply for the Student Visa',
          'Prepare & travel to your university',
          'Complete the formalities at the university',
          'From filling up the admission form, arranging the documents, applying for visa, loan assistance, travel, formalities at the university, arranging accommodations till the hostels are provided, etc, the team of Rus Education assists you at every step.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `The University offers comfortable and cozy hostels to all international students.
The University has set up a Center for International Education to coordinate with all international students and assist them all with the required procedures.
There is a student sports organization named "Phoenix" that welcomes all students who wish to do some kind of sports at any level.
Various extracurricular lectures by world-class researchers and physicians, meetings of student societies on different areas of medicine and healthcare, intellectual quizzes, and language speaking clubs represent even a wider list of after-school activities.
The University also has a student culture center named "New Art", which encourages the student to participate in various plays, literacy and poetry clubs, music bands, as well as several dancing classes.

City at a Glance:
Moscow is the capital of Russia, the largest city in the country and Europe, and one of the largest cities in the world.
Moscow has been the largest transport hub of Russia throughout its history. The city is located in the very center of the hub of railways and highways
There are a lot of different places of interest in the city - various historical, cultural, and architectural sites, entertainment centers like The Kremlin, the Bolshoi Theater, A.S.Pushkin Fine Arts Museum, and Tretyakov Gallery.
Apart from that, there is a lot of frequent exhibitions, festivals, performances, excursions, concerts, quests, marathons, etc organized at the city`,
        gallery: []
      },
      {
        id: 'immanuel-kant',
        name: 'Immanuel Kant Baltic Federal University',
        slug: 'immanuel-kant-baltic-federal-university',
        image: '/images/universities/russia/Immanuel Kant Baltic Federal University.webp',
        description: 'Founded in 1967 expanding on the already existing Kaliningrad State Pedagogical University that had been founded in 1947.',
        location: 'Kaliningrad, Russia',
        ranking: 'Federal University',
        established: '1967',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,46,360 / Year', hostel: '₹20,000 / Year', total: '₹21,98,160 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'irkutsk-state',
        name: 'Irkutsk State Medical University',
        slug: 'irkutsk-state-medical-university',
        image: '/images/universities/russia/irkutsk-state-medical-university-banner.jpg',
        description: 'Established in 1919, Irkutsk State Medical University is a well-known educational institution that provides medical education of the highest quality.',
        location: 'Irkutsk, Russia',
        ranking: 'High Quality Education',
        established: '1919',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹3,80,000 / Year', hostel: '₹20,000 / Year', total: '₹24,00,000 (Approx. 6 Years)' },
        overview: `Established in 1919, Irkutsk State Medical University is a well-known educational institution that provides medical education of the highest quality. The university promotes values and principles of innovation, respect, social commitment, responsibility, thoroughness, patient partnership and improving health and well-being among the students.

The present university is an internationally renowned institution that has the threefold mission of education, research and the improvement of health in the areas of clinical sciences, basic sciences and health sciences. The university complex includes 9 academic buildings for the students. The university has several hundred students enrolled from 20+ countries across the globe.

At present the university has 63 departments in 7 faculties and includes the highly professional teaching staff of 100+ doctors and 350+ candidates of sciences.

Faculties At Irkutsk State University:
- Faculty of Medicine
- Faculty of Paediatrics
- Faculty of Preventive Medicine
- Faculty of Stomatology/ Dentistry
- Faculty of Dentistry
- Faculty of Pharmacy
- Faculty of Nursing

Eligibility Criteria:
- Students should have passed 10+2 or equivalent in Physics, Chemistry, Biology, and English.
- The student must have scored 50% for unreserved categories & 40% for reserved categories in PCB subjects in Class 12.
- The student should have completed 17 years as in the year of admission.
- The student must have qualified NEET exam and possess a valid score card, i.e. 50th percentile for unreserved & 40th percentile for the reserved categories.`,
        whyStudy: [
          'Medical education at Irkutsk State University is not only globally recognised but also affordable.',
          'The university has international cooperation with many nations for academic & research purposes.',
          'The complete MBBS course is in English language',
          'The university has a direct admission process- no donation, no entrance exam, no interview.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Choose the Best University for Your MBBS in Russia: Make your choice from the best medical universities in Russia. Rus Education helps you make the best choice per your individual needs and interests.',
          'Fill in the Application Form: Once you have chosen the university, take the first step by filling up the application form and submit all the necessary documents.',
          'Get Your Admission Letter: Receive your admission letter from the university and start packing your bags to your destination.',
          'Get Your Visa: Submit your passport and other required documents. The team of Rus Education helps you at every stage of the entire process of getting your visa.',
          'Pay Your Tuition Fees: Clear your tuition fees and if required, education loan, contact Rus Education. Our team will guide you with the entire loan procedure.',
          'Pack Your Suitcase: Grab up your favourite suitcase and dresses and finish up your packing. Remember to keep the thermals!',
          'Welcome to Study in Russia!: Board your flights to Russia with us and start your journey to make your dream a reality with MBBS in Russia'
        ],
        documentsRequired: [
          'Duly filled-in Admission form',
          'Scanned copy of Class 12th Pass Certificate/Mark sheet',
          'Scanned copy of Class 10th Pass Certificate',
          'NEET Result/Admit Card.',
          'Scanned copy of Passport (first and last page)',
          'ID Proof (Adhar, PAN, Driving License, etc.) if Passport is not ready at the time of application.',
          'Medical report with HIV report at the time of Visa stamping',
          'Other documents such as admission letters from the university, converted currencies, etc are facilitated by the team of Rus Education.'
        ],
        hostelFacility: `The university offers a comfortable living space for the students that are fully furnished, aesthetically designed and equipped with the necessary arrangements.
The university has a bustling mess vicinity for the international students and provides the hygienic and nutritious food.
The hostels also has an availability of Recreation rooms, gyms, laundry rooms
The university promotes student participation in extracurricular activities through clubs and competitions.

City At Glance- Irkutsk State University:
Irkutsk is one of the largest cities in Eastern Russia.
The city is 4202 kilometres (2611 miles) away from Moscow
The distance can be covered via a 7 hr flight, 2 day drive or 3 day train journey
The climate in Irkutsk is Continental to the extreme. The winter is sunny. The average temperature in January runs from -15to-35°C.
The popular places in the city include- Cathedral of the Kazan Icon of the Mother of God, Irkutsk Regional Memorial Decembrists Museum, Volkonsky House, Gallery of V. Bronshteyn, Znamensky Monastery, Nizhnyaya Naberezhnaya Angary, Cathedral of The Epiphany, etc`,
        gallery: []
      },
      {
        id: 'kabardino-balkarian',
        name: 'Kabardino-Balkarian State University',
        slug: 'kabardino-balkarian-state-university',
        image: '/images/universities/russia/kabardino-balkarian-state-university-banner.webp',
        description: 'Established in 1957, Kabardino-Balkaria State University is one of the leading scientific, educational, informational, social and cultural University in Nalchik.',
        location: 'Nalchik, Russia',
        ranking: 'Leading Scientific Center',
        established: '1957',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹3,24,000 / Year', hostel: '₹18,000 / Year', total: '₹20,52,000 (Approx. 6 Years)' },
        overview: `Established in 1957, Kabardino-Balkaria State University is one of the leading scientific, educational, informational, social and cultural University in Nalchik city of Kabardino-Balkaria, Russia.

On its 50th anniversary Kabardino-Balkaria State University received Certificate of Merit and Medal from State Duma for its outstanding services and achievements. In 2008, the University was ranked among the 100 best universities in Russia. In 2010, it also received an honorary diploma from the winner of the All-Russian contest “100 Best University of Russia in the field of science and education”.

The University combines different levels of educational institutions, implementing educational programs of higher, secondary, post-graduate and additional professional education. Today Kabardino-Balkaria State University holds 11 place among classical universities in Russia. Currently Kabardino-Balkaria State University has 65+ departments with a teaching staff of 800+ highly qualified teachers, for thousands of the students.

Faculties At Kabardino-Balkarian State University:
- Anatomy & Physiology
- General Practice
- Dermatology
- Stomatology (Dentistry)
- Nursing.
- Microbiology
- Pharmacology.

Eligibility Criteria For Admission:
- Students should have passed 10+2 or equivalent in Physics, Chemistry, Biology, and English.
- The student must have scored 50% for unreserved categories & 40% for reserved categories in PCB subjects in Class 12.
- The student should have completed 17 years as in the year of admission.
- The student must have qualified NEET exam and possess a valid score card, i.e. 50th percentile for unreserved & 40th percentile for the reserved categories.`,
        whyStudy: [
          'The university has a well developed infrastructure to support the learning of the students.',
          'The students- teacher ratio at the university is maintained at 9:1',
          'The university is globally recognised offering several opportunities for the students.',
          'The admission process is direct and simple and does not require any donation charges.',
          'The university offers a multicultural and multiethnic campus that provides a colourful learning environment for all the students.'
        ],
        admissionProcess: [
          'Choose the Best University for Your MBBS in Russia: Make your choice from the best medical universities in Russia. Rus Education helps you make the best choice per your individual needs and interests.',
          'Fill in the Application Form: Once you have chosen the university, take the first step by filling up the application form and submit all the necessary documents.',
          'Get Your Admission Letter: Receive your admission letter from the university and start packing your bags to your destination.',
          'Get Your Visa: Submit your passport and other required documents. The team of Rus Education helps you at every stage of the entire process of getting your visa.',
          'Pay Your Tuition Fees: Clear your tuition fees and if required, education loan, contact Rus Education. Our team will guide you with the entire loan procedure.',
          'Pack Your Suitcase: Grab up your favourite suitcase and dresses and finish up your packing. Remember to keep the thermals!',
          'Welcome to Study in Russia!: Board your flights to Russia with us and start your journey to make your dream a reality with MBBS in Russia'
        ],
        documentsRequired: [
          'Duly filled-in Admission form',
          'Scanned copy of Class 12th Pass Certificate/Mark sheet',
          'Scanned copy of Class 10th Pass Certificate',
          'NEET Result/Admit Card.',
          'Scanned copy of Passport (first and last page)',
          'ID Proof (Adhar, PAN, Driving License, etc.) if Passport is not ready at the time of application.',
          'Medical report with HIV report at the time of Visa stamping'
        ],
        hostelFacility: `The students' life at the university is joyful, meaningful and full of learning.
With this the students can spend their leisure time meaningfully, in a diverse, interesting setting, enhancing their educational prospects.
It also provides Indian students with comfortable dining and accommodation facilities with Indian mess facilities.
The hostel rooms are fully furnished with an arrangement for all the possible necessities.
The university organises several cultural and sports activities for the students.

City At Glance- Nalchik, Kabardino-Balkarian Republic, Russia:
The distance between Nalchik and Moscow is around 1428 km away, which can be covered via a 3hr flight, 8 hrs by train and 23 hrs by road.
The summers are warm and mostly clear and the winters are freezing, snowy, and partly cloudy. Over the course of the year, the temperature typically varies from 21°F (-6.1°C) to 82°F (27.7°C) and is rarely below 6°F (-14.4°C) or above 91°F(32.7°C).
The students can explore Chegem Canyon, Verhnyaya Balkariya Tourisr Complex, Nalchik Park, Gedmish Waterfalls, Kabardino-Balkaria State Puppet Theatre, etc`,
        gallery: []
      },
      {
        id: 'kalmyk-state',
        name: 'Kalmyk State University',
        slug: 'kalmyk-state-university',
        image: '/images/universities/russia/KALMYK.webp',
        description: 'Established in 1970, Kalmyk State University stands as the oldest and one of the largest higher education institutions in the Republic of Kalmykia.',
        location: 'Elista, Russia',
        ranking: 'Established University',
        established: '1970',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '$ 3,500 / Year', hostel: 'Included', total: '₹ 23,97,000 (Approx.)' },
        overview: `Established in 1970, Kalmyk State University stands as the oldest and one of the largest higher education institutions in the Republic of Kalmykia. Over the decades, the university has evolved into a prominent center for academic excellence and research, attracting students from various regions.

The university was founded on January 1, 1970, transitioning from the Kalymk Pedagogical Institute to become the first state university in the republic. Initially, it consisted of three faculties: Biological, Philological, and Physico-Mathematical, along with nine departments. Presently, Kalmyk State University boasts 10 faculties, and the Institute of Kalmyk Philology and Oriental Studies offers a wide array of programs across various disciplines.

Faculties at Kalmyk State University:
- Department of Chemistry and Pharmaceutical Technology
- Department of Biodiversity and Bioecology
- Department of Medicine, General Biology and Physiology

Eligibility Criteria:
- The student should have passed 10+2 with Physics, Chemistry, and Biology from a recognized board or university.
- The student must have scored at least 50% (for unreserved categories) & 40% for reserved categories in Class 12.
- The student should have completed the age of 17 years at the time of admission year.
- Moreover, students should have qualified the National Eligibility cum Entrance Test (NEET) UG Examination.`,
        whyStudy: [
          'The university offers a robust MBBS curriculum designed to equip students with medical education of the highest quality.',
          'Expert faculty with an apt teacher-to-student ratio',
          'The university has been recognized by the leading international bodies including the WDOMS, FAIMER, ECFMG, NMC (erstwhile MCI)',
          'Students are encouraged to engage in research activities, with access to various scientific forums, conferences, and grants, fostering a culture of innovation and inquiry.',
          'The university actively cooperates with leading institutions across Asia, Europe, and America, providing students with opportunities for international exposure and academic exchange.',
          'The university provides a secure and student-friendly environment with well-maintained hostels, 24/7 security, and essential amenities, ensuring a comfortable stay for students.',
          'The university offers quality education at an affordable rate.',
          'Hostel fees are included within the university tuition package.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Complete the university’s application form, which is typically available on the official university website.',
          'Submit the application form along with all required documents as specified by the university.',
          'After submitting the application, wait for the university’s invitation letter.',
          'Upon receiving the invitation letter, proceed to apply for a student visa at the Embassy of the Russian Federation in India.',
          'Finalize the necessary arrangements and travel to Russia to commence your medical studies.'
        ],
        documentsRequired: [
          'Class 10th Mark Sheet and Passing Certificate',
          'Class 12th Mark Sheet and Passing Certificate',
          'Valid NEET Scorecard',
          'Passport',
          'Passport-sized Photographs',
          'Medical Certificate with HIV Reports',
          'Id Proof'
        ],
        hostelFacility: `Beyond academics, Kalymk State University offers a vibrant student life filled with cultural, recreational, and social activities. Currently, the university is the home of more than 8,900 students pursuing their higher education.

Hostel Accommodation:
- The university has well-furnished hostel accommodation for international students.
- There are shared rooms (2-3 students sharing a room) with facilities such as beds, study tables, wardrobes, and internet connections.
- The hostels are situated near the university campus, and commuting daily will not be difficult.

Facilities & Comfort:
- It is centrally heated so that the stay is comfortable even in the cold winters in Russia.
- Security and CCTV cameras are on 24/7, ensuring the security of the students.
- Student bedrooms have common kitchens where students cook their meals.
- Laundry and recreational spaces are provided to make student life more convenient.

Food & Mess:
- The students who want to have meals in the way they are served at home will have Indian mess facilities.
- Vegetarian and non-vegetarian options are provided to suit diverse preferences.

City at a Glance - Elista:
Elista, the capital of the Republic of Kalmykia, is a unique city that blends rich cultural heritage with modern development. Known for its picturesque landscapes, Buddhist influence, and friendly atmosphere, Elista is an attractive destination for students.

Climate: Elista experiences a continental climate, with hot summers and cold winters, allowing students to enjoy diverse seasonal changes.
Transport: The city has a well-connected transport system, including buses and taxis, ensuring convenient travel for students.
Local Attractions: Students can explore landmarks such as the Golden Abode of Buddha Shakyamuni, Chess City, and the Kalmyk National Museum.`,
        gallery: []
      },
      {
        id: 'kazan-state',
        name: 'Kazan State Medical University',
        slug: 'kazan-state-medical-university',
        image: '/images/universities/russia/Kazan-State-Medical-University-1.webp',
        description: 'Founded in 1814, Kazan State Medical University is a top-ranked medical university located in the Kazan city of Russia.',
        location: 'Kazan, Russia',
        ranking: 'Top Tier',
        established: '1814',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹6,50,000 / Year', hostel: '₹90,000 / Year', total: '₹44,40,000 (Approx. 6 Years)' },
        overview: `Founded in 1814, Kazan State Medical University is a top-ranked medical university located in the Kazan city of Russia with more than 200 years of experience in medical training. It is a higher medical education institution that occupies 16th position in the list of the top universities in Russia. KSMU has been a popular choice among international medical aspirants to study MBBS in Russia.

The medical degrees awarded by the Kazan State Medical University are globally accepted and the medical graduates of this university can practice medicine anywhere in the world. The medical education, lectures, laboratory sessions, practical classes, tests, exams, etc. at Kazan State Medical University are imparted in English to international students

Kazan State Medical University has trained over 24,000 students till date, including international students from 49 countries. At present, 700 students from over 57 countries are pursuing medical education in English at the university.

Faculties of Medicine at Kazan State Medical University:
- Faculty of General Medicine
- Faculty of Pediatrics
- Faculty of Dentistry
- Faculty of Pharmacy
- Faculty of Preventive Medicine
- Faculty of Nursing

Eligibility Criteria For Admission:
- 50% or more in PCB subjects in 10+2 for the General category students.
- 40% or more in PCB subjects in 10+2 for the SC/ST/OBC category students.
- A passing NEET score.
- The age of the student must be 17 years or more in the admission year.`,
        whyStudy: [
          'Affordable MBBS fee structure.',
          'Over 200 years of experience.',
          'No donations or capitation fees for admission.',
          'No entrance exams like IELTS and TOEFL.',
          'High quality medical education.',
          'A government funded medical university.',
          'Recognized by NMC, WDOMS, GMC, AMC, ECFMG, etc.',
          'Globally accepted medical degrees.',
          'Comfortable hostel accommodation for international students.',
          'Facility of Indian food in university mess.',
          'English medium medical university in Russia.',
          'Students from over 57 countries create a multicultural environment.',
          'Clinical training at top hospitals of the country.'
        ],
        admissionProcess: [
          'Fill up the application form for Kazan State Medical University.',
          'Submit the necessary documents for admission online such as school passing certificates, etc.',
          'The applicant will receive an admission/acceptance letter from the university confirming the admission.',
          'Apply for a student visa at the Embassy of the Russian Federation in India.',
          'Payment of first-year tuition fees. If applying for an education loan, clear all the dues.',
          'Make arrangements for your travel to Russia for your medical studies.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `The university offers opportunities to its students to help them realize their potential in studies and scientific research, sport, public service, international conferences, and symposiums.
Students attend a relation camp “Medic” on the banks of the Volga river.
Athletic programs are organized at the university for students.
Annual recreation programs are held at the university, including basketball, tennis, swimming, football, and skiing and skating in winters.
Students perform various activities together and have a newspaper called “Kazan Medical Student”.
Various activities are carried out at the student’s club.
There are 6 hostels located near the premises of the university and under the protection of the police department.
Hostel rooms are available on a sharing basis and are equipped with all the basic amenities.

About Kazan City:
Kazan is renowned as the sport capital of Russia and a University City.
Kazan city is well-connected by buses, railways, river port and an international airport.
The city has an extensively developed transport network consisting of trams, buses, trolleybuses, and metro.
The average annual temperature in Kazan is 11 degree Celsius
The climate in Kazan is warm, mild, and temperate.
Kazan is just 860 kilometers away from Moscow.`,
        gallery: []
      },
      {
        id: 'kemerovo-medical',
        name: 'Kemerovo State Medical University',
        slug: 'kemerovo-state-medical-university',
        image: '/images/universities/russia/Kemerovo-State-Medical-University-Russia.webp',
        description: 'Kemerovo State Medical University (KSMU) of the Ministry of Health of Russia, is a public medical education institution in Kemerovo, Russia.',
        location: 'Kemerovo, Russia',
        ranking: 'Public Medical University',
        established: '1956',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹3,35,000 / Year', hostel: '₹1,00,000 / Year', total: '₹26,10,000 (Approx. 6 Years)' },
        overview: `Kemerovo State Medical University (KSMU) of the Ministry of Health of Russia, is a public medical education institution in Kemerovo, Russia. Established in 1956, the university is renowned for its exceptional medical education and training programs. The university is recognized at the Russian and international levels and also confirmed by the independent professional community and international expert organizations.

The Ministry of Health of the Russian Federation approves the MBBS degree from Kemerovo State Medical University. It is also recognized by other medical institutions such as the National Medical Commission (NMC), enlisted with the World Directory of Medical Schools (WDOMS), and more, including ECFMG, FAIMER, etc.

Kemerovo State Medical University of the Russian Ministry of Health offers a wide range of educational programs. Currently, the university has a unique teaching staff, of which 78% have academic degrees of candidates and doctors of science.

The university has a large fundamental and scientific department and is known as a scientific and educational center in the Russian Region offering quality medical education in Russia, particularly MBBS in Russia. Every year, more than 50 scientific events are held at the medical university, as a result of which more than 20 collections of scientific papers are published, and more than 20 monographs are published. Researchers and scientists of Kemerovo State Medical University fulfilled and exceeded significant indicators in the direction of “Innovative technologies in medicine.”

Faculties of Kemerovo State Medical University:
- Faculty of Medicine
- Faculty of Pediatrics Faculty
- Faculty of Dentistry Faculty
- Faculty of Medical Prevention Faculty
- Faculty of Pharmacy

Eligibility Criteria for MBBS Admissions:
- Age requirement: The student should have completed 17 years as in the year of admission.
- The student must have passed 10+2 with 50% marks in science subjects including Physics, Chemistry, and Biology, from an accredited university.
- The student must have qualified NEET exam.
- The student is not suffering from any contagious disease i.e. tuberculosis, HIV AIDS, etc.`,
        whyStudy: [
          'No donations required',
          'No additional entrance test for admission to the university',
          'Kemerovo State Medical University Russia Fees make pursuing MBBS budget-friendly.',
          'High-quality MBBS Degree',
          'English Medium of instruction for MBBS in Russia',
          'Hands-on practical training',
          'Excellent teaching staff and renowned Doctors',
          'Advanced classrooms using modern technologies to educate students',
          'Medical facilities include laboratories for scientific research and diagnostic centers, etc.',
          'Library with rich collections of books for the interest of the students.',
          'Social, cultural and humanitarian activities are organized and promoted at the university',
          'Graduates from the university can practice medicine worldwide post qualifying the Medical Licensing of the country.',
          'The university has a separate department that looks after International students.'
        ],
        admissionProcess: [
          'Fill and submit the application form to the medical university along with the necessary documents.',
          'Get the admission letter from the University.',
          'Submit the application for the student visa along with the original passport and other required documents.',
          'Make payment of the first-year tuition fee. In case you want to avail an education loan, Rus Education can help you.',
          'Prepare for your travel to Russia.',
          'Board your flights to Russia.',
          'Transparent fee structure with no hidden costs.'
        ],
        documentsRequired: [
          'Birth certificate',
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Degree Marksheet and certificate',
          'Migration Certificate',
          'Original passport',
          'Medical Reports including HIV test report',
          'Passport size photos',
          'Offer letter from the university',
          'Visa application form'
        ],
        hostelFacility: `Kemerovo State Medical University ensures students enjoy secure and comfortable accommodation, complete with all essential amenities.
The university cultivates a culturally diverse environment welcoming students from across the globe.
The university boasts a well-equipped library housing an extensive collection of reference books, manuscripts, monographs, and journals covering diverse subjects.
The students of Kemerovo State Medical University are encouraged to take an interest in different social exercises, sports, courses, and examinations held in the universities of different nations.
At the university, students are encouraged to be a part of various student exchange programs that are conducted in collaboration with various healthcare institutions within the country.

Kemerovo – City at a Glance:
Kemerovo is an industrial city and the administrative center of Kemerovo Oblast, Russia.
It is the most important center for industrial, cultural, scientific and education in Eastern Europe.
The city was named after the village of Kemerovo, the surname of the first settlers of the Kemerovs.
The public transport network of Kemerovo consists of buses, public taxis, trams, and trolleybuses.
Kemerovo is home to Kemerovo State Medical University
Kemerovo’s climate is a humid continental climate with warm summers and long, severely cold winters.
Most popular places in Kemerovo: Pamyat’ Shakhtoram Kuzbassa, Monument, Park Angelov, Wonderland Park, Moskovskaya Ploshchad’, Amusement Park “Antoshka”, Kuzbass Botanical Garden`,
        gallery: []
      },
      {
        id: 'kemerovo-state',
        name: 'Kemerovo State University',
        slug: 'kemerovo-state-university',
        image: '/images/universities/russia/Kemerovo State University.webp',
        description: 'Kemerovo State University (KemSU) is the scientific hub of Kemerovo Oblast. Located in its administrative and economic center, Kemerovo city.',
        location: 'Kemerovo, Russia',
        ranking: 'Scientific Hub',
        established: '1973',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹2,99,000 / Year', hostel: '₹31,250 / Year', total: '₹20 Lakhs (Approx.)' },
        overview: `Kemerovo State University (KemSU) is the scientific hub of Kemerovo Oblast. Located in its administrative and economic center, Kemerovo city, the institute grew into a university from the Kemerovo Pedagogical Institute in 1973. Today, it has five branches in the Siberian region and one in Ulaanbaatar. Known for its state-of-the-art infrastructure, the university was among the top 10 flagship universities in Russia in 2018.

KemSU is an important research center among the top Russian universities and boasts 20 modern research laboratories. It receives research and innovation funding from the Ministry of Science and Higher Education and international foundations. The university also carries the reputation of ensuring fruitful internship opportunities and fulfilling job placements post-study. It was placed among the top 500 universities in Europe and Central Asia’s emerging universities by QS World University Rankings.

The University’s Institute of Medicine started in 2022 and is known for its modern laboratories, highly qualified faculty, and pedagogical innovation. With its well-equipped classrooms, simulation labs, and a globally relevant curriculum, the institute is already showing promise.

The faculty at the Institute of Medicine of KemSU is focussing on hands-on experience and practical learning as part of the clinical training. Students get the opportunity to learn and practice using equipment from the world’s leading manufacturers.

Kemerovo State University Faculties:
- Ophthalmology
- Surgery
- Urology
- Therapy

Eligibility Criteria for Admission:
- Are 17 years or older before 31st December of the admission year.
- Have studied Physics, Chemistry, and Biology and English in 10 + 2.
- Have secured at least 50% marks in the Class 12th board examination conducted by a board recognized by Indian authorities.
- Have qualified NEET.`,
        whyStudy: [
          'A globally relevant curriculum prepares the students to take on the challenges of the professional world of medicine.',
          'KemSU boasts state-of-the-art infrastructure with well-equipped laboratories and modern classrooms.',
          'Dedicated Cytogenetics Laboratory propels research.',
          'International collaborations for education and training ensure that students have exposure to global trends.',
          'A cost-effective fee structure brings value for money.',
          'A balance between study and recreation helps in personality development.',
          'Valuable internships provide the much-needed relevant experience before entering into the professional world.',
          'Comfortable and hygienic hostels allow students to focus on their studies better.',
          'A vibrant campus culture contributes to learning beyond the classroom.',
          'Support for international students helps them assimilate into a new culture.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Submit the application form along with all required documents.',
          'Receive the admission letter from the university.',
          'Submit passport and other required documents for visa processing.',
          'Pay tuition fees and apply for an education loan if required.',
          'Pack your bags and travel to Russia.',
          'Complete university formalities upon arrival.'
        ],
        documentsRequired: [
          'Passport (with a minimum validity of 18 months)',
          '10th and 12th certificates and mark sheets',
          'Valid Identity Proof',
          'Passport size photographs',
          'Official Invitation letter from Kemerovo State University',
          'Medical report with HIV negative'
        ],
        hostelFacility: `KemSU has 7 student residence buildings that accommodate international and exchange students. The university ensures a comfortable and hygienic living environment for all students.

The residential buildings are well-furnished and rich in amenities, ensuring a convenient lifestyle. Students get separate bathroom facilities, kitchens, and shared common spaces with their accommodation units.

Besides providing a conducive study environment, the university encourages social interaction and cultural exchange between international students.

Life at the University:
The university ensures that international students’ stay is enriching and vibrant beyond the classroom. It facilitates Indian students’ assimilation into a new society and culture through various events and activities.

Two festivals organized by the university are very popular among the students. The First Snow Festival is held in autumn for first-year students. The Student Spring Festival aims to promote cultural exchange and interactions in the diverse student community of KemSU.

Various societies, clubs, and studios contribute to students’ overall growth. KemSU has studios for music, dance, acrobatics, and theatre, a sports league, and an academic choir.

KemSU’s campus is divided into two clusters. The main cluster lies in the city’s heart, and another campus lies next to Stroiteley Boulevard. A few attractions of the KemSU campus include a sprawling sports complex, a media centre, and a museum dedicated to the history, ethnography, and ecology of Siberia.

City at a Glance:
Kemerovo is one of the most industrialized regions in Russia and falls on the southwestern boundary of Siberia. Around, 70% of the 2.6 million people in the Kemerovo Oblast live in the cities. Every fifth person in the Oblast lives in the capital city. The region is known for coal mining around the globe and is Russia’s one of the most important industrial regions. The Oblast also has metallurgy and mechanical industries.

Kemerovo city lies on the Tom River. The trans-Siberian railway and west-Siberian railway connect it to various parts of Russia. A dense rail network makes the city an economic and industrial hub in the region. Kemerovo city is also famous for its cultural attractions like the Regional Museum of Local Lore, and the Philharmonic Hall.

Kemerovo boasts a vibrant array of attractions. Inciting local and visitors alike. Pamyat’ Shakhtoram Kuuzbassa stands tall as a solemn tribute to mining heritage of the region, serving as a poignant monument. For those seeking tranquility amidst nature, Park Angelov offers picturesque landscapes and peaceful retreats. Meanwhile, the exhilarating Wonderful Park captivates with its thrilling rides and vibrant atmosphere, perfect for families and thrill seekers. Moskovaya Ploschand’ stands as a bustling hub, pulsating with the energy of the city, offering a glimpse into Kemerovo’s urban life. Lastly, the Kuzbass Botanical Garden beckons with its lush greenery and diverse flora, providing a serene oasis for nature lovers to explore and unwind.`,
        gallery: []
      },
      {
        id: 'kirov-state',
        name: 'Kirov State Medical University',
        slug: 'kirov-state-medical-university',
        image: '/images/universities/russia/Kirov State Medical University.jpg',
        description: 'Located in Kirov, this university offers high-quality medical education.',
        location: 'Kirov, Russia',
        ranking: 'Top Tier',
        established: '1987',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,60,000 / Year', hostel: '₹80,000 / Year', total: '₹26,40,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'kuban-state',
        name: 'Kuban State Medical University',
        slug: 'kuban-state-medical-university',
        image: '/images/universities/russia/Kuban-State-Medical-University.webp',
        description: 'The Kuban State Medical University was founded in 1920 by the Government of the Russian Federation and to date, it is considered as one of the ancient Universities of Kuban.',
        location: 'Krasnodar, Russia',
        ranking: 'Southern Leader',
        established: '1920',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹5,00,000 / Year', hostel: '₹18,000 / Year', total: '₹31,08,000 (Approx. 6 Years)' },
        overview: `The Kuban State Medical University was founded in 1920 by the Government of the Russian Federation and to date, it is considered as one of the ancient Universities of Kuban and one of the Top Medical Universities of Russia. The authority of the founder is supervised by the Ministry of Health of the Russian Federation.

The university occupies a special place in the structure of higher professional education in Russia thanks to the quality management system of vocational education.

Kuban State Medical University is among the 5 premier Universities of Russia that work with biological materials. The University has a renowned name for medical education among international students, especially Indian students- to pursue MBBS in Russia.

The Center for Practical Skills was created with the aim of solving fundamentally important issues of medical education; to master the skills of a doctor without causing harm to the patients. KSMU provides training in the field of medicine, pharmacy, which is conducted by highly-qualified specialists.

Faculties At Kuban State Medical University:
- Faculty of General Medicine
- Faculty of Paediatrics
- Faculty of Dental
- Faculty of Pharmaceutical
- Faculty of Medical and Preventive
- Faculty of Pre-University Training
- Faculty of Professional Development of Doctors

Eligibility Criteria For Admission:
- The student should have qualified class 10 and 12 from any recognised education board/institution
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)
- The student must be of 17 years of age
- The student should qualify the NEET-UG exam with the required marks.`,
        whyStudy: [
          'The university holds the highest standards in international medical programs.',
          'The University provides fully furnished hostels to all its students.',
          'The university is an active global health partner of various prestigious institutions',
          'The university has the legacy of 200 years of experience in medical training.',
          'At present the students from 57 different countries are currently studying in Kuban.'
        ],
        admissionProcess: [
          'Fill in the admission Form',
          'Submit it after attaching all the required documents',
          'Receive the admission/acceptance letter from the university',
          'Apply for the Student Visa',
          'Prepare & travel to your university',
          'Complete the formalities at the university'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Students at Kuban State Medical University have the privilege of spending leisure time meaningfully, diversely, interestingly, expanding their educational prospects.
KSMU offers comfortable accommodation & dining facilities to its students, especially Indian students; as Indian delicacies are also available for them.
Rooms are fully furnished and decorated with all the basic amenities and space is clean & tidy. Laundry service is also available for the students.
The University students actively participate in many cultural and sports activities organized by the management. Many events are also organized for social causes. It keeps the students healthy & fit; both physically and mentally.

City at a Glance:
The southern city of Russia is known for one of the only surviving hyperboloid, steel-lattice water towers, designed in the early 20th century by architect Vladimir Shukhov.
Krasnodar has several museums, concert halls and theaters, plus the largest splash fountain in Europe.
The city experiences significant seasonal variation in monthly snowfall.
The Krasnodar Territory is located in the western highland part of the Big Caucasus and the Kuban Azov Lowland
Among the lively places to visit the city offers, Red Street, Galitskogo Park, Stadium FC Krasnodar, Botanical Garden of Professor I. S. Kosenko, The Solnechny, etc`,
        gallery: []
      },
      {
        id: 'mari-state',
        name: 'Mari State University',
        slug: 'mari-state-university',
        image: '/images/universities/russia/Mari-State-University.webp',
        description: 'Established in 1972 by the Ministry of Science and Higher Education of the Russian Federation. Mari State University (MarSU) is one of the rapidly growing classical universities.',
        location: 'Yoshkar-Ola, Russia',
        ranking: 'Leading University',
        established: '1972',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '$ 6,500 / Year', hostel: 'Included in Tuition Fee', total: '₹ 34,78,000 (Approx.)' },
        overview: `Established in 1972 by the Ministry of Science and Higher Education of the Russian Federation. Mari State University (MarSU) is one of the rapidly growing classical universities of the Mari El Republic, Russia, located in the scenic city of Yoshkar-Ola which is the capital of Mari El Republic.

The core aim of the university is to make higher education more accessible to all students around the world, allowing them to develop holistically and prepare them as specialists to work in the field of health care. The university curriculum and environment focuses on the developing and implementing innovative diagnostic, treatment, and prevention technologies while nurturing the essential values of compassion and empathy among its students.

At present, the infrastructure at Mari State University features 7 university buildings and 8 hostel facilities. The university’s library comprises more than 1.1 million books. There are 7 reading rooms with more than 529 seats. The electronic catalogue of the library contains more than 200 thousand units and 17 databases. The university has a huge campus with a total area of 1,28,000 square metres. There are 400 candidates of sciences and associate lecturers and there is a staff of about 100 doctors of sciences and professors.

Faculties At Mari State University:
- General Medicine
- Pediatrics
- Dentistry
- Preventive Care
- Clinical Psychology
- Pharmacy & Nursing

Eligibility Criteria For Admission:
- The student should have qualified class 10 and 12 from any recognised education board/institution
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)
- The student must be of 17 years of age
- The student should qualify the NEET-UG exam with the required marks.`,
        whyStudy: [
          'Globally recognised medical education',
          'Affordable Fees',
          'The quality of education is at par with the international standards.',
          'Well equipped classrooms and laboratories',
          'Modern infrastructure',
          'Simple admission process',
          'No Donation',
          'No entrance tests required like IELTS, TOEFL, etc.',
          'Study complete course in English language',
          'More than 1100 students currently studying at MarSU',
          'Largest research centres in the region, where students can get their hands-on-learning.',
          'Wide range of facilities for the students such as sports, arts and social and other enriching activities.',
          'Hostel and Tuition fees are conveniently structured as a single package.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill in the admission Form',
          'Submit it after attaching all the required documents',
          'Receive the admission/acceptance letter from the university',
          'Apply for the Student Visa',
          'Prepare & travel to your university',
          'Complete the formalities at the university'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Hostels at MarSU:
MarSU has an arrangement of comfortable hostels for all its international students, located close to the main campus.
The rooms are oftentimes shared between 2-3 students and are equipped with all the essential requirements.
The accommodation is comfortable with a centralised air conditioning system, Wifi, ready room, electric supply, water supply, etc.

Mess Facility at MarSU:
MarSU has arrangements for Indian mess facilities for the Indian students.
The mess provides hygienic, nutritious, tasty Indian food for all the students.
The mess also provides the students with a common space to interact with each other and create beautiful memories.

Student Life at Mari State University:
With MarSU being a home of 1100+ Indian students, the student life at the university is extremely colourful and filled with excitement.
The university offers scientific communities, sports schools, volunteering, charity work, Interest clubs, public work, cultural events and much more to the students.
The students during their stay are encouraged to participate in the youth forums, seminars, and conferences held at various national and international levels.
The university has various resources for sports activities for students such as a well built sports complex.
The university has a mini-football field, track, and field complex, two sandy courts for beach football, Asphalt Court for team sports, gyms, fitness rooms, two exercise rooms for aerobics, and a shooting range as well as indoor courts for playing basketball, and volleyball.
The university also frequently organises activities to celebrate various events such as Indian Independence Day, Diwali, Holi, Eid Celebration etc.

City at a Glance:
Yoshkar-Ola is included in the list of historic cities of Russia.
Climatic conditions in Yoshkar-Ola are very pleasant. Summers are quite comfortable and partly cloudy and the winters are long, freezing, snowy and overcast.
Yoshkar-Ola is connected with other cities and towns by several bus and railway routes. There are regular runs to/from Moscow city by trains from Yoshkar-Ola railway station.
Main attractions of the city are its City centre, National Art Gallery, Museum of the History of Yoshkar-Ola, Green-domed Cathedral of the Resurrection of Christ, Riverside`,
        gallery: []
      },
      {
        id: 'mephi-moscow',
        name: 'MEPhI Moscow',
        slug: 'mephi-moscow',
        image: '/images/universities/russia/MEPhI Moscow.jpg',
        description: 'A world-class research university in Moscow.',
        location: 'Moscow, Russia',
        ranking: 'World Class',
        established: '1942',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹7,60,000 / Year', hostel: '₹20,000 / Year', total: '₹46,80,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'mephi-obninsk',
        name: 'MEPhI Obninsk',
        slug: 'mephi-obninsk',
        image: '/images/universities/russia/MEPhI Obninsk.jpg',
        description: 'The Obninsk branch of the prestigious MEPhI university.',
        location: 'Obninsk, Russia',
        ranking: 'Top Tier',
        established: '1953',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹8,00,000 / Year', hostel: '₹20,000 / Year', total: '₹49,20,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'mordovia-state',
        name: 'Mordovia State University',
        slug: 'mordovia-state-university',
        image: '/images/universities/russia/Mordovia State University.webp',
        description: 'Located in Saransk, offering comprehensive medical education.',
        location: 'Saransk, Russia',
        ranking: 'State Ranking',
        established: '1931',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,11,000 / Year', hostel: '₹75,000 / Year', total: '₹29,16,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'murmansk-arctic',
        name: 'Murmansk Arctic University',
        slug: 'murmansk-arctic-university',
        image: '/images/universities/russia/Murmansk Arctic University.webp',
        description: 'A unique university located in the Arctic region.',
        location: 'Murmansk, Russia',
        ranking: 'Unique Geography',
        established: '1939',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,60,000 / Year', hostel: '₹25,000 / Year', total: '₹23,10,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'north-caucasian-academy',
        name: 'North Caucasian State Academy',
        slug: 'north-caucasian-state-academy',
        image: '/images/universities/russia/North Caucasian State Academy.webp',
        description: 'A prominent medical academy in the North Caucasus region.',
        location: 'Cherkessk, Russia',
        ranking: 'Regional Leader',
        established: '1991',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,50,000 / Year', hostel: '₹30,000 / Year', total: '₹22,80,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'north-caucasus-federal',
        name: 'North Caucasus Federal University',
        slug: 'north-caucasus-federal-university',
        image: '/images/universities/russia/North Caucasus Federal University.jfif',
        description: 'One of the largest federal universities in Russia.',
        location: 'Stavropol, Russia',
        ranking: 'Federal Ranking',
        established: '2012 (as merger)',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,20,000 / Year', hostel: '₹42,000 / Year', total: '₹21,72,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'north-ossetian-academy',
        name: 'North Ossetian State Medical Academy',
        slug: 'north-ossetian-state-medical-academy',
        image: '/images/universities/russia/North Ossetian State Medical Academy.webp',
        description: 'A leading medical academy in Vladikavkaz.',
        location: 'Vladikavkaz, Russia',
        ranking: 'Top Tier',
        established: '1939',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,60,000 / Year', hostel: '₹45,000 / Year', total: '₹24,30,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'north-western-medical',
        name: 'North-Western State Medical University',
        slug: 'north-western-state-medical-university',
        image: '/images/universities/russia/North-Western State Medical University.webp',
        description: 'Named after I.I. Mechnikov, located in Saint Petersburg.',
        location: 'Saint Petersburg, Russia',
        ranking: 'Top Tier',
        established: '2011 (as merger)',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹5,50,000 / Year', hostel: '₹42,000 / Year', total: '₹35,52,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'northern-state-medical',
        name: 'Northern State Medical University',
        slug: 'northern-state-medical-university',
        image: '/images/universities/russia/Northern State Medical University.jpg',
        description: 'The Northern State Medical University was founded in 1936 and it is situated in Arkhangelsk. The University is the center of Medical education in the North of Russia.',
        location: 'Arkhangelsk, Russia',
        ranking: 'Northern Leader',
        established: '1936',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹3,50,000 / Year', hostel: '₹30,000 / Year', total: '₹22,80,000 (Approx. 6 Years)' },
        overview: `The Northern State Medical University was founded in 1936 and it is situated in Arkhangelsk. The University is the center of Medical education in the North of Russia.

Presently, there are around 5500 students studying in Northern State Medical University. The University has up-to-date equipment such as computers, films and video aids, and other modern appliances. Medical education is provided by the department of preventive medicine and medical biochemistry. The institute also has good international relations. The university has a remarkable campus and well-maintained infrastructure. Along with MBBS various other medical courses are offered to the students. The university staff has around 980 members including researchers, professors, teachers etc.

Faculties At Northern State Medical University:
- Faculty of General Medicine
- Faculty of Pediatric
- Faculty of Nursing
- Faculty of Postgraduate Education
- Faculty of Pharmaceutical

Eligibility Criteria For Admission:
- The student should have qualified class 10 and 12 from any recognised education board/institution
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)
- The student must be of 17 years of age
- The student should qualify the NEET-UG exam with the required marks.
- The students must possess a valid NEET Score card.`,
        whyStudy: [
          'Northern State Medical University provides an MBBS program at affordable cost.',
          'The University has an easy admission procedure.',
          'The admission requires no donation fees and extra charges for the admission process.',
          'The medical degree at Northern State Medical University is globally recognised.',
          'Students get training from highly qualified teachers with modern technology.',
          'The University provides fully furnished hostels to all its students.'
        ],
        admissionProcess: [
          'Fill in the admission Form',
          'Submit it after attaching all the required documents',
          'Receive the admission/acceptance letter from the university',
          'Apply for the Student Visa',
          'Prepare & travel to your university',
          'Complete the formalities at the university'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `The university has modern and well-equipped labs. There are computers, projectors, and all the necessary medical requirements.
The medical graduates from this university get work opportunities in various countries.
The MBBS course study is in English language.
The hostels are within the campus itself and offer great support.
The university has various clubs in which the students can participate to explore their interests and pursue their passion.

City at a Glance:
The White Sea about 40 kilometers from Arkhangelsk makes the climate windy and humid and it rains often.
Arkhangelsk is one of the oldest Russian cities.
Arkhangelsk is one of the largest scientific and cultural centers in the European North.
Among the key attractions of the city, there is Kulakov Museum, Northern Sea Museum, Museum of the Russian Art of XVII, Small Korela Wooden Architecture and Folk Art Museum, Arkhangelskiye Gostinyye Dvor, etc.`,
        gallery: []
      },
      {
        id: 'novosibirsk-state',
        name: 'Novosibirsk State University',
        slug: 'novosibirsk-state-university',
        image: '/images/universities/russia/Novosibirsk State University.jfif',
        description: 'A top research university in Novosibirsk.',
        location: 'Novosibirsk, Russia',
        ranking: 'Top Research',
        established: '1959',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹6,50,000 / Year', hostel: '₹18,000 / Year', total: '₹40,08,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'omsk-state',
        name: 'Omsk State Medical University',
        slug: 'omsk-state-medical-university',
        image: '/images/universities/russia/Omsk State Medical University.webp',
        description: 'Omsk State Medical University is the school of medicine and it is located in Omsk, Russia. It was established as the Medical Faculty in the year 1920.',
        location: 'Omsk, Russia',
        ranking: 'Siberian Leader',
        established: '1920',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹3,70,000 / Year', hostel: '₹40,000 / Year', total: '₹24,60,000 (Approx. 6 Years)' },
        overview: `Omsk State Medical University is the school of medicine and it is located in Omsk, Russia. It was established as the Medical Faculty in the year 1920 as the Siberian Institute of Veterinary Medicine and Zoology. In the year 1921, it was transformed as the West Siberian State Medical Institute. However, in 1925, it was called as the Omsk State Medical Institute. In 1994, it was named as the Omsk State Medical Academy.

OSMA maintains a good relationship with various educational institutions in Western Europe, the United States, Japan, and other countries. There are 59 departments in this medical University. 73% of the staff members have an academic degree. About 100 MD-PhD full professors and 300 MD-PhD associate professors are working with the University.

OSMU has the largest library among the medical institutes of Russia. OSMU has over 6,000,000 collections and abundant unique publications are among them. The library comprises fully-equipped computer hall with the Internet access.

Clinical Departments and Chairs of the University are positioned in the largest municipal hospitals equipped with modern diagnostic facilities. These clinics are being headed by the great scholars of the University. With up-to-date information technologies, teaching procedures are being continuously improving. Students Scientific Society is the pride of OSMU.

Faculties At Omsk State Medical University:
- Faculty of Medicine
- Faculty of Pediatrics
- Faculty of Preventive medicine
- Faculty of Stomatology
- Faculty of Pharmaceutics

Eligibility Criteria For Admission:
- The student should have qualified class 10 and 12 from any recognised education board/institution
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)
- The student must be of 17 years of age
- The student should qualify the NEET-UG exam with the required marks.
- The students must possess a valid NEET Score card.`,
        whyStudy: [
          'The medium of instruction at the University is English.',
          'The university has a conducive and healthy environment for students.',
          'It is one of the top universities in Russia that provides quality education to students.',
          'There are good dormitory facilities for local as well as international students.',
          'Students are not required to pay any donation or capitation fee.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill in the admission Form',
          'Submit it after attaching all the required documents',
          'Receive the admission/acceptance letter from the university',
          'Apply for the Student Visa',
          'Prepare & travel to your university',
          'Complete the formalities at the university'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Omsk State Medical University believes that physical training is a significant part of the daily routine.
It has well-equipped gyms, ski-centers, a sport and recreation center for the students.

City at a Glance:
Omsk is one of the largest cities of the West-Siberian region of Russia.
At present time more than 50 centers of national culture are functioning, regenerating its national traditions. Religious unions of 23 confessions are acting too.The White Sea about 40 kilometers from Arkhangelsk makes the climate windy and humid and it rains often.
Omsk is one of the cultural centers of Siberia. There are 47 public libraries with a fund of 5.6 mln. for example, 9 museums, 23 institutes of entertainment, 9 professional theaters, State circus, Concert Hall and Organ Music Hall of Omsk Philharmonic.
Apart from that, the city is also the witness to the spectacular Vrubel Museum of Fine Arts, Omsk Drama Theater, St. Nicholas Cossack Cathedral, gold-domed Assumption Cathedral, etc.`,
        gallery: []
      },
      {
        id: 'orenburg-state',
        name: 'Orenburg State Medical University',
        slug: 'orenburg-state-medical-university',
        image: '/images/universities/russia/Orenburg-State-Medical-University.webp',
        description: 'Established in 1944, Orenburg State Medical University (OrSMU) is one of the top-ranked government medical universities located in the city of Orenburg, Russia.',
        location: 'Orenburg, Russia',
        ranking: 'Top Government Medical University',
        established: '1944',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '$ 6,500 / Year', hostel: 'Included', total: '₹29,25,000 (Approx. 6 Years at ₹75/USD)' },
        overview: `Established in 1944, Orenburg State Medical University (OrSMU) is one of the top-ranked government medical universities located in the city of Orenburg, Russia. It offers courses leading to officially recognised higher education degrees such as bachelor’s degrees, master’s degrees, and doctorate degrees in several areas of study. The university meets all modern standards and requirements presented to higher medical schools. And that is why Orenburg State Medical University is the most desired Russian medical university, majorly amongst Indian students who desire to study MBBS in Russia.

Orenburg State Medical University provides the best-quality educational programs that are designed to offer training to the next generation of medical researchers, physicians, and healthcare professionals. Many renowned specialists in the medicine field have graduated from this university. They are working in state and private medical and preventive institutions, taking leading positions in state administrative structures and solving primary issues in the development of modern medicine.

With a focused and skilled faculty, state-of-the-art infrastructure, a library, well-equipped laboratories, museums, and skill lab facilities to offer better hands-on experience to the students, the university has been successful in attracting students globally, including Indian students. The medical graduates from OrSMU have been successfully practicing medicine in India, the UK, the USA, Malaysia, the Middle East, and other European countries.

Orenburg State Medical University strives to provide the best medical education to its students to prepare them to take up the challenges in the future so that when medical students graduate from this university, they have the potential to handle the responsibilities of the medicine field.

At present, 1200+ Indian students are studying MBBS at Orenburg State Medical University.

Orenburg State Medical University Faculties:
- Faculty of General Medicine
- Faculty of Pediatrics
- Faculty of Dentistry
- Faculty of Preventive Care
- Faculty of Pharmacy
- Faculty of Clinical Psychology

Eligibility Criteria for Admission:
- Student have passed 10+2 with 50% marks in science subjects.
- The student should have completed 17 years as in the year of admission.
- The student have qualified NEET exam.
- The student is not suffering from any contagious disease i.e. tuberculosis, HIV AIDS, etc.`,
        whyStudy: [
          'No entrance examination, donation needed.',
          'Easy Admission procedure.',
          'High norms of medical education.',
          'The cost of studying MBBS in Russia is affordable.',
          'The medium of education in Russia in English.',
          'The MBBS degree from Orenburg State Medical University is honored by all the major associations like ECFMG, WDOMS, FAIMER, NMC(MCI), etc.',
          'Hostels with best facilities.',
          'More than 1200 Indian students are currently studying at Orenburg State Medical University.',
          'The students can choose between English and Russian medium of study at their convenience.',
          'Hostel fees are included within the university tuition package.'
        ],
        admissionProcess: [
          'Submit the Application form along with the required documents.',
          'Pay Fees and get a confirmation letter.',
          'Submit Passport, get Visa/Invitation Letter.',
          'Get Visa and fly to Russia.',
          'Join your classes.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Student life: Hostel & Facilities:
Hi-tech robotic learning is offered to the students for a real-life experience and insightful learning during practical sessions.
OSMU has 3 hostels within the University out of which the third hostel is reserved for the Indian students.
These hostels give a very homely feeling for the students who came from different places.
There is a sports club in the University which was first inaugurated in the year 2013.
Organizing and improving the sports work for students, propaganda of healthy lifestyle and upgrading sportsmanship is the prime aim of the University.
There are 12 sports leagues in the club in which all the Indian students participate such as aerobics, swimming, basketball, volleyball, indoor soccer, track-and-field athletics, table tennis, lifting, skiing, chess, etc.
There is an Indian mess in the hostel of the university for Indian students.

City at a Glance:
Orenburg is the administrative center of Orenburg Oblast, Russia.
The city is popular for its location between Europe and Asia.
Modern Orenburg has major engineering industries, producing heavy-industrial and agricultural machinery.
The city is the center of administration in Orenburg Oblast. City is close to the Kazakhstan border.
The climate in Orenburg is extremely continental, with hot, dry summers and moderately cold winters.
Best places to visit in Orenburg – Caravanserai, Dead Sea in the Dessert, and Holy Trinity COnvent of Mercy.`,
        gallery: []
      },
      {
        id: 'pacific-state',
        name: 'Pacific State Medical University',
        slug: 'pacific-state-medical-university',
        image: '/images/universities/russia/Pacific State Medical University.jfif',
        description: 'Located in Vladivostok, offering high-quality medical training.',
        location: 'Vladivostok, Russia',
        ranking: 'Top Tier',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹5,00,000 / Year', hostel: '₹48,000 / Year', total: '₹32,88,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'perm-state',
        name: 'Perm State Medical University',
        slug: 'perm-state-medical-university',
        image: '/images/universities/russia/Perm-State-Medical-University.webp',
        description: 'Founded in 1916 and located in the Perm City of Russia, Perm State Medical University is one of the oldest and largest universities of Russia.',
        location: 'Perm, Russia',
        ranking: 'Top Tier University',
        established: '1916',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$ 6,500 / Year',
          hostel: 'Included',
          total: '₹29,25,000 (Approx. 6 Years at ₹75/USD)'
        },
        overview: `Founded in 1916 and located in the Perm City of Russia, Perm State Medical University is one of the oldest and largest universities of Russia. The leading university is a popular name amongst Indian medical aspirants who want to pursue MBBS in Russia. 

Perm State Medical University is integrated with academic institutions of the Ural Branch of the Russian Academy of Sciences and different higher schools of Russia and Perm. The result is deepening of scientific-research studies, which are widely introduced into medical practice, as well as receiving grants of the Russian Foundation for Basic Research (RFBR) and Russian Humanitarian Science Foundation (RHF).

The admissions in MBBS course at Perm State Medical University for the September intake are open and Indian students can apply for admissions.

Perm State Medical University - Recognitions & Accreditations:
Perm State Medical University is nationally and internationally recognized by various organizations of international reputation such as:
- National Medical Commission (erstwhile Medical Council of India);
- Medical Council of Canada;
- Ministry of Science and Higher Education, Russia;
- World Directory of Medical Schools (WDOMS);
- Education Commission for Foreign Medical Graduates (ECFMG);
- Registered with Foundation for Advancement of International Medical Education and Research (FAIMER).

Faculties At Perm State Medical University:
- Faculty of Medicine
- Faculty of Pediatrics
- Faculty of Dentistry
- Medico-prophylactic Faculty
- Faculty of Psychology and Social Work
- Faculty of Nursing
- Faculty of Additional Professional Education

Perm State Medical University Syllabus:
Perm State Medical University, one of the top medical universities in Russia for Indian students for MBBS studies, has an English-medium medical curriculum for the better understanding of its students. Every year of the MBBS course at Perm State Medical University is divided into two different semesters. 

The curriculum includes:
- 1st Year: Human Anatomy, Medical Biology, Genetics, Parasitology, Medical and Biological Physics, General Chemistry, Bioorganic Chemistry, Histology, Cytology, Embryology, etc.
- 2nd Year: Philosophy, Human Anatomy, Histology, Biochemistry, Patients Care, Microbiology, etc.
- 3rd Year: Pharmacology, Pathological Anatomy, Path Physiology, General Surgery, Operative Surgery, Stomatology, Obstetrics, Pediatrics, etc.
- 4th Year: Social Medicine, Epidemiology, Therapy, Surgery, Gynecology, Pediatrics, Psychiatry, etc.
- 5th Year: Social Medicine, Therapy, Surgery, Obstetrics and Gynecology, Forensic Medicine, Emergency Medicine, etc.

Eligibility Criteria:
- Students must have scored at least 50% in Physics, Chemistry, and Biology in class 12 and passing marks in English.
- Students must be 17 years of age as on 31 December in the admission year. 
- Students must qualify the NEET exam. (50th percentile for general/EWS category and 40th percentile for unreserved category)`,
        whyStudy: [
          'One of the leading government medical universities of Russia.',
          'Well-recognized by ECFMG, WDOMS, FAIMER, and Medical councils of Canada, Australia, etc.',
          'Medical graduates can practice medicine anywhere in the world.',
          'Affordable MBBS fees structure.',
          'Medium of instruction is English for international students.',
          'Comfortable and fully furnished hostel facilities for boys and girls.',
          'Home to more than 1400 Indian students.',
          'Special Indian mess is available for MBBS students from India.',
          'State-of-the-art infrastructure including well-equipped laboratories and libraries.',
          'Use of promobots for training to provide real-time patient-doctor exposure.',
          'Affiliated with reputed hospitals to provide clinical training.',
          'Comprehensive fee structure with hostel accommodation included.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the application form of Perm State Medical University.',
          'Submit necessary documents for admission online such as school passing certificates, etc.',
          'Receive an admission/acceptance letter from the university.',
          'Apply for a student visa at the Embassy of the Russian Federation in India.',
          'Clear all dues if applying for an education loan.',
          'Make arrangements for travel to Russia for medical studies.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Perm State Medical University offers best hostel accommodation and food facilities to its international students. There are 7 hostels on a sharing basis with 24*7 Wi-Fi access. All the hostel rooms have 2-3 beds and provide basic amenities such as beds, tables, chairs, bedsheets, pillows, and blankets. Indian mess facilities are available for Indian students. The facility of common kitchen is available for students to cook food. 

The university campus is the winner of "Best campus Moscow Mayor's Prize" and the hostel facility has won the title of "Best student hostel". The campus has 27 buildings including sports facilities, medical facilities, shops, and areas allocated for extracurricular activities like basketball, handball, gymnastics, and football ground.

City at a Glance:
- Perm is the capital of Perm Krai situated on the eastern side of the European part of Russia, on the Kama River.
- Perm is the sixth-largest city in Russia with a population of 1.2 million.
- The city is one of the primary centres for arts and culture in Russia, with many contemporary museums and theatres.
- Perm has a well-established public transport system, including buses, taxis, trolleys, and trams.`,
        gallery: []
      },
      {
        id: 'syktyvkar-state',
        name: 'Pitirim Sorokin Syktyvkar State University',
        slug: 'syktyvkar-state-university',
        image: '/images/universities/russia/Syktyvkar-State-University.webp',
        description: 'Which is named after Pitirim Sorokin, a Russian American sociologist, is the Principal University in Syktyvkar, it is the capital of...',
        location: 'Syktyvkar, Russia',
        ranking: 'Principal University',
        established: '1972',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,00,350 / Year', hostel: '₹20,000 / Year', total: '₹19,22,100 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'pskov-state',
        name: 'Pskov State University',
        slug: 'pskov-state-university',
        image: '/images/universities/russia/Pskov-State-University.webp',
        description: 'Pskov State University, Russia, is one of the renowned public institutions offering higher education in Russia, established in 2010.',
        location: 'Pskov, Russia',
        ranking: 'Public University',
        established: '2010',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '$ 4,500 / Year', hostel: 'Included', total: '₹20,25,000 (Approx. 6 Years at ₹75/USD)' },
        overview: `Pskov State University, Russia, is one of the renowned public institutions offering higher education in Russia. The university was established in 2010, by merging five leading educational institutions of the Pskov region. The Academic structure of the university consists of 16 faculties including medical education faculty and more. PskovSU today includes more than 10,000 students and over 500 teachers, among them there are Honored Teachers of Russia.

The university has fully equipped advanced classrooms with modern equipment, laboratories, workshops, 10 computer labs, a large sports hall, a conference hall for 300 people, and a library with a loan department. Pskov State University is one of the largest research centers and a training base for scientific personnel in the Pskov region and the North-West of Russia.

The university offers the best education to all its students who are pursuing MBBS in Russia and also ensures the holistic development of each student. At the university campus, there are different sports sections such as basketball, volleyball, football, and table tennis.

Pskov State University - Recognitions and Accreditations:
- National Medical Commission (erstwhile Medical Council of India);
- Ministry of Education and Science of the Russian Federation;
- World Directory of Medical Schools (WDOMS);
- Education Commission for Foreign Medical Graduates (ECFMG);
- Registered with the Foundation for Advancement of International Medical Education and Research (FAIMER).

Faculties of Pskov State University:
- Faculty of General Medicine (MBBS)
- Faculty of Medical Biochemistry
- Faculty of Medical Cybernetics
- Faculty of Psychological Education

Eligibility Criteria:
- Minimum 50% aggregate score in PCB subjects.
- Minimum 17 years of age as of 31st December in the admission year.
- Qualifying NEET score.`,
        whyStudy: [
          'Institute of Medicine and Experimental Biology is the flagship university for MBBS in Russia.',
          'Approved by medical councils globally.',
          'No donations are required for Admission.',
          'Budget-friendly MBBS in Russia with English medium instruction.',
          'High-quality MBBS Degree with hands-on practical training.',
          'Excellent teaching staff and renowned Doctors.',
          'Library equipped with more than 1 million copies of publications.',
          'Social, cultural, and humanitarian activities are promoted.',
          'Graduates can practice medicine worldwide post qualifying licensing exams.',
          'International relations department dedicated to foreign students.',
          'Encouraged International Exchange programs for student development.',
          'Advanced classrooms with modern equipment and technologies.',
          'Budget-friendly admission package with included hostel facility.',
          'Located in Pskov, Northwestern Russia.',
          'Medical facilities include Medical Research Center and Scientific Laboratories.',
          'No requirement for IELTS/TOEFL.',
          'Holistic development of each student.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill and submit the application form along with necessary documents.',
          'Receive the admission letter from the University.',
          'Submit the application for student visa with original passport.',
          'Pay your tuition fees (assistance available for education loans).',
          'Prepare for travel to Russia for your MBBS degree.',
          'Board your flights to Russia.'
        ],
        documentsRequired: [
          'Birth certificate',
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Migration Certificate',
          'Original passport or ID Proof',
          'Medical Reports including HIV test report',
          'Passport size photos',
          'Offer letter from the university',
          'NEET Scorecard',
          'Visa application form'
        ],
        hostelFacility: `Pskov State University provides a comfortable atmosphere with 11 well-furnished dormitories designed for 3022 persons. There are reading rooms, common rooms, fitness rooms, sports grounds, a leisure center, and Internet access to ensure adequate living conditions. The university ensures a culturally diverse environment with students from different countries.

City at a Glance:
Pskov is a city in northwestern Russia and the administrative center of Pskov Oblast. It is one of the oldest cities in Russia. The city has a humid continental climate with warm summers and cold, long winters. Popular places include Pskov Kremlin, Aquapolis Water Park, Pskov Krom, Art Museum-Reserve, and the Monument to Princess Olga.`,
        gallery: []
      },
      {
        id: 'rostov-state',
        name: 'Rostov State Medical University',
        slug: 'rostov-state-medical-university',
        image: '/images/universities/russia/Rostov State Medical University.jpeg',
        description: 'One of the largest medical centers in Southern Russia.',
        location: 'Rostov-on-Don, Russia',
        ranking: 'Southern Leader',
        established: '1930',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,75,000 / Year', hostel: '₹36,000 / Year', total: '₹24,66,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'ryazan-state',
        name: 'Ryazan State Medical University',
        slug: 'ryazan-state-medical-university',
        image: '/images/universities/russia/Ryazan-State-Medical-University.webp',
        description: 'Ryazan State Medical University was founded in 1950 and named after I.P. Pavlov, the first Nobel Laureate for medicine.',
        location: 'Ryazan, Russia',
        ranking: 'Top Tier',
        established: '1950',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹5,05,800 / Year', hostel: '₹24,000 / Year', total: '₹31,78,800 (Approx. 6 Years)' },
        overview: `Ryazan State Medical University was founded in the year 1950 and named after I.P. Pavlov, the first Nobel Laureate for medicine. Ryazan State Medical University is considered to be one of the most renowned medical universities in Russia that has earned a very high reputation ever since its establishment.

The University strongly collaborates with international educational and scientific organizations like the American Pharmaceutical Convention and Medical University of Arizona. In 2004, a European Quality Diploma was received by the University. At present, there are around 5000 students from 45 regions of Russia and 40 countries studying medicine.

Faculties of Ryazan State Medical University:
- Faculty of General Medicine
- Faculty of Preventive Health
- Faculty of Pharmacy
- Faculty of Dentistry
- Faculty of Pediatrics

Eligibility Criteria:
- Passed 12th standard with at least 50% score in Physics, Chemistry, Biology, and English. (40% for reserved category)
- Age requirement: Must be at least 17 years on or before 31st December in the year of admission.
- NEET requirements: Qualified NEET exam.`,
        whyStudy: [
          'Affordable medical education for foreign students.',
          'Recognised internationally and ranks 28th among 70 Russian universities.',
          'English and Russian are the medium of instruction.',
          'Globally accepted medical degrees.',
          'Availability of cutting-edge and modern technologies.',
          'Highly qualified teaching faculties including honored scientists and acclaimed doctors.',
          'Regular conduction of events held under the auspices of the Ministry of Health of Russia.',
          'Easy admission procedure.',
          'Hostel and Indian food facilities available within the university.',
          'Clinical rotations at best hospitals and clinics.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the online admission form of the university.',
          'Submit the required academic documents.',
          'Receive the invitation letter within 2 weeks if selected.',
          'Pay the tuition fees after getting the invitation letter.',
          'Apply for the student visa using the fee receipt and invitation letter.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `Ryazan State Medical University has 56 departments and 16 academic buildings. There are 4 fully furnished hostels available for foreign students. The university features a central scientific research laboratory, base dental clinic, consulting diagnostic polyclinic, botanic garden, vivarium, sports and health camp, gyms, and tennis courts. Foreign students organize and celebrate their National holidays and concerts to represent their cultures.

City at a Glance:
Ryazan is the largest city and administrative center of Ryazan Oblast, located in the western part of Russia on the riverbank of Oka. It is renowned for the Ryazan Kremlin and is the third largest city after Moscow and Yaroslavl.`,
        gallery: []
      },
      {
        id: 'samara-state',
        name: 'Samara State Medical University',
        slug: 'samara-state-medical-university',
        image: '/images/universities/russia/samara-state-medical-university-banner.webp',
        description: 'Founded in 1919, Samara State Medical University is one of the largest and most authoritative universities of Russia.',
        location: 'Samara, Russia',
        ranking: 'Top Reputed',
        established: '1919',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,50,000 / Year', hostel: '₹32,000 / Year', total: '₹28,92,000 (Approx. 6 Years)' },
        overview: `Founded in 1919, Samara State Medical University is one of the largest and most authoritative universities of Russia. The mission of the university is to train high-level professionals in the field of medicine, culture, and science. The university has 6 faculties with 50+ departments and owns 8 research institutes and its own multidisciplinary clinic with a capacity of 1000+ beds.

Faculties At Samara State Medical University:
- Faculty of General Medicine.
- Faculty of Dentistry 
- Faculty of Preventive Medicine.
- Faculty of Nursing Education.
- Faculty of vocational education.
- Faculty of Innovative Development.

Eligibility Criteria:
- Passed 10+2 or equivalent in Physics, Chemistry, Biology, and English.
- Scored 50% for unreserved categories & 40% for reserved categories in PCB subjects.
- Completed 17 years as in the year of admission.
- Qualified NEET exam and possess a valid score card.`,
        whyStudy: [
          'Largest campus in the city with affordable MBBS fees.',
          'High-quality training with academic and practical knowledge.',
          'Collaboration with 40+ reputable international institutions for research.',
          'Multidisciplinary clinic with 1000+ beds for hands-on experience.',
          'Strong scientific and innovative learning environment.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Choose the Best University with Rus Education assistance.',
          'Fill in the Application Form and submit necessary documents.',
          'Get Your Admission Letter from the university.',
          'Submit passport and other documents for Visa processing.',
          'Pay Your Tuition Fees and clear any education loan dues.',
          'Pack Your Suitcase and prepare for travel.',
          'Board your flight and start your journey in Russia.'
        ],
        documentsRequired: [
          'Duly filled-in Admission form',
          'Scanned copy of Class 12th and 10th certificates',
          'NEET Result/Admit Card.',
          'Scanned copy of Passport (first and last page)',
          'ID Proof (Aadhar, PAN, etc.) if Passport is not ready.',
          'Medical report with HIV report at the time of Visa stamping',
          'Admission letters and other facilitated documents.'
        ],
        hostelFacility: `Samara State Medical University provides Indian students with comfortable dining and accommodation facilities, including Indian delicacies. Rooms are fully furnished and decorated with all basic amenities. Several cultural and sports activities are organised by the University management for the benefit of the students.

City At Glance:
Samara is 857km away from Moscow. The city has short & dry summers and cool and dry winters. Popular places include Samara Regional Art Museum, Stalin’s Bunker, Samara Zoological Park, Samara Embankment, and Galileo Park.`,
        gallery: []
      },
      {
        id: 'sevastopol-state',
        name: 'Sevastopol State University',
        slug: 'sevastopol-state-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'A major university in Sevastopol, offering medical programs.',
        location: 'Sevastopol, Russia',
        ranking: 'Prominent University',
        established: '1951',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹2,87,500 / Year', hostel: '₹65,000 / Year', total: '₹21,15,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'saratov-state',
        name: 'Saratov State Medical University',
        slug: 'saratov-state-medical-university',
        image: '/images/universities/russia/Saratov-State-Medical-University.webp',
        description: 'Saratov State Medical University is one of the prominent and oldest government medical universities, established in 1909.',
        location: 'Saratov, Russia',
        ranking: 'Historic University',
        established: '1909',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹5,21,000 / Year', hostel: 'Included', total: '₹31,26,000 (Approx. 6 Years)' },
        overview: `Saratov State Medical University is one of the prominent and oldest government medical universities offering medical education at an affordable cost. The University is located in the city of Saratov and was established in 1909. Since its foundation, it has followed the classical system of teaching medicine, comprising detailed theoretical lectures and practical training in various clinical departments.

The degree awarded by the university is recognized globally, and medical graduates are eligible to practice in any country after qualifying the licensure exam. At present, Saratov State Medical University is a modern centre of education, science, and culture in the region.

Faculties of Saratov State Medical University:
- Faculty of General Medicine (MBBS)
- Faculty of Preventive Medicine
- Faculty of Dentistry
- Faculty of Pediatrics
- Faculty of Pharmacy
- Faculty of Nursing
- Faculty of Medical Psychology
- Faculty of Economic and Health Care Management

Eligibility Criteria:
- Passed NEET exam.
- Must be 17 years old by December 31st of the admission year.
- Completed class 12th with at least 50% (45% for SC/ST/OBC) in Physics, Chemistry, and Biology.`,
        whyStudy: [
          'Degrees are internationally recognised by bodies like NMC and WDOMS.',
          'High priority on student safety and security.',
          'No additional entrance exams required for admission.',
          'Reasonably priced tuition and low cost of living in Saratov.',
          'Affiliated hospitals offer numerous practical experience opportunities.',
          'Cozy and comfortable hostel accommodations with modern amenities.',
          'Vibrant student environment conducive to learning.',
          'Celebration of all major Indian national festivals.',
          'Hostel facility is included in the university fee structure.'
        ],
        admissionProcess: [
          'Complete the online application form.',
          'Submit school leaving certificate, birth certificate, passport copy, and transcripts.',
          'Receive an admission letter from the university.',
          'Pay the registration fees to the university account.',
          'Wait for the official invitation letter from the Russian Federal Migration Service.',
          'Apply for a student visa at the Russian embassy or consulate.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Birth certificate',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report'
        ],
        hostelFacility: `Saratov State Medical University offers a lively environment for overall development. Hostels are allocated on a twin sharing basis and equipped with essential amenities, central heating, and cooling systems. There is a kitchen on every floor for self-cooking. Security is ensured through CCTV surveillance and female wardens for girls' hostels.

City At A Glance:
Saratov is a big city in the southeast of Russia’s European part, located on the right bank of the Volga River. It serves as a cultural, economic, and educational hub. Summers are hot and winters are bitterly cold.`,
        gallery: []
      },
      {
        id: 'siberian-state',
        name: 'Siberian State Medical University',
        slug: 'siberian-state-medical-university',
        image: '/images/universities/russia/Siberian-State-Medical-University.webp',
        description: 'Established in 1878, Siberian State Medical University (SibMed) is one of the favored choices among the Indian students.',
        location: 'Tomsk, Russia',
        ranking: 'Highly Reputable',
        established: '1878',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,10,000 / Year', hostel: '₹80,000 / Year', total: '₹29,40,000 (Approx. 6 Years)' },
        overview: `Established in 1878, Siberian State Medical University (SibMed) is one of the favored choices among the Indian students studying MBBS in Russia. The university gained the status of the only flagship medical university in Russia in 2017. 

SibMed is one of the few institutions in Russia that has its own multidisciplinary university hospital. The teaching staff consists of 80% of specialists with academic degrees and 50% practicing doctors. Students receive training at a modern simulation center accredited by the European Society for Simulation in Medicine (SESAM).

Faculties at Siberian State Medical University:
- General Medicine
- Pediatrics
- Dentistry 
- Pharmacology 
- Nursing

Eligibility Criteria:
- Minimum 50% aggregate score in Physics, Chemistry, and Biology in Class 12th.
- Minimum 17 years of age by 31st December of the admission year. 
- Qualifying NEET score.`,
        whyStudy: [
          'High-quality medical education with highly-qualified faculty.',
          'NMC-recognized university with highly equipped infrastructure.',
          'Specialized university selected for education exports in Russia.',
          'Teaching staff includes 80% specialists and 50% practicing doctors.',
          'Learn at one of the biggest hospitals with smart laboratories.',
          'Healthy student-teacher ratio and no donation/capitation fee.',
          'Easy admission procedure and comfortable hostel accommodation.',
          'Resourceful libraries and access to global research practices.',
          'Simulation center with SESAM accreditation.',
          'Accredited by the Skolkovo Technopark since 2015.',
          'Resourceful libraries and access to global research practices.',
          'Cultural programs and festive celebrations for students.',
          'Internet connectivity and access to all basic amenities.',
          '24/7 safety and security within the campus.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the application form of Siberian State Medical University.',
          'Submit the required documents for admission.',
          'Receive admission/acceptance letter from the university.',
          'Apply for a student visa with passport and other documents.',
          'Clear all dues if applying for an education loan.',
          'Make arrangements for travel to Russia.',
          'Board your flights to Russia.'
        ],
        documentsRequired: [
          'Duly filled-in Admission form',
          'Scanned copy of Class 12th and 10th certificates',
          'NEET Result/Admit Card.',
          'Scanned copy of Passport (first and last page)',
          'ID Proof (Aadhar, PAN, etc.) if Passport is not ready.',
          'Medical report with HIV report at the time of Visa stamping',
          'Admission letters and other facilitated documents.'
        ],
        hostelFacility: `Siberian State Medical University has 6 dormitories for international students. Indian food is available. Hostels have internet connectivity and access to all basic amenities. The university organizes a year-round recreation program including basketball, tennis, football, skiing, and skating.

City At A Glance:
Siberia is an extensive geographical region. Typically it has short summers and long, cold winters. Popular spots include Altai mountains, Baikal lake, and Putorana Plateau. It takes about 6h 22m to get from Moscow to Siberia via air.`,
        gallery: []
      },
      {
        id: 'st-petersburg-pediatric',
        name: 'St. Petersburg State Pediatric Medical University',
        slug: 'st-petersburg-state-pediatric-medical-university',
        image: '/images/universities/russia/St. Petersburg State Pediatric Medical University.webp',
        description: 'The oldest pediatric medical university in the world.',
        location: 'Saint Petersburg, Russia',
        ranking: 'World Leader',
        established: '1925',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹5,96,000 / Year', hostel: '₹2,00,000 / Year', total: '₹47,76,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tambov-state',
        name: 'Tambov State University',
        slug: 'tambov-state-university',
        image: '/images/universities/russia/Tambov State University.jfif',
        description: 'Named after G.R. Derzhavin, offering excellent medical programs.',
        location: 'Tambov, Russia',
        ranking: 'Top Tier',
        established: '1918',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,10,000 / Year', hostel: 'Included', total: '₹24,60,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tula-state',
        name: 'Tula State University',
        slug: 'tula-state-university',
        image: '/images/universities/russia/Tula-state-University.webp',
        description: 'Tula State University, established in 1930, founded its Medical faculty in 1994, transformed into a Medical Institute in 2008.',
        location: 'Tula, Russia',
        ranking: 'Renowned Institution',
        established: '1930',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,60,000 / Year', hostel: '₹78,000 / Year', total: '₹26,28,000 (Approx. 6 Years)' },
        overview: `Tula State University, Russia, is one of the renowned institutions offering higher education in Russia. Established in 1930, the Medical faculty was founded in 1994 and transformed into a Medical Institute in 2008. TulSU Medical Institute implements educational programs of higher, postgraduate, and additional education.

The university is known for its highly-qualified staff of more than 978 academic staff. Presently, more than 20,000 students are pursuing their careers here, including 1,300+ international students from around 71 countries. It is equipped with advanced medical technologies, including the "TulaTECH" center and 8 Scientific Laboratories.

Faculties of Tula State University:
- Faculty of Human Anatomy and Physiology
- Faculty of Anesthesiology and Resuscitation
- Faculty of Obstetrics and Gynecology
- Faculty of Internal Medicine
- Faculty of General Pathology
- Faculty of Oncology
- Faculty of Pediatrics
- Faculty of Surgical Diseases

Eligibility Criteria:
- Age: 17-25 years in the admission year.
- Academic: At least 50% aggregate marks in PCB subjects in 12th standard.
- NEET: Qualifying NEET score and valid scorecard.`,
        whyStudy: [
          'Flagship university offering MBBS in Russia for Indian students.',
          'Approved by medical councils globally.',
          'No donations or entrance tests required for admission.',
          'Budget-friendly MBBS with high-quality degree in English medium.',
          'Hands-on practical training with excellent teaching staff.',
          'Advanced classrooms using modern technologies.',
          'Medical facilities include TulaTECH and Scientific Laboratories.',
          'Library for academic interests and social/cultural activities.',
          'Graduates can practice medicine worldwide.',
          'International relations department dedicated to foreign students.',
          'Vibrant campus with 18 academic buildings and 14 hostels.',
          'Fitness center, 2 swimming pools, and recreational complex on Oka River.',
          'Culturally diverse environment with students from 71+ countries.',
          'Promotion of healthy lifestyles through sports activities.',
          'Located in Tula, Western Russia, a major railway junction.',
          'Administrative center of Tula Oblast with humid continental climate.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill and submit the application form with necessary documents.',
          'Receive the admission letter from the University.',
          'Submit student visa application with original passport.',
          'Pay tuition fees (education loan assistance available).',
          'Prepare for travel and board flights to Russia.'
        ],
        documentsRequired: [
          'Birth certificate',
          '10th, 11th, and 12th mark sheets and certificates',
          'Migration Certificate',
          'Original passport or ID Proof',
          'Medical Reports including HIV test report',
          'Passport size photos',
          'Offer letter from the university',
          'NEET Scorecard',
          'Visa application form'
        ],
        hostelFacility: `Tula State University provides 14 hostels for foreign students with access to all basic amenities like kitchens, bathrooms, beds, tables, and chairs. It ensures a culturally diverse environment and healthy lifestyle through its fitness center and pools.

City at a Glance:
Tula is the largest city and administrative center of Tula Oblast. It is a major railway junction with trains to Moscow, Oryol, and Kursk. Popular places include Yasnaya Polyana, Tula State Museum of Weapons, and Tula Kremlin.`,
        gallery: []
      },
      {
        id: 'tver-state',
        name: 'Tver State Medical University',
        slug: 'tver-state-medical-university',
        image: '/images/universities/russia/Tver-State-Medical-University.webp',
        description: 'Established in 1936, the Tver State Medical University is one of the oldest and most reputed medical universities in Russia.',
        location: 'Tver, Russia',
        ranking: 'Top Reputed University',
        established: '1936',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,30,000 / Year', hostel: '₹1,00,000 / Year', total: '₹31,80,000 (Approx. 6 Years)' },
        overview: `Established in 1936, Tver State Medical University is one of the oldest and most reputed medical universities in Russia. It operates under the supervision of the Ministry of Health and the Ministry of Education of the Russian Federation. Tver State Medical University ranking is always among the top ten medical educational institutions.

The University is the largest medical scientific, research and educational center, noted for its extensive clinical and laboratory base. It won the "Prestigious Nations Friendship National Award" for outstanding contribution to international education.

Faculties at Tver State Medical University:
- Faculty of General Medicine
- Faculty of Dental Medicine
- Faculty of Pediatrics
- Faculty of Pharmacy
- Faculty of Advanced Nursing Education
- Faculty of Postgraduate Studies

Eligibility Criteria:
- Minimum 50% score in PCB in Class 12 and passing marks in English.
- At least 17 years of age by 31st December of the admission year. 
- Cleared NEET exam.`,
        whyStudy: [
          'Affordable MBBS fees for Indian students.',
          'Recognized by ECFMG, WDOMS, FAIMER, and NMC.',
          'Best-quality medical education with a perfect blend of theory and practical.',
          'Medium of teaching is English for international students.',
          'Well-furnished hostel facilities with Indian mess facility.',
          'State-of-the-art infrastructure including well-equipped laboratories.',
          'Graduates are eligible for PLAB and USMLE exams.',
          'Memorably student life within the university campus.',
          'Celebration of Indian festivals like Holi and Diwali.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the application form of Tver State Medical University.',
          'Submission of necessary documents.',
          'Receive admission/acceptance letter from the university.',
          'Apply for student visa at the Russian Embassy in India.',
          'Clear outstanding dues if availing an education loan.',
          'Inform the university about your date of arrival.'
        ],
        documentsRequired: [
          'Class 10th and 12th mark sheets and certificates',
          'NEET score card',
          'Valid passport',
          'Passport-size photographs',
          'Birth certificate',
          'Medical lab report including HIV test report',
          'Migration certificate'
        ],
        hostelFacility: `There are four specialized hostels with basic amenities, centrally air-conditioned in summers and heated in winters. Every room accommodates 2-3 students and has Wi-Fi access. Indian food is available in the canteen. Hostels are well-guarded by police security. Annual cultural programmes and sports tournaments are organized.`,
        gallery: []
      },
      {
        id: 'ulyanovsk-state',
        name: 'Ulyanovsk State University',
        slug: 'ulyanovsk-state-university',
        image: '/images/universities/russia/Ulyanovsk State University.jfif',
        description: 'A public research university in Ulyanovsk.',
        location: 'Ulyanovsk, Russia',
        ranking: 'Top Tier',
        established: '1988',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,52,000 / Year', hostel: '₹70,000 / Year', total: '₹25,32,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'ural-state',
        name: 'Ural State Medical University',
        slug: 'ural-state-medical-university',
        image: '/images/universities/russia/Ural-State-Medical-University.webp',
        description: 'Founded in 1930, the Ural State Medical University (USMU) stands as a cornerstone of medical education in Yekaterinburg.',
        location: 'Yekaterinburg, Russia',
        ranking: 'Cornerstone University',
        established: '1930',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,60,000 / Year', hostel: '₹16,000 / Year', total: '₹22,56,000 (Approx. 6 Years)' },
        overview: `Founded in 1930, Ural State Medical University (USMU) stands as a cornerstone of medical education in Yekaterinburg. It is a public university overseeing more than 6,000 students. It was awarded the status of Academy in 1995 and elevated to a full-scale university in 2013. USMU is the only university in Sverdlovsk Oblast that produces doctors.

The university is recognized by the National Medical Commission of India and is affiliated with Russia's Ministry of Science and Higher Education. State-of-the-art infrastructure and globally relevant syllabi make USMU an attractive choice for international students.

Faculties at Ural State Medical University:
- Faculty of Treatment and Prevention
- Faculty of Medicine and Prevention
- Multidisciplinary accreditation and simulation center
- Faculty of Pediatrics
- Faculty of Dentistry
- Department of Additional and Continuing Medical Education
- Faculty of Psychosocial Work and Higher Nursing Education
- Faculty of Pharmacy

Eligibility Criteria:
- 17 years or older by 31st December of the admission year.
- Passed 10+2 with at least 50% marks in PCB.
- Qualified NEET.`,
        whyStudy: [
          'Cost-effective tuition fees and affordable hostel expenses.',
          'Medium of instruction is English.',
          'Accomplished faculty and futuristic pedagogy.',
          'Recognized by WDOMS, NMC, and ECFMG.',
          'Well-equipped laboratories and dedicated clinical training centers.',
          'Comfortable and secure hostel accommodation.',
          'Hands-on experience through internships and workshops.',
          'International Training and Adaptation Centre for student support.',
          'Rich cultural and educational excursions in Yekaterinburg.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Submit the application form with required documents.',
          'Receive the official invitation letter from the university.',
          'Apply for student visa at the Embassy of the Russian Federation.',
          'Finalize arrangements and travel to Russia.',
          'Complete university formalities upon arrival.',
          'Join the International Training and Adaptation Centre for orientation.',
          'Commence your medical studies.'
        ],
        documentsRequired: [
          'Passport (minimum 18 months validity)',
          'Class 10th and 12th mark sheets and passing certificates',
          'Valid ID proof',
          'Passport size photographs',
          'Official Invitation letter from USMU',
          'Medical report with HIV negative'
        ],
        hostelFacility: `USMU boasts fully equipped accommodation facilities with basic amenities. The university has an International Training and Adaptation Centre to assist students. Activities like Student’s Day and Sports Day are organized to promote holistic learning and personality development.

City at a Glance:
Yekaterinburg is the fourth largest city in Russia and the administrative center of Sverdlovsk Oblast. Located on the Iset River, it is a major cultural and economic hub with a population of 2.2 million. It serves as a bridge between Europe and Asia.`,
        gallery: []
      },
      {
        id: 'volgograd-state',
        name: 'Volgograd State Medical University',
        slug: 'volgograd-state-medical-university',
        image: '/images/universities/russia/Volgograd-State-Medical-University-2.webp',
        description: 'Established in 1935, Volgograd State Medical University is one of the most famous and highly reputable Higher Schools both in Russia and abroad.',
        location: 'Volgograd, Russia',
        ranking: 'Historic Institution',
        established: '1935',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,80,000 / Year', hostel: '₹60,000 / Year', total: '₹32,40,000 (Approx. 6 Years)' },
        overview: `Established in 1935, Volgograd State Medical University is one of the most famous and highly reputable Higher Schools both in Russia and abroad. It is proud of its highly-qualified teaching staff and experienced physicians. The university is accredited by the Russian Ministry for Education and listed by WDOMS, ECFMG, and NMC.

Faculties at Volgograd State Medical University:
- General Medicine
- Pediatrics
- Military & Emergency Medicine
- Dentistry 
- Pharmacology & Biopharmacy
- Therapy & Family Medicine
- Surgery Disease & Proctology

Eligibility Criteria:
- Minimum 50% aggregate score in PCB in Class 12th.
- At least 17 years of age by 31st December of the admission year. 
- Qualifying NEET score.`,
        whyStudy: [
          'Wide range of possibilities in terms of learning and growth.',
          'Highly experienced and attentive faculties.',
          'Curriculum aims for broad exposure to clinical practice.',
          'Reasonable tuition fees and extremely low cost of living.',
          'Well equipped and resourceful infrastructure.',
          'No donation/capitation fee for admission.',
          'Easy admission procedure and comfortable hostel accommodation.',
          'Internship at top hospitals and clinics of Russia included.',
          'Separate department for physical training to ensure good health.',
          'Indian Vecher conducted by Indian students annually.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill up the application form of Volgograd State Medical University.',
          'Submit the required documents for admission.',
          'Receive admission/acceptance letter from the university.',
          'Apply for a student visa with passport and other documents.',
          'Clear all dues if applying for an education loan.',
          'Make arrangements for travel to Russia.',
          'Board your flights to Russia.'
        ],
        documentsRequired: [
          'Duly filled-in Admission form',
          'Scanned copy of Class 12th and 10th certificates',
          'NEET Result/Admit Card.',
          'Scanned copy of Passport (first and last page)',
          'ID Proof (Aadhar, PAN, etc.) if Passport is not ready.',
          'Medical report with HIV report at the time of Visa stamping',
          'Admission letters and other facilitated documents.'
        ],
        hostelFacility: `The University has 3 fully furnished hostels with all necessary facilities. The university premises have a gym, sports ground, and an indoor mini stadium. Cultural programs like "The Indian Vecher" are organized by students.

City At A Glance:
Volgograd, formerly Stalingrad, is a city in southwest Russia on the western bank of the Volga River. It has a humid continental climate with severe winters and hot summers. Sights include Mamayev Kurgan and the Panorama Museum.`,
        gallery: []
      },
      {
        id: 'voronezh-state',
        name: 'Voronezh State Medical University',
        slug: 'voronezh-state-medical-university',
        image: '/images/universities/russia/Voronezh State Medical University.jpg',
        description: 'Named after N.N. Burdenko, one of the oldest medical universities in Russia.',
        location: 'Voronezh, Russia',
        ranking: 'Top Tier',
        established: '1918',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,30,000 / Year', hostel: '₹45,000 / Year', total: '₹28,50,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'yelets-state',
        name: 'Yelets State University',
        slug: 'yelets-state-university',
        image: '/images/universities/russia/Yelets State University.jfif',
        description: 'Named after I.A. Bunin, located in Yelets.',
        location: 'Yelets, Russia',
        ranking: 'Top Tier',
        established: '1939',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,25,000 / Year', hostel: '₹17,000 / Year', total: '₹20,52,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'izhevsk-state',
        name: 'Izhevsk State Medical Academy',
        slug: 'izhevsk-state-medical-academy',
        image: '/images/universities/russia/Izhevsk State Medical Academy.jfif',
        description: 'A leading medical academy in the Udmurt Republic.',
        location: 'Izhevsk, Russia',
        ranking: 'Top Tier',
        established: '1933',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,35,000 / Year', hostel: '₹20,000 / Year', total: '₹21,30,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'stavropol-state',
        name: 'Stavropol State Medical University',
        slug: 'stavropol-state-medical-university',
        image: '/images/universities/russia/Stavropol State Medical University.webp',
        description: 'A prominent medical university in Stavropol.',
        location: 'Stavropol, Russia',
        ranking: 'Top Tier',
        established: '1938',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,40,000 / Year', hostel: '₹24,000 / Year', total: '₹21,84,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'vitebsk-state',
        name: 'Vitebsk State Medical University (Russia Campus)',
        slug: 'vitebsk-state-medical-university-russia',
        image: '/images/universities/russia/Vitebsk State Medical University (Russia Campus).jfif',
        description: 'The Russian campus of Vitebsk State Medical University.',
        location: 'Russia',
        ranking: 'International Ranking',
        established: '1934',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,60,000 / Year', hostel: '₹18,000 / Year', total: '₹22,68,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'belgorod-state',
        name: 'Belgorod State National Research University',
        slug: 'belgorod-state-national-research-university',
        image: '/images/universities/russia/Belgorod State National Research University.jpg',
        description: 'A leading research university in Belgorod.',
        location: 'Belgorod, Russia',
        ranking: 'National Research',
        established: '1876',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹4,20,000 / Year', hostel: '₹20,000 / Year', total: '₹26,40,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'kursk-state',
        name: 'Kursk State Medical University',
        slug: 'kursk-state-medical-university',
        image: '/images/universities/russia/Kursk-State-Medical-University-1.webp',
        description: 'Kursk State Medical University is ranked as one of the top 10 best Russian Medical Universities. This University was established in 1935.',
        location: 'Kursk, Russia',
        ranking: 'Top 10 in Russia',
        established: '1935',
        medium: 'English',
        duration: '6 years (with internship)',
        fees: { tuition: '₹3,80,000 / Year', hostel: '₹30,000 / Year', total: '₹24,60,000 (Approx. 6 Years)' },
        overview: `Kursk State Medical University is ranked as one of the top 10 best Russian Medical Universities. This University was established in 1935. It was the first University to offer students a full medical training program in the English medium in Russia.

The University is recognised by several global statutory bodies such as ECFMG, WDOMS, FAIMER, MCI (NMC), AMC, GMC PLAB, etc. It is one of the top choices for studying MBBS in Russia. With over 7000 students studying currently, the university provides top-quality education to over a thousands of international students from all over the world. The university has awarded many graduated students so far including 17,650 physicians at the medical faculty.

The mission and vision of the University is to provide knowledge about human health, health care practice improvement, and medical science department. Teachers, students, graduates, post graduates, interns and doctors are a part of the intellectual, professional and cultural elite.

Quick Facts About Kursk State Medical University:
- University Recognitions: ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI), AMC, GMC PLAB, etc
- Medium of Teaching: English
- MBBS Course Duration: 6 years (with internship)
- Intake Period: September

Faculties At Kursk State Medical University:
- Faculty of General Medicine
- Faculty of Pediatrics
- Faculty of Preventive Medicine
- Faculty of Stomatology/Dentistry
- Faculty of Nursing Education
- Faculty of Pharmacy

Eligibility Criteria:
- The student should have qualified class 10 and 12 from any recognised education board/institution.
- The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject).
- The student must be of 17 years of age.
- The student should qualify the NEET-UG exam with the required marks (50th percentile for General/EWS, 45th for PwD, 40th for SC/ST/OBC).
- The students must possess a valid NEET Score card.`,
        whyStudy: [
          'Kursk State Medical University provides an MBBS program at affordable cost.',
          'The University has an easy admission procedure.',
          'The admission requires no donation fees and extra charges for the admission process.',
          'The medical degree at Kursk State Medical University is globally recognised.',
          'Students get training from highly qualified teachers with modern technology.',
          'The University provides fully furnished hostels to all its students.',
          'Transparent fee structure with no hidden costs.'
        ],
        admissionProcess: [
          'Fill in the admission Form.',
          'Submit it after attaching all the required documents.',
          'Receive the admission/acceptance letter from the university.',
          'Apply for the Student Visa.',
          'Prepare & travel to your university.',
          'Complete the formalities at the university.',
          'Full assistance provided by Rus Education team at every step.'
        ],
        documentsRequired: [
          'Class 10th and 12th mark sheets and certificates',
          'NEET score card',
          'Valid passport',
          'Passport-size photographs',
          'Birth certificate',
          'Medical reports including HIV test report'
        ],
        hostelFacility: `Kursk State Medical University has more than 500 indian students. From arts events to sports events, Kursk State Medical University is a center for innovation and culture. There are various vibrant societies through which students can make new pals. There are 6 hostels for all the students. Out of these hostels, 3 modern hostels are available to international students. The university has various clubs in which the students can participate to explore their interests and pursue their passion.

City at a Glance:
The Kursk Region is located in the central part of the Eastern European Plain and is landlocked by 6 countries. The region is home to eight specially protected natural areas, including the Alyokhin Central Chernozem State Biosphere Reserve and seven natural landmarks. Kursk has many monuments commemorating the Battle of Kursk and other battles of the Great Patriotic War. Exquisite sites include the Kursk Regional Museum of Local History, Deineka Picture Gallery, Boyeva Dacha Park, and the Victory Memorial complex.`,
        gallery: []
      },
      {
        id: 'penza-state',
        name: 'Penza State University',
        slug: 'penza-state-university',
        image: '/images/universities/russia/Penza State University.jfif',
        description: 'One of the largest universities in the Penza region.',
        location: 'Penza, Russia',
        ranking: 'State Ranking',
        established: '1943',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,10,000 / Year', hostel: '₹25,000 / Year', total: '₹20,10,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      }
    ]
  },
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    slug: 'kyrgyzstan',
    flag: '/flag-kyrgyzstan.png',
    image: '/images/countries/kyrgyzstan.png',
    description: 'The most economical destination for MBBS with thousands of Indian students currently enrolled.',
    startingPrice: '₹12 Lakhs',
    uniCount: 6,
    universities: [
      {
        id: 'asian-medical-institute',
        name: 'Asian Medical Institute',
        slug: 'asian-medical-institute',
        image: '/images/universities/Kyrgyzstan/Asian-Medical-Institute.webp',
        description: 'A leading private medical institution in Kant, Kyrgyzstan, offering high-quality medical education with a focus on clinical practice.',
        location: 'Kant, Kyrgyzstan',
        ranking: 'Top Private Institute',
        established: '2004',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 3,500 / Year',
          hostel: 'USD 600 / Year',
          mess: 'USD 1,200 / Year',
          medicalVisa: 'USD 250 / Year',
          total: '₹14 Lakhs (Approx.)'
        },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'jalalabad-state-university',
        name: 'Jalalabad State University',
        slug: 'jalalabad-state-university',
        image: '/images/universities/Kyrgyzstan/Jalalabad-State-Medical-University.webp',
        description: 'One of the leading state medical universities in Kyrgyzstan, known for its affordable fee structure and quality education.',
        location: 'Jalalabad, Kyrgyzstan',
        ranking: 'State University',
        established: '1993',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 4,200 / Year',
          hostel: 'USD 600 / Year',
          mess: 'USD 1,200 / Year',
          medicalVisa: 'USD 250 / Year',
          total: '₹16 Lakhs (Approx.)'
        },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'osh-state-university-kyrgyz',
        name: 'Osh State University',
        slug: 'osh-state-university-kyrgyzstan',
        image: '/images/universities/Kyrgyzstan/Osh-State-University.webp',
        description: 'Osh State University is the largest public medical university of the Kyrgyz Republic, training foreign students since 1992.',
        location: 'Osh, Kyrgyzstan',
        ranking: 'Top Ranked in Kyrgyzstan',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$6,500 (1st Year), $4,000 (2nd-6th Year)',
          hostel: '$1,500 / Year (Compulsory Hostel & Mess)',
          total: '$26,500 (Total Package)'
        },
        overview: `Osh State University is a public medical university in Osh, Kyrgyzstan that has been training foreign students since 1992. Over 40,000 students study in this institute. Out of these, 3,000 have come from different countries such as India, Ukraine, China, and other counties. It is the largest university of the Kyrgyz Republic and ranked top by many ranking institutions.

The University is recognized with MCI (NMC), WHO and listed in the Avicenna Directory, International Medical Education Directory of FAIMER, and World Directory of Medical Schools.

Osh State University offers medical courses in both English as well as in Russia medium for students from India. At present, there are over 2800 students studying medicine in Osh as per records. There are nearly 250 faculty members and teachers involved in training these students. The university has tie-ups with several renowned & prestigious hospitals of Kyrgyzstan which help the students in getting valuable exposure to the latest technology used today and have a priceless experience in the field of medicine.

Faculties at Osh State University:
- Cardiology
- Dermatology
- Endocrinology
- Family Medicine
- General Medicine
- Gastroenterology
- Hematology
- Neurology
- Nephrology
- Psychiatry
- Psychotherapy
- Pulmonology
- Physiotherapy
- Radiology
- Infectious diseases`,
        whyStudy: [
          'Largest university of the Kyrgyz Republic with 40,000+ students.',
          'Over 30 years of experience in training international medical students.',
          'Recognized by MCI (NMC), WHO, FAIMER, and WDOMS.',
          'Clinical tie-ups with prestigious hospitals for hands-on experience.',
          'Comprehensive fee package that includes tuition, hostel, and insurance.',
          'Celebration of Indian festivals like Diwali, Holi, and Eid.',
          'Compulsory MCI (NMC) coaching provided for the complete duration.',
          'Cricket tournaments organized annually for international students.'
        ],
        admissionProcess: [
          'Fill in the application form and submit necessary documents.',
          'Receive the admission/acceptance letter from the university.',
          'MCI (NMC) coaching for the complete duration of the course is provided.',
          'Documentation of the student in the university and translator services included.',
          'Airport transfer to the university and phone call to parents on arrival.',
          'Study material provided in English Language.'
        ],
        documentsRequired: [
          'Class 10th pass certificate and mark sheet',
          'Class 12th pass certificate and mark sheet',
          'NEET score card',
          'Valid passport',
          'Passport-size photographs',
          'Medical test report including HIV negative report.'
        ],
        hostelFacility: `The University has 9 hostels and all hostel rooms are fully furnished. One room can be shared between 2-3 Students. Facilities like air conditioner, attached bathroom, color T.V., telephone, and bed with required amenities and furniture, hot drinking water heater, refrigerator, public laundry and kitchen, internet access are easily accessible. Cricket Tournament is organized every year in April for international students. All the hostels are under protection of the police 24*7. Indian festivals such as Eid, Diwali, Holi, Navroz are celebrated in the University with full fervor.`,
        gallery: []
      },
      {
        id: 'international-school-of-medicine',
        name: 'International School of Medicine',
        slug: 'international-school-of-medicine',
        image: '/images/universities/Kyrgyzstan/International-School-of-Medicine.webp',
        description: 'A premier international medical school in Bishkek, Kyrgyzstan, recognized globally for its high standards of medical education.',
        location: 'Bishkek, Kyrgyzstan',
        ranking: 'Globally Recognized',
        established: '2003',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 4,500 / Year',
          hostel: 'USD 600 / Year',
          mess: 'USD 1,200 / Year',
          medicalVisa: 'USD 250 / Year',
          total: '₹18 Lakhs (Approx.)'
        },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'kyrgyz-state-medical-academy',
        name: 'Kyrgyz State Medical Academy',
        slug: 'kyrgyz-state-medical-academy',
        image: '/images/universities/Kyrgyzstan/Kyrgyz-State-Medical-Academy.webp',
        description: 'The oldest and most prestigious state medical academy in Kyrgyzstan, located in Bishkek.',
        location: 'Bishkek, Kyrgyzstan',
        ranking: 'Oldest & Most Prestigious',
        established: '1939',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 4,200 / Year',
          hostel: 'USD 600 / Year',
          mess: 'USD 1,200 / Year',
          medicalVisa: 'USD 250 / Year',
          total: '₹16 Lakhs (Approx.)'
        },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'kyrgyz-russian-slavic-university',
        name: 'Kyrgyz-Russian Slavic University',
        slug: 'kyrgyz-russian-slavic-university',
        image: '/images/universities/Kyrgyzstan/Kyrgyz-Russian-Slavic-University.webp',
        description: 'A joint university established by Kyrgyzstan and Russia, known for its high educational quality and scientific research.',
        location: 'Bishkek, Kyrgyzstan',
        ranking: 'Top Joint University',
        established: '1993',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 3,800 / Year',
          hostel: 'USD 600 / Year',
          mess: 'USD 1,200 / Year',
          medicalVisa: 'USD 250 / Year',
          total: '₹15 Lakhs (Approx.)'
        },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      }
    ]
  },
  {
    id: 'georgia',
    name: 'Georgia',
    slug: 'georgia',
    flag: '/flag-uk.png',
    image: '/images/universities/Georgia/Georgia-3.webp',
    description: 'Georgia offers European standard medical education with a 100% English medium curriculum and high safety standards.',
    startingPrice: '₹25 Lakhs',
    uniCount: 14,
    universities: [
      {
        id: 'tbilisi-state',
        name: 'Tbilisi State Medical University',
        slug: 'tbilisi-state-medical-university',
        image: '/images/universities/Georgia/tbilist-state-medical-university-thumbnail.jpg',
        description: 'The largest and most respected medical university in Georgia and Eastern Europe.',
        location: 'Tbilisi, Georgia',
        ranking: '8th in Georgia',
        established: '1918',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$8,000 / Year',
          hostel: '$2,500 / Year',
          total: '₹35 Lakhs (Approx.)'
        },
        overview: `Tbilisi State Medical University was founded in 1918. It is one of the largest medical universities in Georgia which is officially recognized by WHO, MCI, Educational Commission for Foreign Medical Graduates (ECFMG), World Federation of Medical Education and European Commission for Education.

The university is 8th ranked among the higher-education institution in Georgia. Every year large number of students take admission in the university; presently there are around 7000+ undergraduate and 3000 post graduates in which almost 25% are foreign students.

The University provides a wide range of diplomatic, graduate and post-graduate courses with worldwide recognized degrees. The university also offers opportunities for self-development to equip knowledge and skills necessary. It focuses on continuous improvement in teaching, learning, and research & management quality. It has modern infrastructure and healthy environment which promotes learning, development and active participation of students.

Faculties:
- FACULTY OF MEDICINE
- FACULTY OF DENTISTRY
- FACULTY OF PHARMACY
- FACULTY OF PUBLIC HEALTH
- FACULTY OF PHYSICAL MEDICINE AND REHABILITATION
- FACULTY OF NURSING`,
        whyStudy: [
          'Officially recognized by WHO, MCI, ECFMG, and WFME',
          '8th ranked higher-education institution in Georgia',
          'Modern infrastructure and healthy learning environment',
          'Continuous improvement in teaching and research quality',
          'Worldwide recognized degrees'
        ],
        admissionProcess: [
          'Document evaluation',
          'Skype interview (sometimes)',
          'Minister of Education approval',
          'Visa issuance'
        ],
        documentsRequired: [
          '12th Marks (Min 50% in PCB)',
          'Passport Copy',
          'Power of Attorney',
          'NEET Result'
        ],
        hostelFacility: `The University encourages the students to participate in extracurricular activities for their enhancing their exposure and build an accomplished personality. It has many clubs and organizations like – sports club, cultural club, art center etc. It also offers student exchange programs and projects. The university tries to offer all the possibilities that will help students to develop their potential and relish their experience.`,
        gallery: [
          'https://images.unsplash.com/photo-1503917988258-f19a78a44293?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 'caucasus-international',
        name: 'Caucasus International University',
        slug: 'caucasus-international-university',
        image: '/images/universities/Georgia/Caucasus-International-University.webp',
        description: 'Established in 1998. Formerly it was known as LLC Caucasus International University and granted International Quality Accreditation.',
        location: 'Tbilisi, Georgia',
        ranking: 'Quality Accreditation by CEEMAN',
        established: '1998',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Caucasus International University is an accredited Higher Educational Institute, established in 1998. Formerly it was known as LLC Caucasus International University and granted International Quality Accreditation by the Central and Eastern European Management Development Association (CEEMAN) and also registered under MCI.

The university’s curriculum also includes extensive participation of students in international programs and conferences to give them the exposure of the real world problems. Many professional experience programs and exchange programs were offered with engaging teaching methods for the students. The programs are delivered by internationally qualified lecturers and specialists providing quality education which prepares the students as highly-qualified specialists in various spheres.

The university consists of various schools - Business, Law, Media, Technology, Humanities and Social Sciences, Governance, Tourism, Medicine and HealthCare, New Cinema and Economics Schools. It awards the students with universally recognized degrees- bachelors, masters and PhD.

The university has very good relations with many top American, Asian and European universities. Students get many good opportunities to participate in two way exchange programs.`,
        whyStudy: [
          'International Quality Accreditation by CEEMAN',
          'Extensive participation in international programs and conferences',
          'Professional experience and exchange programs',
          'Internationally qualified lecturers and specialists',
          'Universal recognition of degrees (Bachelors, Masters, PhD)'
        ],
        admissionProcess: [
          'Submit application and documents',
          'Ministry approval',
          'Visa processing',
          'University registration'
        ],
        documentsRequired: [
          '10th & 12th Marksheets',
          'Passport Copy',
          'NEET Scorecard',
          'Passport size photos'
        ],
        hostelFacility: `The university offers quality education with a great experience. The students are exposed to the Georgian culture. Many unique activities and programs were organized outside the classrooms to improve their creative skills also. It aims to make students self-governing bodies and enable them to indulge in the various activities around the campus. The university tries to offer all the possibilities, that will help students to develop their potential and enjoy the experience. The atmosphere inside the campus is very healthy and conducive for studies.`,
        gallery: []
      },
      {
        id: 'tbilisi-medical-hippocrates',
        name: 'Tbilisi Medical University Hippocrates',
        slug: 'tbilisi-medical-university-hippocrates',
        image: '/images/universities/Georgia/tbilisi-medical-university-hippocrates.webp',
        description: 'The University is equipped with modern technologies, laboratories with new equipment and instruments, clinics etc.',
        location: 'Tbilisi, Georgia',
        ranking: 'Bologna Process Member',
        established: '2003',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Tbilisi Medical Teaching University Hippocrates was established in 2003, as an authorized and accredited Higher Education Institution. It is officially recognized by WHO, MCI. World Higher Education Database (WHED), Bologna Process Member Countries (European Union, United Kingdom, Ukraine, Turkey etc.) and the Higher Education Council of Turkey. Moreover, it has a membership with AMEE and The Association of Medical Schools in Europe.

The University is equipped with modern technologies, laboratories with new equipment and instruments, clinics etc. It focuses on intensive clinical teaching and good interaction with the students to always help them. Practical pedagogy is the teaching and an important research pillar of the university. It aims to provide active individual assistance, so that the students get trained to be able to make a quick decision while practicing medicine professionally, and can save the patient.

Faculties:
- FACULTY OF MEDICINE
- FACULTY OF DENTAL MEDICINE
- FACULTY OF PHARMACY
- FACULTY OF PUBLIC HEALTH`,
        whyStudy: [
          'Officially recognized by WHO, MCI, and Bologna Process countries',
          'Equipped with modern technologies and laboratories',
          'Focus on intensive clinical teaching',
          'Practical pedagogy and individual assistance',
          'Membership with AMEE and Association of Medical Schools in Europe'
        ],
        admissionProcess: [
          'Apply online with documents',
          'Receive invitation letter',
          'Ministry of Education verification',
          'Visa application'
        ],
        documentsRequired: [
          'Class 12th Certificate',
          'Passport copy',
          'NEET Qualification',
          'Medical certificate'
        ],
        hostelFacility: `The University doesn’t have any accommodation facility, so it helps the students to find an appropriate accommodation which is secure and budget friendly. For transportation facility, the university students get 40% discount for all public transport.

The university offers many extra-curricular activities for student’s self-development. It has many clubs and organizations like – sports club, cultural club, art center etc. Moreover, foreign students have the opportunity to be elected in the student governing councils, which is a representative body of the students at the university.

Foreign students also learn Georgian language considering the fact that in everyday life and studies in Georgia; they might require certain level of proficiency in Georgian language. So, the university offers affordable price for courses in the Georgian language, Georgian history and culture.`,
        gallery: []
      },
      {
        id: 'david-tvildiani',
        name: 'David Tvildiani Medical University',
        slug: 'david-tvildiani-medical-university',
        image: '/images/universities/Georgia/david-tvildiani-medical-university.webp',
        description: 'The university offers quality higher education and the best international experience in medicine.',
        location: 'Tbilisi, Georgia',
        ranking: 'USMLE Focused',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `David Tvildiani Medical University is functioning since 1992-93 offering Higher Education especially in the field of medicine. It is officially recognized by MCI & enlisted with WDOMS.

The university offers quality higher education and the best international experience in medicine. It focuses on continuous improvement in teaching, learning, research & management quality. It has a modern infrastructure and healthy environment which promotes learning, development and active participation of students.

The university has 476 graduates and currently, there are 884 Georgian and foreign students studying diploma in medicine, a diploma in medical and e-PD and doctoral programs. Around 271 employees are facilitating academic, administrative, other teaching and research at the university. There are 7 departments: 5 combines 39 disciplines (directions) to cover 74 courses in different modes to deliver training in scientific-research and clinical skills of departments.

Moreover, students are offered free coaching for clearing USMLE screening test. In addition to free training courses, David Tvildiani Medical University gives its students the opportunity to get the necessary university financing.`,
        whyStudy: [
          'Officially recognized by MCI and enlisted with WDOMS',
          'Free coaching for clearing USMLE screening test',
          'Modern infrastructure and healthy study environment',
          'Opportunity for university financing for students',
          'High graduation and success rates'
        ],
        admissionProcess: [
          'Registration and document submission',
          'Invitation letter',
          'Ministry of Education approval',
          'Visa and travel arrangements'
        ],
        documentsRequired: [
          '10th & 12th Marksheets',
          'Passport',
          'NEET Result',
          'Photographs'
        ],
        hostelFacility: `The university has 4 hostels, separate for girls and boys with all basic amenities and ensures a study conducive environment for the students. It includes accommodation, free high-speed Internet, television, study room, gaming section, etc. It has a rich culture oriented cafeteria which serves a different type of food- Chinese, Italian, Indian, etc.

The University makes students experience unique in the activities and programs organized within the university premises. It facilitates the formation of student councils, to enable them and govern themselves thereby giving them the opportunity to indulge in various activities within the campus.`,
        gallery: []
      },
      {
        id: 'david-agmashenebeli',
        name: 'David Agmashenebeli University Of Georgia',
        slug: 'david-agmashenebeli-university-of-georgia',
        image: '/images/universities/Georgia/david-agmashenebeli-university-of-georgia-1.webp',
        description: 'The university has modern infrastructure, conference hall, educational audiences, computer centres, sports halls, press club, library and First Aid Training...',
        location: 'Tbilisi, Georgia',
        ranking: 'Modern Infrastructure',
        established: '1991',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `David Agmashenebeli University of Georgia (DAUG) was founded in 1992. It has been established as an educational and scientific hub of international standards, which offers quality education. It aims to develop the personality of every - personally and professionally to prepare them for highly competitive and modern competencies.

The university has modern infrastructure, conference hall, educational audiences, computer centres, sports halls, press club, library and First Aid Training Center. There are highly qualified professors which offer theoretical as well as practical knowledge. The centres are fully equipped with modern technologies for the development of student’s practical skills and to enhance their knowledge.

The aim of the Medical school is to provide higher education through modern educational programs. The graduate is entitled to work with a person with the right to independent medical practice, to engage in pedagogical and scientific research activities, continue his studies in doctoral studies or complete the course of residency and complete his / her unified state examination.

This would allow the students to perform his professional activities, recognized by the Council of Destination Country by taking into consideration medical standards and ethical norms, medical practice, to serve the dignity of human health.`,
        whyStudy: [
          'Educational and scientific hub of international standards',
          'Modern infrastructure including First Aid Training Center',
          'Highly qualified professors and modern educational programs',
          'Preparation for highly competitive and modern competencies',
          'Recognized medical practice rights globally'
        ],
        admissionProcess: [
          'Application submission',
          'Interview/Verification',
          'Admission letter',
          'Visa processing'
        ],
        documentsRequired: [
          '12th Certificate',
          'NEET Scorecard',
          'Passport Copy',
          'Birth Certificate'
        ],
        hostelFacility: `The atmosphere of the university is very healthy and enjoyable. It offers various sports activities to the enrolled students like – volleyball, chess, basketball, table-tennis, etc. Students actively participate in all sports events organized by the University. It also organizes exhibitions, art competitions and cultural events which include Georgian theatre, cinema, music and choreography. The university has a library which has around 20,000 manuals with magazines and newspapers.`,
        gallery: []
      },
      {
        id: 'akaki-tsereteli',
        name: 'Akaki Tsereteli State University',
        slug: 'akaki-tsereteli-state-university',
        image: '/images/universities/Georgia/Akaki-Tsereteli-State-University.webp',
        description: 'The University is a diverse higher education organization that carries out academic and professional programs and is operated in active...',
        location: 'Kutaisi, Georgia',
        ranking: 'Diverse Higher Ed',
        established: '1933',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Akaki Tsereteli State University was established in 1930 and now it is one of the toppest educational institutions in Georgia. Due to its high level of scientific research, training and institutions it has gained universal recognition. It was formed after the annulment of the Tbilisi State University.

The University is a diverse higher education organization that carries out academic and professional programs and is operated in active research activities. It follows the traditions of Phase and Gelati academics, principles of “Great Charter of Universities” and national & European standards of Higher Education. It aspires to offer students a high-quality education and research activities to help them in developing their personalities, grow professionally as leaders.

The University aims to always contribute towards the development of the country and recognize its responsibility towards the people. It desires to offer education programs and services throughout in order to create a source of refined knowledge to engage various people in the form of public policy formation.

Faculty of Medicine is one of the youngest faculties in the university founded in 1995. It offers various academic programs, joint programs and various curriculum activities. In 2014, it became the member of AMEE- Medical Education Association and in 2015 it got listed in WHO, and International Medical Education Catalog- IMED.

In the faculty of Medicine, there are 8 professors, 15 associate professors, 8 assistant professors in which various experts and consultants of different international organizations are included.`,
        whyStudy: [
          'Universal recognition for scientific research and training',
          'Follows national and European standards of Higher Education',
          'Member of AMEE and listed in WHO/IMED',
          'Diverse higher education organization',
          'Highly qualified faculty including international experts'
        ],
        admissionProcess: [
          'Registration on university portal',
          'Document verification',
          'Admission confirmation',
          'Visa issuance'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Result',
          'Medical clearance'
        ],
        hostelFacility: `The University makes students experience unique through the activities and programs organized by them. It aims to make students self-government to benefit the opportunity to indulge in the various activities within the campus.

The University does not provide any on-campus accommodation facility; it offers assistance to the students in finding a suitable accommodation close to the university.`,
        gallery: []
      },
      {
        id: 'aieti-medical-school',
        name: 'AIETI Medical School',
        slug: 'aieti-medical-school',
        image: '/images/universities/Georgia/AIETI-Medical-School.webp',
        description: '“AIETI” Medical School came into its existence to provide high-quality medical education in Georgia.',
        location: 'Tbilisi, Georgia',
        ranking: 'High Quality Ed',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `“AIETI” Medical School came into its existence in the year 1992. It was founded by Dr. Dimitri Tvidiani and Dr. David Tvildiani. This Medical School is a branch of David Tvildiani Medical University. AIETI Medical School is known to be the first non-governmental higher educational medical center in Georgia which serves its students in English language.

AIETI Medical School has been upgraded by the National Authorization Council to the status of the University and from 2011 is named after its founder and the first rector as “David Tvildiani Medical University”.

AIETI Medical School is recognized by the WHO and listed in “World Directory of Medical Schools” in thr year 1995. The diploma from this medical school has been authorized by the Asia, different countries of Europe, and Medical Examination Committees of the USA. It is listed under universities of abroad study in the Medical Council of India.`,
        whyStudy: [
          'First non-governmental medical school in Georgia',
          'Branch of David Tvildiani Medical University',
          'Recognized by WHO and listed in WDOMS since 1995',
          'Authorized by European and US Medical Examination Committees',
          'Listed under MCI for medical study abroad'
        ],
        admissionProcess: [
          'Online application',
          'Document evaluation',
          'Acceptance letter',
          'Visa processing'
        ],
        documentsRequired: [
          'Passport copy',
          '12th Marksheet',
          'NEET Qualification',
          'Photographs'
        ],
        hostelFacility: `There are hostel facilities for the international students. The hostel is safe and is under surveillance 24*7. Within the hostel, there are various facilities such as free gas, electricity, water. The rooms are centrally heated as per government norms. Furniture and bedding in rooms is provided by the hostel staff. There is a Student Cafeteria within the University.

The campus has a friendly and healthy environment. Other than studies, there are various sports events and cultural festivals.`,
        gallery: []
      },
      {
        id: 'batumi-shota-rustaveli',
        name: 'Batumi Shota Rustaveli State University',
        slug: 'batumi-shota-rustaveli-state-university',
        image: '/images/universities/Georgia/batumi-shota-rustaveli-state-university.webp',
        description: 'One of the oldest and most prestigious universities in Batumi, offering medical courses to international students.',
        location: 'Batumi, Georgia',
        ranking: 'Prestigious State University',
        established: '1923',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Batumi Shota Rustaveli State University is located in Batumi, capital of the Autonomous Republic of Adjara. Georgia. This University was founded on the basis of Batumi Pedagogical Institute and with the advent of time courses in masters and bachelors were started.

At present, there are around 6,000 students pursuing various courses in Bachelor, Master and Doctoral programs from this University. The university is recognized by MCI, WHO, UNESCO etc. Modern teachings methodologies includes online learning which is widely used here.

Batumi Shota Rustaveli State University has maintained close partnership relations with the leading higher educational institutions within and outside the country. BSRSU is one of the most desirable hosts for organizing the international scientific conferences and symposia held in various fields of science. The academic and scientific faculty of the university actively participate in scientific conferences and exchange programs in different universities around the world.

Departments:
- Department of Chemistry
- Department of Dentistry
- Department of Basic Medicine
- Department of Biology
- Department of Clinical Surgery
- Department of Clinical Therapy
- Department of Geography
- Department of Pharmaceutical Sciences`,
        whyStudy: [
          'Recognized by MCI, WHO, and UNESCO',
          'Modern teaching methodologies including online learning',
          'Close partnership with leading international institutions',
          'Desirable host for international scientific conferences',
          'Active participation in global exchange programs'
        ],
        admissionProcess: [
          'Registration and documents',
          'Interview (if required)',
          'Ministry approval',
          'Visa stamping'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Result',
          'Medical health certificate'
        ],
        hostelFacility: `Batumi Shota Rustaveli State University provides a friendly and healthy environment to the students. The campus is fulfilled with all the basic need and facilities. The university provides scholarship programs to the students depending upon their academic record. The campus of the university has well-equipped hostels with all the facilities like hot water supply, heating, air conditioning, internet access, laundry etc.

The food available in the college canteen is very hygienic and healthy. The university campus has a big library where students can easily access the reading material and their academic books. The campus has many other activity centres like gym, swimming pool, sports complex etc. The security system of the university is very good with 24*7 security guards.`,
        gallery: []
      },
      {
        id: 'geomedi-medical',
        name: 'Geomedi Medical University',
        slug: 'geomedi-medical-university',
        image: '/images/universities/Georgia/geomedi-medical-university.webp',
        description: 'GMU is collaborated with the leading medical institutions worldwide and provides high standard medical education.',
        location: 'Tbilisi, Georgia',
        ranking: 'Global Collaborations',
        established: '1998',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Geomedi Medical University is one of the top medical universities of Georgia. The university was established in 1998 by Dr. Marina Pirtskhalava. The main focus of the university is on the quality of education provided to the students. The students from various countries such as Bangladesh, China, India, Nepal, China, etc. are pursuing their MBBS degree from Geomedi Medical University.

GMU is collaborated with the leading universities of various countries. The students of GMU are encouraged to participate in different activities such as student exchange programs, professional and education training etc. The learning is not just limited to the classrooms, rather the students are provided with clinical researches, practical training programs, and much more.

Geomedi Medical University is registered under the Georgian National Educational Accreditation Centre (currently the National Center for Educational Quality Enhancement) and is also recognized by Educational Commission of Foreign Medical Graduates (ECFMG), Foundation for Advancement of International Medical Education and Research (FAIMER), Medical Council of India (MCI), World Health Organization (WHO), and World Federation of Medical Education (WFME).

Faculties:
- Medicine
- Dentistry
- Health Care Economics and Management
- Physical Medicine and Rehabilitation`,
        whyStudy: [
          'Collaborated with leading international universities',
          'Focus on quality education and clinical research',
          'Encouragement for student exchange and professional training',
          'Recognized by WHO, MCI, ECFMG, and FAIMER',
          'Practical training programs beyond classrooms'
        ],
        admissionProcess: [
          'Fill application form',
          'Submit documentation',
          'Admission letter issuance',
          'Visa application'
        ],
        documentsRequired: [
          'Passport Copy',
          '12th Marksheet',
          'NEET Result',
          'Photographs'
        ],
        hostelFacility: `GMU provides a very healthy environment with the best facilities for the international students. The hostels are well-equipped with all the basic facilities like water supply, heating, air conditioning, food, TV, internet service etc. Many cultural and activity centers are also available in the campus. The campus of GMU has a well-equipped library which has over 10,000 printed materials. The students and staff members can also access an e-Library which makes it feasible for the students to get the study material online.

Students in GMU can participate in different activities such as competitions, cultural festivals, excursions, scientific conferences, and scientific events. Sports facilities like basketball, football, tennis, volleyball, etc. are also available in the campus.`,
        gallery: []
      },
      {
        id: 'new-vision-university',
        name: 'New Vision University',
        slug: 'new-vision-university',
        image: '/images/universities/Georgia/New-Vision-University.webp',
        description: 'Established in the year 2013, New Vision University is a private non-profit university in Tbilisi, Georgia. The University is known...',
        location: 'Tbilisi, Georgia',
        ranking: 'Private Non-profit',
        established: '2013',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 7,000 (1st Year), USD 6,500 (2nd-5th Year)',
          hostel: 'USD 2,500 / Year (Hostel & Mess)',
          oneTime: 'USD 1,000',
          total: 'USD 36,500 (Total Course)'
        },
        overview: `Established in the year 2013, New Vision University is a private non-profit university in Tbilisi, Georgia. The University is known to be one of the fastest developing International Universities in the region.

The University has a distinguished faculty to clinical care, education, and research. A lot of scientific- research projects of international as well as national significance have been attained on the bases of University. NVU has close partnership relations with the leading higher medical institutions within and outside the country like in the UK Leeds University England.

Faculties:
- MD Program
- Medical Rehabilitation & Nursing Care
- Master Program in Medical Rehabilitation & Healthcare Management
- PHD in Medicine`,
        whyStudy: [
          'Distinguished faculty dedicated to clinical care and research',
          'Scientific-research projects of international significance',
          'Close partnership with Leeds University, England',
          'Fastest developing International University in the region',
          'Private non-profit status with a focus on student development'
        ],
        admissionProcess: [
          'Application through authorized representative',
          'Video interview (if required)',
          'Admission letter',
          'Visa processing'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Qualification',
          'Medical insurance'
        ],
        hostelFacility: `The European University facilitates the development of each student according to their interests and talents. This is the reason why the university has a band of young musicians, vocal and choreographic ensembles, club, volleyball, futsal and rugby teams, theatrical troupe, etc. Moreover, the University often organizes various additional types of non-invoice type and entertainment activities. The university have hostel within the campus. These hostel rooms are shared between 2 – 3 persons.`,
        gallery: []
      },
      {
        id: 'tbilisi-medical-academy',
        name: 'Tbilisi Medical Academy',
        slug: 'tbilisi-medical-academy',
        image: '/images/universities/Georgia/tbilisi-medical-academy-1.webp',
        description: 'The Petre Shotadze Tbilisi Medical Academy, also known as Tbilisi Medical Academy was founded in 1992 by remarkable Georgian physician,...',
        location: 'Tbilisi, Georgia',
        ranking: 'Historic Academy',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 6,500 / Year',
          hostel: 'USD 2,500 / Year (Hostel & Food)',
          total: 'USD 45,000 (Total Course)'
        },
        overview: `The Petre Shotadze Tbilisi Medical Academy, also known as Tbilisi Medical Academy was founded in 1992 by remarkable Georgian physician, pediatric surgeon, Petre Shotadze and after his demise in 1999, the academy was named after. Tbilisi Medical Academy is one of the oldest private institutions for higher medical education in Georgia. The University is also known as the best self-controlled institution which is been successfully taken forward by highly-qualified faculty staffs.

The university is recognized by all the major world's organizations like Association of Medical Education in Europe (AMEE), European Medical Students Association (EMSA), Foundation of Advancement of International Directory of Medical Education and Research (FAIMER), Medical Council of India (MCI) & World Health Organization (WHO).

Faculties:
- Faculty of Medicine
- Human Anatomy
- Physiology
- Pharmacology
- Radiology
- Pediatrics`,
        whyStudy: [
          'One of the oldest private medical institutions in Georgia',
          'Highly-qualified faculty staff',
          'Recognized by AMEE, EMSA, FAIMER, MCI, and WHO',
          'Best self-controlled institution in the region',
          'Focus on providing the best educational experience'
        ],
        admissionProcess: [
          'Submit application with documents',
          'Evaluation and interview',
          'Invitation letter',
          'Visa issuance'
        ],
        documentsRequired: [
          '12th mark sheet',
          'Passport copy',
          'NEET Result',
          'Birth certificate'
        ],
        hostelFacility: `Tbilisi Medical Academy believes that their students are their precious asset. Hence, they are providing with them the best educational experience. The students are been provided with every necessities and everyday needs like:

- A library (with over 2000 books and study material for students)
- Electricity
- Internet facility
- 24 hour hot water supply
- Separate study rooms
- Two kitchens with the modern gadgets

Also the students are provided well-equipped hostel and everything is facilities are been supplied at a very reasonable fee.`,
        gallery: []
      },
      {
        id: 'east-european-university',
        name: 'East European University',
        slug: 'east-european-university',
        image: '/images/universities/Georgia/East-European-University.webp',
        description: 'The University offers a global standard of education and fabricates student’s career by providing them with various opportunities. It has...',
        location: 'Tbilisi, Georgia',
        ranking: 'Global Standards',
        established: '2012',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 4,500 / Year',
          hostel: 'USD 2,500 / Year (Hostel + Food)',
          total: 'USD 35,000 (Total Course)'
        },
        overview: `East European University was established in 2012 at Tbilisi, Shatili Str. It is a private college which is authorized and accredited higher education institution by the Ministry of Education and Science of Georgia recognized worldwide.

The University offers a global standard of education and fabricates student's career by providing them with various opportunities. It has modern infrastructure, experienced professors and updated European education programs. It also offers scholarships to the students.

The degree awarded by the University is recognized worldwide and thus the students have bigger higher opportunities to get jobs all over the world. It organizes education conferences, debates, summer/winter schools and provides internships to the students all around the world so they get benefitted with global experience.

The East European University is considered one of the best universities in the world which offers the best facilities to the students and shaping their career in the right direction.

Faculties:
- Faculty of Pharmacy
- Faculty of Dentistry
- Faculty of Healing`,
        whyStudy: [
          'Authorized and accredited by the Ministry of Education and Science of Georgia',
          'Modern infrastructure and experienced professors',
          'Updated European education programs',
          'Worldwide recognition of awarded degrees',
          'International internships and summer/winter schools'
        ],
        admissionProcess: [
          'Online application',
          'Verification of transcripts',
          'Ministry registration',
          'Visa application'
        ],
        documentsRequired: [
          'Class 10th & 12th results',
          'Valid passport',
          'NEET Scorecard',
          'Medical report'
        ],
        hostelFacility: `The university organizes many extra-curricular activities like cultural, sports, and social activities for student’s self-development. It offers various kind of academic and personal help to nurture young talent. Students are offered with free medical services, preventive vaccinations and 20% discount on dental treatment.

The University provides furnished hostels, equipped with day to day basic facilities and free WIFI accessibility. It also offers Indian food, especially for the Indian Students.`,
        gallery: []
      },
      {
        id: 'university-of-georgia',
        name: 'University Of Georgia',
        slug: 'university-of-georgia-tbilisi',
        image: '/images/universities/Georgia/University-of-Georgia.webp',
        description: 'University of Georgia About University The University of Georgia was established in 2004 at Tbilisi, is a private college which...',
        location: 'Tbilisi, Georgia',
        ranking: '9th best in Georgia',
        established: '2004',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 5,500 (1st Year), USD 4,500 (2nd-5th Year)',
          hostel: 'USD 2,500 / Year (Hostel + Food)',
          total: 'USD 36,000 (Total Course)'
        },
        overview: `The University of Georgia was established in 2004 at Tbilisi, is a private college which is recognized worldwide as being a member of the Bologna Process. It ranks 9th as one of the best universities in Georgia. It is accredited by the Ministry of Education of Iran and officially listed in Medical Council of India (MCI).

The university offers quality education of global standards and focuses on developing & polishing young talents for the future. It enriches the students with creative skills through modern educative techniques. It has an excellent group of faculties, who are experts in their own respective fields and always there to help & guide students. The University of Georgia offers one of the best medical education in the world and offers versatile opportunities to the students for collaboration with other students, in renowned universities for enhancing their knowledge base.

Presently, the University has around 6000 students, which also include a large number of international students. It offers regular training to the students to improve their skills for a better career. To promote student employment, job fairs, conferences are held every year on campus where representatives of leading companies come and take part.

Faculties:
- Faculty of Pharmacy
- Faculty of Dentistry
- Faculty of Nursery
- Faculty of Medical Education`,
        whyStudy: [
          'Member of the Bologna Process and recognized worldwide',
          'Ranks 9th among the best universities in Georgia',
          'Accredited by the Ministry of Education of Iran and listed in MCI',
          'Quality education of global standards',
          'Versatile opportunities for international collaboration'
        ],
        admissionProcess: [
          'Application and documents',
          'Interview process',
          'Invitation letter',
          'Visa processing'
        ],
        documentsRequired: [
          '12th Marksheet',
          'Passport Copy',
          'NEET Result',
          'Birth Certificate'
        ],
        hostelFacility: `The university has students from all over the world, who hail from various culture and nationality. It has various student clubs which organizes many extra-curricular activities and promotes the idea of fitness, health and developing creative skills. It offers academic as well as personal help and guidance.

The University offers furnished hostels which are well-equipped with all the basic amenities having a good atmosphere. It primarily focuses on social and personal well-being.`,
        gallery: []
      },
      {
        id: 'georgian-american-university',
        name: 'Georgian American University',
        slug: 'georgian-american-university',
        image: '/images/universities/Georgia/Georgian-American-University.webp',
        description: 'It is authorized and accredited higher education institution by the Ministry of Education and Science of Georgia recognized worldwide. Moreover,...',
        location: 'Tbilisi, Georgia',
        ranking: 'Bologna Process Member',
        established: '2001',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 5,500 / Year',
          hostel: 'USD 2,500 / Year (Hostel + Food)',
          total: 'USD 40,000 (Total Course)'
        },
        overview: `Georgian American University was established in 2001 at Tbilisi. It is authorized and accredited higher education institution by the Ministry of Education and Science of Georgia recognized worldwide. Moreover, it is following the Bologna Process principles.

The University offers a quality education of international level in which all the academic programs are set by the Ministry of Education and Science. It focuses on fabricating student’s career by training them to acquire creative skills for their career. It builds a student’s personality and focuses on constructing them academically through theoretical as well as practical knowledge by providing them with various opportunities.

The motto of the University is to provide great doctors with a free-spirit for the future. The career services of the University are offering various internships and jobs to the students & graduates.

Faculties:
- School of Medicine Education`,
        whyStudy: [
          'Authorized and accredited by the Ministry of Education and Science of Georgia',
          'Follows the Bologna Process principles',
          'Quality education of international level',
          'Focus on fabricating student’s career with creative skills',
          'Career services offering internships and jobs'
        ],
        admissionProcess: [
          'Online registration',
          'Document evaluation',
          'Acceptance letter',
          'Visa application'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Result',
          'Medical clearance'
        ],
        hostelFacility: `The university provides best academic experience to the students. Students from all over the world take admission in the University of different Nationalism and Cultures. Students get to know about each other’s cultures and customs.

The university provides well-equipped hostels with basic needs and a secure environment. The students are offered with a library, computer labs, information center and medical facilities. It also offers Indian food, especially for the Indian Students.`,
        gallery: []
      }
    ]
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    slug: 'kazakhstan',
    flag: '/kazakhstan.png',
    image: '/images/universities/Kazakhstan/hero.webp',
    description: 'Kazakhstan is known for its short 5-year MBBS program and very affordable cost of living.',
    startingPrice: '₹18 Lakhs',
    uniCount: 8,
    universities: [
      {
        id: 'south-kazakhstan-medical-academy',
        name: 'South Kazakhstan Medical Academy',
        slug: 'south-kazakhstan-medical-academy',
        image: '/images/universities/Kazakhstan/south-kazakhstan-medical-academy.webp',
        description: 'South Kazakhstan Medical Academy (SKMA) was established in 1979. It is accredited and officially recognized by the Ministry of Education and Science.',
        location: 'Shymkent, Kazakhstan',
        ranking: 'Top Medical Academy',
        established: '1979',
        medium: 'English',
        duration: '5 Years',
        fees: {
          tuition: '$4,200 / Year',
          hostel: '$800 / Year',
          total: '$26,200 (Total Course)'
        },
        overview: `South Kazakhstan Medical Academy (SKMA) was established in 1979. It is accredited and officially recognized by the Ministry of Education and Science of the Republic of Kazakhstan.

The University has a modern infrastructure for educational and scientific activities. It always looks forward to developing a modern foundation to strengthen the material and technical resources for scientific research laboratories.

SKMA is a brilliant medical school, which aims to offer high quality of medical and pharmaceutical education to the students at all levels. The teaching staff always tries to update and upgrade themselves to provide the best knowledge and skills to the students; to do so clinical activities are organized for teaching staff as well. The University organizes educational programs for the students to provide them with the environment for their professional growth and provide knowledge to them about the modern terms in the market.

Faculties:
- Faculty of General Medicine
- Faculty Of Pharmacy
- Faculty Of Nursing
- Faculty Of Public Health`,
        whyStudy: [
          'Accredited and officially recognized by the Ministry of Education and Science',
          'Modern infrastructure for educational and scientific activities',
          'High quality of medical and pharmaceutical education at all levels',
          'Professional growth environment with focus on modern market terms',
          'Clinical activities organized for teaching staff to ensure updated knowledge'
        ],
        admissionProcess: [
          'Document evaluation',
          'Ministry approval',
          'Admission letter',
          'Visa issuance'
        ],
        documentsRequired: [
          '10th & 12th Marksheets',
          'Passport Copy',
          'NEET Scorecard',
          'Passport size photos'
        ],
        hostelFacility: `The University has a friendly and multi-culture environment. There are many clubs which are headed by students themselves and it organizes various cultural events. In SKMA, the educational quality matches the international level. The students are offered to participate in various activities like seminars, conferences, projects etc to enhance their exposure towards modern developments of medicine world. The University fulfills the basic amenities necessary for the students to study in a convivial environment. The hostel is guarded round the clock and is under constant camera surveillance. There is a well-equipped library for the students.`,
        gallery: []
      },
      {
        id: 'shymkent-state-medical-university',
        name: 'Shymkent State Medical University',
        slug: 'shymkent-state-medical-university',
        image: '/images/universities/Kazakhstan/shymkent-state-medical-university.webp',
        description: 'Shymkent State Medical University is a Kazakh Government Research University promoting clinical care, education, and research.',
        location: 'Shymkent, Kazakhstan',
        ranking: 'Government Research University',
        established: '1979',
        medium: 'English',
        duration: '5 Years',
        fees: {
          tuition: '$3,600 / Year',
          hostel: '$600 / Year',
          total: '$28,000 (Total Course)'
        },
        overview: `Shymkent State Medical University is located in Shymkent. The University is Kazakh Government Research University. This University promotes clinical care, education, as well as research. The university has a considerable and outstanding faculty. Since the establishment of the University, over 11,000 students have taken admissions in the medical universities and provide the best medical education. The faculty and staff of the University is highly-qualified.

Shymkent, a city of South Kazakhstan is situated in the Valley of Sayram River at the foothills of Ugam range. Shymkent has the population of about 647,000. It is considered as one of the populated cities of Kazakhstan. Shymkent is the third largest city of Kazakhstan, as well as the essential railway junction.

Shymkent State Medical University is one of the world-class medical universities and has earned top position in the list of medical universities all across the globe.`,
        whyStudy: [
          'Kazakh Government Research University',
          'Promotes clinical care, education, and research',
          'Considerable and outstanding faculty',
          'World-class medical university with top global ranking',
          'Located in the third largest city of Kazakhstan with rich surroundings'
        ],
        admissionProcess: [
          'Application submission',
          'Document verification',
          'Admission confirmation',
          'Visa processing'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Result',
          'Medical health certificate'
        ],
        hostelFacility: `Shymkent State Medical University has the perfect surroundings for studies as well as leisure. There is an Extra Curricular Department which includes soccer, volleyball, basketball, power lifting, chess, and mountain climbing classes. Both the staff and the students have the opportunity to spend their summer vacations there. Within the campus, there is a gym, and swimming pool for students as well as faculty members. There is a spacious library with over 10,000 books.`,
        gallery: []
      },
      {
        id: 'kazakh-russian-medical-university',
        name: 'Kazakh Russian Medical University',
        slug: 'kazakh-russian-medical-university',
        image: '/images/universities/Kazakhstan/kazakh-russian-medical-university.webp',
        description: 'Kazakh Russian Medical University is one of the top private colleges in the Republic of Kazakhstan, established in 1992.',
        location: 'Almaty, Kazakhstan',
        ranking: 'Top Private College',
        established: '1992',
        medium: 'English',
        duration: '5 Years',
        fees: {
          tuition: '$4,500 / Year',
          hostel: '$700 / Year',
          total: '$34,500 (Total Course)'
        },
        overview: `Kazakh Russian Medical University is one of the top private colleges in the Republic of Kazakhstan. It was formerly popular as Kazakhstani Medical University and opened its doors in 1992. The University was founded by the member of Academy of Sciences of Kazakhstan, Dr. Mukhtar Aliyevich Aliyev. The educational procedure is completely planned within the Department of Kazakh Russian Medical University.

The educational strategy at the Kazakh Russian Medical University meets the benchmark of education. In addition, new methods and plan of teaching to advance medical learning in the Republic of Kazakhstan were effectively tested at the KRMU.

The medical teaching is guided by more than 200 lecturers in which most of them are reputed and well-known doctors, foreign scientists, and famous Kazakhstanis. The university has good relations with Nagasaki University, The Federal centre of Heart, Bashkir state Medical University, Kyrgyz-Russian Slavic University, Omsk state Medical Academy and more.`,
        whyStudy: [
          'One of the top private colleges in Kazakhstan',
          'Founded by renowned scientist Dr. Mukhtar Aliyevich Aliyev',
          'High benchmarks of education with innovative teaching methods',
          'Over 200 reputed lecturers including well-known doctors and foreign scientists',
          'Academic mobility programs for studying and practicing abroad'
        ],
        admissionProcess: [
          'Competitive enrollment process',
          'Document evaluation',
          'Ministry registration',
          'Visa application'
        ],
        documentsRequired: [
          'Class 12th Certificate',
          'Passport copy',
          'NEET Qualification',
          'Medical certificate'
        ],
        hostelFacility: `Students are provided with comfortable rooms at the modern hostels situated within the medical campus. Students have all conditions for enjoying sport and social activities such as sport halls, swimming pools, Internet. Different social and cultural events are organized for international students. The academy provides a springboard for sportsmen with sporting facilities such as sports complex, including gymnasium, indoor football, badminton, tennis, volleyball, athletic stadiums, etc. The Faculty’s staff encourages academic, national and other interests of students. National and International associations of students are being organized to unite students from different countries.`,
        gallery: []
      },
      {
        id: 'west-kazakh-marat-ospanov',
        name: 'West Kazakhstan Marat Ospanov State Medical University',
        slug: 'west-kazakhstan-marat-ospanov-state-medical-university',
        image: '/images/universities/Kazakhstan/west-kazakhstan-marat-ospanov-state-medical-university.webp',
        description: 'A major cultural, diagnostic, educational, and research center in Kazakhstan’s West region, established in 1957.',
        location: 'Aktobe, Kazakhstan',
        ranking: 'Premier Research Center',
        established: '1957',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `West Kazakhstan Marat Ospanov State Medical University is considered to be one of the great cultural, diagnostic, educational, medical, and research center of Kazakhstan’s West region. The University comprises of its own clinical units such as Dental Clinic, Family Medicine Clinic and Medical Centre which are delivering the tertiary care. The University was established in the year 1957.

These days, the University staff actively introduces innovative approaches and modern technologies in the field of education as well as medicine. There is post graduate training in 4 specialities in the master’s programme, 18 specialities in residency as well as 2 specialities in the doctoral programme.

Faculties:
- Faculty of General Medicine
- Faculty of Dentistry
- Faculty of Health Care Management
- Faculty of Pharmacy
- Faculty of Preventive Medicine
- Faculty of Nursing Care`,
        whyStudy: [
          'Great cultural, diagnostic, educational, and research center',
          'Own clinical units including Dental and Family Medicine Clinics',
          'Innovative approaches and modern technologies in education and medicine',
          'Multilevel training including postgraduate and residency programs',
          'Quality of education matching international standards'
        ],
        admissionProcess: [
          'Online application',
          'Document verification',
          'Admission letter',
          'Visa processing'
        ],
        documentsRequired: [
          '12th Certificate',
          'NEET Scorecard',
          'Passport Copy',
          'Birth Certificate'
        ],
        hostelFacility: `The campus of West Kazakhstan Marat Ospanov State Medical University is fulfilled with all the basic amenities and other facilities. The campus has the centralized AC. There are hostel facilities for students. The hostels are well guarded with 24/7 security system. There is a well-equipped library for the students. The university offers a friendly and multicultural environment. The campus has many activity complexes like activity centers, cafés, canteen, a gym, sports complex, etc.`,
        gallery: []
      },
      {
        id: 'semey-state-medical-university',
        name: 'Semey State Medical University',
        slug: 'semey-state-medical-university',
        image: '/images/universities/Kazakhstan/semey-state-medical-university.webp',
        description: 'Founded in 1952, Semey State Medical University is one of the best and most established universities in Kazakhstan.',
        location: 'Semey, Kazakhstan',
        ranking: 'Top Rated State University',
        established: '1952',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Semey State Medical University is considered to be one of the best universities of Kazakhstan. It was founded in 1952. The university was initially named as Semipalatinsk State Medical Institute. Currently there are more than 3500 students pursuing their medical education. Semey State Medical University provides the best medical education using the best equipment and up to date technology.

The university has many hospitals affiliated where the students can practice their internship and have some practical experience under the guidance of their mentors and doctors working there.

Faculties:
- Department of Modern History of Kazakhstan and General Subjects
- Department of Molecular Biology and Microbiology
- Department of Pharmacology and Demonstrative Medicine
- Department of Public Health Care
- Department of Propaedeutics of Internal Diseases
- Surgery and traumatology department
- Department of Oncology and Visual Diagnosis
- Department of Stomatologic Disciplines
- Anatomy and Histology Department
- Department of Internal Medicine
- Department of the General Medical Practice
- Department of Children’s Diseases`,
        whyStudy: [
          'One of the best and oldest universities in Kazakhstan',
          'Large number of affiliated hospitals for practical experience',
          'Highly qualified staff including Doctors of Sciences and PhDs',
          'Modern teaching using the best equipment and up-to-date technology',
          'Diverse range of specialized departments'
        ],
        admissionProcess: [
          'Registration on university portal',
          'Document verification',
          'Admission confirmation',
          'Visa issuance'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Result',
          'Medical clearance'
        ],
        hostelFacility: `The students live in a study-conducive environment, which encourages them to be active in other extracurricular activities. While they participate in debates, science forums, sports activities, art performances; they also gather memories to be cherished from their student life.`,
        gallery: []
      },
      {
        id: 'karaganda-state-medical-university',
        name: 'Karaganda State Medical University',
        slug: 'karaganda-state-medical-university',
        image: '/images/universities/Kazakhstan/karaganda-state-medical-university.webp',
        description: 'The first medical university in Kazakhstan, ranked 8th in the country with international management certification.',
        location: 'Karaganda, Kazakhstan',
        ranking: '8th in Kazakhstan',
        established: '1950',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `Karaganda State Medical University (KSMU) is one of the outstanding medical universities of the Republic of Kazakhstan. It was founded in 1950. As per the ratings by the National Accreditation Centre, the university has been ranked at the 8th position out of the 60 top universities of the country. The University is known to be the first medical university in the Republic of Kazakhstan.

KSMU enjoys good tie-ups with the universities and research centers in various countries. KSMU also has a power scientific base that consists of Scientific and Research Centre, where many modern researches of medical science are being carried out. The training provided in the university is carried out in Russian and English languages.

Faculties:
- Faculty of General Medicine
- Faculty of Gynaecology
- Faculty of Stomatology
- Faculty of Anatomy
- Faculty of Internal Diseases
- Faculty of Histology
- Faculty of Ophthalmology
- Faculty of Clinical Department
- Faculty of Neurology
- Faculty of Oncology
- Faculty of Physiology`,
        whyStudy: [
          'Ranked 8th among top 60 universities in the country',
          'First medical university in the Republic of Kazakhstan',
          'International certification (ISO 9001-2000) for management quality',
          'Best educated faculty members including academicians of various science academies',
          'Collaborated with AMEE and World Federation of Medical Education'
        ],
        admissionProcess: [
          'Fill application form',
          'Transcripts verification',
          'Admission letter',
          'Visa processing'
        ],
        documentsRequired: [
          'Passport copy',
          '12th Marksheet',
          'NEET Qualification',
          'Photographs'
        ],
        hostelFacility: `Karaganda State Medical University has its own canteens which serve fresh and healthy food. Before serving the food to the students, it is examined by the food consultants. There is an arrangement for sports activities for the students within the premises of KSMU. The University consists of playgrounds as well as sport rooms. In the University, there is a spacious library available for students with the latest edition of books. Every year, the University organizes conferences and seminars inviting experts from India, Israel, Poland, and more.`,
        gallery: []
      },
      {
        id: 'astana-medical-university',
        name: 'Astana Medical University',
        slug: 'astana-medical-university',
        image: '/images/universities/Kazakhstan/astana-medical-university.webp',
        description: 'One of the largest medical universities in Kazakhstan, located in the capital city with high international reputation.',
        location: 'Astana, Kazakhstan',
        ranking: 'Leading Capital University',
        established: '1964',
        medium: 'English',
        duration: '5 Years',
        fees: {
          tuition: '$6,600 (1st Year), $3,900 (2nd-5th Year)',
          hostel: '$800 / Year',
          total: '$27,400 (Total Course)'
        },
        overview: `Established in 1964, Astana Medical University is one of the largest and dynamically developing medical universities in Kazakhstan. It has a high reputation in the field of higher medical education, with its own traditions in both educational services and medical science development. The University is recognized by WDOMS, ECFMG, FAIMER, WFME, and the NMC.

The University has been consistently ranked among the leading medical universities of the Republic of Kazakhstan for many years. The University's academic partners are leading universities in the USA, Singapore, Europe, and Russia.

Faculties:
- General Medicine
- Public Health
- Pharmacy
- Nursing
- Kinesitherapy
- Ergotherapy
- Pediatrics
- Dentistry`,
        whyStudy: [
          'Consistently ranked among leading medical universities in Kazakhstan',
          'Academic partnerships with leading universities in the USA, Singapore, Europe, and Russia',
          'English medium of teaching with low and affordable tuition fees',
          'Located in the capital city with extreme continental climate and rich attractions',
          'Approved by WDOMS and NMC, allowing practice around the globe'
        ],
        admissionProcess: [
          'Fill up the application form of Astana Medical University',
          'Submit the required documents for admission',
          'Receive admission/acceptance letter from the university',
          'Apply for a student visa with passport and other documents',
          'Clear all dues and make arrangements for travel',
          'Start your travel and studies'
        ],
        documentsRequired: [
          '12th Marksheet (Min 50% in PCB)',
          'Passport Copy',
          'NEET Result',
          'Birth Certificate'
        ],
        hostelFacility: `The students at Astana Medical University are provided with many opportunities to participate in international exchange programs, seminars, conferences and projects. The campus is filled with all the basic amenities and facilities including centralized AC and heaters. There are hostel facilities for students, well-guarded with a 24/7 security system. There is a well-equipped library and various activity complexes like cafés, canteen, gym, and sports complex.`,
        gallery: []
      },
      {
        id: 'kazakh-national-medical-university',
        name: 'Kazakh National Medical University',
        slug: 'kazakh-national-medical-university',
        image: '/images/universities/Kazakhstan/Kazakh-National-Medical-University.webp',
        description: 'Kazakhstan’s premier national medical university, established in 1930 with a focus on innovation and excellence.',
        location: 'Almaty, Kazakhstan',
        ranking: 'National University of Kazakhstan',
        established: '1930',
        medium: 'English',
        duration: '5 Years',
        fees: {
          tuition: '$5,000 / Year',
          hostel: '$300 / Year',
          total: '$27,500 (Total Course)'
        },
        overview: `Kazakh National Medical University (KazNMU) was established in 1930 in Almaty. Government of Kazakhstan classified KazNMU as the national university in 2001. It defines a perfect model of competitive and innovation focused institution delivering highly qualified medical education. The university has over 11,000 students and over 1500 faculty members, including 130 professors and 15 laureates of State prizes.

The structure of the university is strong enough to provide up-to-date scientific investigations on urgent problems of Public health, implemented in practical health care at a medical services market.

Faculties:
- General Medicine faculty
- Therapeutic Faculty
- Faculty of pediatrics
- Medico-Prophylactic Faculty
- Stomatology Faculty
- Pharmacy Faculty
- Faculty of Management in Public Health and Pharmacy`,
        whyStudy: [
          'Classified as a National University by the government',
          'Modernized infrastructure and the best medical instruments',
          'Large faculty including over 200 doctors of science and 500 candidates of science',
          'Mission focused on defining a perfect model of competitive medical education',
          'Located in Almaty, a major city with a population over 1 million'
        ],
        admissionProcess: [
          'Registration and documents',
          'Ministry evaluation',
          'Admission letter',
          'Visa and travel'
        ],
        documentsRequired: [
          '10th & 12th certificates',
          'Passport Copy',
          'NEET Result',
          'Medical clearance'
        ],
        hostelFacility: `KazNMU’s residence hall has space for 2198 students in shared rooms (2, 3, or 4-seater). Facilities include computer rooms, canteen, gym, laundry, library, and Wi-Fi access on each floor. There is a large number of student organizations including Committee on youth affairs, Debate Club, KVN Team, Student Union, Volunteer club, and more. The sports complex supports basketball, taekwondo, judo, volleyball, and wrestling.`,
        gallery: []
      }
    ]
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    flag: '/flag-uzbekistan.png',
    image: '/images/universities/Uzbekistan/Uzbekistan-2.webp',
    description: 'High-quality medical education at very affordable costs in Central Asia.',
    startingPrice: '₹14 Lakhs',
    uniCount: 5,
    overview: `Uzbekistan is officially known as the Republic of Uzbekistan after attaining Independence on August 31, 1991. It is a landlocked country in Central Asia. Uzbekistan is the 56th largest country by land and ranked the 42nd largest population in the world. It has a continental climate with 40°C hot in summer & winter temperatures of around -2°C cold or even more.

Culturally, Uzbekistan has a rich and diverse heritage which is backed by its layers of history and its beautiful location. The people of Uzbekistan speak the Uzbek language and the Russian language is mainly used in public governance.

A Brief Look at MBBS in Uzbekistan:
- NMC (MCI) Approved Universities: 05
- Recognition: MCI (NMC), ECFMG, FAIMER, WDOMS
- Course Duration: 6 years (5+1 year internship)
- Average cost of stay (Fee included): INR 14 Lakhs - INR 20 Lakhs
- Intake: September`,
    whyStudy: [
      'Quality Education equivalent to developed countries like USA, UK, Canada',
      'English Medium Education (no new language required)',
      'Lower Fees and Living cost (Total approx INR 14-15 lacs)',
      'Advanced Hospitals with practical training and clinical rotations',
      'Comfortable Climate and safe, culturally diverse environment',
      'Technically-enhanced learning with advanced teaching technology',
      'Globally Renowned Degrees accredited by WDOMS, FAIMER, ECFMG, MCC, etc.',
      'No Donation or hidden fees required for admission'
    ],
    admissionProcess: [
      'Fill up the application form of the university',
      'Submit the required documents for admission evaluation',
      'Receive admission/acceptance letter from the university',
      'Apply for a student visa with passport and documents',
      'Make arrangements for travel to Uzbekistan',
      'Start your travel and medical studies'
    ],
    eligibilityCriteria: [
      'Must have scored 50% marks in 12th standard (PCB) for General, 40% for Reserved categories.',
      'Must have qualified NEET-UG examination.',
      'Must be 17 years of age on or before 31st December of the year of admission.'
    ],
    universities: [
      {
        id: 'andijan-state-medical-institute',
        name: 'Andijan State Medical Institute',
        slug: 'andijan-state-medical-institute',
        image: '/images/universities/Uzbekistan/Uzbekistan-2.webp',
        description: 'Andijan State Medical Institute was founded in 1955. It is one of the leading medical institutes in Uzbekistan offering high-quality MBBS education.',
        location: 'Andijan, Uzbekistan',
        ranking: 'Top Medical Institute',
        established: '1955',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$4,600 (1st Yr), $3,000 (2nd-5th Yr)',
          hostel: '$300 / Year',
          total: '$17,800 (Full Course)'
        },
        overview: `Andijan State Medical Institute was founded in 1955. It is one of the leading medical institutes in Uzbekistan. Studying MBBS in Uzbekistan has become an ideal option for Indian Medical Aspirants. The Top Medical Universities in Uzbekistan offer a 6-year MBBS course in English Medium at an affordable cost.`,
        whyStudy: [
          'Quality Education equivalent to developed countries',
          'English Medium Education',
          'Lower Fees and Living cost',
          'Advanced Hospitals'
        ],
        admissionProcess: [
          'Clear NEET examination',
          'Submit Marksheets and Passport'
        ],
        documentsRequired: [
          '10th & 12th Marksheets',
          'Passport Copy',
          'NEET Scorecard',
          'Medical fitness certificate'
        ],
        hostelFacility: `The campus provides a safe and culturally diverse environment for international students. Professors are always available to assist students after normal working hours.`,
        gallery: []
      }
    ]
  },
  {
    id: 'tajikistan',
    name: 'Tajikistan',
    slug: 'tajikistan',
    flag: '/flag-tajikistan.png',
    image: '/images/countries/tajikistan.png',
    description: 'Affordable medical education with a curriculum designed for international students.',
    startingPrice: '₹12 Lakhs',
    uniCount: 4,
    overview: `The Republic of Tajikistan became an independent Nation on September 9, 1991. It was previously home to several ancient cultures. The word Tajikistan means the “Land of the Tajiks”. Tajikistan has two official languages-Russian and Tajik languages. Though these two are widely spoken in the country, English is also popular among the people for teaching in schools and especially used by the people working in the tourism sector.

A Brief Look at MBBS in Tajikistan:
- NMC(MCI) Approved Universities: 05
- Recognition: MCI (NMC), ECFMG, FAIMER, WDOMS
- Course Duration: 5 years
- Average cost of stay (Fee included): INR 1.5 Lakhs to 6 Lakhs
- Intake: September`,
    whyStudy: [
      'Quality Education with international standards',
      'English Medium Education for the entire course',
      'Lower Fees and Living cost (one of the cheapest in the world)',
      'Advance Hospitals with practical training through clinical rotations',
      'Comfortable Climate and safe environment for international students',
      'Technically-enhanced learning with advanced teaching technology',
      'Globally Renowned Degrees accredited by WHO, WDOMS, FAIMER, ECFMG, etc.'
    ],
    admissionProcess: [
      'Clear NEET exam (mandatory for Indian aspirants)',
      'Hassle-free admission procedure',
      'Fill application form and submit transcripts',
      'Receive admission letter from the university',
      'Visa processing and travel arrangements'
    ],
    eligibilityCriteria: [
      'Score 50% marks in 12th standard (PCB).',
      'Qualify NEET examination.',
      'Must be 17 years old by 31st December of the admission year.'
    ],
    universities: [
      {
        id: 'avicenna-tajik-state-medical-university',
        name: 'Avicenna Tajik State Medical University',
        slug: 'avicenna-tajik-state-medical-university',
        image: '/images/universities/tajikistan/Avicenna Tajik State Medical University.jfif',
        description: 'Avicenna Tajik State Medical University is one of the most prominent medical universities in Tajikistan, established in 1939.',
        location: 'Dushanbe, Tajikistan',
        ranking: 'Top Medical University',
        established: '1939',
        medium: 'English',
        duration: '5 Years',
        fees: {
          tuition: 'Approx. $3,000 - $4,000 / Year',
          hostel: '$500 / Year',
          total: 'INR 1.5 Lakhs - 6 Lakhs (Avg. Stay)'
        },
        overview: `Avicenna Tajik State Medical University is one of the most prominent medical universities in Tajikistan, established in 1939. MBBS in Tajikistan has become famous due to its low fees.`,
        whyStudy: [
          'Quality Education with international standards',
          'English Medium Education',
          'Lower Fees and Living cost'
        ],
        admissionProcess: [
          'Clear NEET exam',
          'Hassle-free admission'
        ],
        documentsRequired: [
          '10th & 12th Marksheets',
          'Passport Copy',
          'NEET Scorecard'
        ],
        hostelFacility: `The infrastructures are fully equipped with modern technologies and facilities. No donation is required for admission.`,
        gallery: []
      }
    ]
  },
  {
    id: 'nepal',
    name: 'Nepal',
    slug: 'nepal',
    flag: '/flag-nepal.png',
    image: '/images/countries/nepal.png',
    description: 'Closest proximity to India with a very similar culture and clinical disease pattern.',
    startingPrice: '₹45 Lakhs',
    uniCount: 20,
    overview: `Nepal is a landlocked country sharing its borders with five states of India, Uttarakhand in the West, Uttar Pradesh in the south, Bihar in the south-east, and Sikkim from the eastern side. However, in the north, it shares its border with Xizang, Tibet, and also the autonomous region of China.

With an approximate area of 141,181 sq. km, the country is 1.5 times larger than Portugal. It has a population of 30.3 million (2021). Kathmandu is the largest city in the country as well as the country’s capital. Almost the entire country falls in the Shivalik Range of the Himalayas, therefore almost the entire geography of the country is largely filled with mountainous and hilly regions.

A Brief Look at MBBS in Nepal
Number of Universities: 20
Recognition: NMC(MCI), FAIMER, ECFMG, WDOMS
Course Duration: 5 years 6 months
Average Tuition Fees (Including Fooding & Lodging): INR 8 lakhs/annum
Intake: September`,
    whyStudy: [
      'Quality Education',
      'Affordable and Advanced Learning',
      'Recognized degrees',
      'FMGE/NExT Training',
      'Bilingual Medium of Instruction',
      'A warm and welcoming culture',
      'Weather conditions similar to the North-Indian region',
      'Conducive Learning Atmosphere',
      'Globally Affiliated, Accredited, and Recognised Universities',
      'Similar Learning Experience of MBBS in India',
      'Resourceful Healthcare Sector',
      'Course Duration: 5 years and 6 months',
      'Affordable Course of Study',
      'Recognized Universities (WDOMS, FAIMER, ECFMG, NMC)',
      'Cost of Living',
      'Technically Equipped Learning',
      'Pupil-Teacher Ratio (Healthy 20:1)',
      'Language of Instruction (English)'
    ],
    admissionProcess: [
      'No Admission fee or hidden charges',
      'No donation required',
      'Visa Relaxation for Indian students',
      'Easy Admission Procedure',
      'Affordable Fee Structure',
      'Feasible cost of living',
      'Global Exposure and Recognition',
      'Pleasant weather condition'
    ],
    eligibilityCriteria: [
      'They must be 17 years of age on or before 31st December of the year of admission.',
      'They must have scored 50% marks in their 12th standard in Physics, Chemistry, and Biology from CBSE / ICSE or any other equivalent board of examination.',
      'They should have qualified NEET(UG) Entrance exam (as per the latest notification by MCI)'
    ],
    faqs: [
      { question: 'Is MBBS from Nepal valid in India?', answer: 'Yes, MBBS from Nepal is globally recognized and valid in India, provided the university is recognized by NMC (MCI).' },
      { question: 'Is NEET required for MBBS in Nepal?', answer: 'Yes, qualifying NEET is mandatory for Indian students to study MBBS in Nepal and to practice in India later.' },
      { question: 'Which country is best for MBBS for Indian students?', answer: 'Nepal is one of the top choices due to its proximity, similar culture, and quality of education aligned with Indian standards.' },
      { question: 'Is MBBS in Nepal a good option?', answer: 'Yes, it offers high-quality education, modern facilities, and clinical exposure similar to India at an affordable cost.' },
      { question: 'How much does it cost to study MBBS in Nepal?', answer: 'The average tuition fee is around INR 8 Lakhs per annum, including food and lodging in many cases.' },
      { question: 'What is the duration of MBBS study in Nepal?', answer: 'The total duration is 5 years and 6 months, which includes theoretical learning and clinical rotations.' },
      { question: 'What are the documents required for applying for MBBS in Nepal?', answer: '10th & 12th Marksheets, Passport Copy, NEET Scorecard, Passport size photos, and Medical fitness certificate.' },
      { question: 'Why do Indian students choose to study MBBS in Nepal?', answer: 'Similar climate, no visa requirement (for some), proximity to home, and similar medical curriculum are key reasons.' },
      { question: 'What are the disadvantages to study in Nepal for MBBS?', answer: 'Limited seats in top government colleges and the high cost of some private institutions can be factors to consider.' },
      { question: 'How can I apply for MBBS in Nepal?', answer: 'You can apply through recognized consultants or directly through the university portal after clearing NEET.' }
    ],
    universities: [
      {
        id: 'kist-medical-college',
        name: 'KIST Medical College',
        slug: 'kist-medical-college',
        image: '/images/universities/nepal/KIST Medical College.webp',
        description: 'KIST Medical College is a premier medical institution in Nepal, known for its healthy and conducive learning atmosphere.',
        location: 'Lalitpur, Nepal',
        ranking: 'Top Medical College',
        established: '2006',
        medium: 'English',
        duration: '5 Years 6 Months',
        fees: {
          tuition: 'INR 8 Lakhs / Annum',
          hostel: 'Included',
          total: 'INR 45 Lakhs - 60 Lakhs'
        },
        overview: `Nepal is a landlocked country sharing its borders with five states of India, Uttarakhand in the West, Uttar Pradesh in the south, Bihar in the south-east, and Sikkim from the eastern side. However, in the north, it shares its border with Xizang, Tibet, and also the autonomous region of China.

With an approximate area of 141,181 sq. km, the country is 1.5 times larger than Portugal. It has a population of 30.3 million (2021). Kathmandu is the largest city in the country as well as the country’s capital. Almost the entire country falls in the Shivalik Range of the Himalayas, therefore almost the entire geography of the country is largely filled with mountainous and hilly regions.

A Brief Look at MBBS in Nepal
Number of Universities: 20
Recognition: NMC(MCI), FAIMER, ECFMG, WDOMS
Course Duration: 5 years 6 months
Average Tuition Fees (Including Fooding & Lodging): INR 8 lakhs/annum
Intake: September

What is the Eligibility Criteria for MBBS in Nepal?
To be eligible to apply for MBBS in Nepal, the students must satisfy all the given conditions:
- They must be 17 years of age on or before 31st December of the year of admission.
- They must have scored 50% marks in their 12th standard in Physics, Chemistry, and Biology from CBSE / ICSE or any other equivalent board of examination.
- They should have qualified NEET(UG) Entrance exam (as per the latest notification by MCI) are eligible to apply for MBBS in Nepal`,
        whyStudy: [
          'Quality Education',
          'Affordable and Advanced Learning',
          'Recognized degrees',
          'FMGE/NExT Training',
          'Bilingual Medium of Instruction',
          'A warm and welcoming culture',
          'Weather conditions similar to the North-Indian region',
          'Conducive Learning Atmosphere - Nepal offers a healthy and conducive learning atmosphere to all its students. The best medical universities of Nepal offer students secured and reliable educational practices and lifestyles.',
          'Globally Affiliated, Accredited, and Recognised Universities - All universities are recognized by WHO, WDOMS, FAIMER, ECFMG, and Medical Council of leading countries like the U.S.A, U.K, Middle East, Australia, India, Canada, etc.',
          'Similar Learning Experience of MBBS in India - MBBS in Nepal has a similar pattern and course structure as that of medical studies in India, hence the curriculum is very similar, however, the difference lies in the pedagogy followed which is extremely modern and precise in the best medical universities of Nepal.',
          'Resourceful Healthcare Sector - Medical universities in Nepal are excellent in terms of infrastructure, technical advances, qualified lecturers, etc, making it a popular choice among students all over the world especially from India.',
          'Course Duration - The duration of MBBS in Nepal is 5 years and 6 months. The first four years of the course are reserved for theoretical and technical learning after which the focus transits to the practical implementation of them.',
          'Affordable Course of Study - Nepal offers one of the most affordable medical study options in comparison to India and many wested medical colleges.',
          'Recognized Universities - Medical Universities in Nepal are enlisted in WDOMS, FAIMER, ECFMG, and NMC (MCI). The best medical universities of Nepal fall in the top cream of the best medical universities of the world.',
          'Cost of Living - The cost of living in Nepal for Indian students is very low compared to the other countries. The hostels are well accommodated with all the comfort requirements of the international students.',
          'Technically Equipped Learning - MBBS in Nepal features the use of advanced technological resources in imparting learning in the classrooms. The use of technology helps in keeping the learning more advanced and interesting for the students.',
          'Pupil-Teacher Ratio - Most of the universities have a healthy pupil-teacher. In a class, there are about 20 students under the guidance of 1 mentor and teacher. With this ratio, each and every student gets the undecided attention of the teacher.',
          'Language of Instruction - In most universities, the language of common and official use is English itself.'
        ],
        admissionProcess: [
          'No Admission fee or hidden charges',
          'No donation required',
          'Visa Relaxation for Indian students',
          'Easy Admission Procedure',
          'Affordable Fee Structure',
          'Feasible cost of living',
          'Global Exposure and Recognition',
          'Pleasant weather condition'
        ],
        documentsRequired: [
          '10th & 12th Marksheets',
          'Passport Copy',
          'NEET Scorecard',
          'Passport size photos',
          'Medical fitness certificate'
        ],
        hostelFacility: `The cost of living in Nepal for Indian students is very low compared to the other countries. The hostels are well accommodated with all the comfort requirements of the international students. MBBS in Nepal features the use of advanced technological resources in imparting learning in the classrooms. The use of technology helps in keeping the learning more advanced and interesting for the students.`,
        gallery: []
      },
      {
        id: 'institute-of-medicine-iom',
        name: 'Institute of Medicine (IOM)',
        slug: 'institute-of-medicine-iom',
        image: '/images/universities/nepal/Institute of Medicine (IOM).jpg',
        description: 'The Institute of Medicine (IOM) was established in 1972 under Tribhuvan University.',
        location: 'Kathmandu, Nepal',
        ranking: 'Top Ranked Institution',
        established: '1972',
        medium: 'English',
        duration: '5 Years 6 Months',
        fees: {
          tuition: 'INR 8 Lakhs / Annum',
          hostel: 'Included',
          total: 'INR 45 Lakhs - 60 Lakhs'
        },
        overview: `The Institute of Medicine (IOM) was established in 1972 under Tribhuvan University with the mandate of training all categories of health manpower.`,
        whyStudy: [
          'Quality Education',
          'Recognized degrees'
        ],
        admissionProcess: [
          'Qualified NEET(UG) Entrance exam'
        ],
        documentsRequired: [
          'Passport Copy'
        ],
        hostelFacility: `The hostels are well accommodated with all the comfort requirements of the international students.`,
        gallery: []
      },
      {
        id: 'kathmandu-university-kusms',
        name: 'Kathmandu University School of Medical Sciences (KUSMS)',
        slug: 'kathmandu-university-kusms',
        image: '/images/universities/nepal/Kathmandu University School of Medical Sciences (KUSMS).jpg',
        description: 'Kathmandu University School of Medical Sciences (KUSMS) is a premier medical school in Nepal.',
        location: 'Dhulikhel, Nepal',
        ranking: 'Premier Medical School',
        established: '1994',
        medium: 'English',
        duration: '5 Years 6 Months',
        fees: {
          tuition: 'INR 8 Lakhs / Annum',
          hostel: 'Included',
          total: 'INR 45 Lakhs - 60 Lakhs'
        },
        overview: `Kathmandu University School of Medical Sciences (KUSMS) is a premier medical school in Nepal providing world-class education.`,
        whyStudy: [
          'Quality Education',
          'Modern and precise pedagogy'
        ],
        admissionProcess: [
          'Must be 17 years of age on or before 31st December'
        ],
        documentsRequired: [
          'NEET Scorecard'
        ],
        hostelFacility: `The campus provides a safe and conducive learning environment.`,
        gallery: []
      },
      {
        id: 'bp-koirala-institute',
        name: 'B. P. Koirala Institute of Health Sciences',
        slug: 'bp-koirala-institute',
        image: '/images/universities/nepal/B. P. Koirala Institute of Health Sciences.webp',
        description: 'B.P. Koirala Institute of Health Sciences (BPKIHS) was established in 1993.',
        location: 'Dharan, Nepal',
        ranking: 'World-renowned Institution',
        established: '1993',
        medium: 'English',
        duration: '5 Years 6 Months',
        fees: {
          tuition: 'INR 8 Lakhs / Annum',
          hostel: 'Included',
          total: 'INR 45 Lakhs - 60 Lakhs'
        },
        overview: `B.P. Koirala Institute of Health Sciences (BPKIHS) was established in 1993 and is a world-renowned health science institution.`,
        whyStudy: [
          'Recognized Universities',
          'Similar Learning Experience to India'
        ],
        admissionProcess: [
          'Score 50% marks in 12th standard (PCB)'
        ],
        documentsRequired: [
          'Passport Copy'
        ],
        hostelFacility: `The institute features the use of advanced technological resources in imparting learning.`,
        gallery: []
      },
      {
        id: 'manipal-college-medical-science',
        name: 'Manipal College of Medical Science',
        slug: 'manipal-college-medical-science',
        image: '/images/universities/nepal/Manipal College of Medical Science.jpg',
        description: 'Manipal College of Medical Sciences (MCOMS) was established in 1994.',
        location: 'Pokhara, Nepal',
        ranking: 'Top Rated College',
        established: '1994',
        medium: 'English',
        duration: '5 Years 6 Months',
        fees: {
          tuition: 'INR 8 Lakhs / Annum',
          hostel: 'Included',
          total: 'INR 45 Lakhs - 60 Lakhs'
        },
        overview: `Manipal College of Medical Sciences (MCOMS) was established in 1994 and is affiliated with Kathmandu University.`,
        whyStudy: [
          'Pleasant weather condition'
        ],
        admissionProcess: [
          'Qualified NEET(UG) Entrance exam'
        ],
        documentsRequired: [
          '10th & 12th Marksheets'
        ],
        hostelFacility: `The campus provides a safe and culturally diverse environment.`,
        gallery: []
      }
    ]
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    slug: 'bangladesh',
    flag: '/flag-bangladesh.png',
    image: '/images/countries/bangladesh.png',
    description: 'Very similar clinical exposure to India with a curriculum recognized by the NMC.',
    startingPrice: '₹25 Lakhs',
    uniCount: 36,
    universities: [
      {
        id: 'applied-health-sciences',
        name: 'Institute Of Applied Health Sciences',
        slug: 'institute-of-applied-health-sciences',
        image: '/images/universities/bangladesh/Institute-of-Applied-Health-Sciences.webp',
        description: 'Institute of Applied Health Sciences is a leading institution of medical education for MBBS in Bangladesh that began its journey in 1989 to impart good quality medical education to students worldwide...',
        location: 'Chittagong, Bangladesh',
        ranking: 'Leading Institution',
        established: '1989',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$44,700 (Total Course Fee)', hostel: 'Contact for details', total: '$44,700' },
        overview: `Institute of Applied Health Sciences is a leading institution of medical education for MBBS in Bangladesh that began its journey in 1989 to impart good quality medical education to students worldwide. It is a constituent body under faculty of medicine of University of Science and Technology Chittagong in 1992. This private medical college is a recognized medical education institution located in Chittagong with hostel accommodation for international students. It is recognized by the Bangladesh Medical and Dental Council and affiliated with Chittagong University.

The private medical college offers a 5-year MBBS program with one year of clinical training at its medical facility, utilizing the latest teaching methodologies to provide the best teaching experience to the students. It is popular for its cutting-edge technological and educational advancements and prepares its students to participate in national and international scientific forums for vast practical exposure.`,
        whyStudy: [
          'Superior quality medical education focuses on improving students’ practical knowledge.',
          'Students attend international conferences, seminars, and workshops to broaden their knowledge of medicine in other countries.',
          'Incredible practical experience working alongside patients at the college’s teaching hospital.',
          'Faculty members, professors, and teachers who are well-qualified, experienced, and renowned to provide excellent medical education.',
          'Excellent infrastructure facilities, including well-equipped laboratories and audio-visual equipment in classrooms, among other things, for improved classroom learning.',
          'International students can benefit from English-medium medical education.',
          'This college’s medical degree is recognized in India and other countries.',
          'Guest lectures by well-known medical practitioners, scientists, and researchers are scheduled on a regular basis.',
          'Comfortable hostel facilities for both boys and girls on the college campus, complete with all necessary amenities.',
          'The college’s tuition fee is reasonable.',
          'There are no entrance exams for this medical college.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable hostel facilities for both boys and girls on the college campus, complete with all necessary amenities. The college canteen serves hygienic Indian food, and the entire campus is secured under 24/7 CCTV surveillance.',
        gallery: []
      },
      {
        id: 'sylhet-womens-medical',
        name: 'Sylhet Women’s Medical College',
        slug: 'sylhet-womens-medical-college',
        image: '/images/universities/bangladesh/Sylhet-Women_s-Medical-College.webp',
        description: 'Established in 2007, Sylhet Women’s Medical College is a top private medical school in Sylhet city in Bangladesh built exclusively for women...',
        location: 'Sylhet, Bangladesh',
        ranking: 'Top Private Medical School',
        established: '2007',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$30,000 (5 Years Tuition)', hostel: 'Included in total', total: '$46,000 (INR 34.5 Lakhs)' },
        overview: `Established in 2007, Sylhet Women’s Medical College is a top private medical school in Sylhet city in Bangladesh built exclusively for women. The college has a magnificent campus with three high-rise buildings comprising a medical college and a teaching hospital. It is affiliated with Shahjalal University of Science and Technology (SUST) under Sylhet Medical University (SMU). It has international students from India, the Middle East, Nepal, the United Kingdom, Canada, etc. The medical college offers a 5-year MBBS course with one-year clinical training.

Sylhet Women’s Medical College is the second-best medical college for women to study MBBS in Bangladesh and as per the census of 2020, this medical college is a leading private medical education institution in Sylhet based on its expertise. It also stands at the fifth position in the list of private Bangladesh medical colleges accredited by the Ministry of Health as well as the Bangladesh Medical and Dental Council (BMDC).`,
        whyStudy: [
          'The quality of medical education is excellent, with a mix of theoretical classroom sessions and practical laboratory experiments.',
          'The college organizes extracurricular activities for students’ overall development.',
          'It is accredited by the National Medical Commission, and its medical degree is recognized throughout India.',
          'Highly qualified faculty members and professors teach medical students.',
          'During medical education, the faculty employs advanced and integrated teaching methodologies.',
          'Students receive adequate practical experience in the college’s teaching hospital.',
          'The laboratories, dissection halls, and other areas are well-equipped with cutting-edge tools and equipment.',
          'Its medical degree is recognized worldwide, not just in India.',
          'The university hosts guest lectures by renowned doctors, researchers, and academicians.',
          'For international students, the fee structure is reasonable.',
          'Without donations, the admission process is straightforward.',
          'The college has a vibrant environment in which to build a better education system.',
          'There is no need to take any entrance exams, such as IELTS, for admission.'
        ],
        admissionProcess: [
          'Step 1: Fill and submit the application form of the medical college along with the required documents.',
          'Step 2: Receive an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable separate hostels for boys and girls that are both comfortable and well-equipped. The entire campus is guarded and monitored by CCTV cameras, and a resourceful library accommodating 200 students is available.',
        gallery: []
      },
      {
        id: 'mainamoti-medical-college',
        name: 'Mainamoti Medical College',
        slug: 'mainamoti-medical-college',
        image: '/images/universities/bangladesh/Mainamoti-Medical-College.webp',
        description: 'Mainamoti Medical College is one of the largest and most popular private medical colleges in Bangladesh providing excellent quality medical...',
        location: 'Comilla, Bangladesh',
        ranking: 'Popular Private College',
        established: '2011',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$36,000 (Total Tuition & Fees)', hostel: '$2,500 (For 5 Years)', total: '$40,000 (INR 30 Lakhs)' },
        overview: `Mainamoti Medical College is one of the largest and most popular private medical colleges in Bangladesh providing excellent quality medical education and student-oriented facilities for a better learning experience. It was established in 2011 in Baropara, Comilla, Bangladesh, and makes a popular choice to study MBBS in Bangladesh. The college offers a 5-year MBBS program with one year of clinical training to its students. It is affiliated with Chittagong University and makes it one of the top destinations to study MBBS in Bangladesh.`,
        whyStudy: [
          'Superior quality medical education focuses more on strengthening the practical knowledge of students.',
          'Students participate in international conferences, seminars, workshops, etc. to expand their knowledge about medicine in other countries.',
          'Incredible practical exposure at the teaching hospital of the college alongside patients.',
          'Well-qualified, experienced, and renowned faculty members, professors, and teachers to impart excellent medical education.',
          'Excellent infrastructure facilities comprising well-equipped laboratories, audio-visual equipment in classrooms, etc. for enhanced classroom learning.',
          'English medium medical education for international students for their better understanding.',
          'The medical degree of this college is recognized in India and other countries.',
          'Frequent guest lectures by famous medical practitioners, scientists, and researchers are organized.',
          'Comfortable hostel facilities for boys and girls at the college campus with all the required facilities.',
          'The tuition fee of the college is affordable.',
          'No entrance exams to get admission in this medical college.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable hostel facilities for boys and girls on the college campus with all the required facilities. Separate hostels for boys and girls equipped with all the basic facilities required for comfortable living. The campus is fully secured with CCTV cameras and has a well-developed canteen serving Indian food.',
        gallery: []
      },
      {
        id: 'president-abdul-hamid',
        name: 'President Abdul Hamid Medical College',
        slug: 'president-abdul-hamid-medical-college',
        image: '/images/universities/bangladesh/President-Abdul-Hamid-Medical-College.webp',
        description: 'Named after the President of Bangladesh, President Abdul Hamid Medical College is a private medical college in Kishoreganj that was...',
        location: 'Kishoreganj, Bangladesh',
        ranking: 'Private Medical College',
        established: '2013',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$38,000 (Total Course Fee)', hostel: 'Included in total', total: '$38,000 (INR 28.5 Lakhs)' },
        overview: `Named after the President of Bangladesh, President Abdul Hamid Medical College is a private medical college in Kishoreganj that was established in 2013 with a view to impart best medical education to aspiring doctors from worldwide. The college campus is renowned for its contemporary infrastructure with comfortable hostels and dining facilities. There is a teaching hospital within the campus with 250 beds facility for the purpose of clinical training to students.

President Abdul Hamid Medical College is a popular destination for MBBS in Bangladesh for Indian students. It primarily focuses on the holistic development of students and provides them an excellent learning environment. The medical college has 70 highly-educated faculty members, technology-based learning, and advanced classrooms. At present, 500 students are studying MBBS at PAHMC from various countries of the world.`,
        whyStudy: [
          'The quality of medical education is excellent with a combination of theoretical classroom sessions and practical experiments in laboratories.',
          'The college hosts extracurricular activities for students for their overall development.',
          'It is recognized by the National Medical Commission and its medical degree is valid in India.',
          'Medical education is imparted by highly qualified faculty members and professors.',
          'The faculty uses advanced and integrated teaching methodologies during medical education.',
          'Students get adequate practical exposure in the teaching hospital of the college.',
          'The laboratories, dissection halls, etc. are well-equipped with the latest tools and equipments.',
          'Not just in India, its medical degree is valid worldwide.',
          'Guest lectures by reputed doctors, researchers, and academicians are organized at the university.',
          'The fee structure is pocket-friendly for international students.',
          'The admission process is simple without donations.',
          'The college has a thriving environment to establish a better education system.',
          'No need to give any entrance exams like IELTS for admission.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable and well-furnished separate hostel accommodations for boys and girls are available for students. A modern teaching hospital with a 250-bed facility is located on the campus. Free operation camps are organized where students interact with patients. The entire campus is monitored by security guards and CCTV cameras.',
        gallery: []
      },
      {
        id: 'international-medical-college',
        name: 'International Medical College',
        slug: 'international-medical-college',
        image: '/images/universities/bangladesh/International-Medical-College.webp',
        description: 'Established in 2000, International Medical College is a top-tier medical education institution in Tongi that came into existence to provide...',
        location: 'Gazipur, Bangladesh',
        ranking: 'Top-tier Institution',
        established: '2000',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$44,000 (Total Course Fee)', hostel: 'Included in total', total: '$44,000 (INR 33 Lakhs)' },
        overview: `Established in 2000, International Medical College is a top-tier medical education institution in Tongi that came into existence to provide good quality medical education to produce skilled and professional doctors. The medical college is a well-known destination to study MBBS in Bangladesh as it has been successful in achieving recognition for its medical excellence and dedicated services to the community. It is home to both national and international students for its congenial environment.

Surrounded by the intriguing natural beauty, International Medical College strives to create a strong foundation of medical knowledge for its students about the human body. The college has state-of-the-art infrastructural facilities with all the basic necessities to ensure comfortable living and learning for the students. Classrooms, laboratories, lecture halls, dissection hall, library, museums, library, etc. are available on different floors of the academic building. There is a teaching hospital with 650 beds within the premises of the college where students can gain practical knowledge and bedside learning with real patients.`,
        whyStudy: [
          'Affordable MBBS fee structure for Indian students.',
          'Best results in Dhaka University MBBS Professional Examinations.',
          'Highly-qualified international and national faculty and professors.',
          'Eight acres campus with sports and hostel facilities.',
          'Fully-equipped 650 bedded teaching hospital.',
          'Well-equipped academic laboratories.',
          'Resourceful library with internet facility.',
          'Wi-Fi facility within the campus for students.',
          'Recognized by NMC, FAIMER, BMDC, etc.',
          'Opportunities for higher education and training in Malaysia and the USA.',
          'English MBBS course for international students.',
          'No donations or entrance exams for admission.',
          'Indian food in mess facilities.',
          'Advanced and modern infrastructure at the college campus.',
          'Globally recognized medical degree.'
        ],
        admissionProcess: [
          'Step 1: Fill and submit the application form of the medical college along with the required documents.',
          'Step 2: Receive an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Multistoried, secured, and well-furnished hostels are available for students. A resourceful library and separate laboratories are present in every department. Transport facilities are available across the city, alongside a canteen, gym, ATM, and spacious sports grounds inside the campus.',
        gallery: []
      },
      {
        id: 'delta-medical-college',
        name: 'Delta Medical College',
        slug: 'delta-medical-college',
        image: '/images/universities/bangladesh/Delta-Medical-College.webp',
        description: 'Established in 2006, Delta Medical College is one of the top Bangladesh medical colleges located in Mirpur, Dhaka providing excellent...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Top Medical College',
        established: '2006',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'Economical Fee Structure' },
        overview: `Established in 2006, Delta Medical College is one of the top Bangladesh medical colleges located in Mirpur, Dhaka providing excellent quality medical education to aspiring doctors. It is affiliated with Dhaka University, recognized by the National Medical Commission of India (NMC), Bangladesh Medical and Dental Council (BMDC), and listed in the World Directory of Medical Schools (WDOMS). The medical college is a 10 storied building with over 500 students studying medicine there.

Delta Medical College offers a 6-year MBBS course complying with the guidelines of the Bangladesh Medical and Dental Council (BMDC). It is well-equipped with advanced tools and equipment and uses modern teaching methodologies to impart excellent quality medical education to its students. The teaching faculty of the college mentors and guides students throughout their MBBS journey. Moreover, the medical college has a 350-bedded multidisciplinary hospital facility that is renowned for cancer research and treatment worldwide.`,
        whyStudy: [
          'The MBBS fee is more economical than fees in India.',
          'The medium of teaching is English.',
          'It offers medical degrees of international significance.',
          'Availability of innovative infrastructure and technology.',
          'The college and hospital buildings have state-of-the-art infrastructure.',
          'No entrance exam or language proficiency test.',
          'No donation or capitation fee for admission.',
          'Highly-qualified and experienced faculty members to impart best quality medical education.',
          'Library with a rich collection of 2,000 medical books, reference books, and journals.',
          'Hostel accommodation is comfortable and affordable for Indian students.',
          'Hassle-free admission process.',
          'Affiliation with Dhaka University.',
          'Extracurricular activities are promoted for the overall student development.',
          'Bedside clinical training at the college hospital for students.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Boys\' and girls\' hostels are located in different buildings, offering twin sharing rooms. Indian cuisine is available in the dorm kitchen. The campus is monitored by CCTV with floor wardens, laundry facilities, a canteen, and sporting grounds including a gymnasium and swimming pool.',
        gallery: []
      },
      {
        id: 'bikrampur-bhuiyan',
        name: 'Bikrampur Bhuiyan Medical College',
        slug: 'bikrampur-bhuiyan-medical-college',
        image: '/images/universities/bangladesh/Bikrampur-Bhuiyan-Medical-College.webp',
        description: 'Bikrampur Bhuiyan Medical College is a renowned private medical college in Bangladesh providing high-quality medical education.',
        location: 'Munshiganj, Bangladesh',
        ranking: 'Renowned College',
        established: '1994',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `More details coming soon.`,
        whyStudy: [

        ],
        admissionProcess: [

        ],
        documentsRequired: [

        ],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'universal-medical-college',
        name: 'Universal Medical College',
        slug: 'universal-medical-college',
        image: '/images/universities/bangladesh/Universal-Medical-College.webp',
        description: 'Founded in 2013, Universal Medical College is counted amongst the top medical educational institutions in Bangladesh.',
        location: 'Dhaka, Bangladesh',
        ranking: 'Top Educational Institution',
        established: '2013',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$42,000 (Total Course Fee)', hostel: 'Included in total', total: '$42,000 (INR 31.5 Lakhs)' },
        overview: `Founded in 2013, Universal Medical College is counted amongst the top medical colleges to study MBBS in Bangladesh and is engaged in providing good quality medical education to create excellent doctors. The university is located in the capital city of Dhaka and is affiliated with Dhaka University and recognized by the Bangladesh Medical and Dental Council (BM&DC).

The college has a well-organized campus with access to hospital and laboratories, advanced classrooms, adequate treatment facilities, and modern teaching facilities. It is an 8-storied building with a teaching hospital within the 6-storied hostel building, capable of accommodating 350 students. The medical college attracts medical aspirants from various countries, including India, Nepal, Pakistan, etc., for its affordable fee structure and English medium medical education.

Extensive clinical exposure is promised to students at the college hospital that offers multidisciplinary medical care. The teaching faculty utilizes new ways of learning like e-learning modules for self-assessment of students and simulators for enhanced learning experience. More emphasis is put on developing skills of the students they will require as doctors like medical ethics, communication, and professionalism.`,
        whyStudy: [
          'Affordable tuition fees for Indian students.',
          'No donations or entrance exams for admission.',
          'Hassle-free admission process for international students.',
          'The study pattern is very similar to the Indian medical curriculum.',
          'Affiliation with Dhaka University (DU) and recognition from the National Medical Commission (NMC).',
          'The MBBS program is based on the latest NMC guidelines.',
          'The MBBS course covers pre-clinical, para-clinical and clinical disciplines via classroom classes and clinical training.',
          '5-year MBBS course in English followed by one-year internship after graduation.',
          'Comfortable hostel accommodation for Indian students.',
          'Indian food is available in mess facilities.',
          'Well-qualified faculty to build a strong foundation of medical knowledge for students.',
          'English medium MBBS program for international students.',
          'Advanced infrastructure with well-equipped laboratories, modern classrooms, etc.',
          'FMGE coaching by renowned and professional Indian doctors and professors.',
          'Clinical training of students at the college hospital having state-of-the-art infrastructure and facilities.',
          'Multicultural environment owing to the presence of foreign students from various countries.'
        ],
        admissionProcess: [
          'Step 1: Fill and submit the application form of the medical college along with the required documents.',
          'Step 2: Receive an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable and safe hostel rooms on-campus with all basic amenities. The college has separate hostels for boys and girls, a modern teaching hospital inside the building, and sports facilities for overall development.',
        gallery: []
      },
      {
        id: 'north-east-medical-college',
        name: 'North East Medical College',
        slug: 'north-east-medical-college',
        image: '/images/universities/bangladesh/North-East-Medical-College.webp',
        description: 'Established in 1998, North East Medical College is the best private medical college in the North-East region of Bangladesh.',
        location: 'Sylhet, Bangladesh',
        ranking: 'Best Private College',
        established: '1998',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$40,000 (Tuition, Development & Fees)', hostel: '$4,000 (For 5 Years)', total: '$44,000 (INR 33 Lakhs)' },
        overview: `Established in 1998, North East Medical College is the best private medical college in Bangladesh located in South Surma Upazila in Sylhet. The medical college is affiliated with Sylhet Medical University (SMU) and Shahjalal University of Science and Technology (SUST) under the School of Medical Sciences. The college campus has two buildings – one academic and another an 800-bedded facility teaching hospital.

The medical college offers a 6-year MBBS course in English, including one year clinical internship in the college hospital. The medical degree of North East Medical College is recognized by the Bangladesh Medical and Dental Council. The state-of-the-art infrastructural facilities at this medical college combined with top-tier medical education makes it an epitome of MBBS in Bangladesh.`,
        whyStudy: [
          'Budget-friendly MBBS fees structure.',
          'Provides holistic medical education incorporating theoretical and practical aspects of medicine.',
          'Internationally accepted medical degree.',
          'Teaching methodologies include lectures, field workshops, group projects, webinars, seminars, etc.',
          'Uncompromised sanitation in hostel facilities.',
          'Separate hostel facilities for boys and girls.',
          'Prestigious scholarships are available for students on merit basis.',
          'English medium medical education for international students.',
          'No donations for admission.',
          'No entrance exams like IELTS or TOEFL.',
          'The college is a center of medical research and healthcare facilities.',
          'Extremely qualified teaching faculty and professors.',
          'Advanced infrastructure and well-equipped facilities like innovative laboratories, advanced classrooms, etc.',
          'Advanced library with over 10,000 medical books and journals.',
          'Clinical training at the college hospital on the bedside of patients.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Hygienic hostel facilities, equipped with common rooms, reading rooms, cafeteria, and separate quarters for male and female students. Transportation is provided for off-campus clinical field trips.',
        gallery: []
      },
      {
        id: 'ibn-sina-medical',
        name: 'Ibn Sina Medical College',
        slug: 'ibn-sina-medical-college',
        image: '/images/universities/bangladesh/Ibn-Sina-Medical-College.webp',
        description: 'Established in 2005, Ibn Sina Medical College is a private medical academic institution to study MBBS in Bangladesh that is...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Private Academic Institution',
        established: '2005',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$26,000 (Seat Booking & Admission)', hostel: 'Included in course structure', total: '$40,000 (INR 30 Lakhs)' },
        overview: `Established in 2005, Ibn Sina Medical College is a private medical academic institution to study MBBS in Bangladesh that is located in Kallyanpur of Mirpur Model Thana in Dhaka. The medical college is affiliated with Dhaka University and recognized by the Bangladesh Medical & Dental Council and the Ministry of Health and Family Welfare.

Ibn Sina Medical College offers a 6-year MBBS course that includes one year of clinical training at the teaching and clinical hospital of the college. The highly qualified teaching faculty of the medical college impart medical education in English to its students using modern teaching methodologies. It has two 14 storied buildings, one for academic purposes and another a hospital building with 350-bed facility.`,
        whyStudy: [
          'Affordable MBBS fee structure.',
          'The epitome of quality education in Bangladesh.',
          'Experienced, highly educated, and skilled teaching faculty.',
          'Comfortable hostel facilities for international students.',
          'Well-equipped laboratories, dissection halls, classrooms, library, etc.',
          'Clinical experience to students at the bedside of patients.',
          'Indian food is served in the canteen.',
          'The multicultural environment due to the presence of students from other countries.',
          'Good teacher and student ratio.',
          'No donation or entrance exams for admission.',
          'Renowned visiting faculties from worldwide for enhanced practical exposure to students about medicine.',
          'Great internship opportunity for students at the teaching hospital of the college.',
          'Globally recognized medical degree.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Safe and secured hostel blocks with basic amenities like continuous water and power supply. The college canteen serves hot and fresh Indian food.',
        gallery: []
      },
      {
        id: 'tairunnessa-memorial',
        name: 'Tairunnessa Memorial Medical College',
        slug: 'tairunnessa-memorial-medical-college',
        image: '/images/universities/bangladesh/Tairunnessa-Memorial-Medical-College.webp',
        description: 'Tairunnessa Memorial Medical College is a private medical college in Bangladesh that started its journey in 2002 with a view...',
        location: 'Gazipur, Bangladesh',
        ranking: 'Private Medical College',
        established: '2002',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$38,000 (Admission, Development & Tuition)', hostel: '$3,000 (For 5 Years)', total: '$43,000' },
        overview: `Tairunnessa Memorial Medical College is a private medical college in Bangladesh that started its journey in 2002 with a view to impart high quality medical education to medical aspirants in Bangladesh and across the globe. It has established itself as a strong medical academic institution to study MBBS in Bangladesh in the last 20 years. It is located in Konia, Gazipur, and 9 kilometers away from The Hazrat Shahjalal International Airport.

The college buildings are fully furnished and well-equipped with the latest technology and infrastructure, including classrooms, laboratories, dissection hall, library, museums, common rooms, and cafeteria. Tairunnessa Memorial Medical College was established by Late Moham Shamsul Haque as a center of excellence to promote higher education in medical sciences. There is an impressive and reputed multidisciplinary hospital within the college campus with a 600 beds facility known as the center of excellence for research and heart diseases.`,
        whyStudy: [
          'The cost of studying MBBS at this medical college is affordable.',
          'There is no need to sit for any entrance exam.',
          'No need to pay any donations or capitation fees.',
          'Cutting-edge technology and infrastructure.',
          'Comfortable and fully-furnished hostel accommodation for boys and girls.',
          'Bedside clinical experience at the college teaching and clinical hospital.',
          'English is the medium of instruction for international students.',
          'Co-curricular activities are frequently hosted by the college for student development.',
          'Multicultural environment at the college due to the presence of students from other countries.',
          'Highly-qualified faculty and professors, including specialist doctors, scientists, etc.',
          'Modern teaching methodologies are used to teach students, including conferences, seminars, workshops, debates, webinars, etc.'
        ],
        admissionProcess: [
          'Step 1: Fill and submit the application form of the medical college along with the required documents.',
          'Step 2: Receive an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable separate hostels for boys and girls equipped with basic amenities. The college canteen serves fresh Indian cuisine, and students get bedside training at the 600-bed hospital.',
        gallery: []
      },
      {
        id: 'tmss-medical-college',
        name: 'TMSS Medical College',
        slug: 'tmss-medical-college',
        image: '/images/universities/bangladesh/TMSS-Medical-College.webp',
        description: 'Established in 2008, TMSS Medical College is a top private medical college in Dhaka to study MBBS in Bangladesh that...',
        location: 'Bogra, Bangladesh',
        ranking: 'Top Private College',
        established: '2008',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$44,000 (Total Course Fee)', hostel: 'Included in installments', total: '$44,000' },
        overview: `Established in 2008, TMSS Medical College is a top private medical college in Dhaka to study MBBS in Bangladesh that came into existence after the approval of the Ministry of Health & Family Welfare (MOHFW), Bangladesh Medical and Dental Council (BM&DC), and Rajshahi University. The medical college is well-known for its contributions to the healthcare sector of Bangladesh and established 3 medical technology institutes, 3 medical assistance training schools, one nursing college, one Ayurvedic Unani medical college and hospital, 2 community paramedic institutes, and lastly, the TMSS Medical College.

Over the years, the medical college has gained the reputation of a leading medical education provider of highly qualified physicians, biomedical scientists, dentists, allied health professionals, and public health practitioners. TMSS Medical College has an 850-bed clinical and teaching hospital providing tertiary patient care to patients. At present, TMSS Medical College is one of the largest private medical educational institutions in North Bangladesh, exclusively dedicated to the education of healthcare professionals.`,
        whyStudy: [
          'The faculty at the medical college consists of reputed professors, medical professionals, and researchers.',
          'The teacher and student ratio is 1:10 with a smaller class size.',
          'The college invites renowned specialist doctors, visiting professors, and faculty members from abroad for seminars, conferences, webinars, workshops, and seminars.',
          'The campus of the college is well–connected with other parts of the country.',
          'It promotes bedside teaching and learning for clinical students at its hospital.',
          'The college has a safe and secure environment.',
          'The MBBS course fees at TMSS Medical College is low as compared to Indian medical colleges.',
          'Advanced classrooms equipped with multimedia projectors, Wi-Fi connectivity, and overhead projectors.',
          'There is a lecture gallery complex with a modern sound system and projectors with good internet access.',
          'Facility of medical skill center and a lab at the college to enhance technical skills and practice medicine.',
          'Modernized laboratories and museums for medical students.',
          'An advanced library with 5,629 books and medical journals for teaching, learning, and research activities.',
          'Separate hostel accommodation for boys and girls from other countries.',
          'Hygienic cafeteria and canteen in the campus for students.',
          'Common room facility for students for indoor games.',
          'English is the language of teaching and communication.',
          'No need for any donations or entrance exams to get admission to this college.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa and submit your original passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Prepare your travel luggage.',
          'Step 6: Board your flights to Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Separate hostel accommodation for boys and girls from other countries. The hostels have common dining areas, indoor game facilities, and a reading room. A shuttle service is available for off-campus students.',
        gallery: []
      },
      {
        id: 'popular-medical-college',
        name: 'Popular Medical College',
        slug: 'popular-medical-college',
        image: '/images/universities/bangladesh/Popular-Medical-College.webp',
        description: 'Established in 2010, Popular Medical College is a reputed private medical academic institution that has been successful in providing an...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Reputed Private Institution',
        established: '2010',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$50,000 (Total Admission & Installment Fees)', hostel: '$100/month after the 60th month', total: '$50,000' },
        overview: `Established in 2010, Popular Medical College is a reputed private medical academic institution that has been successful in providing an extensive platform to medical aspirants from worldwide. The college is admired and has attained a significant position for its excellent work in preparing medical students for a successful medical journey ahead. Popular Medical College is a top destination to study MBBS in Bangladesh for Indian students for more than a decade for its top-tier medical education, affordable fee structure, and constructive learning environment.

Located in Dhanmondi in the capital city of Dhaka, Popular Medical College has well-established, fully-furnished hostel accommodation with mess facilities for its students situated nearby to the premises of the college. The medical college is affiliated with Dhaka University and offers a 5-year MBBS course along with 1-year of internship. The MBBS degree of the college is recognized by the Bangladesh Medical and Dental Council.

The primary focus of the college is not just to impart medical education to students, but also ensure character development and strengthening moral values such as respect, human responsibilities, and appreciation for others. It ensures that every student develops ethical values, self-awareness, and confidence during their MBBS studies in Bangladesh.`,
        whyStudy: [
          'High-quality medical education to ensure constructive learning for students.',
          'No need to appear for any entrance exams like IELTS or TOEFL.',
          'No need to give any donations or capitation fees for admission.',
          'The college campus is well-connected by various modes of transport.',
          'Well-furnished twin sharing hostels provided with modern amenities.',
          'Hygienic Indian food is served in the dining hall of the college.',
          'The academic building has a good number of fully-equipped AC lecture halls to accommodate students.',
          'The education unit has modern equipment, games and sport facilities, common rooms, and a guest house for the parents of the students.',
          'Highly qualified, dedicated, well-experienced, and skilled professors, teachers, and lecturers.',
          'Good emphasis on group teaching, problem-based learning, and integrated teaching along with traditional methods of teaching.',
          'Community-based learning is a vital part of the MBBS program.',
          'Every department has well-equipped museum and laboratory facilities.',
          'Advanced classrooms with AC and other facilities.',
          'Air-conditioned library with good quality books and journals.',
          'English is the medium of instruction at the college.',
          'Student assistance center to help students in the development of skills and academics as well as accommodation.'
        ],
        admissionProcess: [
          'Step 1: Fill and submit the application form of the medical college along with the required documents.',
          'Step 2: Receive an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Fully-furnished twin sharing hostels located near the college premises. The hostels are safe and clean, with a dining hall serving hygienic Indian food. There is also a parent guest house available.',
        gallery: []
      },
      {
        id: 'faridpur-diabetes-medical',
        name: 'Faridpur Diabetes Medical College',
        slug: 'faridpur-diabetes-medical-college',
        image: '/images/universities/bangladesh/Faridpur-Diabetes.jpg',
        description: 'Now renowned as Diabetic Association Medical College Hospital, Faridpur Diabetes Medical College is one of the top medical educational institutions...',
        location: 'Faridpur, Bangladesh',
        ranking: 'Top Educational Institution',
        established: '2009',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$39,000 (Admission + Tuition)', hostel: '$3,000 (For 5 Years)', total: '$42,000 (INR 31.5 Lakhs)' },
        overview: `Now renowned as Diabetic Association Medical College Hospital, Faridpur Diabetes Medical College is one of the top medical educational institutions to study MBBS in Bangladesh. Established in 2009, Faridpur Diabetes Medical College is an institution of the Faridpur Diabetic Association (FDA) and holds affiliation with Dhaka University. The medical college is recognized by the Bangladesh Medical & Dental Council (BM&DC) and approved by the Ministry of Health and Family Welfare, Bangladesh.

Ever since the medical college laid its foundation in 2009, Faridpur Diabetes Medical College has successfully gained a good reputation among national and international medical aspirants for not for its high-quality medical education at affordable tuition fees but also for taking care of the comfort of its international students with its fully-furnished hostel facilities. Faridpur Diabetes Medical College has a 500-bed teaching hospital providing tertiary care to patients and clinical services in various departments of medical science. The primary aim of Faridpur Diabetes Medical College is to be a center of excellence for medical education, training, and clinical services.`,
        whyStudy: [
          'Low-cost MBBS fees.',
          'Comfortable and fully-furnished hostel accommodation.',
          'Hygienic Indian food.',
          'Professional and qualified medical faculty and professors.',
          'High standards of medical education.',
          'Multicultural environment due to the presence of international students.',
          'No donations or capitation fees.',
          'No entrance exams like IELTS and TOEFL.',
          'Well-recognized by NMC, WDOMS, BM&DC, ECFMG, etc.',
          'Opportunities to practice medicine in India, the USA, Bangladesh, Americas, etc.',
          'Good teacher and student ratio.',
          'Fully functional teaching hospital with 500-bed facilities.',
          'Modern infrastructure like well-equipped labs, advanced classrooms, etc.',
          'Globally recognized medical degree.'
        ],
        admissionProcess: [
          'Step 1: Submitting the admission form of the university along with the supporting documents.',
          'Step 2: Receive an admission letter from the university.',
          'Step 3: Apply for the student visa while submitting your passport and other documents.',
          'Step 4: Make payment of your first-year tuition fee.',
          'Step 5: Board your flights to Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable and fully-furnished hostels equipped with water, electricity, beds, tables, and chairs. Indian cuisine is served in the college mess, and security is guaranteed through 24/7 CCTV surveillance.',
        gallery: []
      },
      {
        id: 'southern-medical-college',
        name: 'Southern Medical College',
        slug: 'southern-medical-college',
        image: '/images/universities/bangladesh/Southern-Medical-College-1.webp',
        description: 'It is located at East Nasirabad, Khulshi, Chittagong. It is associated with Chittagong Medical University and is fully accredited medical...',
        location: 'Chittagong, Bangladesh',
        ranking: 'Fully Accredited College',
        established: '2005',
        medium: 'English',
        duration: '5 Years (with internship)',
        fees: { tuition: '$39,000 (Total Course Fee)', hostel: '$25-30 per month (for fooding)', total: '$39,000' },
        overview: `Southern Medical College was founded in 2005. It is located at East Nasirabad, Khulshi, Chittagong. It is associated with Chittagong Medical University and is fully accredited medical educational institution formed under the permission of the Ministry of Health & Family Welfare (MOHFW), Government of Bangladesh. It is authorized to intake 65 freshman students, yearly.

The college is modern and well-furnished with sufficient rooms for the lectures, tutorials and practicals. There are also practical room, laboratory, museum and library. The college aims to offer quality education to their students so that they become skilled, devoted and attentive medical graduates achieving their goal of becoming a successful doctor.`,
        whyStudy: [
          'Fully accredited medical educational institution recognized by Chittagong Medical University.',
          'Experienced faculty comprising 194 members including 41 Professors and 31 Associate Professors.',
          'Focuses on student skill-building to become attentive medical graduates.',
          'Affordable tuition package that is pocket-friendly for Indian students.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Board your flights to Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Modern, secured separate hostels for boys and girls with daily essential facilities. The college organizes medical and health camps for students, and the library is fully loaded with books, journals, and internet services.',
        gallery: []
      },
      {
        id: 'barind-medical-college',
        name: 'Barind Medical College Bangladesh',
        slug: 'barind-medical-college-bangladesh',
        image: '/images/universities/bangladesh/barind-medical-college-bangladesh-banner.webp',
        description: 'Barind Medical College is a renowned private medical college in Bangladesh located at the Education Center of Rajshahi.',
        location: 'Rajshahi, Bangladesh',
        ranking: 'Renowned Private College',
        established: '2011',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$40,000 (Total Course Fee)', hostel: 'Included in total', total: '$40,000 (INR 30 Lakhs)' },
        overview: `Barind Medical College is a renowned private medical college in Bangladesh located at the Education Center of Bangladesh, Rajshahi, 252 kilometers northwest of the capital city of Dhaka. Established in 2011, the medical college stands in the list of top 10 medical colleges of Bangladesh of the National Medical Commission. It is led by an excellent and dynamic team of more than 112 highly qualified and skilled professors and teachers to offer top quality medical education to the students.

The college building is well-equipped with the required facilities like spacious lecture halls, advanced laboratories, well-built dissection hall, classrooms, resourceful library with internet facilities, and a cafeteria. The MBBS fee of Barind Medical College is cost-effective for international students as compared to the fees of Indian medical colleges. Moreover, the medical college provides quality medical education and extensive clinical experience to the students. All this makes Barind Medical College in Rajshahi a top choice for MBBS in Bangladesh for Indian students.`,
        whyStudy: [
          'Low MBBS fee as compared to Indian medical colleges.',
          'Quality medical education.',
          'Medical degree valid in India.',
          'Recognized by the National Medical Commission (NMC).',
          'No donation or capitation fee for admission.',
          'No entrance exam for admission.',
          'Well-qualified and skilled medical faculty members, teachers, and professors.',
          'Modern infrastructure and well-equipped laboratories.',
          'Comfortable hostel accommodation for boys and girls.',
          'Adequate practice and international exposure to students.',
          'Spacious classrooms and lecture halls for better theoretical sessions.',
          'Clinical training at the best hospitals and clinics of Bangladesh.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable separate hostels with proper sanitation and high-standard campus security. Reading rooms and internet are available. The mess facility serves Indian food, and the college hosts annual sports and cultural programs.',
        gallery: []
      },
      {
        id: 'dhaka-national-medical',
        name: 'Dhaka National Medical College',
        slug: 'dhaka-national-medical-college',
        image: '/images/universities/bangladesh/dhaka-national-medical-college.webp',
        description: 'It was acquired from its forerunner- The Dhaka National Medical Institute, which had marked its presence in 1925 as a...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Historic Institution',
        established: '1925',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `More details coming soon.`,
        whyStudy: [

        ],
        admissionProcess: [

        ],
        documentsRequired: [

        ],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'rangpur-community-medical',
        name: 'Rangpur Community Medical College',
        slug: 'rangpur-community-medical-college',
        image: '/images/universities/bangladesh/rangpur-community-medical-college-university.webp',
        description: 'Founded in 2008, Rangpur Community Medical College is a well-known medical academic institution in Bangladesh.',
        location: 'Rangpur, Bangladesh',
        ranking: 'Well-known Institution',
        established: '2008',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$41,250 (Admission, Session & Tuition)', hostel: '$2,700 (Seat Rent for 5 Years)', total: '$43,950 (INR 32.96 Lakhs)' },
        overview: `Founded in 2008, Rangpur Community Medical College is a well-known medical academic institution in Bangladesh, contributing to the reformation of medical education for international students for more than a decade. Attracting a good number of international students, the strength of international students, including Indian students at Rangpur Community Medical College is almost 50% of the total students. The medical college is affiliated with the University of Rajshahi and issues a globally recognized medical degree.

At present, 481 international students, out of which there are over 100 Indian students presently pursuing MBBS in Bangladesh at this college. The teaching staff at Rangpur Community Medical College consists of well-known scientists, doctors, surgeons, and professors providing detailed medical knowledge to the students for a successful medical career in the healthcare sector.`,
        whyStudy: [
          'Highly-qualified, dedicated, and experienced professors and lecturers to ensure good quality medical education.',
          'Modern teaching methods using the latest technology are adopted by faculty to groom students.',
          'The presence of the in-house hospital on the campus enables students to interact with patients.',
          'The worldwide recognition of the MBBS degree allows graduates to practice medicine anywhere.',
          'Well-structured and innovative infrastructure at the medical college.',
          '50% seat reservation for international students.',
          'Affordable MBBS fees structure.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable hostel rooms on-campus with all basic amenities. Separate hostels for male and female students from India, serving Indian food. A 750-bed in-house hospital is available for clinical training, and the entire campus is guarded under CCTV security.',
        gallery: []
      },
      {
        id: 'khwaja-yunus-ali-medical',
        name: 'Khwaja Yunus Ali Medical College',
        slug: 'khwaja-yunus-ali-medical-college',
        image: '/images/universities/bangladesh/khwaja-yunus-ali-medical-college.webp',
        description: 'It is registered under the Society of Government of the People Republic of Bangladesh. The college is affiliated with the...',
        location: 'Sirajganj, Bangladesh',
        ranking: 'Affiliated College',
        established: '2005',
        medium: 'English',
        duration: '5 Years (with internship)',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'Affordable Course Fees' },
        overview: `Khwaja Yunus Ali Medical College was founded in the year 2005. It is registered under the Society of Government of the People Republic of Bangladesh. The college is affiliated with the Rajshahi University for MBBS degree and with Bangabandhu Sheikh Mujib Medical University (BSMMU) for postgraduate degrees. The college has a non-profit learning multidisciplinary hospital which is equipped in ways and yet to be available in other hospitals of Bangladesh.

Khwaja Yunus Ali Medical College offers a 5-year MBBS course whose curriculum is governed by the regulations of Bangladesh Medical & Dental Council (BM&DC). The courses are directed by the professional faculty members in pre-clinical, para-clinical and clinical disciplines. The institution focuses on developing student’s skills and attitude, so that they can deal with the health issues generally encountered at the hospital. To enhance their skills the university makes the students to undergo a one-year internship program after passing the final MBBS exam.`,
        whyStudy: [
          'Global level of medical education with high teaching standards.',
          'Equipped with a non-profit learning multidisciplinary teaching hospital.',
          'Internationally valid degrees and affiliations with Rajshahi University.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the medical college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Board your flights to Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Modern, separately secured hostels for both girls and boys located inside the university premises. The campus offers large playgrounds for outdoor sports like football, cricket, and tennis, and promotes co-curricular events.',
        gallery: []
      },
      {
        id: 'marks-medical-college',
        name: 'MARKS Medical College Bangladesh',
        slug: 'marks-medical-college-bangladesh',
        image: '/images/universities/bangladesh/marks-medical-college-bangladesh-banner.jpg',
        description: 'Established in 2011, MARKS Medical College (MRMC) is one of the top private medical colleges for MBBS in Bangladesh.',
        location: 'Dhaka, Bangladesh',
        ranking: 'Top Private College',
        established: '2011',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: 'INR 30 Lakhs (Total including hostel and mess)', hostel: 'Included in total', total: 'INR 30 Lakhs' },
        overview: `Established in 2011, MARKS Medical College (MRMC) is one of the top private medical colleges for MBBS in Bangladesh whose foundation was laid to offer quality medical education, leading to globally recognized medical degrees at affordable prices. The medical college was granted affiliation with Dhaka University and the Bangladesh Medical and Dental Council also recognized the college.

MARKS Medical College in Dhaka owns new 9 storied spacious buildings for all the departments and sufficient parking facilities. There is an attached 30 bedded hospital providing tertiary care medical facility and excellent internship opportunities to students and new doctors. This medical college ensures quality education to students under proper guidance and supervision to help enable them to perform better in medical education in an appropriate environment.`,
        whyStudy: [
          'Affordable MBBS fees',
          'High-quality medical education',
          'No donations',
          'No entrance exams',
          'Complete development of students',
          'Highly-qualified, skilled, and experienced teachers and professors',
          'English is the medium of teaching',
          'Comfortable and fully-furnished hostel facilities',
          'Indian food',
          'In-house hospital for clinical practice',
          'Modern infrastructure',
          'Well-equipped laboratories',
          '24/7 security of students'
        ],
        admissionProcess: [
          'Step 1: Fill out the medical college’s entry admission form and submit it together with the necessary paperwork.',
          'Step 2: Obtain an acceptance or invitation letter from the college.',
          'Step 3: Submit your passport and other supporting documents to apply for a student visa.',
          'Step 4: Pay your first year’s tuition. Rus Education can walk you through the procedure if you decide to apply for an education loan.',
          'Step 5: Fill your luggage with all the necessities you’ll need in Bangladesh.',
          'Step 6: Take a flight to Bangladesh and start your MBBS program there.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable on-campus separate hostels for boys and girls with modern amenities. An in-house library and spacious classrooms are available. Students undergo a 1-year clinical internship at the attached teaching hospital.',
        gallery: []
      },
      {
        id: 'uttara-womens-medical',
        name: 'Uttara Women’s Medical College Bangladesh',
        slug: 'uttara-womens-medical-college-bangladesh',
        image: '/images/universities/bangladesh/uttara-womens-medical-college-bangladesh-banner.webp',
        description: 'Also known as Medical College For Women and Hospital, Uttara Women’s Medical College is one of the best medical colleges...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Best Women’s College',
        established: '1992',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$30,000 (5 Years Tuition)', hostel: 'Included in total', total: '$46,000 (INR 34.5 Lakhs)' },
        overview: `Also known as Medical College For Women and Hospital, Uttara Women’s Medical College is one of the best medical colleges for MBBS in Bangladesh exclusively for women. The college was established in the year 1992 with an aim to offer quality medical education to all local and international students of Bangladesh at an affordable cost. Dhaka University has affiliated Uttara Women’s Medical College as a constituent college.

The college has 20 departments with 121 highly qualified and experienced faculty members. Bangladesh Medical and Dental Council and the Medical Board of California have recognized the college. The degree awarded by Uttara Women’s Medical College is accepted worldwide owing to its global recognition. A 500 bedded hospital is affiliated with the college, and both the hospital and the college is under the governance of a non-political and non-profitable organization – “The Medical & Health Welfare Trust”.`,
        whyStudy: [
          '30 years of excellence in producing world-class doctors.',
          'The college, hostel, and hospital are on the same campus.',
          'MBBS fee for Indian students is affordable.',
          '45% seat reservation for foreign students.',
          'English is the medium of instruction.',
          'No entrance exam',
          'No donations for admission',
          'Hostel accommodation with access to all amenities',
          'Indian food in mess facility',
          'Located in a safe location in Uttara in close proximity to grocery shops and restaurants.',
          'The college is located at 15 minutes walking distance from Dhaka Airport.',
          'Students get to receive honors from Dhaka University.',
          'Highly qualified medical faculty.',
          'Internship of students at the in-house hospital of the medical college.',
          'Highest number of full-time professors and lectures, unlike other colleges.'
        ],
        admissionProcess: [
          'Step 1: Fill and submit the application form of the medical college along with the required documents.',
          'Step 2: Receive an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Safe and comfortable twin-sharing rooms with central cooling and heating systems. Laundry and mess services are available with subsidized Indian meals. Classrooms and libraries are fully air-conditioned with round-the-clock reading rooms.',
        gallery: []
      },
      {
        id: 'ustc-chittagong',
        name: 'University Of Science And Technology Chittagong',
        slug: 'university-of-science-and-technology-chittagong',
        image: '/images/universities/bangladesh/university-of-science-and-technology-chittagong.webp',
        description: 'USTC is a private university which was started as Institute of Applied Health Sciences (IAHS). After a few years, the...',
        location: 'Chittagong, Bangladesh',
        ranking: 'Private University',
        established: '1989',
        medium: 'English',
        duration: '5 Years (with internship)',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'Affordable Course Fees' },
        overview: `University of Science & Technology Chittagong (USTC) was established in the year 1989 with the sponsorship of a private charity. USTC is a private university which was started as Institute of Applied Health Sciences (IAHS). After a few years, the university was upgraded to a full phased university after the promulgation of the Private University Act, 1992.

Initially, USTC had only two professors and nine lecturers whereas now the number of full-time teachers is 355 and almost 4,200 students. Out of the total strength around 1200 students are from other countries like India, Nepal, Malaysia, Sri Lanka, Bhutan, Jordan, Palestine, and the United States, among others. The university not only provides academic courses to the students but also encourages the students to take active participation in extracurricular activities such as sports and games, debates, seminars and cultural activities.`,
        whyStudy: [
          'A chance to interact with students coming from all corners of the world, representing various cultures.',
          'Studying in a foreign land makes students responsible and independent individuals.',
          'Focused approach to clinical practice helps students become highly successful doctors.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Modern separate hostels for international students with high security, continuous water, power supply, and standard reading room facilities.',
        gallery: []
      },
      {
        id: 'parkview-medical-college',
        name: 'Parkview Medical College Sylhet Bangladesh',
        slug: 'parkview-medical-college-sylhet-bangladesh',
        image: '/images/universities/bangladesh/parkview-medical-college-bangladesh-banner.jpg',
        description: 'Established in 2013, Parkview Medical College is a renowned non-government medical college in Bangladesh popular for providing high standard of medical education to national and international students at affordable MBBS fees...',
        location: 'Sylhet, Bangladesh',
        ranking: 'Renowned Non-government College',
        established: '2013',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$35,000 (Total Course Fee)', hostel: 'Contact for details', total: '$35,000 (INR 26.25 Lakhs)' },
        overview: `Established in 2013, Parkview Medical College is a renowned non-government medical college in Bangladesh popular for providing high standard of medical education to national and international students at affordable MBBS fees. The private medical college popular for studying MBBS in Bangladesh attracts a good number of students around the globe ambitious about becoming good doctors of the future.

Located in the Education City of Bangladesh, Sylhet, Parkview Medical College offers hi-tech infrastructure, low fee structure, balanced student life, excellent security systems, extra-curricular activities, and international practical exposure to its students. The multicultural environment at the medical college due to the presence of an international diaspora of students is another exciting factor to join this Bangladesh medical college.`,
        whyStudy: [
          'The MBBS fee in Bangladesh of Parkview Medical College is affordable.',
          'English is the medium of teaching.',
          'The college is NMC-recognized for the benefit of Indian students.',
          'The faculty members are highly-qualified.',
          'State-of-the-art infrastructure at the university.',
          'Spacious classrooms and tutorial room for every department.',
          'Laboratories and dissection facilities available for all students.',
          'The MBBS curriculum of the college is similar to the Indian MBBS curriculum.',
          'Separate hostel accommodation for boys and girls.',
          'No need to pay donation and capitation fees.',
          'Indian food is available in the college canteen.',
          'A good strength of Indian students studying MBBS in the college.',
          'Clinical training at in-house hospital of the college.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable separate hostel facilities for boys and girls on campus under strong security. The hostlers have access to an Indian mess serving delicious and hygienic Indian food.',
        gallery: []
      },
      {
        id: 'university-of-rajshahi',
        name: 'University Of Rajshahi',
        slug: 'university-of-rajshahi',
        image: '/images/universities/bangladesh/University-of-Rajshahi.webp',
        description: 'The University of Rajshahi is a state funded college situated in Rajshahi city in north-western Bangladesh. The college is likewise usually known as Rajshahi University...',
        location: 'Rajshahi, Bangladesh',
        ranking: 'State Funded University',
        established: '1953',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'State-funded Affordable Fees' },
        overview: `The University of Rajshahi is a state funded college situated in Rajshahi city in north-western Bangladesh. The college is likewise usually known as Rajshahi University. The college was set up in the year 1953. According to the Bangladesh University Ranking in 2017, Rajshahi University is recorded on the third place among top colleges in the nation.

At present, there are 52 departments in the University of Rajshahi which are distinguished 9 faculties. The grounds of the college is situated in Motihar spread over a zone of 753 sections of land and is around 3 kilometers from the Rajshahi downtown area. Holding around 25,000 students and approx 1000 scholarly staff, Rajshahi University is one of the biggest colleges in Bangladesh.

Withstanding programs in designing, expressions, law, sciences, farming, sociologies, business studies and medicinal sciences, the college houses various organizations of higher investigations. The college is kept running as per the Rajshahi University Act of 1973.`,
        whyStudy: [
          'A state-funded university ranked 3rd among the top colleges in Bangladesh.',
          'Stretches across a massive 753-acre campus with superb infrastructure.',
          'Fascinating student life with basic and modern amenities provided.',
          'Dazzling cultural life celebrating prominent festivals from around the world.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Excellent separate hostel facilities for international students, fully equipped with basic and modern amenities under 24/7 security.',
        gallery: []
      },
      {
        id: 'university-of-dhaka',
        name: 'University Of Dhaka',
        slug: 'university-of-dhaka',
        image: '/images/universities/bangladesh/University-of-Dhaka.webp',
        description: 'The University of Dhaka was founded by many scholars in the field of education in 1921, during the British Raj and is considered as one of the oldest universities in the country...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Premier University',
        established: '1921',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'Affordable Public Tuition' },
        overview: `The University of Dhaka was founded by many scholars in the field of education in 1921, during the British Raj and is considered as one of the oldest universities in the country. It has also been awarded as the top position in ranking of the Universities across Bangladesh in 2017.

The University of Dhaka is also one of the largest public universities in Bangladesh and has already educated more than 33,000 students with the help of approximately 1800 faculty members. The University has also been included in the Top 100 Universities of Asia.`,
        whyStudy: [
          'Ranked as the #1 university across Bangladesh and included in the Top 100 Universities of Asia.',
          'Highly affordable education rates allowing international students to enroll and reap maximum benefits.',
          'Strong management that conducts regular development programs for the faculty to keep students updated.',
          'Resourceful libraries and online journal collections to understand the nuances of medical studies.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Safe and secured hostel accommodations on campus for international students with easy access to libraries and advanced classrooms.',
        gallery: []
      },
      {
        id: 'shahjalal-university',
        name: 'Shahjalal University Of Science And Technology',
        slug: 'shahjalal-university-of-science-and-technology',
        image: '/images/universities/bangladesh/shahjalal-university-of-science-and-technology.webp',
        description: 'Shahjalal University of Science and Technology (SUST) is a public research university situated in Sylhet, Bangladesh...',
        location: 'Sylhet, Bangladesh',
        ranking: 'Science and Technology University',
        established: '1986',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'Affordable Public Research University Fees' },
        overview: `Shahjalal University of Science and Technology (SUST) is a public research university situated in Sylhet, Bangladesh. Shahjahal University of Science and Technology is also one of the pioneers in the industry to implement the credit system used in American Universities to bring the students at par with the rest of the world. One of the most distinguished feature for Shahjahal University of Science 7 Technology is that it offers Ph.D. programs to the students.

The Government of Bangladesh had formulated the University Act and by virtue of the same act in 1986, the Shahjahal University of Science & Technology was established. The university has been conferred with various titles like specialized institute for Science & Technology by virtue of the versatile faculties available at the University.

Kumargaon, almost 15 minutes drive away from the heart of Syllhet City Centre is the location of Shahjahal University of Science & Technology. In the early days, there were only three departments - Physics, Economics & Chemistry; instituted in the curriculum for the students. Later, the number of faculties offered was increased and help the students to acquire the skill-set for building a better future. SUST is also one of those few university, who have offered free Wifi to the students and encourage them to explore the advancements in their subject across the globe.`,
        whyStudy: [
          'Pioneer university implementing American credit system formats.',
          'Offers Ph.D. programs and research-oriented medical curriculums.',
          'World-class education center with a vast, helpful alumni network for early industry exposure.',
          'Equipped campus providing free Wi-Fi and advanced laboratory equipment.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Excellent quality hostel facilities equipped with all modern amenities. The hostlers have access to reading rooms, sports complexes, and extensive playgrounds within the campus.',
        gallery: []
      },
      {
        id: 'gono-bishwabiddalay',
        name: 'Gono Bishwabiddalay Bangladesh',
        slug: 'gono-bishwabiddalay-bangladesh',
        image: '/images/universities/bangladesh/gono-bishwabiddalay-bangladesh.webp',
        description: 'Gono Bishwabiddalay, Bangladesh, also known as Gono Bishwabidyalay established in Savar, Bangladesh on 14th July, 1998 by the eminent academicians...',
        location: 'Savar, Bangladesh',
        ranking: 'Non-government University',
        established: '1998',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD (Contact for Details)', hostel: 'Available on campus', total: 'Economical Fee Structures' },
        overview: `Gono Bishwabiddalay, Bangladesh, also known as Gono Bishwabidyalay established in Savar, Bangladesh on 14th July, 1998 by the eminent academicians. The premises in Nalam, Savar is used for academic and administrative purposes for the University. The University has been approved and recognized by multiple councils across the globe like UGC in 1998.`,
        whyStudy: [
          'Approved and recognized by UGC and major global medical councils.',
          'Emphasis on overall student growth, incorporating physical exercise and regular sports.',
          'Large playgrounds on campus including Badminton Courts and Football Fields.',
          'Vibrant cultural calendar year-round including poems, music, and debates for holistic personality development.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Spacious and secure hostelling quarters for students. Close proximity to sports fields, badminton courts, and dining facilities serving nutritious meals.',
        gallery: []
      },
      {
        id: 'bup-bangladesh',
        name: 'Bangladesh University Of Professionals',
        slug: 'bangladesh-university-of-professionals',
        image: '/images/universities/bangladesh/bangladesh-university-of-professionals.webp',
        description: 'Established in June, 2008, BUP is one of the best universities in Bangladesh that offers courses to the students from...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Best University',
        established: '2008',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `More details coming soon.`,
        whyStudy: [

        ],
        admissionProcess: [

        ],
        documentsRequired: [

        ],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'khulna-city-medical',
        name: 'Khulna City Medical College Bangladesh',
        slug: 'khulna-city-medical-college-bangladesh',
        image: '/images/universities/bangladesh/khulna-city-dental-college-bangladesh-banner.webp',
        description: 'Founded in 2016, Khulna City Medical College (KCMC) is one of the top private medical colleges in Bangladesh located in...',
        location: 'Khulna, Bangladesh',
        ranking: 'Top Private College',
        established: '2016',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: `More details coming soon.`,
        whyStudy: [

        ],
        admissionProcess: [

        ],
        documentsRequired: [

        ],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'anwer-khan-modern',
        name: 'Anwer Khan Modern Medical College',
        slug: 'anwer-khan-modern-medical-college',
        image: '/images/universities/bangladesh/anwer-khan-modern-medical-college.webp',
        description: 'Anwer Khan Modern Medical College (AKMMC) started its journey in 2008 in Dhanmondi, Dhaka, and has eventually become one of the top medical colleges to study MBBS in Bangladesh...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Prestigious Medical School',
        established: '2008',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$30,000 (At the time of admission)', hostel: 'Included in course details', total: '$45,000 (INR 33,75,000/-)' },
        overview: `Anwer Khan Modern Medical College (AKMMC) started its journey in 2008 in Dhanmondi, Dhaka, and has eventually become one of the top medical colleges to study MBBS in Bangladesh for Indian students. The medical college in Bangladesh is widely recognized and offers a 5-year MBBS program in English with one year of internship to its students. It has a state-of-the-art infrastructure, scholar faculties and lecturers, diverse student life, comfortable hostel accommodation, etc.

AKMMC was established to promote high quality medical education, research, and healthcare services in Bangladesh. Being located in the capital city of Dhaka, the college attracts many national and international students. It is attached to a 750-bed teaching hospital, Anwer Khan Modern Medical College Hospital, where students get practical exposure while diagnosing and treating real patients.`,
        whyStudy: [
          'The tuition fee of the college is affordable for all students.',
          'Recognized, approved and listed under NMC, BMDC, FAIMER, WDOMS, IMED, etc.',
          'Awards globally recognized medical degree to international students.',
          'Experienced, dedicated, qualified, and well-trained faculty members.',
          'Modern campus with latest infrastructural facilities.',
          'No extra charges like donations or capitation fees for admission.',
          'Comfortable and affordable hostel facilities for students.',
          'English is the language of the MBBS course.',
          'Medical graduates of this college can appear for all medical licensing exams like FMGE.',
          'Clinical rotations in the college hospital under the guidance of qualified doctors.',
          'Hygienic food is served in the college canteen and cafeteria.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the college.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Cozy and comfortable twin-sharing rooms. Canteens and canteens serve nutritious meals, and the entire block is monitored under 24/7 security with wardens on every floor.',
        gallery: []
      },
      {
        id: 'medical-college-women-uttara',
        name: 'Medical College For Women And Hospital, Uttara',
        slug: 'medical-college-for-women-and-hospital-uttara',
        image: '/images/universities/bangladesh/medical-college-for-women-and-hospital-uttara.webp',
        description: 'Medical College for Women and Hospital is one of the Best Medical Colleges exclusively for women providing MBBS in Bangladesh...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Quality Medical Education',
        established: '1992',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$30,000 (2nd to 5th Year Total)', hostel: '$130 / Month', total: '$46,000 (First Year Fee: $16,000)' },
        overview: `Medical College for Women and Hospital is one of the Best Medical Colleges exclusively for women providing MBBS in Bangladesh. The college was established in the year 1992 with an aim to offer quality medical education to all local and international students of Bangladesh at an affordable cost. Dhaka University has affiliated Medical College for Women and Hospital as a constituent college.

The college has 20 departments with 121 highly qualified and experienced faculty members. Bangladesh Medical and Dental Council and the Medical Board of California have recognized the college. The degree awarded by Medical College for Women and Hospital is approved and recognized by the Medical Council of India (MCI) and is enlisted with WDOMS (World Directory of Medical Schools).

A 500 bedded hospital is affiliated with the college, and both the hospital and the college is under the governance of a non-political and non-profitable organization - “The Medical & Health Welfare Trust”.`,
        whyStudy: [
          'Top-tier women-only medical college in Bangladesh since 1992.',
          'Offers comprehensive development options with dynamic cultural calendars and sports activities.',
          'All Indian national festivals are celebrated on campus to prevent homesickness.',
          'Fully furnished twin-sharing rooms with central cooling and heating systems.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Comfortable and highly safe hostelling environment exclusively for women, offering twin-sharing rooms equipped with central cooling, heating, and laundry services. Subsidized Indian food is served in the mess.',
        gallery: []
      },
      {
        id: 'mh-samorita-medical',
        name: 'MH Samorita Medical College',
        slug: 'mh-samorita-medical-college',
        image: '/images/universities/bangladesh/MH-samorita-medical-college.webp',
        description: 'MH Samorita Medical College is one of the prominent medical colleges to study MBBS in Bangladesh. It was founded in 2010 and is located in the capital city of Bangladesh- Dhaka...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Prominent Medical College',
        established: '2010',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: '$41,000 (Only Tuition Fee)', hostel: '$50 / Month', total: '$41,000 (Admission: $17,000)' },
        overview: `MH Samorita Medical College is one of the prominent medical colleges to study MBBS in Bangladesh. It was founded in 2010 and is located in the capital city of Bangladesh- Dhaka. MH Samorita Medical College is majorly known for its Dental Medical Education offered at an affordable cost.

MH Samorita Medical College is affiliated by Dhaka University and is recognized by MCI (Medical Council of India) and is enlisted with WDOMS (World Directory of Medical Schools).

The college has teaching hospital affiliated with it which can accommodate 500 patients at a time, and is known for delivering both general and specialized services such as ICU, CCU, NICU, HDU and Dialysis unit. Students are offered vast practical exposure due to high patient inflow.`,
        whyStudy: [
          'Dental and general medical programs offered at highly affordable packages.',
          'Dynamic practical exposure due to a highly functional 500-bed teaching hospital.',
          'Vibrant student center where students from different countries mingle and host interactive sessions.',
          'Option for self-cooking with kitchens provided on every floor of the hostels.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Separate accommodation blocks for boys and girls with twin-sharing rooms. Rooms are fully furnished with central cooling and heating, laundry, and a kitchen on every floor for self-cooking.',
        gallery: []
      },
      {
        id: 'sirajul-islam-medical',
        name: 'Sirajul Islam Medical College And Hospital',
        slug: 'sirajul-islam-medical-college-and-hospital',
        image: '/images/universities/bangladesh/sirajul-islam-medical-college-and-hospital.webp',
        description: 'Dr. Sirajul Islam Medical College (SIMC) is one of the known medical colleges offering MBBS in Bangladesh at an affordable cost. The College was established in the year 2011...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Constituent College',
        established: '2011',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: '$40,000 (Only Tuition Fee)', hostel: '$50 / Month', total: '$40,000 (Admission: $19,000)' },
        overview: `Dr. Sirajul Islam Medical College (SIMC) is one of the known medical colleges offering MBBS in Bangladesh at an affordable cost. The College was established in the year 2011 and is located in Maghbazar, Dhaka.

Dhaka University affiliated it as a constituent college. One year internship is mandatory for all medical graduates after completion of the 5-year medical program. The college is recognized by the Bangladesh Medical & Dental Council (BMDC) and the Ministry of Health & Family Welfare. The degree awarded by Dr. Sirajul Islam Medical College & Hospital is recognized by various medical council bodies such as MCI (Medical Council of India) and other medical council bodies. Medical graduates from Dr. Sirajul Islam Medical College & Hospital are eligible to practice their medical career in any country in the world, after qualifying the FMGE of that country.

The college has a 12 storied modern academic building along with a 500 bedded hospital at the heart of the Dhaka city.`,
        whyStudy: [
          'Highly affordable MBBS package at the heart of Dhaka City.',
          '12-storied modern academic facility and a busy 500-bed clinical hospital.',
          'Encourages participation in humanitarian services like free blood donation and calamity relief.',
          'Hosts active debates, student exchange programs, and sports championships.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Modern hostel accommodations on twin sharing basis. The rooms are fully furnished with central heating/cooling, laundry services, and a common leisure room with a TV on every floor.',
        gallery: []
      },
      {
        id: 'shahabuddin-medical',
        name: 'Shahabuddin Medical College',
        slug: 'shahabuddin-medical-college',
        image: '/images/universities/bangladesh/shahabuddin-medical-college.webp',
        description: 'Shahabuddin Medical College is a well-known medical college in Bangladesh offering MBBS to all international students at an affordable cost...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Heart of Dhaka College',
        established: '2003',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$45,000 (Total Course Fee)', hostel: 'Included in total', total: '$45,000 (INR 33,75,000/-)' },
        overview: `Shahabuddin Medical College is a well-known medical college in Bangladesh offering MBBS to all international students at an affordable cost. The college was founded in 2003 and is situated in the heart of the Dhaka City- Gulshan. The college is duly recognized by the Bangladesh Medical & Dental Council and the Ministry of Health and Family Welfare.

Shahabuddin Medical College is enrolled with WDOMS (World Directory of Medical Schools) and IMED (International Medical Education Directory).

The college has an affiliated hospital of 500 beds, giving students a vast practical exposure due to the high inflow of patients. Medical graduates are eligible to practice their medical career in any part of the world after qualifying the FMGE.

The faculty members are highly experienced and qualified in their respective fields.

At present, the college has students from various countries including India, Pakistan, Nepal, and other countries.`,
        whyStudy: [
          'Affordable course fees with NMC recognition and Dhaka University affiliation.',
          'Vast clinical exposure at a 500-bed hospital situated in Gulshan, Dhaka.',
          'Library incorporating reference textbooks, manuscripts, and international journals.',
          'Comfortable twin-sharing rooms with CCTV security and warden supervision.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Separate hostel blocks for boys and girls with twin-sharing rooms. Hostels are fully furnished, and the campus has a cafeteria serving delicious Indian food under CCTV surveillance.',
        gallery: []
      },
      {
        id: 'enam-medical-college',
        name: 'Enam Medical College And Hospital',
        slug: 'enam-medical-college-and-hospital',
        image: '/images/universities/bangladesh/enam-medical-college-and-hospital.webp',
        description: 'Enam Medical College is one of the best and renowned medical colleges offering MBBS at an affordable cost to all students who are planning to study MBBS in Bangladesh...',
        location: 'Savar, Bangladesh',
        ranking: 'Recognized College',
        established: '2003',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: '$40,000 (Total Tuition of 5 Years)', hostel: '$100 / Month', total: '$40,000 (Admission: $20,000)' },
        overview: `Enam Medical College is one of the best and renowned medical colleges offering MBBS at an affordable cost to all students who are planning to study MBBS in Bangladesh. The college was established in 2003, matching up all the criteria proposed by the Ministry of Health and Family Welfare, University of Dhaka and Bangladesh Medical & Dental Council.

The College is recognized by the Medical Council of India (MCI), Bangladesh Dental & Medical Council, University of Dhaka, FAIMER, IMED, and other medical council bodies and is enlisted with WDOMS (World Directory of Medical Schools).

The College is known for its high quality medical education along with the professional development of the medical students. The faculties are highly qualified and experienced. Enam Medical College and Hospital is favorable among Indian students because the college uses the English language as the medium of instruction. Every year, the college reserves 25% of the total seats for international students.`,
        whyStudy: [
          'Reserves 25% of total seats exclusively for international students.',
          'Close walking distance to shopping complexes, restaurants, and transport points.',
          'High quality clinical training under experienced professors.',
          'Holistic development with active sports tournaments and cultural programs.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form and submit the required documents.',
          'Step 2: Get an admission/invitation letter.',
          'Step 3: Apply for the student visa.',
          'Step 4: Pay your tuition fees for the first year.',
          'Step 5: Pack your bags and board your flights.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Cozy and fully furnished hostel rooms on twin sharing basis. Canteens provide delicious Indian meals, and hostels are close to nearby shopping spots.',
        gallery: []
      },
      {
        id: 'zh-sikder-womens',
        name: 'Z.H. Sikder Women’s Medical College',
        slug: 'zh-sikder-womens-medical-college',
        image: '/images/universities/bangladesh/Z.H.-Sikder-Womens-Medical-College.webp',
        description: 'Z.H. Sikder Women’s Medical College is one of the renowned medical colleges for students especially for women planning to study MBBS in Bangladesh. The college was founded in 1992 and is situated in the capital city of Dhaka...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Historical Women’s College',
        established: '1992',
        medium: 'English',
        duration: '6 Years (with internship)',
        fees: { tuition: '$42,000 (Total Tuition & Installments)', hostel: 'Included in food & other charges ($100/mo)', total: '$42,000 (Seat Booking & Offer: $5,000)' },
        overview: `Z.H. Sikder Women’s Medical College is one of the renowned medical colleges for students especially for women planning to study MBBS in Bangladesh. The college was founded in 1992 and is situated in the capital city of Dhaka. The degree offered by the college is recognized by the National Medical Commission (NMC), Medical & Dental Council of Bangladesh (BMDC) and is listed with WDOMS (World Directory of Medical Schools).

The medical college offers a 6-year MBBS program, including one-year clinical training at the college’s teaching hospital. It is a popular destination among international medical aspirants as 50% of the MBBS seats are reserved for them. The college is majorly famous among Indian students as the college uses the English language as the medium of instructions. After the completion of the final MBBS examination, students have to undergo one year of hospital internship to gain experience in patient care in numerous medical departments.`,
        whyStudy: [
          'Exclusively for women with a safe, secure, and supportive campus.',
          'Reserves 50% of its MBBS seats for international aspirants.',
          'Spacious lecture galleries and specialized laboratories for anatomy and dissection.',
          'Vibrant atmosphere to build long-lasting friendships with peers from India and other nations.'
        ],
        admissionProcess: [
          'Step 1: Fill up the admission form from the university and submit the required documents.',
          'Step 2: Get an admission/invitation letter from the university.',
          'Step 3: Apply for the student visa by submitting your passport and other supporting documents.',
          'Step 4: Pay your tuition fees for the first year. If availing an education loan, Rus Education will take you through the process.',
          'Step 5: Pack your bags with all the essential items you will require in Bangladesh.',
          'Step 6: Board your flights to Bangladesh and begin your journey of MBBS in Bangladesh.'
        ],
        documentsRequired: [
          '10th mark sheet and certificate',
          '11th mark sheet',
          '12th mark sheet and certificate',
          'Original passport',
          'Police clearance certificate',
          'Affidavit (sponsorship)',
          'Bank statement (six months)',
          'University admission letter',
          'University fee confirmation letter',
          'Equivalence certificate (from university)',
          'University admission form',
          'Visa application form',
          '12 Photographs on matt paper',
          'Equivalence TT copy',
          'University fee TT copy',
          'Demand draft in favor of Bangladesh High Commission'
        ],
        hostelFacility: 'Highly comfortable and secure girls-only hostels with twin-sharing rooms. Equipped with central cooling/heating, laundry system, and an Indian mess serving quality Indian food.',
        gallery: []
      }
    ]
  },
  {
    id: 'china',
    name: 'China',
    slug: 'china',
    flag: '/flag-china.png',
    image: '/images/countries/china.png',
    description: 'Home to some of the world\'s top-ranked medical universities with ultra-modern infrastructure.',
    startingPrice: '₹20 Lakhs',
    uniCount: 20,
    universities: [
      {
        id: 'harbin-medical',
        name: 'Harbin Medical University',
        slug: 'harbin-medical-university',
        image: '/images/universities/China/Harbin-Medical-University.webp',
        description: 'Harbin Medical University (HMU) is situated in Harbin, Heilongjiang region. HMU was established in 1926 and brags of a background marked by brilliance and rich traditions.',
        location: 'Harbin, China',
        ranking: 'AAA Graded',
        established: '1926',
        medium: 'English',
        duration: '6 Years (with 1 year internship)',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', total: '₹20 Lakhs (Approx. 6 Years)' },
        overview: `Harbin Medical University (HMU) is situated in Harbin, Heilongjiang region. HMU has a beautiful green grounds of 2.36 million square meters with structures of old engineering styles.

HMU was established in 1926 and brags of a background marked by brilliance and rich traditions.

Harbin Medical University is enrolled in the official therapeutic registries of WHO, and its M.D. degree is perceived by the Medical Council of India (MCI), Bangladesh, Jordan and numerous other Asian nations without a prerequisite for degree tryout and approval. Alumni of HMU can get a therapeutic permit in the wake of passing particular board exams required in nations of North America, Europe or different mainlands, for example, USA, Canada, UK, Australia.

Harbin Medical University has associations with the accompanying worldwide associations and affiliations:
- School of Clinical Medicine
- School of Basic Medical Sciences
- School of Public Health
- Center for Epidemic Disease
- School of Pharmacy
- School of Biological Information and Technology
- School of Humanity and Social Sciences`,
        whyStudy: [
          'A staff of more than 10,000 personnel are always at hands to provide services to the students.',
          'HMU staff gladly incorporates one academician of the Chinese Academy of Engineering and one Nightingale Prize victor.',
          'More than 70 employees have been allowed different prizes including Chinese Outstanding Young Teacher Award, Wu Jieping Medical Research Award, and Paul Jassen Award in Pharmacy.',
          'Highly experienced faculty on board for sure means the best clinical and theoretical knowledge for the students.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Harbin Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Spacious student dormitory rooms with hot water, heater, air conditioner, and separate bathroom facilities. The campus canteen offers a variety of food including options suitable for international students.',
        gallery: []
      },
      {
        id: 'xinjiang-medical',
        name: 'Xinjiang Medical University',
        slug: 'xinjiang-medical-university',
        image: '/images/universities/China/xinjiang-medical-university.webp',
        description: 'Since 1992, Xinjiang Medical University is providing admissions to foreign students. All subjects are taught in English language with curriculum emphasizing medicine, linguistics, and management.',
        location: 'Urumqi, China',
        ranking: 'Top Tier in Xinjiang',
        established: '1956',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', total: '₹21 Lakhs (Approx. 6 Years)' },
        overview: `Since 1992, Xinjiang Medical University has been providing admissions to foreign students. In the year 2001, the University began to recruit undergraduate students on a large-scale. The students are from various countries like Japan, Kazakhstan, Korea, Kingdom of Saudi Arabia, Pakistan, the United Arab Emirates, the United States of America, and the United Kingdom.

In June 2004, Xinjiang Medical University set up an International Education College for students to improve its academic levels and overall management. The University has a highly-qualified teaching staff with a great deal of teaching experience. The International Education College has incorporated advanced educational techniques from foreign educational systems.

All subjects are taught in the English language. The curriculum places a particular emphasis on medicine, linguistics, and management. The university facilitates 25 specialties for undergraduate whereas 17 specialties for academic education. Over 50,000 students have been educated at XMU.

XMU is at the base of Carp Hill in northeast Urumqi and its campus is spread in an area of about 3 million square feet. Xinjiang and its bordering countries share similar geography, culture, dietary habits, and religious beliefs. Benefited by those similarities, students can adapt themselves to university study and life in a short period of time without much effort. The university is well-equipped with advanced multi-media classrooms, a variety of advanced laboratories, a spacious library, and fully-equipped living facilities for students, in order to provide students from all over the world a good learning and living environment.`,
        whyStudy: [
          'Various charity events and sports competitions are held regularly for the students.',
          'Spacious Library with a vast amount of study material and an animal facility.',
          'Modern student accommodation, a volunteers’ center, a publishing house, and much more.',
          'Geographical and cultural similarities make it highly comfortable for international students to adapt quickly.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Xinjiang Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Fully equipped living facilities for international students, with spacious shared dormitory rooms, 24/7 security, high-speed internet, heating, and laundry systems.',
        gallery: []
      },
      {
        id: 'xuzhou-medical-college',
        name: 'Xuzhou Medical College',
        slug: 'xuzhou-medical-college',
        image: '/images/universities/China/xuzhou-medical-college.webp',
        description: 'Xuzhou Medical College is a fully-accredited institution of higher education under the direct administration of Jiangsu Provincial Government. Established in 1958, XZMC has developed into the center of medical education, services, and research.',
        location: 'Xuzhou, China',
        ranking: 'Key Provincial University',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', total: '₹20 Lakhs (Approx. 6 Years)' },
        overview: `Xuzhou Medical College is situated in Xuzhou, Jiangsu Province. It is a fully-accredited institution of higher education under the direct administration of Jiangsu Provincial Government. Since 1958, XZMC has developed into the center of medical education, services, and research in the northern Jiangsu Province and in the Huaihai Economic Zone.

The medical institution educates potential medical professionals with professional preparation from the baccalaureate through the doctorate program. XZMC provides a collaborative, learning-centered environment in which highly qualified and diverse faculty, staff, and students integrate teaching, research, internship, scholarship, creative activity, and community service. Through intellectual, social and cultural contributions, the college enriches the lives of those in the campus community and surrounding region.

There is one key developing discipline of Anesthesiology supported by the national foundation, 5 other key disciplines at the provincial level, 2 key laboratories at the provincial level, 4 research institutions, 5 research centers, and 19 independent research sections. XZMC covers an area of 4000 square meters.

Faculties:
- Clinical Medicine
- Anesthesiology
- Optometry
- Medical Imageology
- Technology of Medical Examination
- Medical Informatics
- Medical Rehabilitation
- Preventive Medicine
- Nutriology
- Stomatology
- Oral Restoration Technology
- Pharmacology
- Clinical Pharmacology
- Pharmaceutical preparation
- Biomedical Engineering and Public Administration
- Medical Imaging Engineering`,
        whyStudy: [
          'Strong national foundation support with a key developing discipline in Anesthesiology.',
          'Contains 5 provincial-level key disciplines, 2 key laboratories, and 19 independent research sections.',
          'XZMC provides a collaborative, learning-centered environment with highly qualified faculty.',
          'Various student activities like Sports Meetings, Singing and Dancing Competitions, and Chinese Speech Contests.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Xuzhou Medical College.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'XZMC provides the best playground, stadium, and canteen with Muslim food options. Dormitories are equipped with hot water, heating, air conditioning, separate toilet, and separate washroom.',
        gallery: []
      },
      {
        id: 'wenzhou-medical',
        name: 'Wenzhou Medical University',
        slug: 'wenzhou-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Wenzhou Medical University was founded in 1912 and is ranked as the 18th medical school among the top medical schools in China. It has established partnerships with over 80 universities globally.',
        location: 'Wenzhou, China',
        ranking: '18th Medical School in China',
        established: '1912',
        medium: 'English',
        duration: '6 Years (including Pre-Medical)',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', oneTime: '800 RMB', total: '1,83,300 RMB (Approx. 5 Years Package)' },
        overview: `Wenzhou Medical University was founded in Hangzhou in the year 1912. The University is ranked as the 18th medical school among the top medical schools in China. In the year 2015, the employment satisfaction rate was ranked in 2nd place among the graduates and 5th place among the employers in China.

WMU embraces internationalization in the course of its development. It has established partnerships with over 80 universities and institutions all across the globe, collaborating in scholar/student exchanges, joint education programs, joint research, etc. Two Confucius Institutes have been co-established with Burapha University in Thailand and SUNY College of Optometry respectively.

Wenzhou Medical University seeks to establish itself as a leading educational and research university deserving of international recognition—an institution emphasizing undergraduate medical education while vigorously developing graduated programs of the highest standard, maintaining medical disciplines as its core while promoting multi-disciplinary programs; and aspiring to serve the community and China as a whole with a global vision.

Faculties:
- School of 1st Clinical Affiliated Hospital
- School of International Studies
- School of Stomatology
- School of Ophthalmology & Optometry`,
        whyStudy: [
          'Ranked as the 18th medical school among the top medical schools in China.',
          'Employment satisfaction rate ranked 2nd place among graduates in China.',
          'Has established strong academic partnerships with over 80 global universities.',
          'Features about 66 active student associations in total to promote overall personality development.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Wenzhou Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Fully comfortable and modern dormitory with separate beds, heating, air conditioning, and laundry services. The university annually celebrates culture festivals, sports culture festivals and other fun activities.',
        gallery: []
      },
      {
        id: 'tianjin-medical',
        name: 'Tianjin Medical University',
        slug: 'tianjin-medical-university',
        image: '/images/universities/China/tianjin-medical-university.webp',
        description: 'Founded in 1951, Tianjin Medical University became the first medical university after the foundation of P. R. of China. TMU is one of the 97 universities constructed by the National "211 Project".',
        location: 'Tianjin, China',
        ranking: 'National "211 Project" University',
        established: '1951',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', total: '₹21 Lakhs (Approx. 6 Years)' },
        overview: `Founded in 1951, Tianjin Medical University became the first medical university after the foundation of P. R. of China. TMU is recognized by WHO and is one of the 74 universities to acquire authorization by the Ministry of Education to admit students from abroad.

TMU is also one of the 97 universities which are emphatically constructed by the National "211 Project". TMU has been admitting foreign students since the 1960s. Presently, the University has more than 1,430 foreign students from about 64 countries. The International School (IMS) of TMU is in charge of the education, management, and recruitment of international students. The University consists of qualified teachers and it provides favorable teaching facilities. For 20 years, the University has been providing courses in the English Medium.

TMU covers a total land area of 400,000 square meters. There are nearly 7,493 faculty members, including 5,946 professors and 1,092 associate professors. There are about 8,515 students studying in TMU. Out of these, there are 5,127 undergraduates, 1,593 postgraduates, 1,260 international students, 347 doctorates, and 494 training students. At present, it offers 44 authorized doctoral programs, 3 mobile post-doctoral stations, 61 authorized master programs with 158 doctoral supervisors, and over 500 master supervisors.

Faculties:
- Clinical Medicine
- Anesthesiology
- Medical Imaging
- Nursing Care
- Stomatology
- Disease Prevention & Control
- Pharmacology
- Biomedical Engineering`,
        whyStudy: [
          'One of the elite universities emphatically constructed by the National "211 Project".',
          'Recognized by WHO and authorized directly by the Ministry of Education to admit students from abroad.',
          'Over 20 years of experience in providing medical courses in the English Medium.',
          'A true multicultural community with more than 1,430 foreign students from 64 countries.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Tianjin Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Comfortable shared living apartments for international students with separate study tables, wardrobes, heating, air conditioning, and high-speed internet. 24/7 campus security and a multicultural student atmosphere.',
        gallery: []
      },
      {
        id: 'southern-medical',
        name: 'Southern Medical University',
        slug: 'southern-medical-university',
        image: '/images/universities/China/southern-medical-university.webp',
        description: 'Southern Medical University is known to be the First former Military Medical University. Affirmed in 1978 as one of the leading therapeutic colleges of China.',
        location: 'Guangzhou, China',
        ranking: 'Leading Therapeutic College',
        established: '1951',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', total: '₹20 Lakhs (Approx. 6 Years)' },
        overview: `Southern Medical University is known to be the First former Military Medical University. It was built up in October, 1951. In 1978, the University was affirmed as one of the leading therapeutic colleges of China. In the later years, it was renamed as Southern Medical University. This was done with the instruction of the Central Military Committee of PLA and the State Department in August, 2004.

Located at the foot of the picturesque Baiyun mountain in Guangzhou, it is spread in a large area of about one million square meters filled with lush greenery. The university has evolved for over half a century now.

The University offers Master's, Bachelor's, and Doctoral Degrees in Clinical Medicine, Pharmacology of Chinese Herbs, Traditional Chinese Medicine, Experimental Technology for Medical Use, Nursing, Medical Testing, Radiation Technology, Biological Medical Imaging, and Medical Imaging. Southern Medical University is proud of its staff individuals and resources. The University contains more than 700 educators and associate professors in the University.`,
        whyStudy: [
          'A historic institution that evolved from the First former Military Medical University.',
          'Located at the foot of the picturesque Baiyun mountain in Guangzhou with a green 1-million-sq-m campus.',
          'Highly qualified staff including more than 700 professors and associate professors.',
          'Excellent sports facilities including a football ground with artificial grass, standard swimming pool, etc.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Southern Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Dormitory options are comfortable with 4 beds in a room. Rooms have direct access to telephone sets and internet. The library contains a book collection of 1 million volumes.',
        gallery: []
      },
      {
        id: 'shihezi-medical',
        name: 'Shihezi Medical University',
        slug: 'shihezi-medical-university',
        image: '/images/universities/China/shihezi-medical-university-2.webp',
        description: 'Shihezi Medical University is an advanced yet comprehensive University situated in the Garden City of Shihezi. Ranked under the "211 project" in 2008.',
        location: 'Shihezi, China',
        ranking: 'National "211 project" University',
        established: '1949',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', oneTime: '1,000 RMB', total: '1,84,500 RMB (Approx. 5 Years Package)' },
        overview: `Shihezi Medical University is an advanced yet comprehensive University, situated in Shihezi. The Garden City is situated by the river of Manas on the Northern foot of the Tianshan Mountains in Xinjiang. In August 2000, the Central Government designated the university as a key institution to develop in Northwestern China. Shihezi University was ranked among the key constructed universities under the “211 project” in December 31, 2008.

Shihezi Medical University proposes ten specialties in the field of Agriculture, Engineering, Economics, Education, History, Law, Medicine, Trade and Management, Literature and Arts, and Sciences. The University consists of 20 colleges which provide 66 Bachelor degree programs, 52 Master degrees, 5 specialties that enroll on-the-job-teachers for master degrees, 4 doctorate degrees, 2 post-doctoral mobile stations, and 1 post-doctoral scientific work station.

The University has collectively built up graduate education bases with Peking University and Tianjin University, as well as a program for culture-oriented quality-education for Chinese University students. The university has 11 disciplines of Xinjiang Uygur Autonomous Region (XUAR), the Xinjiang Production and Construction Corps (XPCC), and the Ministry of Agriculture, 3 key laboratories co-constructed and supported by the Ministry of Education, the Ministry of Science and Technology, and the XPCC.

The University has 2,607 faculty members, which includes 1,527 full-time teachers, 450 associate professors, 152 professors, and 2 specially-engaged academicians of the Chinese Academy of Engineering. Every year, the university engages over 10 foreign experts and teachers. The total number of enrolled students is 30,032, including 21,989 undergraduates, 1,906 postgraduates, and 245 international students from about 8 countries.

The University covers 1,870,000 square meters. It has 950,000 square meters of buildings, and the area of its laboratories is 170,000 square meters. The library has a collection of 2,900,000 Chinese and foreign books and periodicals, and is a model project of university digital libraries in State High-tech Project 863. There is also a book collection spot of the UN's Food and Agriculture Organization (FAO).`,
        whyStudy: [
          'Ranked among the key constructed universities under the National "211 project" in 2008.',
          'Has established graduate education bases collectively with Peking University and Tianjin University.',
          'Features 2,607 faculty members including 2 specially-engaged academicians of the Chinese Academy of Engineering.',
          'Massive 1.87 million square meters campus with 170,000 square meters of advanced laboratories.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Shihezi Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Fully equipped shared rooms (hostel fee depends on availability/accommodation type). The campus features a fully-equipped library, a great gymnasium, a multi-functional stadium, and modern teaching buildings.',
        gallery: []
      },
      {
        id: 'ningxia-medical',
        name: 'Ningxia Medical University',
        slug: 'ningxia-medical-university',
        image: '/images/universities/China/ningxia-medical-university-2.webp',
        description: 'Ningxia Medical University was established in 1958 in Yinchuan, known as "The South Beauty beyond the Great Wall". It is the unique higher learning medical institution of Ningxia Hui Autonomous Region.',
        location: 'Yinchuan, China',
        ranking: 'Unique Regional Institution',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '34,000 RMB / Year', hostel: '5,000 RMB / Year', oneTime: '2,280 RMB', total: '2,09,780 RMB (Approx. 5 Years Package)' },
        overview: `Ningxia Medical University was established in the year 1958. Earlier, it was known as Ningxia Medical College. The University is the unique higher learning medical institution of Ningxia Hui Autonomous Region. The University is located in the capital city, Yinchuan. It is referred to as “The South Beauty beyond the Great Wall” in the Northwest.

Ningxia Medical University covers an area of approximately 833,000 square meters. It comprises over 90 training hospitals, 17 teaching institutions, 12 teaching hospitals, 11 affiliated hospitals, 10 teaching assistant departments, and 4 scientific research institutions. The General Hospital of Ningxia Medical University is a comprehensive top-notch tertiary hospital integrating clinical treatment, education, examination, scientific research, and training.

The university has one double-hired academician, over 5,660 teaching staff and healthcare workers, including 735 full-time teachers, out of whom there are 422 professors and associate professors; 52.24% have a Master’s Degree and 30.48% have a Doctor’s Degree.

Presently, there are more than 26,000 students in the university. There are about 9,376 full-time students, 1,256 postgraduates, and 122 foreign students. The university forms a professional discipline system with local characteristics, which focuses on medical disciplines, Traditional Chinese Medicine and Western Medicine coexisting, and multi-discipline coordinated development.

Depending on the advantage of the ethnic region, and strengthening the research and development of Hui Medicine, the university established the School of Hui Medicine of Ningxia Medical University, Hui Medicine Research Institute, Affiliated Hospital of Hui Medicine & Traditional Chinese Medicine, Ningxia Hui Medicine Modern Engineering & Technological Research Center, and Ningxia Hui Medicine Collaborative Innovation Center, and built the Chinese Cultural Museum of Hui Medicine. The education and research of Hui Medicine has become one of the unique features of the university.

Ningxia Medical University has established academic and friendly collaborative relationships with many scientific research institutions and universities both at home and abroad, such as the University of South Florida of America, Sanford Medical School of South Dakota University of America, Shimane University of Japan, Australian National University, Italian University of Ferrara, Peking University, Fudan University, Shandong University, Shanghai Jiaotong University, Capital Medical University, Huazhong University of Science and Technology, and Xiamen University.`,
        whyStudy: [
          'Features a unique School of Hui Medicine and Collaborative Innovation Center.',
          'Comprises over 90 training hospitals, 17 teaching institutions, and 11 affiliated hospitals.',
          'Active scientific research projects like new medicine development supported by national plans.',
          'Has established academic and friendly collaborative partnerships globally with leading institutions.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Ningxia Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an invitation letter from the university.',
          'Step 4: Apply for a student visa at the Embassy of the Russian Federation / China in India.',
          'Step 5: Finalize the necessary arrangements and travel to China to commence your studies.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET scorecard',
          'Valid international passport',
          'Passport-sized photographs',
          'Medical certificate with HIV reports'
        ],
        hostelFacility: 'Well-furnished hostel accommodation for international students, heated rooms for cold winters, 24/7 security & CCTV, common kitchens, laundry, and recreation spaces.',
        gallery: []
      },
      {
        id: 'nanjing-medical',
        name: 'Nanjing Medical University',
        slug: 'nanjing-medical-university',
        image: '/images/universities/China/nanjing-medical-university-2.webp',
        description: 'Nanjing Medical University was established in 1934 and relocated to Nanjing in 1957. It was among the first medical universities in China to offer six-year programs in 1962 and is today a top-ranked university.',
        location: 'Nanjing, China',
        ranking: 'Top Tier Chinese Medical University',
        established: '1934',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '34,000 RMB / Year', hostel: '6,000 RMB / Year', oneTime: '1,040 RMB', total: '2,03,040 RMB (Approx. 5 Years Package)' },
        overview: `Nanjing Medical University is a university in Nanjing, Jiangsu Province, China. It was established in 1934 in Zhenjiang, but subsequently relocated to Nanjing in 1957.

The National Jiangsu Medical College was founded in 1934 and was renamed the Nanjing Medical College in 1957 when it moved to Nanjing. It was among the first medical universities in China to offer six-year programs in 1962. In 1981 it was approved to offer master's and doctoral degree programs. It was renamed Nanjing Medical University in 1993 and is now among the top Chinese medical universities.

Nanjing Medical University was established in 1934 as the Jiangsu Provincial College of Health Policy and Management. In September 2015, NMU was approved to be one of the first groups of medical universities co-supported by the Ministry of Education, the National Health and Family Planning Commission of the People's Republic of China, and the Jiangsu Provincial People's legislature.

Schools and Departments:
- School of Basic Medical Sciences
- School of Public Health
- School of Stomatology
- School of Pharmacy
- School of Nursing
- School of Health Policy & Management
- School of International Education
- School of Rehabilitation Medicine
- School of Foreign Languages
- School of Continuing Education
- Graduate School
- Kangda College
- The First School of Clinical Medicine
- The Second School of Clinical Medicine
- The Third School of Clinical Medicine`,
        whyStudy: [
          'Among the first medical universities in China to offer advanced six-year medical programs.',
          'Co-supported by the Ministry of Education, National Health and Family Planning Commission, and Jiangsu Province.',
          'Top-ranked Chinese medical university with over 80 years of history.',
          'Features its own fitness clubs and recreational zones to keep students physically and mentally fit.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Nanjing Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Provides a homely environment for students with well-equipped fitness clubs, common kitchens, high-speed internet, heater, laundry, and separate bathrooms.',
        gallery: []
      },
      {
        id: 'liaoning-medical',
        name: 'Liaoning Medical University',
        slug: 'liaoning-medical-university',
        image: '/images/universities/China/Liaoning-Medical-University-3.webp',
        description: 'Liaoning Medical University is situated in Jinzhou, Liaoning in North-Eastern China. Established in 1946, LMU educates a considerable number of world-class doctors.',
        location: 'Jinzhou, China',
        ranking: 'Top Tier University',
        established: '1946',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '34,000 RMB / Year', hostel: '5,000 RMB / Year', oneTime: '2,280 RMB', total: '2,09,780 RMB (Approx. 5 Years Package)' },
        overview: `Liaoning Medical University is situated in the city of Jinzhou in the province of Liaoning in the North-Eastern part of China. LMU is 3 and the half hours away from Beijing by express train. Established in 1946, the university is believed to educate a considerable number of world-class doctors and other medical work force. This has made an important contribution in the medical research, both in China as well as in abroad. The university has presided over several major research programs. Because of this, the University has entrenched its domestic as well as international reputation.

LMU is considered among one of the top medical universities of China which offers MBBS in English medium by the Ministry of Education of the People’s Republic of China. LMU is accredited and listed in ECFMG and WHO. LMU actively participates in international exchange programs and has established cooperative links with a lot of leading institutions and universities.

The campus of Liaoning Medical University covers a large area of 995,500 square meters. It is located in the North of the city of Jinzhou. There are 169 bases for teaching and practice, 116 teaching offices, 56 teaching laboratories, 17 teaching departments, and 3 main affiliated comprehensive hospitals with about 4700 beds for the patients. There are 3880 faculty and staff members. Out of these, there are 358 professors and chief doctors and 680 associate professors. The university's library has a leading electronic reading room and has access to the retrieval system for medical documents from American MEDLINE and the Chinese Medical Institute.

LMU offers 59 master programs, 24 bachelor programs, and 9 joined-doctor degree programs in both English and Chinese medium. The university also provides a wide range of Chinese language courses and study tour courses which are exclusively designed for foreign students. LMU has 8 provincial key laboratories, 4 provincial key disciplines, 3 provincial experimental teaching demonstration centers and 2 provincial engineering research centers.

There are over 20,000 students studying medicine-related courses at the university. Till now, over 750 students from over 40 countries have taken admission in LMU. These students have enrolled in various medical programs. Some of the students take admission specially to learn Chinese language program making the LMU a real multicultural community for students.`,
        whyStudy: [
          'Believed to educate a considerable number of world-class doctors and medical workforce since 1946.',
          'One of the top medical universities in China approved to offer MBBS in English medium by the MOE.',
          'Large campus of 995,500 square meters with 3 main affiliated hospitals offering about 4700 beds.',
          'Features 8 provincial key laboratories, 4 provincial key disciplines, and 3 experimental teaching demonstration centers.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Liaoning Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Spacious and fully furnished dormitories with heating, air conditioning, common kitchens, high-speed internet, laundry rooms, and 24/7 security. Canteens serve delicious Indian and Chinese food options.',
        gallery: []
      },
      {
        id: 'kunming-medical',
        name: 'Kunming Medical University',
        slug: 'kunming-medical-university',
        image: '/images/universities/China/kunming-medical-university.webp',
        description: 'Kunming Medical University, formerly known as Kunming Medical College, is a premier medical school situated in Kunming City, Yunnan Province, China.',
        location: 'Kunming, China',
        ranking: 'AAA Graded',
        established: '1933',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', oneTime: '1,000 RMB', total: '1,76,000 RMB (Approx. 5 Years Package)' },
        overview: `Kunming Medical University, already known as Kunming Medical College, is a medicinal school situated in Kunming City, Yunnan Province, China.

The college ground involves an area of 125.4 hectares. It has around 15,000 understudies, of which more than 1,400 are undergraduate. The University has a staff of 6,000, and more than 1,150 are educators and partner teachers.

KMU has 13 schools, offering 15 Bachelor's Degree programs, 34 Master's Degree projects, and 1 Doctor's Degree program. It has 9 subsidiary healing facility centers, 9 showing clinics, 39 rehearse doctor's facilities, 6 preventive prescription practice destinations, 4 pharmaceutical practice locales, and 2 optical practice destinations. The greater part of this gives KMU understudies a steady considering and rehearsing condition.

With an accumulation of about 100,000 books, the college library has been assigned as Yunnan's Central Sharing Library Network of National Literature. It is likewise a First-class Repository for China's Medical and Academic Literature. KMU is a National Clinical Medicine Trial Center, and Yunnan Provincial Expert Testimony Center.

Schools and Departments:
- School of Basic Medical Sciences
- School of Clinical Medicine
- School of Clinical Oncology
- School of Stomatology
- School of Forensic Medicine
- School of Nursing
- School of Public Health
- School of Pharmaceutical Science
- School of Humanities and Social Science
- Biomedical Engineering Research Center
- Scientific Research Center
- School of Continuing Education
- School of Advanced Vocational Education and Training
- Haiyuan College
- Institute of Health Science
- Institute of Neuroscience
- Institute of Higher Medical Education
- Clinical Skill Training Center
- Yunnan Key Laboratory of Pharmacology for Natural Products`,
        whyStudy: [
          'Spacious campus of 125.4 hectares with a staff of 6,000, including over 1,150 professors and associate professors.',
          'Boasts 9 subsidiary hospital centers, 9 teaching clinics, and 39 practice hospitals for clinical training.',
          'College library is designated as Yunnan\'s Central Sharing Library Network of National Literature with 100,000 books.',
          'Recognized as a National Clinical Medicine Trial Center and Yunnan Provincial Expert Testimony Center.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Kunming Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Extremely comfortable separate student dormitory rooms with essential amenities, heating, air conditioning, study tables, closets, and common cooking and laundry utilities. Easy access to canteens and sports centers.',
        gallery: []
      },
      {
        id: 'hebei-medical',
        name: 'Hebei Medical University',
        slug: 'hebei-medical-university',
        image: '/images/universities/China/hebei-medical-university.webp',
        description: 'Hebei Medical University, founded in Shijiazhuang in 1894, is one of the oldest and AAA graded medical schools under the provincial government of China.',
        location: 'Shijiazhuang, China',
        ranking: 'AAA Graded',
        established: '1894',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', total: '₹21 Lakhs (Approx. 6 Years)' },
        overview: `Hebei Medical University is a university in Shijiazhuang, Hebei, P. R. China, under the provincial government. Hebei Medical University was founded in the year 1894. It is one of the oldest as well as AAA graded medical schools in China. The number of staff members exceeds 7,100. Out of these, 1350 are associate professors, 836 are professors, senior researchers and chief physicians. Also, there are Bangladeshi, Indian, and Nepalese faculties for the students from Bangladesh, India, and Nepal.

At present, there are 25,600 students studying in this Medical University. Hebei Medical University has a long history of admitting international students from various countries such as India, Japan, Korea, Philippines, Pakistan, Nepal, Taiwan, the USA, and the UK.

The university has 6 affiliated hospitals with 4,566 beds for patients. In addition, it also has 60 teaching hospitals and practice bases providing students with sites of clinical teaching, specialist teaching and practice. More than 400 experts have been sent abroad to give lectures and attend international academic conferences. About 100 young teachers are thoroughly studying abroad for a Ph.D. degree. Its cooperation with domestic and international colleges and universities has grown increasingly.

Hebei Medical University is turning on a new look and making great efforts to establish a superior comprehensive medical university with local characteristics to meet the needs of society.

Faculties:
- Faculty of Medicine
- Faculty of Dentistry
- Faculty of Anesthesiology
- Faculty of Preventive Medicine
- Faculty of Medical Imaging
- Faculty of Advanced Nursing Sciences
- Faculty of Pharmacology
- Faculty of Pharmaceutics`,
        whyStudy: [
          'One of the oldest and AAA graded medical schools in China established in 1894.',
          'Features an international faculty block specifically catering to students from Bangladesh, India, and Nepal.',
          'Maintains 6 major affiliated hospitals with 4,566 beds, plus 60 teaching hospitals and practice bases.',
          'Strong international collaboration with expert exchange programs and lecturers sent worldwide.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Hebei Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Highly comfortable, fully furnished dormitories with central heating, air conditioning, and shared bathrooms. Features active student interest clubs, scientific societies, and sports schools.',
        gallery: []
      },
      {
        id: 'guangxi-medical',
        name: 'Guangxi Medical University',
        slug: 'guangxi-medical-university',
        image: '/images/universities/China/Guangxi-Medical-University.webp',
        description: 'Founded in 1934, Guangxi Medical University is one of the 22 oldest medical universities in China and is approved by the MOE to launch English medium MBBS courses.',
        location: 'Nanning, China',
        ranking: 'Top 20 Medical Universities (2010)',
        established: '1934',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', total: '₹20 Lakhs (Approx. 6 Years)' },
        overview: `Located at a picturesque location in the city of Nanning, Guangxi Medical University (often known as GMU) was founded on 21st November 1934. The university stands proud among the list of 22 oldest medical universities in China. In China, this university is also one of the 30 universities that are qualified to launch MBBS courses in English medium. This university gets due support from the Guangxi Government.

The emblem of this university also has a lot to say. The emblem features the god of medicine and even the time of its establishment.

In 1934, GMU was established as the Guangxi Provincial Medical School. In 1949 the campus was shifted to Guilin.

In 2010, the university bagged a position among the top 20 universities in China for medical studies.

The campus covers an area of 400,000 square meters, which includes the classroom buildings and dormitories for local students, international students and teaching staff. The university also houses a library, 3 food halls, an indoor tennis hall, a swimming pool and laboratories.

Faculties:
Guangxi Medical University offers 9 five-year programs including clinical medicine, preventive medicine, stomatology, pharmacy, nursing, dentistry, and 7 three-year college specialties including nursing, pharmacy, community medical care and cosmetology.`,
        whyStudy: [
          'GMU stands proud among the list of the 22 oldest medical universities in China founded in 1934.',
          'One of only 30 elite universities in China qualified by the MOE to offer English medium MBBS.',
          'Features state-of-the-art infrastructure covering 400,000 square meters with 3 food halls, swimming pool, and tennis court.',
          'Offers extensive five-year programs in clinical medicine, stomatology, pharmacy, and nursing.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Guangxi Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'World-class dormitory housing with heating, air conditioner, study desk, shared kitchen canteens, indoor sports grounds, and strict security guidelines.',
        gallery: []
      },
      {
        id: 'guangzhou-medical',
        name: 'Guangzhou Medical University',
        slug: 'guangzhou-medical-university',
        image: '/images/universities/China/Guangzhou-Medical-University.webp',
        description: 'Guangzhou Medical University was founded in 1958 in Guangzhou, the third largest port city in China. It comprises four campuses with the main campus on Dongfeng Road West.',
        location: 'Guangzhou, China',
        ranking: 'Top Tier University',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '6,000 RMB / Year', oneTime: '850 RMB', total: '1,87,850 RMB (Approx. 5 Years Package)' },
        overview: `Guangzhou Medical University is located in Guangzhou which is the third largest port city in China. Initially, after its establishment in 1958, the university was known as Guangzhou Medical College. Guangzhou Medical University now comprises of four campuses. The main Campus is located on Dongfeng Road West and the other three campuses are in Longdong, Haizhu and Jianggao.

GMU recruits from 31 provinces, autonomous regions, municipalities directly under the Chinese central government, Hong Kong and Macao regions to recruit 1,500 undergraduates and 550 postgraduates (master and doctors) in each year. There are 23300 full-time students, including 10000 undergraduates, 1300 graduates, and 12000 continuing education students.

The university is highly reputed and well known for providing qualitative medical education to local as well as international students.

Schools:
- School of Basic Medical Sciences
- School of Nursing
- School of Pharmaceutical Sciences
- School of Health Management
- School of Public Health
- School of Stomatology
- Graduate School
- School of General Practice & Continuing Education
- Kingmed College of Laboratory Medicine
- First Clinical School
- Second Clinical School
- Third Clinical School
- Fifth Clinical School`,
        whyStudy: [
          'Located in Guangzhou, the third-largest port city in China, across four grand modern campuses.',
          'Maintains 21 advanced clinical research centers to give students superior medical practical exposure.',
          'Highly reputed and trusted for providing qualitative medical education to local and international students.',
          'Offers clinical training under experienced specialists at top affiliated municipal hospitals.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Guangzhou Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Fully furnished, cozy dormitory environments close to municipal canteens and sports tracks. Equipped with central cooling/heating, study tables, closets, and laundry utilities.',
        gallery: []
      },
      {
        id: 'fujian-medical',
        name: 'Fujian Medical University',
        slug: 'fujian-medical-university',
        image: '/images/universities/China/Fujian-Medical-University.webp',
        description: 'Fujian Medical University is situated in Fuzhou, Fujian, China. Founded in 1937, it has evolved into a key multidisciplinary medical institution with two major campuses.',
        location: 'Fuzhou, China',
        ranking: 'Key Provincial University',
        established: '1937',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', total: '₹20 Lakhs (Approx. 6 Years)' },
        overview: `Fujian Medical University is a university situated in Fuzhou, Fujian, China. Founded in 1937, Fujian Medical University is the precursor of Fujian Provincial Medical Vocational School. In 1939, the school was renamed Fujian Provincial Medical College. Later, the name of the medical school was changed to Fujian Medical College in 1949. The name of the school was changed back to Fujian Medical College in 1982 and then changed to the present name in April 1996.

The University comprises 59 master-degree locations, 22 doctor-degree locations, 22 undergraduate majors, and 17 colleges and departments. There are over 9300 undergraduates, 8700 vocational students, and 1600 postgraduates. There are 5304 staff members who are serving the University as well as students. Out of these, there are nearly 736 teachers on campus.

Among these professional teachers, 56% possess a postgraduate degree and 55.2% are in senior professional posts. There are 469 tutors for master students, 100 sharing the special subsidy of the state council, 60 PhD tutors, 16 provincial outstanding specialists, 4 national outstanding specialists, and 3 outstanding specialists of the Health Ministry. The University has 24 teaching hospitals, over 20 professional teaching bases, and 8 affiliated hospitals.

Faculties:
- The School of Basic Medical Sciences
- The School of Public Health
- The School of Stomatology
- The School of Medical Technology and Engineering
- The School of Pharmacy
- The School of Nursing
- The School of Humanities
- The Graduate School
- School of Adult Education
- School of International Education
- The Physical Culture Teaching and Research Department`,
        whyStudy: [
          'Founded in 1937 with two grand campuses (Shangjie and Taijiang) spanning over 87 hectares.',
          'Boasts a powerful faculty block with 100 tutors sharing the special subsidy of the State Council.',
          'Maintains 24 teaching hospitals, 8 directly affiliated hospitals, and 20 professional teaching bases.',
          '56% of teachers possess a postgraduate degree and 55.2% are in senior professional posts.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Fujian Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Well-equipped hostel rooms consisting of air conditioners, study desk, chairs, wardrobe, and shared bathrooms. Safe separate accommodations for boys and girls.',
        gallery: []
      },
      {
        id: 'dalian-medical',
        name: 'Dalian Medical University',
        slug: 'dalian-medical-university',
        image: '/images/universities/China/Dalian-Medical-University-2.webp',
        description: 'Dalian Medical University is the largest medical university in China which enrolls the most international MBBS students, located in Lushunkou District, Dalian, Liaoning.',
        location: 'Dalian, China',
        ranking: 'Largest MBBS Enroller in China',
        established: '1947',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '42,000 RMB / Year', hostel: '8,000 RMB / Year', oneTime: '800 RMB', total: '2,63,300 RMB (Approx. 5 Years Package)' },
        overview: `Dalian Medical University is the largest medical university in China which enrolls the most MBBS Admissions in China with Europe international students, as much as 1500 from above 50 countries in degree programs. Dalian Medical University is a university in Dalian, Liaoning, China under the provincial government. Dalian is the second largest city of Liaoning Province, after Shenyang, the provincial capital. Dalian City is governed by the Mayor and its Dalian Municipal People's Government.

It was founded in the year 1947 in the southern part of Dalian city, China by Mao Ze Dong. In 1949, it joined with Dalian University and the name was changed to the Medical College of Dalian University. In 1950, the organizational system of Dalian University was canceled and since then Dalian Medical College has become an independent college. In 1969, the college moved to Zunyi, a city of Guizhou Province, to establish the Zunyi Medical College. And in 1978, the college moved back to its original location in Dalian, still with the name of Dalian Medical College. In 1994, approved by the State Education Commission, DMU adopted its present name. In October 2007, it moved to the new campus in Lushunkou District, Dalian, which is across Lushun South Road from Dalian University of Foreign Languages' new campus. Nowadays, the university has fledged into a multi-disciplinary medical university which also offers programs in other fields like arts, science, management, and law.

This program is available for both English and Chinese Medium. DMU is recognized by WHO and the graduates of MBBS program are eligible to take the Medical Licensing Examinations held by the medical councils in different countries such as MCI, PMDC, USMLE, HPCSA, SCHS etc.

The MBBS program for international students in DMU was established in 2004 and in 2007 the MOE declared it as the qualified university to offer English-taught MBBS program. Besides, it can be taught in English and Japanese upon students’ choice. According to the framework agreement on degree accreditation between the MOE of China and other countries, the degree awarded by DMU is recognized in 31 countries. In addition, the university also signed agreements with medical associations in Thailand, Ghana, and Sri Lanka.

The university occupies an area of 338,800 square meters with a built-up area of 269,300 square meters. There are over 4,400 staff, including 500 professors and 510 associate professors. The total number of students is almost 10,000, including 4,000 undergraduates, 4000 Adult Education students, 400 nursing students and 300 graduate students. It offers training programs in 13 specialties. Four of its departments are to give doctorates and 29 departments to give master's degrees. Organizationally, it has 12 colleges, 4 teaching Departments, 3 divisions, and 33 off-campus-teaching sites for the internship, in addition to an affiliated Nursing School and a Vocational High School.

The university now has 25 management organizations, 14 second-level schools, 5 affiliated hospitals, 4 directly affiliated organizations, 3 of which are indirectly under the university, and 38 clinical teaching bases. Each hospital has its own features. The First Teaching Hospital is the biggest comprehensive one and is the Emergency Center in South Liaoning Province. The Second Teaching Hospital was among the first group approved by the International Exchange Center of the Ministry of Health to be one of the International Network Emergency Hospitals.`,
        whyStudy: [
          'The largest medical university in China enrolling over 1500 international students from 50+ nations.',
          'MBBS degree is recognized by WHO and in 31 countries, allowing licensing exams like USMLE, MCI, PMDC.',
          'Massive campus spanning 338,800 square meters in the Lushunkou District of Dalian.',
          'Has 5 directly affiliated hospitals and 38 clinical teaching bases for hands-on internship experience.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Dalian Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Comfortable on-campus dormitory accommodation (fees depend on types of rooms chosen). Includes registration, books, study materials, physical examination, and 24/7 security support.',
        gallery: []
      },
      {
        id: 'chongqing-medical',
        name: 'Chongqing Medical University',
        slug: 'chongqing-medical-university',
        image: '/images/universities/China/chongqing-medical-university.webp',
        description: 'Chongqing Medical University (CQMU), established in 1956, is a key public medical university jointly administrated by the Ministry of Education, Ministry of Health, and Chongqing Government.',
        location: 'Chongqing, China',
        ranking: '6th among Medical Universities in China (2013)',
        established: '1956',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', total: '₹21 Lakhs (Approx. 6 Years)' },
        overview: `Chongqing Medical University (CQMU), initially known as Chongqing Medical College, was established in 1956, growing out of Shanghai First Medical College (the present Shanghai Medical College of Fudan University). With almost 60 years of advancement, CQMU has turned into a noteworthy open medical university that is jointly administrated and supported by the Ministry of Education of China, the Ministry of Health of China, and the Chongqing Municipal Government. The college has a comprehensive arrangement of academic training, from Bachelor to Master, Doctor and Postdoctoral in pharmaceutical and other related fields. In 2013, CQMU ranked 6th among all medical universities in China. As to instruction and discipline competitiveness, our college ranked 12th among all Chinese universities offering medical disciplines.

The college has two campuses, Yuanjiagang Campus and Jinyun Campus, covering a region of 2.02 km2. The aggregate resources of the college add up to 6.78 billion yuan, among which the equipment and offices for teaching, research and medical services are worth 983 million yuan. The library has a collection of 1.32 million books.

Colleges and Departments:
- Department of Physical Education
- Department of Medical Informatics
- College of Foreign Languages
- College of Nursing
- College of Medical Informatics
- College of Public Health and Health Management
- Clinical College
- The Fifth Clinical College
- Dental College
- Pediatric College
- The Second Clinical College
- College of Basic Medicine
- College of Laboratory Medicine
- College of Traditional Chinese Medicine`,
        whyStudy: [
          'Ranked 6th among all medical universities in China for academic training in 2013.',
          'Jointly administrated and fully supported by the Ministry of Education and Ministry of Health.',
          'Spans across two grand campuses (Yuanjiagang and Jinyun) covering 2.02 square kilometers.',
          'Vast library collection containing 1.32 million books and 983 million yuan worth of research equipment.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Chongqing Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Cozy and modern on-campus hostel rooms with access to 24/7 power, high-speed Wi-Fi, laundry facilities, canteens, and sports grounds. Surrounded by picturesque city view landscapes.',
        gallery: []
      },
      {
        id: 'capital-medical',
        name: 'Capital Medical University',
        slug: 'capital-medical-university',
        image: '/images/universities/China/Capital-Medical-University.webp',
        description: 'Capital Medical University was established in 1960 in Beijing, China. Today, it ranks among the premier metropolitan academic medical institutions in China.',
        location: 'Beijing, China',
        ranking: 'Premier Metropolitan University',
        established: '1960',
        medium: 'English',
        duration: '6 Years (including Pre-Medical)',
        fees: { tuition: '40,000 RMB / Year', hostel: '7,500 RMB / Year', oneTime: '17,300 RMB', total: '2,84,800 RMB (Approx. 6 Years Package)' },
        overview: `Originally known as Beijing Second Medical College, Capital University of Medical Sciences was established in 1960 in Beijing, China. The university is also known as CUMS, CCMU or CMU.

At present, the university positions itself among the best scholarly medical establishments in China and is considered as one of the key metropolitan colleges in Beijing. The establishing President, Professor Wu Jieping, was an incredibly famous urologist, individual from both the Chinese Academy of Sciences and the Chinese Academy of Engineering.

CMU is an outstanding scholarly organization for its solid ability in the medical and logical research. It has numerous national and metropolitan labs and some trade stations for post-doctoral research. CMU in the medical education sector covers a variety of fields including General Practitioner Training, Clinical Medicine, Basic Medicine, Neurosciences, Ophthalmology, Geriatrics, Urology, Cardiology, Pain Medicine, Toxicology, Biomedical Engineering, Traditional Chinese Medicine, Reproduction, Health Policy et cetera. The university has accomplished national and worldwide acknowledgments in numerous territories, for example, Neurobiology, Cytobiology, Immunology, Medical Iconography, Neurology, Neurosurgery, Cardiology, Cardio-vascular Surgery, Kidney Transplantation, Respiratory Disease, Digestive Medicine, Oral-Maxillofacial Surgery, Ophthalmology, Otolaryngology and Pediatric Hematology, among others.

CMU has associations and concurrences with numerous colleges and establishments in excess of 20 countries and regions, supporting exercises, for example, personnel and understudy exchange programs, joint training and joint research ventures.

Faculties:
- School of Basic Medical Sciences
- School of Public Health and Family Medicine
- School of Biochemical and Pharmaceutical Sciences
- School of Biomedical Engineering
- School of Traditional Chinese Medicine
- School of Health Administration and Education
- School of Nursing
- School of Continual Education and Advanced Vocational Education
- Yan Jing Medical College
- International School of CCMU`,
        whyStudy: [
          'Headed by brightest academic minds in the country, originally founded by the legendary Professor Wu Jieping.',
          'Highly solid scientific and medical research capabilities with multiple national and municipal laboratories.',
          'One of the elite key metropolitan medical universities situated in the capital city of Beijing.',
          'Maintains extensive international collaboration links with universities in over 20 nations.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Capital Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Above excellence hostel rooms, classrooms, laboratories, and canteens in Beijing. Multi-ethnic student culture and active recreation and support clubs.',
        gallery: []
      },
      {
        id: 'anhui-medical',
        name: 'Anhui Medical University',
        slug: 'anhui-medical-university',
        image: '/images/universities/China/Anhui-Medical-University.webp',
        description: 'Anhui Medical University, formerly known as Dongnan Medical College, was established in 1926 in Shanghai, and subsequently relocated to Hefei, Anhui Province.',
        location: 'Hefei, China',
        ranking: 'AAA Graded',
        established: '1926',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '4,000 RMB / Year', oneTime: '800 RMB', total: '1,83,300 RMB (Approx. 5 Years Package)' },
        overview: `Anhui Medical University was earlier known by the name of Dongnan Medical College and was established in 1926 in Shanghai. The university was first shifted to Huaiyuan County, Anhui Province in 1949. In 1952 it was shifted again to Hefei and the name was changed to Anhui Medical College. The National Committee on Education in 1996 approved a proposal which mentioned the renaming of Anhui Medical College to Anhui Medical University.

Today there are a total of 16,673 undergraduates at the college, of whom 179 are enlisted in doctoral programs, 2728 in master's projects, and 8867 in undergraduate programs, in addition to 95 worldwide understudies (counting those from Hong Kong and Macao) and 7187 understudies selected in the School of Extended Education.

As of now, the college has 24 specifically affiliated clinical and research units and ten partnered hospitals, in addition to 42 clinical schools and 37 teaching hospitals. Other professional practicing and teaching bases associated with the college are more than 100. The college at present offers 29 undergraduate projects and alternatives.

The college consists of two campuses; the principle campus and the southern campus. The aggregate campus covers a zone of 860,000 square meters and with add up to floor space of around 700 thousand square meters. You can walk through the entire campus in 20 minutes. The campus is situated on South No.1 Ring-Road of Hefei.

Faculties:
- Department of Clinical Medicine
- Department of Medical Psychology
- Department of Rehabilitation
- Department of Iconography
- Department of Anesthesia
- Department of Medical Cosmetic Science
- School of International Students`,
        whyStudy: [
          'A long history dating back to 1926, starting as Dongnan Medical College in Shanghai.',
          'Has 24 specifically affiliated clinical and research units, 10 affiliated hospitals, and 37 teaching hospitals.',
          'Spans over 860,000 square meters across main and southern campuses situated in South Hefei.',
          'Organizes special celebrations for Indian festivals due to a large percentage of Indian students on campus.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Anhui Medical University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'AMU provides all basic amenities to the students like hygienic food canteens, well-ventilated hostels, library, sports complexes, and gyms.',
        gallery: []
      },
      {
        id: 'china-three-gorges',
        name: 'China Three Gorges University',
        slug: 'china-three-gorges-university',
        image: '/images/universities/China/China-Three-Gorges-University.webp',
        description: 'China Three Gorges University is one of the prominent universities in Hubei, China offering high-quality English medium MBBS programs since 2011.',
        location: 'Hubei, China',
        ranking: 'Prominent Provincial University',
        established: '2000',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '30,000 RMB / Year', hostel: '5,000 RMB / Year', total: '₹21 Lakhs (Approx. 6 Years)' },
        overview: `China Three Gorges University is one of the prominent Universities in China offering MBBS at an affordable cost. The University was established in 2000 with the approval of the Ministry of Education and is situated in Hubei Province.

The College has excellent medical facilities for teaching and has four state-of-the-art infrastructure hospitals affiliated with it, which allows students to do their internship.

The University has more than 1600 full-time teachers which include professors, associate professors, and scholars. At present, the University has more than 2500 full-time undergraduates, 300 post-graduates and more than 500 international students.

In the year 2004, the college enrolled the first batch of International students of Clinical medicine. In the year 2011, the Ministry of Education of China granted permission to recruit international students majoring in MBBS (English Medium).

The aim of the University is to cultivate the undergraduate students to develop social medical knowledge, standardized clinical skills, and an appropriate professional attitude which will be helpful for them to lay the foundation for their further studies in medical practice, medical research, health administration, etc.

The University has established various International Educational Cooperative Programs with Top Government Universities of Abroad.

Faculties:
- MBBS (Provincial Brand Program)
- Medical Imageology (National Featured Program and Provincial Brand Program)
- Traditional Chinese Medicine
- Nursing
- Pharmacy`,
        whyStudy: [
          'Prominent university established in 2000 under the approval of the Ministry of Education.',
          'Has 4 state-of-the-art affiliated hospitals for excellent clinical training and internships.',
          'Over 1600 full-time teachers on board, with more than 500 international students majored in MBBS.',
          'Provides personality development programs like seminars, debates, and conferences.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for China Three Gorges University.',
          'Step 2: Submit all the required documents online along with the application form.',
          'Step 3: Receive an admission/invitation letter from the university by mail.',
          'Step 4: Apply for the student visa at the Chinese Embassy in India.',
          'Step 5: Pay outstanding first-year tuition fees and plan your travel to China.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical fitness certificate',
          'Passport-size photographs'
        ],
        hostelFacility: 'Twin sharing fully furnished rooms with access to Telephone, cable TV, central cooling/heating, laundry rooms, and a pantry on every floor for self-cooking.',
        gallery: []
      }
    ]
  },
  {
    id: 'belarus',
    name: 'Belarus',
    slug: 'belarus',
    flag: '/flag-belarus.png',
    image: '/images/countries/belarus.png',
    description: 'Renowned for its medical sciences and strong focus on practical laboratory work.',
    startingPrice: '₹16 Lakhs',
    uniCount: 4,
    universities: [
      {
        id: 'grodno-state',
        name: 'Grodno State Medical University',
        slug: 'grodno-state-medical-university',
        image: '/images/universities/belarus/grodno-state-medical-university.webp',
        description: 'A university specialized in medicine and medical psychology, Grodno State Medical University is located in Grodno, Belarus. The university commenced in 1958.',
        location: 'Grodno, Belarus',
        ranking: 'Top Tier University',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '$4,500 / Year', hostel: '$800 / Year', total: '$31,800 (Approx. 6 Years)' },
        overview: `A university specialized in medicine and medical psychology, Grodno State Medical University is located in Grodno, Belarus. The university commenced its services from October 1958.

The university features and acts upon a vision to gain the status of the leading educational center in the health care system of Grodno region, Republic of Belarus and other world countries by means of training of highly qualified specialists in the field of various faculties available.

The university has various fields of training such as general medicine, medical psychology, medical diagnostics, nursing and pediatrics and by means of development of the fundamental and applied sciences in medical and social spheres.

The University has its own public organizations such as Belarusian Republic Youth Union, Belarusian Medical Trade Union, Students' Self-government, sorority house, political club, literary cenacle "Catharsis" etc.`,
        whyStudy: [
          'Specialized institution for medicine and medical psychology with a long history of excellence since 1958.',
          'Active student groups and organizations like Belarusian Republic Youth Union, Medical Trade Union, and literary club.',
          'Comprehensive faculties covering General Medicine, Diagnostics, Pediatrics, and Mental Health.',
          'Clinical development focus with access to major diagnostic healthcare facilities.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Grodno State Medical University.',
          'Step 2: Submit certified copies of academic mark sheets and passport.',
          'Step 3: Receive the official admission letter from the university.',
          'Step 4: Get the visa support letter from the Ministry of Education of Belarus.',
          'Step 5: Apply for the student visa at the Belarus Embassy.',
          'Step 6: Board your flight and report to the university campus.'
        ],
        documentsRequired: [
          'Class 10th and 12th mark sheets and passing certificates',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical health and HIV negative certificates',
          'Passport-size photographs'
        ],
        hostelFacility: 'There are 4 student hostels next to the main building of the university. They can accommodate 1840 students. Two of the buildings are of flat type i.e. with attached restroom and kitchen. The hostels are centrally heated. Student hostels are fully furnished. Students here get plenty of options to groom themselves. They get the facility of sports, library, cultural and research center, fitness center and many other such initiatives by the university.',
        gallery: []
      },
      {
        id: 'belarusian-state-medical',
        name: 'Belarusian State Medical University',
        slug: 'belarusian-state-medical-university',
        image: '/images/universities/belarus/Belarusian-State-Medical-University-1.webp',
        description: 'The university has 72 departments where in-depth clinical and theoretical knowledge is imparted to local as well as international students.',
        location: 'Minsk, Belarus',
        ranking: 'Top Medical University in Belarus',
        established: '1921',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '$5,000 / Year', hostel: '$900 / Year', total: '$35,400 (Approx. 6 Years)' },
        overview: `Belarusian State Medical University is a medical college in Minsk, Belarus. It spends significant time in the research activities in Medicine and Dentistry. In 1921 it got associated with the Medicine Department of the Belarusian State University.

The university has 72 departments where in-depth clinical and theoretical knowledge is imparted to the local as well as international students. The medium of instruction is English for the complete course.

Education at the University is practical oriented. By and large, 70% of classes are either instructional exercises or functional in labs. From the second year onwards the scholastic procedure at the clinical departments are held at the premises of the medicinal establishments of the Ministry of Health.

The university has a fully experienced staff which functions in the ratio of 20:01 in the classrooms.`,
        whyStudy: [
          'In-depth knowledge is taught through 72 highly clinical and theoretical departments.',
          'Practical-oriented education where 70% of classes are tutorials or lab practicals.',
          'From the second year, the academic processes are held directly at premises of clinical healthcare units.',
          'Staff-to-student ratio of 20:01, ensuring focused individual attention.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Belarusian State Medical University.',
          'Step 2: Submit certified copies of academic mark sheets and passport.',
          'Step 3: Receive the official admission letter from the university.',
          'Step 4: Get the visa support letter from the Ministry of Education of Belarus.',
          'Step 5: Apply for the student visa at the Belarus Embassy.',
          'Step 6: Board your flight and report to the university campus.'
        ],
        documentsRequired: [
          'Class 10th and 12th mark sheets and passing certificates',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical health and HIV negative certificates',
          'Passport-size photographs'
        ],
        hostelFacility: 'Students in this university are always ahead of other students in terms of quality education. The education is quite affordable which adds more to its charm among the international students. Currently the university houses more than 1000 local students and around 400 international students in its 4 hostels. The university has also the facility of providing Indian food to the Indian students as there is a large number of Indian students over there.',
        gallery: []
      },
      {
        id: 'gomel-state-medical',
        name: 'Gomel State Medical University',
        slug: 'gomel-state-medical-university',
        image: '/images/universities/belarus/Gomel-State-Medical-University-1.webp',
        description: 'The university trains medical professionals with the help of up-to-date education technologies in the medical field.',
        location: 'Gomel, Belarus',
        ranking: 'Leading State University',
        established: '1990',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '$4,200 / Year', hostel: '$700 / Year', total: '$29,400 (Approx. 6 Years)' },
        overview: `Gomel State Medical University is one of the very few universities which have an advanced system of education. The university trains medical professionals with the help of up-to-date education technologies in the medical field. The university adopts high-tech methods of practical medicine that enables the students to be competitive and flexible in the world labour market and they get golden employment opportunities.

Formerly known as Gomel State Medical Institute, GSMU is a public university based in Gomel, Belarus. Gomel has four universities of different fields and one of them is Gomel State Medical University. The main campus of Gomel State Medical University is located in the downtown of Gomel with 18 adjacent clinical sites spread across the city.

The university has a large clinical base which is one of the best in Belarus. The clinical base is well equipped where the advanced medical technologies on diagnostic and treatment of endocrinology, cardiologic, immunology, ophthalmologic, oncologic and other diseases are applied.`,
        whyStudy: [
          'Adopts high-tech methods of practical medicine that enables the students to be competitive and flexible.',
          'Features 18 adjacent clinical training sites spread across the downtown city of Gomel.',
          'A massive clinical base equipped with advanced diagnostic equipment for endocrinology, cardiology, oncology, etc.',
          'Trains medical professionals with up-to-date educational technologies.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Gomel State Medical University.',
          'Step 2: Submit certified copies of academic mark sheets and passport.',
          'Step 3: Receive the official admission letter from the university.',
          'Step 4: Get the visa support letter from the Ministry of Education of Belarus.',
          'Step 5: Apply for the student visa at the Belarus Embassy.',
          'Step 6: Board your flight and report to the university campus.'
        ],
        documentsRequired: [
          'Class 10th and 12th mark sheets and passing certificates',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical health and HIV negative certificates',
          'Passport-size photographs'
        ],
        hostelFacility: 'The university houses all modern amenities for the students. Not only for the local students, the university is among the favorite universities for MBBS in Belarus for International students as well. The university houses hostels, canteens, sports complex, gym, library, swimming pool and other such facilities for the students. Students from all corners of the country go for this university if they want to go for MBBS in Belarus.',
        gallery: []
      },
      {
        id: 'vitebsk-state-medical',
        name: 'Vitebsk State Medical University',
        slug: 'vitebsk-state-medical-university',
        image: '/images/universities/belarus/Vitebsk-State-Medical-University.webp',
        description: 'Founded in November 1934, Vitebsk State Medical University is one among the top medical universities in Belarus.',
        location: 'Vitebsk, Belarus',
        ranking: 'Top Tier University',
        established: '1934',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '$4,800 / Year', hostel: '$800 / Year', total: '$33,600 (Approx. 6 Years)' },
        overview: `Founded in November 1934, Vitebsk State Medical University is one among the top medical universities in Belarus. At present it has 32 theoretical and clinical departments. Since September 1981 Vitebsk State Medical University started to train the overseas students on Preliminary Training, Medical and Pharmaceutical Faculties.

From 1997, foreign students started showing interest in the university due to its qualitative teaching approach. The university is well-known in training physicians for public health of Asia, Africa, Near East and Latin America. VSMU was awarded with the Medal of Peoples Friendship by the Presidium of the Supreme Soviet of the USSR.

The university has 6 academic buildings, 15 clinical sites, 7 hostels, 3 canteens, sports ground, stadium, health and fitness center and other such facilities for the students.`,
        whyStudy: [
          'Top-tier university established in November 1934 with 32 theoretical and clinical departments.',
          'Awarded the Medal of Peoples Friendship for training highly qualified healthcare staff.',
          'Equipped with 6 academic buildings, 15 clinical training sites, 7 hostels, and 3 canteens.',
          'Highly renowned globally for training physicians for public health across Asia, Africa, and Latin America.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Vitebsk State Medical University.',
          'Step 2: Submit certified copies of academic mark sheets and passport.',
          'Step 3: Receive the official admission letter from the university.',
          'Step 4: Get the visa support letter from the Ministry of Education of Belarus.',
          'Step 5: Apply for the student visa at the Belarus Embassy.',
          'Step 6: Board your flight and report to the university campus.'
        ],
        documentsRequired: [
          'Class 10th and 12th mark sheets and passing certificates',
          'NEET-UG scorecard',
          'Valid international passport',
          'Medical health and HIV negative certificates',
          'Passport-size photographs'
        ],
        hostelFacility: 'Till now, the university has trained thousands of students from Belarus as well as from various parts of the world. The pass-outs from the university are working in good positions around the globe. The students currently present in the campus are also fully satisfied with the facilities they are getting in the university. The university has good quality hostels with modern facilities for foreign students. The hostels are on campus as well as outside campus in the city.',
        gallery: []
      }
    ]
  },
  {
    id: 'philippines',
    name: 'Philippines',
    slug: 'philippines',
    flag: '/flag-philippines.png',
    image: '/images/countries/philippines.png',
    description: 'Offers an American style curriculum with a heavy focus on clinical exposure and USMLE preparation.',
    startingPrice: '₹15 Lakhs',
    uniCount: 15,
    universities: [],
    overview: `The Philippines, also known as the Republic of Philippines is situated in Southeast Asia in the Western Pacific Ocean. Its capital, Manila, is famous for its waterfront and centuries-old Chinatown. The Philippines was a colony of the USA for around 50 years and thus the country follows the American system of education.

The Philippines is a founding member of the United Nations, World Trade Organization, Association of Southeast Asian Nations, the Asia-Pacific Economic Cooperation forum, and the East Asia Summit. The country also hosts the headquarters of the Asian Development Bank. The Philippines has shown a great transition in economy from agriculture to the one with services and manufacturing. In addition to membership in the United Nations, the Philippines is also a founding and active member of ASEAN (Association of Southeast Asian Nations).

As a founding member of the United Nations, the Philippines has been elected many times into the Security Council. The country is also an active participant in the Human Rights Council and in peacekeeping missions.

In recent years, MBBS in Philippines has received the popular name among the young medical aspirants of India.

It is to be thoroughly noted that with MBBS in Philippines the awarded degree is often called the MD. MD (Doctor of Medicine) is equivalent to the undergraduate program MBBS in India.

During the course, the students learn several aspects of modern medicine such as medical theory, practicals, and clinical rotation giving better exposure to the students. The degrees obtained after MBBS in Philippines are well recognized internationally.

During their period of studying MBBS in Philippines, the students are taught the program in two parts, namely BS and MD. The Bachelor of Science (BS) part of the program features in developing the core and essential foundations of the medical sciences. The overall duration of BS in MBBS in Philippines is of 3 years.

The second part of the course of MBBS in Philippines, called the MD (Doctor Medicine) emphasizes the development of professional skills and follows an experiential learning format.

The higher level of practical sessions and experienced teaching staff in Medical colleges of Philippines has gained significant popularity around the world. The infrastructure of the medical universities, the curriculum, and the atmosphere in the medical colleges of the Philippines makes it a preferred location of education for international students. The calculations say that the students who have completed MBBS in Philippines are known to have a higher success rate, in the region under USMLE.`,
    whyStudy: [
      'Global Renowned Degrees: All of the medical universities in the Philippines are accredited by the WDOMS, FAIMER, ECFMG, and Medical Councils of leading countries such as the United States, the United Kingdom, Australia, India, Canada, etc.',
      'Focus on Quality Education: Some of the medical universities in the Philippines are among the best in the world for quality education. MBBS in the Philippines is, therefore, a popular choice among students around the world.',
      'Resourceful universities: Medical universities in Philippines are renowned for their exceptional infrastructure, technological advancements, and qualified lecturers.',
      'Safe & Easy Living: The Philippines offers the best quality of life in the world and has the lowest crime rate in the world, making it a very safe country for international students.',
      'Good Number of Indian Students: It is easier to find Indian students in the Philippines, which makes it more enjoyable.',
      'Technically-enhanced learning: Medical schools in the Philippines have some of the best teaching technologies. Students can stay current with their education by using technology.',
      'Career Scope: Studying MBBS in Philipines offers various growth and career opportunities to students promising greater heights of success and accomplishments.',
      'Curriculum Advantage: Since Philippines has once been under the regime of the USA, many of its educational practices still lie in congruence with that of the USA. Therefore, the students can study the US-based curriculum for their MBBS in Philippines in a much more feasible format.',
      'Affordability: The country is the best choice for those who are looking forward to an affordable option both in terms of fees and the cost of living.',
      'English Speaking Country: Another major advantage of studying MBBS in Philippines, especially for the Indian students, is that the country is largely English speaking, therefore, they find it very easy to adjust among the locals.',
      'FMGE Success: Due to the multiple top colleges for MBBS in Philippines, providing the most refined quality of education, the graduates from the Philippines medical colleges make up the highest number of FMGE passing rates.',
      'Hands-on Diagnostic Training: The main advantage with MBBS in Philippines is that the students get to practically diagnose the patients. This helps in boosting up their confidence and developing essential professional skills among them.'
    ],
    admissionProcess: [
      'Step 1: Check eligibility requirements and register online.',
      'Step 2: Submit certified copies of academic marksheets, NEET scorecard, and passport copy.',
      'Step 3: Receive official admission or acceptance letter from the selected medical university.',
      'Step 4: Pay necessary processing fees and obtain visa support documents.',
      'Step 5: Apply for the student visa at the Philippines Embassy.',
      'Step 6: Plan your travel, report to campus, and complete the enrollment formalities.'
    ],
    documentsRequired: [
      'Class 10th pass certificate and mark sheet',
      'Class 12th pass certificate and mark sheet',
      'NEET-UG scorecard',
      'Copy of valid international passport',
      'Passport-size photographs',
      'Health fitness and medical certificates'
    ],
    eligibilityCriteria: [
      'Students who reach the age of 17 by the end of the year in which they receive their admission.',
      'The student must possess a minimum of a 50% mark in Physics, Chemistry, and Biology from a CBSE/ICSE or equivalent board exam.',
      'Candidates who have qualified for NEET (based on the latest MCI/NMC guidelines).'
    ],
    faqs: [
      {
        question: 'Is MBBS in Philippines valid in India?',
        answer: 'Yes, the MD degree awarded in the Philippines is completely valid in India, provided the university is recognized by the NMC (National Medical Commission) and the student qualifies the FMGE / NEXT exam.'
      },
      {
        question: 'Why should I study MBBS in Philippines?',
        answer: 'It offers high-quality education based on the US curriculum, English medium instruction, affordable fee structure, high clinical exposure, and excellent weather conditions that resemble India.'
      },
      {
        question: 'What is the eligibility for MBBS admissions in Philippines?',
        answer: 'Candidates must be at least 17 years old, have completed Class 12 with a minimum of 50% in PCB, and have qualified the NEET exam.'
      },
      {
        question: 'Is NEET compulsory to study MBBS in Philippines?',
        answer: 'Yes, as per NMC guidelines, NEET qualification is mandatory for Indian students wanting to practice medicine in India after completing MBBS abroad.'
      },
      {
        question: 'What is the duration of MBBS in Philippines?',
        answer: 'The total duration is 6 years, which is split into a Bachelor of Science (BS) foundation phase of 3 years and a Doctor of Medicine (MD) clinical phase.'
      },
      {
        question: 'What is the application process for MBBS in Philippines for Indian students?',
        answer: 'Register online, submit your Class 10/12 marksheets, passport copy, and NEET score, receive your admission letter, and apply for a student visa.'
      },
      {
        question: 'Is MBBS in Philippines expensive?',
        answer: 'No, it is highly cost-effective compared to private medical colleges in India, with tuition fees ranging between 15 to 25 Lakhs INR for the complete course.'
      },
      {
        question: 'What is the average total fees for studying MBBS in Philippines?',
        answer: 'The average total tuition fee ranges between INR 15 Lakhs and INR 25 Lakhs for the complete course.'
      },
      {
        question: 'Can I work in Philippines or any other country after my MBBS in Philippines?',
        answer: 'Yes, graduates can work globally by passing screening exams like FMGE/NEXT (India), USMLE (USA), PLAB (UK), or domestic exams of the respective countries.'
      },
      {
        question: 'How many Indian students are studying MBBS in Philippines?',
        answer: 'Thousands of Indian students are studying MBBS in the Philippines, with Indian students making up roughly 50% of the total international medical students admitted every year.'
      }
    ]
  },
  {
    id: 'armenia',
    name: 'Armenia',
    slug: 'armenia',
    flag: '/flag-armenia.png',
    image: '/images/countries/armenia.png',
    description: 'High-quality European standard medical education at very affordable costs.',
    startingPrice: '₹14 Lakhs',
    uniCount: 5,
    universities: [
      {
        id: 'yerevan-haybusak',
        name: 'Yerevan Haybusak University',
        slug: 'yerevan-haybusak-university',
        image: '/images/universities/Armenia/yerevan-haybusak-university.webp',
        description: 'Established in 1990 by Academician Levon Harutyunyan, it has now 5400 students and offers a European-standard medical education.',
        location: 'Yerevan, Armenia',
        ranking: 'Top Private University',
        established: '1990',
        medium: 'English',
        duration: '6 Years (5 Years Academic + 1 Year Internship)',
        fees: {
          tuition: '$3,800 / Year',
          hostel: '$1,000 / Year',
          total: '$28,800 (Approx. 6 Years)'
        },
        overview: `Yerevan Haybusak University (YHU) is a leading private medical university located in Yerevan, Armenia. Established in 1990 by Academician Levon Harutyunyan, it has now grown to accommodate over 5,400 students, including a vibrant international student community. The university is widely recognized for offering high-quality European standard medical education at an affordable cost.

The university is fully accredited by the Ministry of Education and Science of Armenia and is listed in the World Directory of Medical Schools (WDOMS). It is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC) of India, making it an excellent choice for Indian medical aspirants to study MBBS abroad.`,
        whyStudy: [
          'Fully English medium MBBS program.',
          'Established in 1990 with a rich academic history of over 30 years.',
          'Recognized by WHO, NMC, ECFMG, and FAIMER.',
          'Over 5,400 students including a huge cohort of international students.',
          'High-quality, European standard medical curriculum.',
          'Affordable tuition fee structure with low cost of living.'
        ],
        admissionProcess: [
          'Step 1: Fill up the online application form for Yerevan Haybusak University.',
          'Step 2: Submit scanned copies of Class 10/12 mark sheets and passport.',
          'Step 3: Receive an admission/acceptance letter from the university.',
          'Step 4: Apply for the student visa at the Armenian Embassy.',
          'Step 5: Pay the first-year tuition fee and complete registration.',
          'Step 6: Plan your travel and report to the university campus.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET scorecard (mandatory for Indian students)',
          'Valid international passport',
          'Passport-size photographs',
          'Medical fitness certificate (including HIV negative report)'
        ],
        hostelFacility: `Yerevan Haybusak University offers excellent hostel accommodation facilities for international students. The rooms are fully furnished with modern amenities, including beds, study tables, closets, and heating systems. Separate hostel buildings or wings are available for male and female students. High-speed internet (Wi-Fi) is accessible throughout the premises. The hostels are highly secure with 24/7 security personnel and CCTV surveillance. Additionally, Indian mess facilities providing both vegetarian and non-vegetarian food are available.`,
        gallery: []
      },
      {
        id: 'university-of-traditional-medicine',
        name: 'University Of Traditional Medicine',
        slug: 'university-of-traditional-medicine',
        image: '/images/universities/Armenia/university-of-traditional-medicine-1.webp',
        description: 'Founded in the 90\'s, the college is one of the higher instructive foundations that was granted the most elevated status.',
        location: 'Yerevan, Armenia',
        ranking: 'Pioneer in Integrated Medicine',
        established: '1991',
        medium: 'English',
        duration: '6 Years (5 Years Academic + 1 Year Internship)',
        fees: {
          tuition: '$3,300 / Year',
          hostel: '$800 / Year',
          total: '$24,600 (Approx. 6 Years)'
        },
        overview: `Founded in the 90's, the college is one of the higher instructive foundations that was granted the most elevated status- "The State Accreditation" from the Government for its high picture in logical, academic and instructive exercises. The graduates of the university get State Diploma. The University's instructive movement goes for readiness of such new qualified authorities who will build up the 21st century prescription by mix.

The medium of instruction for foreign students is English.

There are preliminary courses for the outside residents, to consider the Armenian dialect. Amid a scholastic year, the understudy thinks about all the while philanthropic and normal sciences' subjects and Armenian dialect or enhances his insight into the dialect. Bachelor course is accessible for remote national understudies.

Master course is additionally accessible for remote native understudies.`,
        whyStudy: [
          'Faculty of General Medicine',
          'Faculty of Dentistry',
          'Accredited with State Accreditation from the Government',
          'Graduates receive an internationally recognized State Diploma',
          'Options for preliminary Armenian language courses for external residents',
          'Modern integrated curriculum focusing on conventional & traditional medicine'
        ],
        admissionProcess: [
          'Step 1: Fill out the online registration form.',
          'Step 2: Submit scanned copies of Class 10 & 12 mark sheets, passport, and NEET scorecard.',
          'Step 3: Receive the university\'s formal acceptance and admission letter.',
          'Step 4: Complete enrollment fees and apply for the student visa.',
          'Step 5: Travel to Yerevan and join the academic sessions starting in September.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET scorecard (compulsory for Indian students)',
          'Valid international passport',
          'Passport-size photographs',
          'Medical fitness and HIV negative certificate'
        ],
        hostelFacility: `Students in the university experience dazzling student life in terms of education and personal grooming. The university has all modern amenities with a set of all basic facilities for the students. The university has a separate research center for great practical exposure for the students.`,
        gallery: []
      },
      {
        id: 'tereza-medical',
        name: 'Tereza Medical University',
        slug: 'tereza-medical-university',
        image: '/images/universities/Armenia/tereza-medical-university.webp',
        description: 'The university offers all modern amenities to its students. Due to this one reason international students coming to the university...',
        location: 'Yerevan, Armenia',
        ranking: 'Aesthetically Advanced University',
        established: '1992',
        medium: 'English',
        duration: '5 Years (ECTS 360 Credits)',
        fees: {
          tuition: '$4,000 (1st Year) / $3,000 (2nd-6th Yr)',
          hostel: '$1,800 / Year (Includes Mess)',
          total: '$29,800 (Grand Total)'
        },
        overview: `St. Tereza's Medical University of Yerevan, otherwise called St. Theresa Charitable Sisters Medical Institute, is a private therapeutic instruction foundation in Yerevan, Armenia, set up in 1992.

St. Tereza Medical University is the primary Medical University to begin English Medium Medicine course in Yerevan, as per ECTCS 360 Credits and offers the STUDENTS to finish the course in 5 Years of duration.`,
        whyStudy: [
          'First Medical University to start English Medium Medicine courses in Yerevan.',
          'Offers students to finish the course in a fast-track 5 Years of duration.',
          'Aligned with European Credit Transfer System (ECTS - 360 Credits).',
          'Extremely reputed private medical instruction foundation established in 1992.',
          'All-inclusive fee package including tuition, hostel, mess, and coaching.'
        ],
        admissionProcess: [
          'Step 1: Check eligibility and register through Rus Education.',
          'Step 2: Submit academic records, NEET scorecard, and passport copy.',
          'Step 3: Receive your official admission letter from St. Tereza Medical University.',
          'Step 4: Process your student visa application with Rus Education support.',
          'Step 5: Depart for Yerevan, complete registration, and start classes.'
        ],
        documentsRequired: [
          'Class 10th passing certificate and mark sheet',
          'Class 12th passing certificate and mark sheet',
          'NEET scorecard (mandatory for Indian students)',
          'Copy of valid international passport',
          'Passport-size photos',
          'Medical fitness certificates'
        ],
        hostelFacility: `The university offers all modern amenities to its students. Due to this one reason international students coming to the university have increased significantly over time. The university has all basic facilities like library, hostel, mess, laboratories, well-equipped classrooms etc. for the students other than having all modern amenities.

NOTE: The above-mentioned fee structure is the final amount to be paid by the student to Rus Education. This fee package includes Tuition fee, Hostel accommodation fee, medical insurance, remuneration to the center, MCI coaching for the complete duration of the course, airport transfer to the university, a phone call to parents on arrival in the university, study material in English Language, documentation of the student in the university, free translator to facilitate, and other services.`,
        gallery: []
      },
      {
        id: 'mkhitar-gosh',
        name: 'Mkhitar Gosh Armenian-Russian International University',
        slug: 'mkhitar-gosh-armenian-russian-international-university',
        image: '/images/universities/Armenia/mkhitar-gosh-armenian-russian-international-university-1.webp',
        description: 'The university comes under the top university of Armenia for providing high-quality education in the field of Medicine.',
        location: 'Yerevan, Armenia',
        ranking: 'Top Tier International University',
        established: '1996',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$3,500 / Year',
          hostel: '$1,000 / Year (1st Yr)',
          mess: '$1,000 / Year (1st Yr)',
          oneTime: '$1,000 (Admission Charges)',
          total: '$24,000 (Total 6 Years)'
        },
        overview: `Mkhitar Gosh Armenian-Russian International University established in 1996 is located in Yerevan, the capital city if Armenia. It is accredited by ANQA (Armenia’s National Center for Professional Education Quality Assurance) and officially approved by the Medical Council of India which complies with the standards set by the MCI.

The university comes under the top university of Armenia for providing high-quality education in the field of Medicine. The medical education program offered by the University is approved by the Ministry of Education and Science of Armenia.

Indian students graduating from the university are eligible to sit for MCI screening test and practice in India as a doctor.`,
        whyStudy: [
          'Faculty of Dentistry',
          'Faculty of Medical Case',
          'Faculty of Medical Art',
          'Accredited by ANQA and approved by Ministry of Education and Science of Armenia.',
          'Indian graduates are fully eligible for MCI/NMC screening tests to practice in India.'
        ],
        admissionProcess: [
          'Step 1: Fill out the online registration form.',
          'Step 2: Submit Class 10/12 mark sheets, passport copy, and NEET score.',
          'Step 3: Receive formal admission letter and ANQA verification support.',
          'Step 4: Deposit 1st-year academic, hostel, and admission charges.',
          'Step 5: Apply for student visa and depart for Yerevan, Armenia.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET scorecard',
          'Valid international passport',
          'Passport-size photographs',
          'Medical fitness and HIV negative reports'
        ],
        hostelFacility: `The university provides hostel facility for both- Armenian and International students. Hostels are furnished and well equipped with all basic day to day facilities. It offers neat and clean hostels with a friendly environment. The facilities provided by them to the students are very good and comfortable.

For the entertainment and refreshment, many extra-curricular activities like cultural, sports, and social activities are organized by the university. It offers every kind of academic and personal help and guidance.

Note: Mess charges & hotel charges will be charged on actual as per the choice of the student from 2nd year onwards. $1 = INR 94, actual amount is subject to change as per the USD-INR exchange rate.`,
        gallery: []
      },
      {
        id: 'yerevan-state-medical',
        name: 'Yerevan State Medical University',
        slug: 'yerevan-state-medical-university',
        image: '/images/universities/Armenia/yerevan-state-medical-university.webp',
        description: 'University has about 1,100 lecturers out of which, 171 are well-qualified Doctors of Sciences, 504 are Candidates of Sciences.',
        location: 'Yerevan, Armenia',
        ranking: 'Rank 1 in Armenia',
        established: '1920',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$5,500 / Year',
          hostel: '$800 / Year',
          total: '$37,800 (Approx. 6 Years)'
        },
        overview: `Yerevan State Medical University is centrally located in the capital of Armenia, Yerevan. It is considered as one of the Top Medical Universities in Armenia, leading with a number of 31,000 graduates till date. There are about 8,000 students in 6 faculties of the State Medical University after Heratsi. Approximately, 1184 students are from various nations. It is considered to be the best University for studying MD in Armenia (equivalent to MBBS in India). Teaching and research activities are organized in more than 100 chairs, leading clinical bases and research centers in Yerevan.

University has about 1,100 lecturers out of which, 171 are well-qualified Doctors of Sciences, 504 are Candidates of Sciences, 7 Academicians of the RANAS; who perform scientific & pedagogical work at the University.

This cluster of scientific & intellectual potential has a significant role in the development of medical science in Armenia.

YSMU relies on the mission of preparing highly qualified & skilled doctors to change the world, save the humanity; wherever it is needed. The academic year consists of two semesters. The first semester starts on September 1 and ends in December-January.

University constitutes of 5 main buildings- Main University building, Administrative building, Laboratory building, Anatomical building, Dental clinics building, and also three hospitals (Heratsi Hospital, Muratsan Hospital & Mikaelyan Institute of Surgery) operated under the supervision of Yerevan State Medical University; where students get a great life-learning experience. There are more than 30 affiliated hospitals with which Yerevan State Medical University works closely

Also, The University has established close connections with medical universities and international health organizations in the field of higher education and health. These well-known universities are from USA, Germany, Greece, Italy, France, Belgium, Egypt, Sweden, etc. Since 2000, YSMU has joined a number of international organizations. Among them are: SGROUP European Network of Universities, The International Association of Universities, World Federation of Medical Education as Member of Medical Education Association in Europe, Association for Dental Education in Europe`,
        whyStudy: [
          'School of General Medicine (MD- equivalent to MBBS in India)',
          'School of Pharmacy',
          'School of Dentistry',
          'School of Military Medicine',
          'Faculty of Public Health',
          'School of Postgraduate and Continuing Education'
        ],
        admissionProcess: [
          'Step 1: Submit online application forms directly through authorized representatives.',
          'Step 2: Upload Class 10/12 credentials, passport copies, and NEET-UG scorecards.',
          'Step 3: Receive direct provisional admission letters from YSMU.',
          'Step 4: Issue of official visa invite letters by the Ministry of Foreign Affairs of Armenia.',
          'Step 5: Travel to Yerevan, complete campus registration, and enroll in your MBBS program.'
        ],
        documentsRequired: [
          'Class 10th mark sheet and passing certificate',
          'Class 12th mark sheet and passing certificate',
          'NEET-UG scorecard (mandatory for Indian students)',
          'Valid international passport',
          'Passport-size photographs',
          'Certified medical health report (HIV negative certificate)'
        ],
        hostelFacility: `The University provides comfortable accommodation & dining facilities to its student, especially Indian students; as Indian delicacies are also available for them.

It accommodates its students in its two houses for international students with a separate dining area. Rooms are fully furnished decorated with all the basic amenities and the space is clean & tidy. Laundry service is also available for the students.

The university has a separate sports complex, a library with over 6 Lakhs books, gym and swimming pool facility as well.

There is an extra-curricular department, which operates all the sports activities on campus that includes dancing, theatre, drama, soccer, volleyball, basketball, power lifting, chess, and much more.

For transportation; students can take advantage of the regular bus service or metro.`,
        gallery: []
      }
    ]
  },
  {
    id: 'egypt',
    name: 'Egypt',
    slug: 'egypt',
    flag: 'https://flagpedia.net/data/flags/h80/eg.png',
    image: '/images/countries/egypt.png',
    description: 'Egypt offers high-quality medical education with a curriculum that balances theoretical knowledge and clinical practice.',
    startingPrice: '₹18 Lakhs',
    uniCount: 10,
    universities: []
  }
];
