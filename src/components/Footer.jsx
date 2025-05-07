import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-6 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 flex justify-between text-gray-600 text-sm">
        <p>© 2025 Mioto. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Chính sách</a>
          <a href="#">Điều khoản</a>
          <a href="#">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
