import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900 p-6">
      <nav className="flex justify-between items-center max-w-4xl mx-auto mb-12">
        <h1 className="font-black text-2xl text-orange-600">FULL ENGLISH</h1>
        <button onClick={() => navigate('/checkin')} className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition">
          Try App
        </button>
      </nav>

      <main className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-black mb-4 uppercase leading-tight">
            THE ULTIMATE <span className="text-orange-600">FRY-UP</span> TRACKER.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Rate your eggs and find the UK's top-rated greasy spoons.
          </p>

          <div className="bg-white p-2 rounded-xl shadow-md border border-orange-100">
            {/* FIX: The action URL must NOT contain "/jsonp/". 
               It should be the direct subscribe path.
            */}
            <form 
              action="https://assets.mailerlite.com/forms/1218821/137659424844318621/subscribe" 
              method="post" 
              className="flex flex-col gap-2"
            >
              <input 
                type="email" 
                name="fields[email]" 
                placeholder="Enter email" 
                required
                className="p-3 rounded-lg border border-orange-100 outline-none bg-orange-50/30 focus:border-orange-500"
              />
              <button 
                type="submit" 
                className="bg-orange-600 text-white font-bold p-3 rounded-lg hover:bg-orange-700 transition"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] shadow-xl border-4 border-gray-800 max-w-[280px] mx-auto hidden md:block">
          <div className="space-y-3">
            <div className="h-32 bg-orange-100 rounded-xl flex items-center justify-center text-orange-400 font-bold">PREVIEW</div>
            <div className="flex justify-between p-2 bg-orange-50 rounded-lg text-xs font-bold border border-orange-100">
              <span>Heinz Beanz</span> <Check size={14} className="text-orange-600" />
            </div>
            <div className="flex justify-between p-2 bg-orange-50 rounded-lg text-xs font-bold border border-orange-100">
              <span>Sausage</span> <Check size={14} className="text-orange-600" />
            </div>
            <div className="text-center py-2 bg-orange-600 text-white rounded-lg font-bold text-sm mt-2">Check In</div>
          </div>
        </div>
      </main>
      
      <footer className="mt-20 text-center text-gray-400 text-xs">
        © 2026 Full English App.
      </footer>
    </div>
  );
}

export default Landing;
