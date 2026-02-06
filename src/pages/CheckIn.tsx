import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, MapPin, Star, CheckCircle2, ArrowLeft } from 'lucide-react';

function CheckIn() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const ingredients = [
    { id: 'egg', label: 'Fried Egg', brand: null },
    { id: 'bacon', label: 'Back Bacon', brand: null },
    { id: 'sausage', label: 'Sausage', brand: 'Richmond Sponsored' },
    { id: 'beans', label: 'Baked Beans', brand: 'Heinz Sponsored' },
    { id: 'blackpud', label: 'Black Pudding', brand: null },
    { id: 'hashbrown', label: 'Hash Brown', brand: null },
    { id: 'toast', label: 'Toast', brand: null },
    { id: 'tomato', label: 'Grilled Tomato', brand: null },
  ];

  const toggleItem = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans pb-20">
      <div className="bg-orange-50 p-6 rounded-b-3xl shadow-lg flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-orange-100 rounded-lg transition"
        >
          <ArrowLeft size={24} className="text-orange-600" />
        </button>
        <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Full English" className="h-20" />
        <div className="w-10" />
      </div>

      <div className="m-4 h-48 bg-gray-200 rounded-2xl border-dashed border-2 border-gray-400 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-300 transition">
        <Camera size={48} />
        <p className="font-bold mt-2">Add Plate Photo</p>
      </div>

      <div className="mx-4 mb-6 p-4 bg-white rounded-xl shadow-sm flex items-center justify-between border border-orange-100">
        <div className="flex items-center">
          <MapPin className="text-orange-500 mr-2" size={20} />
          <div>
            <p className="font-bold text-gray-800">The Greasy Spoon Café</p>
            <p className="text-xs text-gray-500">London, SE1</p>
          </div>
        </div>
        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-bold">VERIFIED</span>
      </div>

      <div className="mx-4">
        <h3 className="font-bold text-gray-700 mb-3 flex items-center">
          What was on the plate? <span className="ml-2 text-xs font-normal text-gray-400">(Tap to tick)</span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {ingredients.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col ${
                selectedItems.includes(item.id)
                ? 'border-orange-500 bg-orange-50 shadow-md'
                : 'border-white bg-white'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="font-bold text-sm text-gray-800">{item.label}</span>
                {selectedItems.includes(item.id) && <CheckCircle2 size={16} className="text-orange-500" />}
              </div>
              {item.brand && (
                <span className="text-[10px] mt-1 text-blue-600 font-bold uppercase tracking-wider">
                  {item.brand}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-8 p-6 bg-white rounded-2xl shadow-sm text-center">
        <p className="font-bold text-gray-700 mb-2">Rate this Fry-up</p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={32}
              fill={rating >= star ? "#f97316" : "none"}
              className={rating >= star ? "text-orange-500 cursor-pointer" : "text-gray-300 cursor-pointer"}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 max-w-md mx-auto">
        <button className="w-full bg-orange-500 text-white font-black py-4 rounded-xl shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-widest">
          Post to Feed
        </button>
      </div>
    </div>
  );
}

export default CheckIn;
