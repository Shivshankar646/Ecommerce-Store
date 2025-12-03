import supportIcon from "../assets/support_img.png";
import qualityIcon from "../assets/quality_icon.png";
import exchangeIcon from "../assets/exchange_icon.png";

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 text-center">

      <div className="p-6 border rounded-lg shadow hover:shadow-xl transition">
        <img src={supportIcon} className="h-16 mx-auto mb-3" alt="Support" />
        <h3 className="font-bold text-lg">24/7 Customer Support</h3>
        <p className="text-gray-600 text-sm">We are here to assist you anytime!</p>
      </div>

      <div className="p-6 border rounded-lg shadow hover:shadow-xl transition">
        <img src={qualityIcon} className="h-16 mx-auto mb-3" alt="Quality" />
        <h3 className="font-bold text-lg">Top Quality Products</h3>
        <p className="text-gray-600 text-sm">Handpicked best products only.</p>
      </div>

      <div className="p-6 border rounded-lg shadow hover:shadow-xl transition">
        <img src={exchangeIcon} className="h-16 mx-auto mb-3" alt="Exchange" />
        <h3 className="font-bold text-lg">Easy Exchange Policy</h3>
        <p className="text-gray-600 text-sm">Hassle-free returns & exchange.</p>
      </div>

    </div>
  );
}

export default Features;
