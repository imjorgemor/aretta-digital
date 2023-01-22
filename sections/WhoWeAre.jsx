import Image from "next/image";
import background from '../public/backcolors.jpg';

export const WhoWeAre = () => {
    return (
        <div
            id="who we are"
            className='app-container background--offwhite relative'
        >
            <section className='who-cover'>
                <p>In a world where everybody wants to experience more than ever, we want to help you on making  your brand the best partner in crime on this matter.</p>
            </section>
            {/* <div className="who-image">
                <Image src={background} alt="background image" priority/>
            </div> */}
        </div>
    )
}
