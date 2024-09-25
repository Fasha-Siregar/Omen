import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import pc from '../../public/pc-ready.png'; 

const products = [
    {
        id: 1,
        name: 'PC Ready',
        specs: [
            'Prosesor: Intel Core i7',
            'RAM: 16GB DDR4',
            'Storage: 1TB SSD',
            'GPU: NVIDIA RTX 3060',
        ],
        price: 'Rp 15.000.000',
    },
    {
        id: 2,
        name: 'PC Gaming',
        specs: [
            'Prosesor: AMD Ryzen 5',
            'RAM: 16GB DDR4',
            'Storage: 512GB SSD + 1TB HDD',
            'GPU: NVIDIA RTX 3070',
        ],
        price: 'Rp 20.000.000',
    },
    {
        id: 3,
        name: 'PC Multimedia',
        specs: [
            'Prosesor: Intel Core i5',
            'RAM: 8GB DDR4',
            'Storage: 1TB HDD',
            'GPU: Integrated',
        ],
        price: 'Rp 10.000.000',
    },
    {
        id: 4,
        name: 'PC Office',
        specs: [
            'Prosesor: Intel Core i3',
            'RAM: 4GB DDR4',
            'Storage: 500GB HDD',
            'GPU: Integrated',
        ],
        price: 'Rp 5.000.000',
    },
    {
        id: 5,
        name: 'PC Streaming',
        specs: [
            'Prosesor: AMD Ryzen 7',
            'RAM: 32GB DDR4',
            'Storage: 1TB SSD + 2TB HDD',
            'GPU: NVIDIA RTX 3080',
        ],
        price: 'Rp 30.000.000',
    },
    {
        id: 6,
        name: 'PC Creator',
        specs: [
            'Prosesor: Intel Core i9',
            'RAM: 32GB DDR4',
            'Storage: 2TB SSD',
            'GPU: NVIDIA RTX 3090',
        ],
        price: 'Rp 40.000.000',
    },
    {
        id: 7,
        name: 'PC Budget',
        specs: [
            'Prosesor: AMD Ryzen 3',
            'RAM: 8GB DDR4',
            'Storage: 256GB SSD',
            'GPU: Integrated',
        ],
        price: 'Rp 4.000.000',
    },
    {
        id: 8,
        name: 'PC Custom',
        specs: [
            'Prosesor: Intel Core i5',
            'RAM: 16GB DDR4',
            'Storage: 1TB SSD',
            'GPU: NVIDIA GTX 1660',
        ],
        price: 'Rp 12.000.000',
    },
    {
        id: 9,
        name: 'PC Workstation',
        specs: [
            'Prosesor: AMD Ryzen 9',
            'RAM: 64GB DDR4',
            'Storage: 2TB SSD + 4TB HDD',
            'GPU: NVIDIA RTX A4000',
        ],
        price: 'Rp 50.000.000',
    },
];

const PC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <div className="flex-grow p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(product => (
                    <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl flex flex-col">
                        <h2 className="text-gray-800 text-2xl font-bold mb-4">{product.name}</h2>
                        <img src={pc} alt={product.name} className="mx-auto mb-4 w-full h-auto rounded" />
                        <ul className="text-gray-600 mb-4">
                            {product.specs.map((spec, index) => (
                                <li key={index}>• {spec}</li>
                            ))}
                        </ul>
                        <p className="text-yellow-500 text-xl font-bold mb-4">{product.price}</p>
                        <div className="mt-auto">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full transition-transform duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default PC;
