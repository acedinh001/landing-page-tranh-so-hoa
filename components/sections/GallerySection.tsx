'use client';

import { useState } from 'react';

const galleryItems = [
  {
    before: 'https://images.pexels.com/photos/1482099/pexels-photo-1482099.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Gia đình hạnh phúc'
  },
  {
    before: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Chân dung cá nhân'
  },
  {
    before: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Kỷ niệm tình yêu'
  },
  {
    before: 'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Thú cưng đáng yêu'
  },
  {
    before: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Phong cảnh đẹp'
  },
  {
    before: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Bé yêu đáng yêu'
  }
];

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Một Số Tranh Hoàn Thiện Của Khách Hàng
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Từ ảnh thật → tranh tô màu hoàn thiện
          </p>
          <div className="w-24 h-1 bg-[#E8A87C] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-square">
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-center">
                  {hoveredIndex === index ? '✨ Tranh hoàn thiện' : '📸 Ảnh gốc'}
                </p>
                <p className="text-white/90 text-sm text-center mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
