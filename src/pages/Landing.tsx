import { useNavigate } from 'react-router-dom';
import { MapPin, Award, Check, Instagram, Twitter } from 'lucide-react';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Logo" className="h-16" />
        <button onClick={() => navigate('/checkin')} className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition">
          Try App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 uppercase">
            THE ULTIMATE <span className="text-orange-600">FRY-UP</span> TRACKER.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The "Untappd" for English Breakfasts. Rate your eggs, hunt for the best black pudding, and find the UK's top-rated greasy spoons.
          </p>

          {/* MailerLite Form */}
          <div className="max-w-md bg-white p-2 rounded-2xl shadow-sm border border-orange-100">
            <form 
              action="https://assets.mailerlite.com/jsonp/1218821/forms/137659424844318621/subscribe" 
              method="post" 
              target="_blank"
              className="flex flex-col sm:flex-row gap-2"
            >
              <input 
                type="email" 
                name="fields[email]" 
                placeholder="Enter email" 
                required
                className="flex-1 p-3 rounded-xl border-2 border-orange-50 focus:border-orange-500 outline-none bg-orange-50/50"
              />
              <button type="submit" className="bg-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-700 transition">
                Join Waitlist
              </button>
            </form>
          </div>
          <p className="mt-4 text-sm text-gray-400 italic text-xs">Coming Summer 2026. v1.8-final</p>
        </div>

        {/* Phone Mockup */}
        <div className="relative">
          <div className="bg-white p-4 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 w-full max-w-[320px] mx-auto overflow-hidden">
            <div className="bg-orange-50 h-24 flex items-center justify-center">
               <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Logo" className="h-20" />
            </div>
            <div className="p-4 space-y-3">
              <img src="/gemini_generated_image_z4auoxz4auoxz4au.png" alt="Plate" className="w-full h-32 object-cover rounded-xl" />
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-orange-50 p-2 rounded-lg border border-orange-200 text-xs font-bold">
                  <span>Heinz Beanz</span> <Check size={14} className="text-orange-600" />
                </div>
                <div className="flex justify-between items-center bg-orange-50 p-2 rounded-lg border border-orange-200 text-xs font-bold">
                  <span>Richmond Sausage</span> <Check size={14} className="text-orange-600" />
                </div>
              </div>
              <div className="text-center py-2 bg-orange-600 text-white rounded-lg font-bold text-sm">Check In</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center text-gray-500">
          <div>
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600"><MapPin size={32} /></div>
            <h3 className="text-xl font-black mb-2 uppercase text-gray-900">The Finder</h3>
            <p>Locate the best breakfast spots near you.</p>
          </div>
          <div>
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600"><Check size={32} /></div>
            <h3 className="text-xl font-black mb-2 uppercase text-gray-900">Tracking</h3>
            <p>Tick off every component of your plate.</p>
          </div>
          <div>
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600"><Award size={32} /></div>
            <h3 className="text-xl font-black mb-2 uppercase text-gray-900">Badges</h3>
            <p>Earn titles like 'Greasy Spoon Guru'.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-orange-100 text-center">
        <div className="flex justify-center gap-6 mb-4 text-orange-600">
          <Instagram className="cursor-pointer" /> <Twitter className="cursor-pointer" />
        </div>
        <p className="text-gray-400 text-sm">© 2026 Full English App.</p>
      </footer>
    </div>
  );
}

export default Landing;
