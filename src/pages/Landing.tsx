import { useNavigate } from 'react-router-dom';
import { MapPin, Award, Check, Instagram, Twitter } from 'lucide-react';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Logo" className="h-16" />
        <button onClick={() => navigate('/checkin')} className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition">
          Try App
        </button>
      </nav>

      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-tight">
            THE ULTIMATE <span className="text-orange-600">FRY-UP</span> TRACKER.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The "Untappd" for English Breakfasts. Rate your eggs, hunt for the best black pudding, and find the UK's top-rated greasy spoons.
          </p>

          <div className="max-w-md bg-white p-2 rounded-2xl shadow-sm border border-orange-100">
            {/* UPDATED ACTION URL FOR HTML SUBMISSION */}
            <form 
              action="https://assets.mailerlite.com/forms/1218821/137659424844318621/subscribe" 
              method="post" 
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
          <p className="mt-4 text-xs text-gray-400 italic">Coming Summer 2026. No spam, just bacon.</p>
        </div>

        <div className="relative justify-self-center">
          <div className="bg-white p-4 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 w-full max-w-[300px] overflow-hidden">
            <div className="bg-orange-50 h-20 flex items-center justify-center mb-4 rounded-xl">
               <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Logo" className="h-14" />
            </div>
            <img src="/gemini_generated_image_z4auoxz4auoxz4au.png" alt="Plate" className="w-full h-32 object-cover rounded-xl mb-4" />
            <div className="space-y-2 mb-4">
              <div className="flex justify-between p-2 bg-orange-50 rounded-lg text-xs font-bold border border-orange-100">
                <span>Heinz Beanz</span> <Check size={14} className="text-orange-600" />
              </div>
              <div className="flex justify-between p-2 bg-orange-50 rounded-lg text-xs font-bold border border-orange-100">
                <span>Richmond Sausage</span> <Check size={14} className="text-orange-600" />
              </div>
            </div>
            <div className="text-center py-2 bg-orange-600 text-white rounded-lg font-bold text-sm">Check In</div>
          </div>
        </div>
      </section>

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
