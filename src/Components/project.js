import Image2 from './download.jpeg';
import laf from './MPA-pic.jpg';
export default function Projects() {

    return (
    
    <section id="projects" className="my-20 w-full flex flex-col gap-5 align-center max-w-5x1 mx-auto">
    
        <h2 className="text-5xl text-red-500 font-bold text-center">My Projects</h2>
    
        <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
    
                  gap-5 lg:flex-row max-w-5x1 mx-auto shadow transition
    
                  hover: shadow-xl hover:scale-[102%] w-full">
    
    <div className="w-80 rounded">
    
    <a href="#" className="w-full h-full">
    
    <img src={Image2} style={{width:300}} alt="Project 1" className="w-full h-full bg-cover rounded"/>
    
    </a>
    
    </div>
    
    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
    
    <h2 className="font-bold text-3x1 text-center">
    
    <a className="hover:underline" href="https://github.com/Naveen9774/Credit-Card-Fraud-Detection">
    Credit-Card-Fraud-Detection
    </a>
    
    </h2>
    
    <p>•Credit card fraud detection is presently the most frequently occurring problem in the present world. 
        This is due to the rise in both online transactions and e-commerce platforms. <br></br>
•Credit card fraud generally happens when the card was stolen for any of the unauthorized 
purposes or even when the fraudster uses the credit card information for his use. <br></br>
•we are facing a lot of credit card problems. To detect the fraudulent activities 
the credit card fraud detection system was introduced. <br></br>
•The algorithms used are random forest algorithm and the xgBoost algorithm. 
    </p>
    </div>

    
    
    </div>

    <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
    
    gap-5 lg:flex-row max-w-5x1 mx-auto shadow transition

    hover: shadow-xl hover:scale-[102%] w-full">

<div className="w-80 rounded">

<a href="#" className="w-full h-full">

<img src={laf} style={{width:300}} alt="Project 2" className="w-full h-full bg-cover rounded"/>

</a>

</div>

<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">

<h2 className="font-bold text-3x1 text-center">

<a className="hover:underline" href="#">
METRO RECLAIM: A SMART LOST AND FOUND SYSTEM
</a>

</h2>

<p>•
MUSIC PLAYER APPLICATION USING CORE JAVA.<br></br>
•
A music player is a software application or device designed for playing audio files.<br></br>
•
It allows users to listen to their favorite songs, albums, playlists, or podcasts.<br></br>
•
A music player provides various features such as play, pause, skip, shuffle, repeat, and volume control.</p>
</div>



</div>
    
    
    </section>

    );
 }