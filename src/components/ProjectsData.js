import Summit from "../assets/youth-summit.mp4";
import TrippleMPreview from "../assets/tripple-m-preview.webm";
import ChokmahPreview from "../assets/chokmah-resources-preview.webm";
import SharuhPreview from "../assets/sharuh-law-preview.webm";
import CleanShiftPreview from "../assets/cleanshift-logistics-preview.webm";
import SamaitaPreview from "../assets/samaita-solutions-preview.webm";
import AdullamPreview from "../assets/adullam-revival-church-preview.webm";
import UnboxedPreview from "../assets/unboxed-school-preview.webm";

const ProjectsData = [
    {
        imgsrc: SharuhPreview,
        title: "Legal Suise Platform",
        text: "A full-stack legal-services platform connecting lawyers and clients. The system includes a React frontend, Rails API, JWT authentication, PostgreSQL, and Twilio integration for communication workflows.",
        stack: ["React", "Rails", "PostgreSQL", "JWT", "Twilio"],
        live: "https://legalsuise.co.za/",
        codeAvailableOnRequest: true
    },
    {
        title: "CapeTech Repairs Management System",
        text: "A React Native repairs-management app backed by a Rails and PostgreSQL API. Built around mobile workflows, navigation, forms, state management, and repair-service operations.",
        stack: ["React Native", "Redux Toolkit", "Rails", "PostgreSQL"],
        codeAvailableOnRequest: true,
        source: "https://github.com/Leeoasis/capetech-rsm"
    },
    {
        imgsrc: ChokmahPreview,
        title: "Chokmah Resources Platform",
        text: "A resource-management platform with a React and Redux frontend, Rails API, PostgreSQL database, authentication, file handling, and structured content workflows.",
        stack: ["React", "Redux", "Rails", "PostgreSQL"],
        live: "https://chokmahresources.co.za/",
        source: "https://github.com/Leeoasis/chokmah-resources"
    },
    {
        imgsrc: TrippleMPreview,
        title: "Tripple M",
        text: "A recent private React project built with Vite, Tailwind CSS, Framer Motion, and modern routing. Focused on polished UI, motion, and clean responsive presentation.",
        stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        live: "https://tripplemstones.netlify.app/",
        codeAvailableOnRequest: true
    },
    {
        title: "Legal Suise Mobile",
        text: "A mobile companion project for the Legal Suise ecosystem, focused on mobile-first legal-service flows and React Native app structure.",
        stack: ["React Native", "Mobile UI"],
        source: "https://github.com/Leeoasis/sharuh-law-mobile"
    },
    {
        imgsrc: CleanShiftPreview,
        title: "CleanShift Logistics",
        text: "A logistics-focused JavaScript website for presenting transport and service information clearly, with a practical business-first layout.",
        stack: ["JavaScript", "Responsive UI"],
        live: "https://cleanshiftlogistics.netlify.app/",
        source: "https://github.com/Leeoasis/cleanshiftlogistics"
    },
    {
        imgsrc: SamaitaPreview,
        title: "Samaita Solutions",
        text: "A business-focused JavaScript web project for Samaita Solutions, built to communicate services clearly and support a polished online presence.",
        stack: ["JavaScript", "Business Website"],
        live: "https://samaitaconstructionsolutions.co.za/",
        source: "https://github.com/Leeoasis/samaita-solutions"
    },
    {
        imgsrc: AdullamPreview,
        title: "Adullam Revival Church",
        text: "A church community website built to present services, events, ministry information, and digital presence through a clear responsive interface.",
        stack: ["JavaScript", "Responsive UI", "Community Website"],
        live: "https://adullamrevivalchurch.co.za/",
        source: "https://github.com/Leeoasis/adullam-revival-church"
    },
    {
        imgsrc: UnboxedPreview,
        title: "Unboxed Autism Christian School",
        text: "A responsive school website for an autism-focused Christian learning environment, built to communicate the school's mission, programs, and contact pathways clearly.",
        stack: ["JavaScript", "Responsive UI", "Education Website"],
        live: "https://unboxedautismchristianschool.netlify.app/",
        source: "https://github.com/Leeoasis/unboxed-school"
    },
    {
        imgsrc: Summit,
        title: "Youth Summit",
        text: "Global-Youth-Development-Summit is a website that basically advertises a youth summit that will take place in future. ",
        stack: ["HTML", "CSS", "JavaScript"],
        live: "https://leeoasis.github.io/Youth-summit/",
        source: "https://github.com/Leeoasis/Youth-summit"
    }
]

export default ProjectsData;
