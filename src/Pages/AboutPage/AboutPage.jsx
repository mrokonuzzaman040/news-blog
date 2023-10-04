import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';

const AboutPage = () => {
    return (
        <div>
            <div className="">
                <Header></Header>
                <NavBar></NavBar>
            </div>
            <div className="m-10 space-y-5">
                <h2 className='text-2xl'>HISTORY</h2>
                <p>The Daily Star established its place in the media scene of Bangladesh on January 14, 1991. It started its journey with a sense of challenge and a feeling of humility to serve this nation as a truly independent newspaper.

                    The newspaper made its debut at a historic time when, with the fall of an autocratic regime, the country was well set to begin a new era towards establishing a democratic system of government which eluded Bangladesh for too long.</p>

                <p>The Daily Star is the single largest circulated daily newspaper in Bangladesh. With a huge readership, Bangladesh Pratidin is counted among the leading newspapers in Bangladesh. Kaler Kantho another popular newspaper of Bangladesh is published by the same company. The newspapers published from Dhaka, Bangladesh.</p>

                <h2 className='text-2xl'>OBJECTIVE</h2>
                <p>The Daily Star carries on with the long-term responsibility is to strengthen public opinion on how the democratic system should work and how to sustain and nurture democratic norms effectively.

                    It was a privilege for The Daily Star to be part of a changing scene after the fall of military autocrat in early 1990s. With that privilege came an enormous responsibility of upholding the duties of a free press. The newspaper is proud to pursue that policy without relenting for the past 23 years.</p>
            </div>
        </div>
    );
};

export default AboutPage;