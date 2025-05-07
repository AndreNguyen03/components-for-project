import React from "react";

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Thuê xe tự lái Mioto ngay hôm nay
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Trải nghiệm dịch vụ thuê xe an toàn, thuận tiện và minh bạch.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
        Tìm xe ngay
      </button>
    </section>
  );
}

export default HeroSection;
