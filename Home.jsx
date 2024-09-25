import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Tingkatkan from '../../public/tingkatkan.png';
import Gaming from '../../public/gaming.png';
import Diciptakan from '../../public/diciptakan.png';
import Genshin from '../../public/Genshin.png';
import Footer from '../Component/Footer';

const images = [
    {
        src: Tingkatkan,
        text: "Tingkatkan Permainan Anda. Setinggi Mungkin.",
        bgColor: "bg-transparent"
    },
    {
        src: Gaming,
        text: "Laptop Gaming OMEN TRANSCEND 16. PERLUAS LAYAR ANDA, PERLUAS DUNIA ANDA.",
        bgColor: "bg-transparent"
    },
    {
        src: Diciptakan,
        text: "DICIPTAKAN UNTUK GAME, DIBUAT UNTUK BERKREASI.",
        bgColor: "bg-gradient-to-r from-green-600 to-teal-600"
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex items-center justify-center h-screen relative overflow-hidden bg-gray-100">
                <img
                    src={images[currentIndex].src}
                    alt="Background"
                    className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-black opacity-50" />

                <div className="relative z-10 flex flex-col items-start justify-center w-full h-full p-6 md:p-12">
                    <div className="flex flex-col space-y-4 max-w-lg">
                        <h1 className="text-3xl md:text-4xl font-bold text-white text-left">
                            {images[currentIndex].text}
                        </h1>
                        <p className="text-md md:text-lg text-gray-300 text-left">
                            {currentIndex === 0 
                                ? "Jelajahi laptop game Transcend 14 yang sepenuhnya baru dan tingkatkan pengalaman bermain game Anda."
                                : currentIndex === 1
                                ? "Laptop Gaming OMEN TRANSCEND 16 menawarkan performa tinggi dan desain futuristik."
                                : "DICIPTAKAN UNTUK GAME, DIBUAT UNTUK BERKREASI."
                            }
                        </p>
                    </div>
                </div>
            </div>

          
            <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 mt-10">
                <div className="md:w-1/2 flex flex-col justify-center text-black md:pr-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">LAPTOP GAMING OMEN TRANSCEND 16</h2>
                    <p className="text-md md:text-lg mb-4 font-semibold text-gray-800">
                        GAMING TERBAIK ADALAH GAME DENGAN TAMPILAN JELAS
                    </p>
                    <p className="text-sm md:text-md text-gray-700 mb-4">
                        Laptop gaming portabel sempurna adalah yang memiliki layar jelas dalam penglihatan Anda. Tinggalkan gambar yang silau dan kusam dengan layar mini-LED 16:10 240 Hz, dan sambut layar baru yang lebih: lebih cemerlang, lebih reaktif, lebih luas, lebih leluasa untuk bermain.
                    </p>
                    <p className="text-lg font-semibold text-green-600">PELAJARI LEBIH LANJUT</p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-end">
                    <img src={Genshin} alt="Laptop Gaming" className="object-contain w-full max-w-lg rounded-lg shadow-md" style={{ width: '110%' }} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
