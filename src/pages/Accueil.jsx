// Bibliotheques :
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// CSS :
import '../css/Accueil.css';

//Datas :
import projects from "../data/projects";
import profile from "../data/profile";
import parcours from "../data/parcours";
import googleForm from "../data/googleForm";

// Composants :
import Competence from "../components/Competence";
import Projet from "../components/Projet";

// Assets :
import bg1 from "../assets/background/bg.svg";
import down from "../assets/icons/down.svg";
import right from "../assets/icons/right.png";
import githubIcon from "../assets/icons/github.png";
import emailIcon from "../assets/icons/email.png";
import linkedinIcon from "../assets/icons/linkedin.png";

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

function changeTabInfos(titre, img){
    document.title = titre;

    // Create a new link element for the updated favicon
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = img;

    // Find the existing favicon link element and remove it
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
    document.head.removeChild(existingFavicon);
    }

    // Append the new favicon link element to the head
    document.head.appendChild(newFavicon);
}

export default function Accueil(){
    const [contact, setContact] = React.useState("");
    const [contenu, setContenu] = React.useState("");
    const [nom, setNom] = React.useState("");
    const [showContactBtn, setShowContactBtn] = React.useState(false);
    const [formInfos, setFormInfos] = React.useState("NONE");

    const scrollToSection = (sectionName) => {
        const sectionRef = document.querySelector(sectionName);
        if (sectionRef) {
          sectionRef.scrollIntoView({ behavior: 'smooth' });
        }
    };

    React.useEffect(() => {
        changeTabInfos(`${profile.nom} ${profile.prenom}`, profile.favicon);

        const scrollListener = () => {
          if (window.scrollY > 400) {
            setShowContactBtn(true);
          } else {
            setShowContactBtn(false);
          }
        };
    
        window.addEventListener('scroll', scrollListener);
    
        return () => {
          window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    async function contactForm(e){
        e.preventDefault();
        if(contact === "" || nom === "" || contenu === "") return setFormInfos("ERROR");
        setFormInfos("LOADING");
        googleForm.url = googleForm.url.replace("viewform", "formResponse");
        googleForm.url = googleForm.url.replace("nomprenom", nom);
        googleForm.url = googleForm.url.replace("contact", contact);
        googleForm.url = googleForm.url.replace("message", contenu);
        await timer(1000);
        setFormInfos("SENDED");
        await fetch(googleForm.url); // Probleme sync et reponse server a regler plus tard
    }

    return(
        <>
            {showContactBtn && (
                <button id="contactBtn" onClick={() => scrollToSection('#contact')} type="button" className="hover:bg-[#0d1821] fixed flex justify-center items-center z-20 px-[8px] py-[4px] bg-[#344966] text-white text-xl rounded-lg bottom-[15px] right-[15px]">
                    Contactez moi
                    <img id="contactBtnLogo" src={right} className="invert pl-1" />
                </button>
            )} 
            <div id="accueil" className="scroll-item h-[90vh] relative flex flex-col justify-center items-center">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}></div>
                <h1 className="text-4xl md:text-8xl text-[#002233] text-center relative z-10">PORTFOLIO</h1>
                <p className="text-md md:text-xl text-[#002233] relative z-10 text-center">{profile.description}</p>
            </div>
            <div className="h-[10vh] flex justify-center items-center">
                <img 
                    src={down} 
                    className="relative z-10 h-10" 
                    onClick={() => scrollToSection('#about')} 
                />
            </div>


            <div id="about" className="min-h-[90vh] flex flex-col justify-center md:mx-[10vw] mx-[2vw] ">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <h1 className="text-6xl text-[#002233] mb-[15px]">À propos</h1>
                        <p className="mb-[45px]" dangerouslySetInnerHTML={{ __html: profile.a_propos.replace(/\n/g, "<br>") }}></p>
                        <h1 className="text-6xl text-[#002233] mb-[15px]">Mon Parcours</h1>
                        <p dangerouslySetInnerHTML={{ __html: profile.Parcours.replace(/\n/g, "<br>") }}></p>
                    </div>
                    <div className="place-self-center lg:pl-5">
                        <Carousel
                            className=""
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                                </div>
                            )}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </Carousel>
                    </div>

                </div>
            </div>
            <div className="h-[10vh] flex justify-center items-center">
                <img 
                    src={down} 
                    className="relative z-10 h-10" 
                    onClick={() => scrollToSection('#projet')} 
                />
            </div>
            <div id="projet" className="min-h-[100vh] flex flex-col justify-center lg:mx-[10vw] mx-[2vw]">
                <h1 className="text-6xl text-[#002233] mb-[35px]">Mes projets</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {projects.map((el, i) => (
                        <Projet key={i} id={el.id} text={el.name} img={el.thumbnail}/>
                    ))}
                </div>
            </div>

            <div id="competences" className="min-h-[90vh] mt-[60px] lg:mx-[10vw] mx-[2vw]">
                <h1 className="text-6xl text-[#002233] pt-[40px] mb-[35px]">Mes compétences</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-4">
                    {profile.competences.map((el, i) => (
                        <Competence key={i} nom={el.nom} img={el.img}/>
                    ))}
                </div>
            </div>
            <div className="h-[10vh] flex justify-center items-center">
                <img 
                    src={down} 
                    className="relative z-10 h-10" 
                    onClick={() => scrollToSection('#parcours')} 
                />
            </div>
            <div id="parcours" className="min-h-[90vh] mt-[60px] lg:mx-[10vw] mx-[2vw]">
                <h1 className="text-6xl text-[#002233] pt-[40px] mb-[35px]">Mon Parcours</h1>
                <div className="min-h-[60vh] flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4">
                        <Timeline position="alternate" className="mt-[50px]">
                            {parcours.parcours.map((el, i) => (
                                <TimelineItem key={i}>
                                    <TimelineOppositeContent color="text.secondary">{el.date}</TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" color="secondary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="text-black">{el.text}</TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                        <p className="place-self-center" dangerouslySetInnerHTML={{ __html: parcours.description.replace(/\n/g, "<br>") }}></p>
                    </div>
                </div>
            </div>
            <div className="h-[10vh] flex justify-center items-center">
                <img 
                    src={down} 
                    className="relative z-10 h-10" 
                    onClick={() => scrollToSection('#contact')} 
                />
            </div>

            <div id="contact" className="min-h-[100vh] flex flex-col justify-center lg:mx-[10vw] mx-[2vw]">
                <h1 className="text-6xl text-[#002233] mb-[35px]">Contactez moi</h1>
                <form onSubmit={(e) => contactForm(e)} className="">
                    <div className="md:grid grid-cols-3 gap-4 mb-2">
                        <span>
                            <p>Comment je vous joint ? *</p>
                            <input className="w-full border-[#002233] border-b-2 border-l-2 bg-[#f0faff93] px-1" type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Tel ou Mail"/>
                        </span>
                        <span>
                            <p>Qui êtes vous ?*</p>
                            <input className="w-full border-[#002233] border-b-2 border-l-2 bg-[#f0faff93] px-1" type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder=""/>
                        </span>
                        <span className="col-span-2">
                            <p>Votre message*</p>
                            <textarea className="w-full border-[#002233] border-b-2 border-l-2 bg-[#f0faff93] px-1 min-h-[10vh]" type="text" value={contenu} onChange={(e) => setContenu(e.target.value)} ></textarea>
                            <p className="italic"><small>les champs marqués d'un astérisque (*) sont obligatoires</small></p>
                            <div className="flex flex-col md:flex-row items-center m-0">
                                <button type="submit" className="hover:bg-[#0d1821] px-[8px] py-[4px] my-[10px] bg-[#344966] text-white rounded-lg mr-4">Envoyer</button>
                                {formInfos === "LOADING" &&(
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-[#344966]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                )}
                                {formInfos === "ERROR" &&(
                                    <p className="text-[red]">Erreur, veuillez remplir tous les champs</p>
                                )}
                                {formInfos === "SENDED" &&(
                                    <p>Message envoyé</p>
                                )}
                            </div>
                        </span>
                        <span className="row-span-2 flex justify-center">
                            <a href={profile.github} target="_blank"><img src={githubIcon} className="h-[40px] m-1 cursor-pointer hover:contrast-125 hover:animate-bounce" /></a>
                            <a href={profile.linkedin} target="_blank"><img src={linkedinIcon} className="h-[40px] m-1 cursor-pointer hover:contrast-125 hover:animate-bounce" /></a>
                            <a href={profile.mail} target="_blank"><img src={emailIcon} className="h-[40px] m-1 cursor-pointer hover:contrast-125 hover:animate-bounce" /></a>
                        </span>
                    </div>

                </form>
            </div>
        </>
    );
}