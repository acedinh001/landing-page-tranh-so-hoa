import { Heart, Sparkles, Gift, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Tác phẩm mang dấu ấn riêng',
    description: 'Được tạo từ chính ảnh của bạn, không trùng lặp với ai',
    color: 'bg-[#FFE5E5]'
  },
  {
    icon: Smile,
    title: 'Giúp thư giãn & giảm stress',
    description: 'Hoạt động nghệ thuật giúp tinh thần thư thái sau giờ làm việc',
    color: 'bg-[#E5F3FF]'
  },
  {
    icon: Gift,
    title: 'Quà tặng ý nghĩa',
    description: 'Món quà độc đáo và chân thành cho người thân yêu',
    color: 'bg-[#FFF5E5]'
  },
  {
    icon: Heart,
    title: 'Hoàn thiện dễ dàng',
    description: 'Phù hợp mọi lứa tuổi, không cần kỹ năng vẽ chuyên nghiệp',
    color: 'bg-[#F0E5FF]'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vì Sao Bạn Sẽ Yêu Tranh Tô Màu Cá Nhân Hoá?
          </h2>
          <div className="w-24 h-1 bg-[#E8A87C] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#E8A87C] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
