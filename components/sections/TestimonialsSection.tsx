import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Chị Mai Anh',
    location: 'Hà Nội',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Tôi đã đặt tranh từ ảnh gia đình để tặng bố mẹ nhân dịp kỷ niệm 30 năm ngày cưới. Họ rất xúc động và thích thú khi được tô màu cùng nhau. Món quà thực sự ý nghĩa!',
    rating: 5
  },
  {
    name: 'Anh Tuấn',
    location: 'TP. Hồ Chí Minh',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Chất lượng tranh vượt mong đợi. Đội ngũ tư vấn nhiệt tình, giao hàng nhanh. Tôi đã đặt thêm 2 bộ nữa để trang trí nhà. Rất đáng tiền!',
    rating: 5
  },
  {
    name: 'Chị Hương',
    location: 'Đà Nẵng',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Lần đầu tôi thử tô tranh và thấy nó thực sự giúp giảm stress sau những ngày làm việc căng thẳng. Bộ tranh từ ảnh cưới của tôi giờ treo đầu giường, nhìn mỗi ngày đều thấy hạnh phúc.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cảm Nhận Từ Khách Hàng
          </h2>
          <div className="w-24 h-1 bg-[#E8A87C] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFF8F3] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#E8A87C]"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#E8A87C] text-[#E8A87C]" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
