import { useState } from 'react';
import './ImageGallery.css';

const completed_projects = [
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/IMG_9768.jpg',
    description: 'Nazmiye Muslu Spor Salonu Tadilatı Yapım İşi',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/DJI_0035.jpg',
    description: '10 Adet Açık Halı Saha Yapımı',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/001_1.jpg',
    description: '6 Adet Açık Halı Saha Yapılması',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/DJI_0015_1200.jpg',
    description: 'Tantavi Kültür ve Sanat Merkezi',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/DJI_0002_1200.jpg',
    description: 'Yenice Parkı',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/MG_4303_1200.jpg',
    description: 'Yeniyol Trafik Parkı',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/web_1200.jpg',
    description: 'Harmancık Pazar Yeri ve Sosyal Tesisi',
  },
  {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/berlika2.jpg',
    description: 'Berlika Trafik Eğitim Parkı',
  }
];

const on_going_projects = [
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/002_2.jpg',
    description: 'Şükran Mahallesi 2 Adet  Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaatı İşi',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/bebf7541-fa5e-4ce8-8653-ba4056e848c6.jpg',
    description: 'Meram Gödene Evleri Konut Yapı Kooperatifi',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/b3004298-c883-44a4-bb95-f159b1ca94c7.jpg',
    description: 'Bizim Meram Köyü Konut Yapı Kooperatifi',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/1_61.jpg',
    description: 'Oruçreis Evleri Kentsel Dönüşüm Kat Karşılığı Konut Yapımı',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/pirireis00210.jpg',
    description: 'Pirireis Evleri Kentsel Dönüşüm Kat Karşılığı Konut Yapımı',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/fahrunnisaevleri18.jpg',
    description: 'Fahrunnisa Mah Kentsel Dönüşüm Kat Karşılığı Konut Yapımı',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/aksinne.jpg',
    description: 'Aksinne Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı',
    },
    {
    imageUrl: 'https://www.meram.bel.tr/upload/medya/turgutreis-min.jpg',
    description: 'Turgutreis Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı',
    }
];

const ImageCard = ({ imageUrl, description }) => (
    <div className='card'>
      <img src={imageUrl} alt="image" />
      <p>{description}</p>
    </div>
  );
  
  function ImageGallery() {

    const [button1Color, setButton1Color] = useState('#87C739');
    const [button2Color, setButton2Color] = useState('#086268');
    const [currentProjects, setCurrentProjects] = useState(completed_projects);
    
    const handleButtonSwap = () => {
      setCurrentProjects(currentProjects === completed_projects ? on_going_projects : completed_projects);
      setButton1Color((prevColor) => (prevColor === '#87C739' ? '#086268' : '#87C739'));
      setButton2Color((prevColor) => (prevColor === '#086268' ? '#87C739' : '#086268'));
    };
  
    return (
      <div>
        <div className='buttons'>
          <button className="button1" style={{ backgroundColor: button1Color }} onClick={handleButtonSwap}>Tamamlanan Projeler</button>
          <button className="button2" style={{ backgroundColor: button2Color }} onClick={handleButtonSwap}>Devam Eden Projeler</button>
        </div>
        <div className='cards'>
          {currentProjects.map((data, index) => (
            <ImageCard key={index} {...data} />
          ))}
        </div>
      </div>
    );
  }
  
  export default ImageGallery;
