// src/data/projectsData.js

// Smart Campus 360
import scImg1 from '../assets/projects/smart-campus/img1.png';
import scImg2 from '../assets/projects/smart-campus/img2.png';
import scImg3 from '../assets/projects/smart-campus/img3.png';
import scImg4 from '../assets/projects/smart-campus/img4.png';
import scImg5 from '../assets/projects/smart-campus/img5.png';
import scImg6 from '../assets/projects/smart-campus/img6.png';
import scImg7 from '../assets/projects/smart-campus/img7.png';
import scImg8 from '../assets/projects/smart-campus/img8.png';
import scVideo from '../assets/projects/smart-campus/ProjectDemo.mp4';

// AML DWBI
import amlImg1 from '../assets/projects/aml-dwbi/1.png';
import amlImg2 from '../assets/projects/aml-dwbi/2.png';
import amlImg3 from '../assets/projects/aml-dwbi/3.png';
import amlImg4 from '../assets/projects/aml-dwbi/4.png';
import amlImg5 from '../assets/projects/aml-dwbi/5.png';
import amlImg6 from '../assets/projects/aml-dwbi/6.png';

// Stats
import statsImg1 from '../assets/projects/stats/img1.png';
import statsImg2 from '../assets/projects/stats/img2.png';
import statsImg3 from '../assets/projects/stats/img3.png';
import statsImg4 from '../assets/projects/stats/img4.png';
import statsImg5 from '../assets/projects/stats/img5.png';
import statsImg6 from '../assets/projects/stats/img6.png';

// FarmNex
import farmImg1 from '../assets/projects/farmnex/img1.jpeg';
import farmImg2 from '../assets/projects/farmnex/img2.jpeg';
import farmImg3 from '../assets/projects/farmnex/img3.jpeg';
import farmImg4 from '../assets/projects/farmnex/img4.jpeg';
import farmImg5 from '../assets/projects/farmnex/img5.jpeg';
import farmImg6 from '../assets/projects/farmnex/img6.jpeg';
import farmImg7 from '../assets/projects/farmnex/img7.jpeg';
import farmImg8 from '../assets/projects/farmnex/img8.jpeg';
import farmImg9 from '../assets/projects/farmnex/img9.jpeg';
import farmImg10 from '../assets/projects/farmnex/img10.jpeg';
import farmImg11 from '../assets/projects/farmnex/img11.jpeg';

// Vehicle
import vehicleVideo from '../assets/projects/vehicle/vechilevideo.mp4';

// Wellness
import wellImg1 from '../assets/projects/wellness/1.png';
import wellImg2 from '../assets/projects/wellness/2.png';
import wellImg3 from '../assets/projects/wellness/3.png';
import wellImg4 from '../assets/projects/wellness/4.png';
import wellImg5 from '../assets/projects/wellness/5.png';
import wellImg6 from '../assets/projects/wellness/6.png';
import wellImg7 from '../assets/projects/wellness/7.png';
import wellImg8 from '../assets/projects/wellness/8.png';
import wellImg9 from '../assets/projects/wellness/9.png';
import wellImg10 from '../assets/projects/wellness/10.png';
import wellImg11 from '../assets/projects/wellness/11.png';

// Burger
import burgerImg1 from '../assets/projects/burger/1.png';
import burgerImg2 from '../assets/projects/burger/2.png';
import burgerImg3 from '../assets/projects/burger/3.png';
import burgerImg4 from '../assets/projects/burger/4.png';
import burgerImg5 from '../assets/projects/burger/5.png';
import burgerImg6 from '../assets/projects/burger/6.png';
import burgerImg7 from '../assets/projects/burger/7.png';
import burgerImg8 from '../assets/projects/burger/8.png';
import burgerImg9 from '../assets/projects/burger/9.png';

export const projects = [
  {
    id: 1,
    title: "Data Warehousing & Business Intelligence Project",
    category: ["Data Engineering", "BI & Analytics"],
    description: "Designed and implemented a complete Data Warehouse and BI solution using an Anti-Money Laundering dataset.",
    highlights: ["Star Schema Design", "ETL using SSIS", "SCD Type 2 implementation", "SSAS Cube for OLAP", "Power BI dashboards"],
    github: "https://github.com/umar-ahamed-ds/DWBI-AML-Transaction-Data-Warehouse.git",
    images: [amlImg1, amlImg2, amlImg3, amlImg4, amlImg5, amlImg6],
    featured: false
  },
  {
    id: 2,
    title: "Smart Campus 360",
    category: ["Full-Stack"],
    description: "A production-inspired university management system integrating booking, ticketing, and notification workflows.",
    highlights: ["Resource & Asset Management", "Booking system with conflict detection", "Ticket management with technician assignment", "OAuth2 + 2FA authentication"],
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/gima2003/it3030-paf-2026-smart-campus-groupY3S1_WD_99.git",
    images: [scImg1, scImg2, scImg3, scImg4, scImg5, scImg6, scImg7, scImg8],
    videoUrl: scVideo,
    featured: false
  },
  {
    id: 3,
    title: "Statistical Analysis Project",
    category: ["Machine Learning", "Data Analysis"],
    description: "Analyzed learning engagement vs knowledge retention using statistical modelling.",
    highlights: ["Regression modelling", "Hypothesis testing", "Feature selection", "Data visualization"],
    github: "https://github.com/umar-ahamed-ds/TPSM-Assignment.git",
    images: [statsImg1, statsImg2, statsImg3, statsImg4, statsImg5, statsImg6],
    featured: false
  },
  {
    id: 4,
    title: "FarmNex Smart Farm System",
    category: ["Full-Stack", "IoT"],
    description: "An IoT-powered smart farming platform with chatbot, payment, and inventory management.",
    tech: ["MERN Stack", "Stripe", "IoT"],
    github: "https://github.com/Tharakax/FarmNex.git",
    images: [farmImg1, farmImg2, farmImg3, farmImg4, farmImg5, farmImg6, farmImg7, farmImg8, farmImg9, farmImg10, farmImg11],
    featured: false
  },
  {
    id: 5,
    title: "Vehicle Rental System",
    category: ["Full-Stack", "Java"],
    description: "A CRUD-based rental system demonstrating OOP concepts with database integration.",
    tech: ["Java", "MySQL", "JDBC"],
    github: "https://github.com/umar-ahamed-ds/SpeedWheelsVehicleRentalSystem.git",
    images: [],
    videoUrl: vehicleVideo,
    featured: false
  },
  {
    id: 6,
    title: "Personal Wellness Tracker",
    category: ["Mobile"],
    description: "Android app for habit tracking, mood journaling, and hydration reminders.",
    tech: ["Kotlin", "Android Studio"],
    github: "https://github.com/umar-ahamed-ds/personal-wellness-tracker-android-mobile.git",
    images: [wellImg1, wellImg2, wellImg3, wellImg4, wellImg5, wellImg6, wellImg7, wellImg8, wellImg9, wellImg10, wellImg11],
    featured: false
  },
  {
    id: 7,
    title: "Burger Xpress Mobile App",
    category: ["Mobile"],
    description: "A mobile food ordering app with customization, payment, and tracking features.",
    tech: ["Java/Kotlin", "Android"],
    github: "https://github.com/umar-ahamed-ds/burger-xpress-food-ordering-android.git",
    images: [burgerImg1, burgerImg2, burgerImg3, burgerImg4, burgerImg5, burgerImg6, burgerImg7, burgerImg8, burgerImg9],
    featured: false
  }
];
