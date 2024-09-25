import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import KeyboardImage from '../../public/keyboard.png'; 
const products = [
    {
        id: 1,
        name: 'Mechanical Keyboard RGB',
        specs: [
            'Switch: Cherry MX Red',
            'Backlight: RGB',
            'Connection: USB-C',
            'N-Key Rollover: Yes',
        ],
        price: 'Rp 1.200.000',
    },
    {
        id: 2,
        name: 'Wireless Gaming Keyboard',
        specs: [
            'Switch: Kailh',
            'Backlight: RGB',
            'Connection: Wireless',
            'Battery Life: Up to 50 hours',
        ],
        price: 'Rp 1.800.000',
    },
    {
        id: 3,
        name: 'Compact Keyboard',
        specs: [
            'Switch: Gateron Brown',
            'Backlight: None',
            'Connection: USB',
            'N-Key Rollover: Yes',
        ],
        price: 'Rp 900.000',
    },
    {
        id: 4,
        name: 'Ergonomic Keyboard',
        specs: [
            'Switch: Membrane',
            'Backlight: Blue',
            'Connection: USB',
            'Design: Split Ergonomic',
        ],
        price: 'Rp 650.000',
    },
    {
        id: 5,
        name: 'Gaming Keyboard with Macro Keys',
        specs: [
            'Switch: Outemu Blue',
            'Backlight: RGB',
            'Connection: USB',
            'Macro Keys: Yes',
        ],
        price: 'Rp 1.500.000',
    },
    {
        id: 6,
        name: 'Silent Mechanical Keyboard',
        specs: [
            'Switch: Cherry MX Silent',
            'Backlight: RGB',
            'Connection: USB-C',
            'N-Key Rollover: Yes',
        ],
        price: 'Rp 1.700.000',
    },
    {
        id: 7,
        name: 'TKL Mechanical Keyboard',
        specs: [
            'Switch: Kailh Box White',
            'Backlight: White LED',
            'Connection: USB',
            'Compact Design: Yes',
        ],
        price: 'Rp 1.100.000',
    },
    {
        id: 8,
        name: 'Custom Mechanical Keyboard',
        specs: [
            'Switch: Hot-swappable',
            'Backlight: RGB',
            'Connection: USB-C',
            'Keycap Material: PBT',
        ],
        price: 'Rp 2.000.000',
    },
    {
        id: 9,
        name: 'Budget Gaming Keyboard',
        specs: [
            'Switch: Blue',
            'Backlight: Red LED',
            'Connection: USB',
            'Anti-Ghosting: Yes',
        ],
        price: 'Rp 500.000',
    },
];

const Accessories = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <div className="flex-grow p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(product => (
                    <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col h-full justify-between transition-transform duration-300 hover:shadow-2xl">
                        <div>
                            <h2 className="text-gray-800 text-2xl font-bold mb-4">{product.name}</h2>
                            <img src={KeyboardImage} alt={product.name} className="mx-auto mb-4 w-full h-auto rounded" />
                            <ul className="text-gray-600 mb-4">
                                {product.specs.map((spec, index) => (
                                    <li key={index}>• {spec}</li>
                                ))}
                            </ul>
                            <p className="text-yellow-500 text-xl font-bold">{product.price}</p>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 transition-transform duration-300 hover:bg-blue-700">
                            Pesan Sekarang
                        </button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Accessories;
