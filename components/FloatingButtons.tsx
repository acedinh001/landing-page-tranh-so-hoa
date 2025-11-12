'use client'

import { Facebook, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
    return (
        <div className='fixed bottom-6 left-6 flex flex-col gap-4 z-50'>
            <a
                href='https://www.facebook.com/profile.php?id=61577572941056'
                target='_blank'
                rel='noopener noreferrer'
                className='w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group'
                aria-label='Facebook Page'>
                <Facebook className='h-7 w-7 text-white group-hover:scale-110 transition-transform' />
            </a>

            <a
                href='https://www.messenger.com/t/61577572941056'
                target='_blank'
                rel='noopener noreferrer'
                className='w-14 h-14 bg-gradient-to-br from-[#00B2FF] to-[#006AFF] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group relative'
                aria-label='Facebook Messenger'>
                <MessageCircle className='h-7 w-7 text-white group-hover:scale-110 transition-transform' />
                <span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse'></span>
            </a>
        </div>
    )
}
