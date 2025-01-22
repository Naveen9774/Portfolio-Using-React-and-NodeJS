import Img2 from './self-pic1.jpg';

export default function About(){
    return(
        <section id="about" className="px-10 w-full flex flex-col lg:flex-row py-20
        align-center bg-red-200 max-w-5xl mx-auto">
            <div className='flex-1'>
                <img style={{width:400}} src={Img2} alt="About" className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
            <div>
                <h2 className="text-center text-red-500 text-5xl font-bold">About me:</h2>
            </div>
            <p>Hello...! I'm Karipisetty Naveen, a recent graduate with a Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) With a strong foundation in software development, I specialize as a Full Stack Developer, proficient in technologies such as Java, HTML, CSS, JavaScript, and MySQL, along with a basic knowledge of Python.
Throughout my academic journey, I completed a 2-month internship at Upskills Campus, where I gained hands-on experience in Java and core programming principles. This experience was instrumental in developing my final year project, a Credit Card Fraud Detection system, which utilized machine learning techniques to address real-world challenges.
I've also completed key coursework, including Core Java, which enhanced my skills and confidence in software development. I am passionate about expanding my technical expertise and exploring new, challenging roles in software and web development.
            </p>
            </div>
        </section>
    );
}