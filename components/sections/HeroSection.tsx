'use client'

import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    const scrollToForm = () => {
        document.getElementById('consultation-form')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section className='relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#FFF8F3] to-white'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6 text-center md:text-left animate-fade-in'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                        Biến Ảnh Kỷ Niệm Thành Tác Phẩm Nghệ Thuật Của Riêng Bạn
                    </h1>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                        Chúng tôi giúp bạn tạo nên bộ tranh tô màu số hoá từ chính bức ảnh yêu thích – món quà độc nhất cho bản thân hoặc người thân.
                    </p>
                    <Button
                        onClick={scrollToForm}
                        size='lg'
                        className='bg-[#E8A87C] hover:bg-[#D99968] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                        Nhận Tư Vấn Ngay
                        <ArrowDown className='ml-2 h-5 w-5 animate-bounce' />
                    </Button>
                </div>

                <div className='relative'>
                    <div className='rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500'>
                        <img
                            src='https://i.postimg.cc/ZRQ2zM1W/581952787-1555350279244085-4264808273305140950-n.jpg'
                            alt='Người cầm tranh tô màu hoàn thành'
                            className='w-full h-auto object-cover'
                        />
                    </div>
                    <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform rotate-3'>
                        <p className='text-sm font-semibold text-gray-700'>✨ Từ ảnh của bạn</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
