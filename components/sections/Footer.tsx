import { Mail, Phone, Shield, RefreshCw } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-16 px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-3 gap-12 mb-12'>
                    <div>
                        <h3 className='text-2xl font-bold mb-4 text-[#E8A87C]'>Tranh Tô Màu Số Hoá Manh</h3>
                        <p className='text-gray-400 leading-relaxed'>
                            ✏️ Tự tay vẽ chân dung của chính mình và người thân mà không cần học vẽ. Biến ảnh kỷ niệm thành tác phẩm nghệ thuật độc
                            đáo của riêng bạn
                        </p>
                    </div>

                    <div>
                        <h4 className='text-lg font-semibold mb-4'>Liên hệ</h4>
                        <div className='space-y-3'>
                            <a href='tel:0359085886' className='flex items-center text-gray-400 hover:text-[#E8A87C] transition-colors'>
                                <Phone className='h-5 w-5 mr-3' />
                                0359085886
                            </a>
                            <a href='mailto:info@tranhtomauso.vn' className='flex items-center text-gray-400 hover:text-[#E8A87C] transition-colors'>
                                <Mail className='h-5 w-5 mr-3' />
                                info@tranhtomauso.vn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-lg font-semibold mb-4'>Chính sách</h4>
                        <div className='space-y-3'>
                            <a href='#' className='flex items-center text-gray-400 hover:text-[#E8A87C] transition-colors'>
                                <Shield className='h-5 w-5 mr-3' />
                                Chính sách bảo mật
                            </a>
                            <a href='#' className='flex items-center text-gray-400 hover:text-[#E8A87C] transition-colors'>
                                <RefreshCw className='h-5 w-5 mr-3' />
                                Chính sách đổi trả
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-800 pt-8'>
                    <p className='text-center text-gray-500'>© 2024 Tranh Tô Màu Số Hoá. Bản quyền thuộc về chúng tôi.</p>
                </div>
            </div>
        </footer>
    )
}
