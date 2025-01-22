export default function Contacts(){
    return(
        <section id="contacts" className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-red-500 text-center">
                Contacts
            </h2>
            <div className="flex gap-5 justify-center my-10">
                <a rel="noreferrer" target="_blank" className ="text-center hover:underline" href="mailto:karipisettynaveen@gmail.com">
                    Email:
                    <span className="font-bold">
                        karipisettynaveen@gmail.com
                    </span>
                </a>
                <a rel="noreferrer" target="_blank" className ="text-center hover:underline" href="https://www.linkedin.com/in/karipisettynaveen">
                Linkedin:
                    <span className="font-bold">
                        @karipisettynaveen
                    </span>
                </a>
                <a rel="noreferrer" target="_blank"   className ="text-center hover:underline" href="https://github.com/Naveen9774">
                Github:
                    <span className="font-bold">
                        @Naveen9774
                    </span>
                </a> 
                <a rel="noreferrer" target="_blank"   className ="text-center hover:underline" href="https://amber-danette-13.tiiny.site">
                Resume:
                    <span className="font-bold">
                        @Download Resume
                    </span>
                </a>
            </div>
        </section>
    );
}