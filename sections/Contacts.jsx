import Image from 'next/image';
import logoWhite from '../public/ARETTAWHITE.png'

export const Contacts = () => {
    return (
        <div
            id="contact"
            className='app-container background--black relative'
        >
            <footer className='contact-cover'>
                <div>
                    <h2>Contact</h2>
                    <hr />
                </div>
                <div className='contact-wrapper'>
                    <div className='contact-logo'>
                        <Image src={logoWhite} alt="areta main logo white" priority />
                    </div>
                    <div className='contact-details'>
                        <div>
                            <a href='tel:+34611529536'>+34 611 529 536</a>
                        </div>
                        <div>
                            <a href='mailto:martagabriel82@hotmail.com'>martagabriel82@hotmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
