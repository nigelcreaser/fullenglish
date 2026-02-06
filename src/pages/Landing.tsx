import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Award, Check, Instagram, Twitter } from 'lucide-react';

function Landing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Full English" className="h-16" />
        <button
          onClick={() => navigate('/checkin')}
          className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition"
        >
          Try App
        </button>
      </nav>
<!-- My words
  -->
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            THE ULTIMATE <span className="text-orange-600">FRY-UP</span> TRACKER.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The "Untappd" for English Breakfasts. Rate your eggs, hunt for the best black pudding, and find the UK's top-rated greasy spoons.
          </p>
    
        <div className="relative">
          <div className="bg-white p-4 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 w-full max-w-[320px] mx-auto overflow-hidden">
            <div className="bg-orange-50 h-24 flex items-center justify-center">
               <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Full English" className="h-20" />
            </div>
            <div className="p-4 space-y-3">
              <img src="/gemini_generated_image_z4auoxz4auoxz4au.png" alt="Full English Breakfast" className="w-full h-32 object-cover rounded-xl" />
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-orange-50 p-2 rounded-lg border border-orange-200">
                  <span className="text-xs font-bold">Heinz Beanz</span>
                  <Check size={14} className="text-orange-600" />
                </div>
                <div className="flex justify-between items-center bg-orange-50 p-2 rounded-lg border border-orange-200">
                  <span className="text-xs font-bold">Richmond Sausage</span>
                  <Check size={14} className="text-orange-600" />
                </div>
              </div>
              <div className="text-center py-2 bg-orange-600 text-white rounded-lg font-bold text-sm">
                Check In Plate
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 md:right-10 bg-yellow-400 p-4 rounded-full shadow-lg rotate-12 flex flex-col items-center">
            <Award className="text-orange-900" />
            <span className="text-[10px] font-black">TOP RATED</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-black mb-2 uppercase">The Fry-up Finder</h3>
            <p className="text-gray-500">Find the highest-rated breakfast spots within 5 miles, sorted by yolk runniness and value.</p>
          </div>
          <div>
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600">
              <Check size={32} />
            </div>
            <h3 className="text-xl font-black mb-2 uppercase">Ingredient Tracking</h3>
            <p className="text-gray-500">Tick off every component. From fried bread to bubble and squeak, every item counts.</p>
          </div>
          <div>
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-black mb-2 uppercase">Earn Your Badges</h3>
            <p className="text-gray-500">Collect digital badges like 'Greasy Spoon Guru' and 'The Full Monty'.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-orange-100 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Instagram className="text-orange-600 cursor-pointer" />
          <Twitter className="text-orange-600 cursor-pointer" />
        </div>
        <p className="text-gray-400 text-sm">© 2026 Full English App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
