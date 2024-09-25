import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
                    <div>
                        <h2 className="text-3xl font-bold mb-4 border-b-2 border-green-500 inline-block">Tentang OMEN</h2>
                        <p className="text-gray-300 mt-3">
                            OMEN by HP menghadirkan solusi gaming terbaik untuk para gamer yang ingin merasakan performa dan inovasi terbaru.
                        </p>
                    </div>

                  
                    <div>
                        <h2 className="text-3xl font-bold mb-4 border-b-2 border-green-500 inline-block">Tautan Cepat</h2>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#products" className="text-gray-300 hover:text-green-500 transition duration-300">Produk</a></li>
                            <li><a href="#support" className="text-gray-300 hover:text-green-500 transition duration-300">Dukungan</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-green-500 transition duration-300">Tentang Kami</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-green-500 transition duration-300">Kontak</a></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h2 className="text-3xl font-bold mb-4 border-b-2 border-green-500 inline-block">Informasi Lainnya</h2>
                        <p className="text-gray-300 mt-3">
                            Ikuti kami untuk pembaruan terbaru, promosi, dan berita menarik seputar dunia gaming. 
                        </p>
                        <p className="text-gray-300 mt-1">
                            Kami berkomitmen untuk mendukung komunitas gamer dengan alat dan teknologi terkini.
                        </p>
                    </div>
                </div>

            
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} OMEN by HP. Semua Hak Dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
