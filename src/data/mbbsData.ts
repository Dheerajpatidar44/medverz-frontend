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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1000',
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
          'Advanced infrastructure such as well-equipped laboratories, modern classrooms, sports facilities, libraries, etc.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'One of the leading federal universities in Russia.',
        location: 'Simferopol, Russia',
        ranking: 'Federal Ranking',
        established: '1918',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: '₹3,30,000 / Year', hostel: '₹20,000 / Year', total: '₹21,00,000 (Approx. 6 Years)' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'dagestan-state',
        name: 'Dagestan State Medical University',
        slug: 'dagestan-state-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Holistic development of students'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'A combination of education, research, sports and creative activities.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'The university has a direct admission process- no donation, no entrance exam, no interview.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'The university offers quality education at an affordable rate.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Board your flights to Russia.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Support for international students helps them assimilate into a new culture.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Wide range of facilities for the students such as sports, arts and social and other enriching activities.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Students are not required to pay any donation or capitation fee.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'The students can choose between English and Russian medium of study at their convenience.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Affiliated with reputed hospitals to provide clinical training.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Located in Pskov, Northwestern Russia.',
          'Medical facilities include Medical Research Center and Scientific Laboratories.',
          'No requirement for IELTS/TOEFL.',
          'Holistic development of each student.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Clinical rotations at best hospitals and clinics.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Strong scientific and innovative learning environment.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Celebration of all major Indian national festivals.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          '24/7 safety and security within the campus.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Administrative center of Tula Oblast with humid continental climate.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Celebration of Indian festivals like Holi and Diwali.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Rich cultural and educational excursions in Yekaterinburg.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'Indian Vecher conducted by Indian students annually.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
          'The University provides fully furnished hostels to all its students.'
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
    uniCount: 5,
    universities: [
      {
        id: 'kyrgyz-uzbek-international',
        name: 'Kyrgyz-Uzbek International University',
        slug: 'kyrgyz-uzbek-international-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'A prominent international university in Kyrgyzstan offering high-quality medical education with a focus on clinical practice.',
        location: 'Osh, Kyrgyzstan',
        ranking: 'Top Ranked',
        established: '1994',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'A public medical university in Osh, Kyrgyzstan that has been training foreign students since 1992.',
        location: 'Osh, Kyrgyzstan',
        ranking: 'Public Medical University',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 4,000 / Year',
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
      },
      {
        id: 'osh-international-medical',
        name: 'Osh International Medical University',
        slug: 'osh-international-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'A modern medical university in Osh focusing on international standards and clinical exposure.',
        location: 'Osh, Kyrgyzstan',
        ranking: 'International Standards',
        established: '2019',
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
        id: 'jalalabad-international-medical',
        name: 'Jalalabad International Medical University',
        slug: 'jalalabad-international-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'A renowned international medical university providing high-quality education and clinical training.',
        location: 'Jalalabad, Kyrgyzstan',
        ranking: 'Renowned Academy',
        established: '2015',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: 'USD 3,600 / Year',
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
      }
    ]
  },
  {
    id: 'georgia',
    name: 'Georgia',
    slug: 'georgia',
    flag: '/flag-uk.png',
    image: '/images/countries/georgia.png',
    description: 'Georgia offers European standard medical education with a 100% English medium curriculum and high safety standards.',
    startingPrice: '₹25 Lakhs',
    uniCount: 14,
    universities: [
      {
        id: 'tbilisi-state',
        name: 'Tbilisi State Medical University',
        slug: 'tbilisi-state-medical-university',
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1000',
        description: 'The largest and most respected medical university in Georgia and Eastern Europe.',
        location: 'Tbilisi, Georgia',
        ranking: 'Rank 1 in Georgia',
        established: '1918',
        medium: 'English',
        duration: '6 Years',
        fees: {
          tuition: '$8,000 / Year',
          hostel: '$2,500 / Year',
          total: '₹35 Lakhs (Approx.)'
        },
        overview: 'TSMU is a leading medical university in Tbilisi, Georgia, with a century-old history of excellence.',
        whyStudy: [
          'European standard education',
          'No entrance exam required (only NEET)',
          'Beautiful and safe country',
          'WFME and WHO recognized'
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
        hostelFacility: 'University hostels and private apartments available with high-speed internet and all modern amenities.',
        gallery: [
          'https://images.unsplash.com/photo-1503917988258-f19a78a44293?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 'caucasus-international',
        name: 'Caucasus International University',
        slug: 'caucasus-international-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 1998. Formerly it was known as LLC Caucasus International University and granted International Quality Accreditation by the Central...',
        location: 'Tbilisi, Georgia',
        ranking: 'Quality Accreditation',
        established: '1998',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tbilisi-medical-hippocrates',
        name: 'Tbilisi Medical University Hippocrates',
        slug: 'tbilisi-medical-university-hippocrates',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The University is equipped with modern technologies, laboratories with new equipment and instruments, clinics etc. It focuses on intensive clinical...',
        location: 'Tbilisi, Georgia',
        ranking: 'Clinical Focused',
        established: '2003',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'david-tvildiani',
        name: 'David Tvildiani Medical University',
        slug: 'david-tvildiani-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The university offers quality higher education and the best international experience in medicine. It focuses on continuous improvement in teaching,...',
        location: 'Tbilisi, Georgia',
        ranking: 'International Experience',
        established: '1989',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'david-agmashenebeli',
        name: 'David Agmashenebeli University Of Georgia',
        slug: 'david-agmashenebeli-university-of-georgia',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The university has modern infrastructure, conference hall, educational audiences, computer centres, sports halls, press club, library and First Aid Training...',
        location: 'Tbilisi, Georgia',
        ranking: 'Modern Infrastructure',
        established: '1991',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'akaki-tsereteli',
        name: 'Akaki Tsereteli State University',
        slug: 'akaki-tsereteli-state-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The University is a diverse higher education organization that carries out academic and professional programs and is operated in active...',
        location: 'Kutaisi, Georgia',
        ranking: 'Diverse Higher Ed',
        established: '1933',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'aieti-medical-school',
        name: 'AIETI Medical School',
        slug: 'aieti-medical-school',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: '“AIETI” Medical School came into its existence to provide high-quality medical education in Georgia.',
        location: 'Tbilisi, Georgia',
        ranking: 'High Quality Ed',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'batumi-shota-rustaveli',
        name: 'Batumi Shota Rustaveli State University',
        slug: 'batumi-shota-rustaveli-state-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'One of the oldest and most prestigious universities in Batumi, offering medical courses to international students.',
        location: 'Batumi, Georgia',
        ranking: 'Prestigious State University',
        established: '1923',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'geomedi-medical',
        name: 'Geomedi Medical University',
        slug: 'geomedi-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'GMU is collaborated with the leading medical institutions worldwide and provides high standard medical education.',
        location: 'Tbilisi, Georgia',
        ranking: 'Global Collaborations',
        established: '1998',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'new-vision-university',
        name: 'New Vision University',
        slug: 'new-vision-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in the year 2013, New Vision University is a private non-profit university in Tbilisi, Georgia. The University is known...',
        location: 'Tbilisi, Georgia',
        ranking: 'Private Non-profit',
        established: '2013',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tbilisi-medical-academy',
        name: 'Tbilisi Medical Academy',
        slug: 'tbilisi-medical-academy',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The Petre Shotadze Tbilisi Medical Academy, also known as Tbilisi Medical Academy was founded in 1992 by remarkable Georgian physician,...',
        location: 'Tbilisi, Georgia',
        ranking: 'Historic Academy',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'east-european-university',
        name: 'East European University',
        slug: 'east-european-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The University offers a global standard of education and fabricates student’s career by providing them with various opportunities. It has...',
        location: 'Tbilisi, Georgia',
        ranking: 'Global Standards',
        established: '2012',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'university-of-georgia',
        name: 'University Of Georgia',
        slug: 'university-of-georgia-tbilisi',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'University of Georgia About University The University of Georgia was established in 2004 at Tbilisi, is a private college which...',
        location: 'Tbilisi, Georgia',
        ranking: 'Private College',
        established: '2004',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'georgian-american-university',
        name: 'Georgian American University',
        slug: 'georgian-american-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It is authorized and accredited higher education institution by the Ministry of Education and Science of Georgia recognized worldwide. Moreover,...',
        location: 'Tbilisi, Georgia',
        ranking: 'Globally Recognized',
        established: '2001',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
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
    id: 'kazakhstan',
    name: 'Kazakhstan',
    slug: 'kazakhstan',
    flag: '/kazakhstan.png',
    image: '/images/countries/kazakhstan.png',
    description: 'Kazakhstan is known for its short 5-year MBBS program and very affordable cost of living.',
    startingPrice: '₹18 Lakhs',
    uniCount: 8,
    universities: []
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    flag: '/flag-uzbekistan.png',
    image: '/images/countries/uzbekistan.png',
    description: 'A rising destination with modern infrastructure and a curriculum closely aligned with the Indian medical system.',
    startingPrice: '₹14 Lakhs',
    uniCount: 6,
    universities: []
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
    universities: []
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
    universities: []
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Institute of Applied Health Sciences is a leading institution of medical education for MBBS in Bangladesh that began its journey...',
        location: 'Chittagong, Bangladesh',
        ranking: 'Leading Institution',
        established: '1989',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'sylhet-womens-medical',
        name: 'Sylhet Women’s Medical College',
        slug: 'sylhet-womens-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2007, Sylhet Women’s Medical College is a top private medical school in Sylhet city in Bangladesh built exclusively...',
        location: 'Sylhet, Bangladesh',
        ranking: 'Top Private Medical School',
        established: '2007',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'mainamoti-medical-college',
        name: 'Mainamoti Medical College',
        slug: 'mainamoti-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Mainamoti Medical College is one of the largest and most popular private medical colleges in Bangladesh providing excellent quality medical...',
        location: 'Comilla, Bangladesh',
        ranking: 'Popular Private College',
        established: '2011',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'president-abdul-hamid',
        name: 'President Abdul Hamid Medical College',
        slug: 'president-abdul-hamid-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Named after the President of Bangladesh, President Abdul Hamid Medical College is a private medical college in Kishoreganj that was...',
        location: 'Kishoreganj, Bangladesh',
        ranking: 'Private Medical College',
        established: '2013',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'international-medical-college',
        name: 'International Medical College',
        slug: 'international-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2000, International Medical College is a top-tier medical education institution in Tongi that came into existence to provide...',
        location: 'Gazipur, Bangladesh',
        ranking: 'Top-tier Institution',
        established: '2000',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'delta-medical-college',
        name: 'Delta Medical College',
        slug: 'delta-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2006, Delta Medical College is one of the top Bangladesh medical colleges located in Mirpur, Dhaka providing excellent...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Top Medical College',
        established: '2006',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'bikrampur-bhuiyan',
        name: 'Bikrampur Bhuiyan Medical College',
        slug: 'bikrampur-bhuiyan-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Bikrampur Bhuiyan Medical College is a renowned private medical college in Bangladesh providing high-quality medical education.',
        location: 'Munshiganj, Bangladesh',
        ranking: 'Renowned College',
        established: '1994',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'universal-medical-college',
        name: 'Universal Medical College',
        slug: 'universal-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in 2013, Universal Medical College is counted amongst the top medical educational institutions in Bangladesh.',
        location: 'Dhaka, Bangladesh',
        ranking: 'Top Educational Institution',
        established: '2013',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'north-east-medical-college',
        name: 'North East Medical College',
        slug: 'north-east-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 1998, North East Medical College is the best private medical college in the North-East region of Bangladesh.',
        location: 'Sylhet, Bangladesh',
        ranking: 'Best Private College',
        established: '1998',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'ibn-sina-medical',
        name: 'Ibn Sina Medical College',
        slug: 'ibn-sina-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2005, Ibn Sina Medical College is a private medical academic institution to study MBBS in Bangladesh that is...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Private Academic Institution',
        established: '2005',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tairunnessa-memorial',
        name: 'Tairunnessa Memorial Medical College',
        slug: 'tairunnessa-memorial-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Tairunnessa Memorial Medical College is a private medical college in Bangladesh that started its journey in 2002 with a view...',
        location: 'Gazipur, Bangladesh',
        ranking: 'Private Medical College',
        established: '2002',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tmss-medical-college',
        name: 'TMSS Medical College',
        slug: 'tmss-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2008, TMSS Medical College is a top private medical college in Dhaka to study MBBS in Bangladesh that...',
        location: 'Bogra, Bangladesh',
        ranking: 'Top Private College',
        established: '2008',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'popular-medical-college',
        name: 'Popular Medical College',
        slug: 'popular-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2010, Popular Medical College is a reputed private medical academic institution that has been successful in providing an...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Reputed Private Institution',
        established: '2010',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'faridpur-diabetes-medical',
        name: 'Faridpur Diabetes Medical College',
        slug: 'faridpur-diabetes-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Now renowned as Diabetic Association Medical College Hospital, Faridpur Diabetes Medical College is one of the top medical educational institutions...',
        location: 'Faridpur, Bangladesh',
        ranking: 'Top Educational Institution',
        established: '2009',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'southern-medical-college',
        name: 'Southern Medical College',
        slug: 'southern-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It is located at East Nasirabad, Khulshi, Chittagong. It is associated with Chittagong Medical University and is fully accredited medical...',
        location: 'Chittagong, Bangladesh',
        ranking: 'Fully Accredited College',
        established: '2005',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'barind-medical-college',
        name: 'Barind Medical College Bangladesh',
        slug: 'barind-medical-college-bangladesh',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Barind Medical College is a renowned private medical college in Bangladesh located at the Education Center of Rajshahi.',
        location: 'Rajshahi, Bangladesh',
        ranking: 'Renowned Private College',
        established: '2011',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'dhaka-national-medical',
        name: 'Dhaka National Medical College',
        slug: 'dhaka-national-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It was acquired from its forerunner- The Dhaka National Medical Institute, which had marked its presence in 1925 as a...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Historic Institution',
        established: '1925',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'rangpur-community-medical',
        name: 'Rangpur Community Medical College',
        slug: 'rangpur-community-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in 2008, Rangpur Community Medical College is a well-known medical academic institution in Bangladesh.',
        location: 'Rangpur, Bangladesh',
        ranking: 'Well-known Institution',
        established: '2008',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'khwaja-yunus-ali-medical',
        name: 'Khwaja Yunus Ali Medical College',
        slug: 'khwaja-yunus-ali-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It is registered under the Society of Government of the People Republic of Bangladesh. The college is affiliated with the...',
        location: 'Sirajganj, Bangladesh',
        ranking: 'Affiliated College',
        established: '2005',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'marks-medical-college',
        name: 'MARKS Medical College Bangladesh',
        slug: 'marks-medical-college-bangladesh',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2011, MARKS Medical College (MRMC) is one of the top private medical colleges for MBBS in Bangladesh.',
        location: 'Dhaka, Bangladesh',
        ranking: 'Top Private College',
        established: '2011',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'uttara-womens-medical',
        name: 'Uttara Women’s Medical College Bangladesh',
        slug: 'uttara-womens-medical-college-bangladesh',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Also known as Medical College For Women and Hospital, Uttara Women’s Medical College is one of the best medical colleges...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Best Women’s College',
        established: '1992',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'ustc-chittagong',
        name: 'University Of Science And Technology Chittagong',
        slug: 'university-of-science-and-technology-chittagong',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'USTC is a private university which was started as Institute of Applied Health Sciences (IAHS). After a few years, the...',
        location: 'Chittagong, Bangladesh',
        ranking: 'Private University',
        established: '1989',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'parkview-medical-college',
        name: 'Parkview Medical College Sylhet Bangladesh',
        slug: 'parkview-medical-college-sylhet-bangladesh',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in 2013, Parkview Medical College is a renowned non-government medical college in Bangladesh popular for providing high standard of...',
        location: 'Sylhet, Bangladesh',
        ranking: 'Renowned Non-government College',
        established: '2013',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'university-of-rajshahi',
        name: 'University Of Rajshahi',
        slug: 'university-of-rajshahi',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The University of Rajshahi is a state funded college situated in Rajshahi city in north-western Bangladesh. The college is likewise...',
        location: 'Rajshahi, Bangladesh',
        ranking: 'State Funded University',
        established: '1953',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'university-of-dhaka',
        name: 'University Of Dhaka',
        slug: 'university-of-dhaka',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The University of Dhaka was founded by many scholars in the field of education in...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Premier University',
        established: '1921',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'shahjalal-university',
        name: 'Shahjalal University Of Science And Technology',
        slug: 'shahjalal-university-of-science-and-technology',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The Government of Bangladesh had marked its presence in 1986 as a science and technology university.',
        location: 'Sylhet, Bangladesh',
        ranking: 'Science and Technology University',
        established: '1986',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'gono-bishwabiddalay',
        name: 'Gono Bishwabiddalay Bangladesh',
        slug: 'gono-bishwabiddalay-bangladesh',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in Savar, Bangladesh on 14th July, 1998. It is a non-government university established by Gono Shasthaya Kendra.',
        location: 'Savar, Bangladesh',
        ranking: 'Non-government University',
        established: '1998',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'bup-bangladesh',
        name: 'Bangladesh University Of Professionals',
        slug: 'bangladesh-university-of-professionals',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Established in June, 2008, BUP is one of the best universities in Bangladesh that offers courses to the students from...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Best University',
        established: '2008',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'khulna-city-medical',
        name: 'Khulna City Medical College Bangladesh',
        slug: 'khulna-city-medical-college-bangladesh',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in 2016, Khulna City Medical College (KCMC) is one of the top private medical colleges in Bangladesh located in...',
        location: 'Khulna, Bangladesh',
        ranking: 'Top Private College',
        established: '2016',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'anwer-khan-modern',
        name: 'Anwer Khan Modern Medical College',
        slug: 'anwer-khan-modern-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'One of the prestigious medical schools in Bangladesh. The School was founded in the year 2008, in Dhanmondi, Dhaka. Anwer...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Prestigious Medical School',
        established: '2008',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'medical-college-women-uttara',
        name: 'Medical College For Women And Hospital, Uttara',
        slug: 'medical-college-for-women-and-hospital-uttara',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The college was established in the year 1992 with an aim to offer quality medical education to all local and...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Quality Medical Education',
        established: '1992',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'mh-samorita-medical',
        name: 'MH Samorita Medical College',
        slug: 'mh-samorita-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'One of the prominent medical colleges to study MBBS in Bangladesh. It was founded in 2010 and is located in...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Prominent Medical College',
        established: '2010',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'sirajul-islam-medical',
        name: 'Sirajul Islam Medical College And Hospital',
        slug: 'sirajul-islam-medical-college-and-hospital',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Dhaka University affiliated it as a constituent college. One year internship is mandatory for all medical graduates after completion of...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Constituent College',
        established: '2011',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'shahabuddin-medical',
        name: 'Shahabuddin Medical College',
        slug: 'shahabuddin-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The college was founded in 2003 and is situated in the heart of the Dhaka City- Gulshan. The college is...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Heart of Dhaka College',
        established: '2003',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'enam-medical-college',
        name: 'Enam Medical College And Hospital',
        slug: 'enam-medical-college-and-hospital',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The College is recognized by the Medical Council of India (MCI), Bangladesh Dental...',
        location: 'Savar, Bangladesh',
        ranking: 'Recognized College',
        established: '2003',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'zh-sikder-womens',
        name: 'Z.H. Sikder Women’s Medical College',
        slug: 'zh-sikder-womens-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The college was founded in 1992 and is situated in the capital city of Dhaka. The...',
        location: 'Dhaka, Bangladesh',
        ranking: 'Historical Women’s College',
        established: '1992',
        medium: 'English',
        duration: '5 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
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
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'HMU was established in 1926 and brags of a background marked by brilliance and rich customs.',
        location: 'Harbin, China',
        ranking: 'Brilliant Institution',
        established: '1926',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'xinjiang-medical',
        name: 'Xinjiang Medical University',
        slug: 'xinjiang-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Since 1992, Xinjiang Medical University is to providing admissions to foreign students. In the year 2001, the University began to...',
        location: 'Urumqi, China',
        ranking: 'Renowned University',
        established: '1992',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'xuzhou-medical-college',
        name: 'Xuzhou Medical College',
        slug: 'xuzhou-medical-college',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It is a fully-accredited institution of higher education under the direct administration of Jiangsu Provincial Government. Since 1958, XZMC has...',
        location: 'Xuzhou, China',
        ranking: 'Fully Accredited',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'wenzhou-medical',
        name: 'Wenzhou Medical University',
        slug: 'wenzhou-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in Hangzhou in the year 1912. The University is ranked as the 18th medical school among the top medical...',
        location: 'Wenzhou, China',
        ranking: 'Top 20 Medical School',
        established: '1912',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'tianjin-medical',
        name: 'Tianjin Medical University',
        slug: 'tianjin-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in 1951, Tianjin Medical University became the first medical university after the foundation of P. R. of China. TMU...',
        location: 'Tianjin, China',
        ranking: 'First Medical University',
        established: '1951',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'southern-medical',
        name: 'Southern Medical University',
        slug: 'southern-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It was built up in October, 1951. In 1978, the University was affirmed as one of the leading therapeutic colleges...',
        location: 'Guangzhou, China',
        ranking: 'Leading Therapeutic College',
        established: '1951',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'shihezi-medical',
        name: 'Shihezi Medical University',
        slug: 'shihezi-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The University has collectively build up graduate education bases with Peking University and Tianjin University, as well as a program...',
        location: 'Shihezi, China',
        ranking: 'Collaborative University',
        established: '1949',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'ningxia-medical',
        name: 'Ningxia Medical University',
        slug: 'ningxia-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It was known as Ningxia Medical College. The University is the unique higher learning medical institution of Ningxia Hui Autonomous...',
        location: 'Yinchuan, China',
        ranking: 'Unique Institution',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'nanjing-medical',
        name: 'Nanjing Medical University',
        slug: 'nanjing-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The National Jiangsu Medical College was founded in 1934 and was renamed the Nanjing Medical College in 1957 when it...',
        location: 'Nanjing, China',
        ranking: 'Historic Medical College',
        established: '1934',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'liaoning-medical',
        name: 'Liaoning Medical University',
        slug: 'liaoning-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'LMU is considered among one of the top medical universities of China which offers MBBS in English medium by the...',
        location: 'Jinzhou, China',
        ranking: 'Top Medical University',
        established: '1946',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'kunming-medical',
        name: 'Kunming Medical University',
        slug: 'kunming-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The college ground involves an area of 125.4 hectares. It has around 15,000 understudies, of which more than 1,400 are...',
        location: 'Kunming, China',
        ranking: 'Large Campus University',
        established: '1933',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'hebei-medical',
        name: 'Hebei Medical University',
        slug: 'hebei-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in the year 1894. It is one of the oldest as well as AAA graded medical schools in China.',
        location: 'Shijiazhuang, China',
        ranking: 'AAA Graded School',
        established: '1894',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'guangxi-medical',
        name: 'Guangxi Medical University',
        slug: 'guangxi-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Located at a picaresque location in in the city of Nanning, Guangxi Medical University (often known as GMU) was founded...',
        location: 'Nanning, China',
        ranking: 'Picaresque Campus',
        established: '1934',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'guangzhou-medical',
        name: 'Guangzhou Medical University',
        slug: 'guangzhou-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'GMU faces 31 provinces, autonomous regions, municipalities directly under the Chinese central government, Hong Kong and Macao regions to recruit...',
        location: 'Guangzhou, China',
        ranking: 'Central Government University',
        established: '1958',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'fujian-medical',
        name: 'Fujian Medical University',
        slug: 'fujian-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'Founded in 1937, Fujian Medical University is the precursor of Fujian Provincial Medical Vocational School. In 1939, the school was renamed...',
        location: 'Fuzhou, China',
        ranking: 'Historic Precursor',
        established: '1937',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'dalian-medical',
        name: 'Dalian Medical University',
        slug: 'dalian-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'It was founded in the year 1947 in the southern part of Dalian city, China by Mao Ze Dong. In...',
        location: 'Dalian, China',
        ranking: 'Historical Institution',
        established: '1947',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'chongqing-medical',
        name: 'Chongqing Medical University',
        slug: 'chongqing-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The college has two grounds, Yuanjiagang Campus and Jinyun Campus, covering a region of 2.02 km2. The aggregate resources of...',
        location: 'Chongqing, China',
        ranking: 'Two Campus University',
        established: '1956',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'capital-medical',
        name: 'Capital Medical University',
        slug: 'capital-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The university positions itself among the best scholarly medical establishments in China and is considered as one of the key...',
        location: 'Beijing, China',
        ranking: 'Key Medical Institution',
        established: '1960',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'anhui-medical',
        name: 'Anhui Medical University',
        slug: 'anhui-medical-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The university was first shifted to Huaiyuan County, Anhui Province in 1949. In 1952 it was shifted again to Hefei...',
        location: 'Hefei, China',
        ranking: 'Regional Hub',
        established: '1926',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
        overview: 'More details coming soon.',
        whyStudy: [],
        admissionProcess: [],
        documentsRequired: [],
        hostelFacility: 'TBD',
        gallery: []
      },
      {
        id: 'china-three-gorges',
        name: 'China Three Gorges University',
        slug: 'china-three-gorges-university',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
        description: 'The College has excellent medical facilities for teaching and has four state-of-the-art infrastructure hospitals affiliated with it, which allows students...',
        location: 'Yichang, China',
        ranking: 'State-of-the-art Infrastructure',
        established: '2000',
        medium: 'English',
        duration: '6 Years',
        fees: { tuition: 'TBD', hostel: 'TBD', total: 'TBD' },
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
    id: 'belarus',
    name: 'Belarus',
    slug: 'belarus',
    flag: '/flag-belarus.png',
    image: '/images/countries/belarus.png',
    description: 'Renowned for its medical sciences and strong focus on practical laboratory work.',
    startingPrice: '₹16 Lakhs',
    uniCount: 6,
    universities: []
  },
  {
    id: 'philippines',
    name: 'Philippines',
    slug: 'philippines',
    flag: '/flag-philippines.png',
    image: '/images/countries/philippines.png',
    description: 'Offers an American style curriculum with a heavy focus on clinical exposure and USMLE preparation.',
    startingPrice: '₹18 Lakhs',
    uniCount: 15,
    universities: []
  },
  {
    id: 'armenia',
    name: 'Armenia',
    slug: 'armenia',
    flag: '/flag-armenia.png',
    image: '/images/countries/armenia.png',
    description: 'High-quality European standard medical education at very affordable costs.',
    startingPrice: '₹14 Lakhs',
    uniCount: 8,
    universities: []
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
