'use client'

import { useState } from 'react'

const galleryItems = [
    {
        before: 'https://i.postimg.cc/TwJK8Nqh/525706464-2211468569266613-5468948544883121177-n.jpg',
        after: 'https://i.postimg.cc/qRxNfDXB/508404384-1425349086263336-1057306931819463210-n.jpg',
        caption: 'Chân dung cá nhân'
    },
    {
        before: 'https://i.postimg.cc/pTJmNcY9/579984308-1100743858603512-3318077323390076093-n.jpg',
        after: 'https://i.postimg.cc/G2x40gJ4/572274088-1959424691298829-4734109571184983368-n.jpg',
        caption: 'Chân dung cá nhân'
    },
    {
        before: 'https://i.postimg.cc/NMkKhC7j/519669911-756839343503315-8498773286013374577-n.jpg',
        after: 'https://i.postimg.cc/85m78XBP/523930088-753921753951797-1509330383757220105-n.jpg',
        caption: 'Tranh thú cưng'
    },
    {
        before: 'https://i.postimg.cc/QtJFLYk8/525615235-1281794426880726-2665818423468357663-n.jpg',
        after: 'https://i.postimg.cc/C1sRyrH5/527951177-1391063848658324-2294557432627379747-n.jpg',
        caption: 'Tranh kỉ niệm tình bạn'
    },
    {
        before: 'https://i.postimg.cc/1tr8x7cn/579502385-1178062613754541-5844339847368207169-n.jpg',
        after: 'https://i.postimg.cc/3RFkMfCp/581839684-712716101358585-7885119099857145918-n.jpg',
        caption: 'Tranh kỉ niệm tình bạn'
    },
    {
        before: 'https://i.postimg.cc/NGxHZFdB/506979790-3918821895025630-8645231795502930548-n.jpg',
        after: 'https://i.postimg.cc/B6BjW7c1/580759941-1934074227455188-8718598212778892274-n.jpgs',
        caption: 'Tranh chân dung'
    }
]

export default function GallerySection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className='py-20 px-4 bg-gradient-to-b from-white to-[#FFF8F3]'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Một Số Tranh Hoàn Thiện Của Khách Hàng</h2>
                    <p className='text-lg text-gray-600 mb-4'>Từ ảnh thật → tranh tô màu hoàn thiện</p>
                    <div className='w-24 h-1 bg-[#E8A87C] mx-auto rounded-full'></div>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className='relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <div className='relative aspect-square'>
                                <img
                                    src={item.before}
                                    alt={`Trước - ${item.caption}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                        hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <img
                                    src={item.after}
                                    alt={`Sau - ${item.caption}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            </div>
                            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                                <p className='text-white font-semibold text-center'>
                                    {hoveredIndex === index ? '✨ Tranh hoàn thiện' : '📸 Ảnh gốc'}
                                </p>
                                <p className='text-white/90 text-sm text-center mt-1'>{item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
