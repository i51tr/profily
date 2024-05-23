import React from 'react'
import "./certificates.css"
import Certi1 from "../assets/certi_1.jpg";
import Certi2 from "../assets/certi_2.jpg";
import Certi3 from "../assets/certi_3.jpg";
import Certi4 from "../assets/certi_4.jpg";
import Certi5 from "../assets/certi_5.jpg";
import Certi6 from "../assets/certi_6.jpg";
import Bgvector from "../assets/vectors/bgvector.png";
import Bounce from 'react-reveal/Bounce';

const certificateData = [
  { id: 1, imgSrc: Certi1, altText: 'heart front premium', text: '@gjjklh' },
  { id: 2, imgSrc: Certi2, altText: 'rocket front color', text: '@gjjklh' },
  { id: 3, imgSrc: Certi3, altText: 'fire front colorfire', text: '@gjjklh' },
  { id: 4, imgSrc: Certi4, altText: 'crow front colorcrow', text: '@gjjklh' },
  { id: 5, imgSrc: Certi5, altText: 'crow front colorcrow', text: '@gjjklh' },
  { id: 6, imgSrc: Certi6, altText: 'crow front colorcrow', text: '@gjjklh' },
];

const Certificates = () => {
  return (
    <section className='certificate-container'>
      <img src={Bgvector} alt='Bgvector' style={{ position: "absolute", bottom: "85%" }} />
      <div className="certificate-wrapper">
        <Bounce left>
          <h2 className='certificate-title'>Certificates</h2>
        </Bounce>
        <div className='certificates'>
          {certificateData.map((certificate) => (
            <div className='certificate' key={certificate.id}>
              <Bounce left>
                <img src={certificate.imgSrc} alt={certificate.altText} />
              </Bounce>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates