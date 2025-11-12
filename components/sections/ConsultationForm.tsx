'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Loader2, Phone } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  note: string;
};

declare global {
  interface Window {
    fbq?: (command: string, eventName: string, data?: any) => void;
  }
}

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          note: data.note,
          timestamp: new Date().toISOString()
        }),
      });

      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Lead');
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-20 px-4 bg-gradient-to-b from-[#FFF8F3] to-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nhận Tư Vấn & Báo Giá Cá Nhân Hoá
          </h2>
          <p className="text-lg text-gray-600">
            Điền thông tin bên dưới, đội ngũ của chúng tôi sẽ liên hệ tư vấn nhanh nhất.
          </p>
          <div className="w-24 h-1 bg-[#E8A87C] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
          {isSuccess ? (
            <div className="text-center py-12 animate-fade-in">
              <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cảm ơn bạn!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Chúng tôi sẽ liên hệ ngay để tư vấn chi tiết cho bạn.
              </p>
              <div className="bg-[#FFF8F3] rounded-2xl p-6 inline-block">
                <p className="text-gray-700 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5 text-[#E8A87C]" />
                  Thời gian phản hồi: <strong>15 phút</strong>
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                  Họ và tên <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Vui lòng nhập họ tên' })}
                  placeholder="Nguyễn Văn A"
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#E8A87C] transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold mb-2 block">
                  Số điện thoại <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Vui lòng nhập số điện thoại',
                    pattern: {
                      value: /^[0-9]{10,11}$/,
                      message: 'Số điện thoại không hợp lệ'
                    }
                  })}
                  placeholder="0901234567"
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#E8A87C] transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="note" className="text-gray-700 font-semibold mb-2 block">
                  Ghi chú / Nhu cầu tranh
                </Label>
                <Textarea
                  id="note"
                  {...register('note')}
                  placeholder="Ví dụ: Tôi muốn làm tranh từ ảnh gia đình 4 người, kích thước 40x50cm..."
                  className="min-h-32 rounded-xl border-2 border-gray-200 focus:border-[#E8A87C] transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#E8A87C] hover:bg-[#D99968] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  'Gửi Thông Tin Ngay'
                )}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-[#E8A87C]" />
                Chúng tôi sẽ gọi lại trong vòng 15 phút để tư vấn chi tiết.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
