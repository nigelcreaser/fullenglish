import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Award, Check, Instagram, Twitter } from 'lucide-react';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Setup the MailerLite Universal Script
    // Replace 'YOUR_ACCOUNT_ID' with the actual ID from your MailerLite snippet
    const accountId = "1908410"; 

    const scriptId = 'mailerlite-universal-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.innerHTML = `
        (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
        .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
        n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
        (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
        ml('account', '${accountId}');
      `;
      document.head.appendChild(script);
    }

    // 2. Force the form to initialize/re-render
    // @ts-ignore
    if (window.ml) {
      // @ts-ignore
      window.ml('show', 'aYQOAH', true);
    }

    // Optional: Cleanup if you navigate away
    return () => {
      const script = document.getElementById(scriptId);
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <img src="/gemini_generated_image_3a84pj3a84pj3a84.png" alt="Full English" className="h-16" />
        <button
          onClick={() => navigate('/checkin')}
          className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition"
        >
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

          {/* MAILERLITE FORM WRAPPER - Forces left alignment and branding orange */}
          <div className="mb-6 flex justify-start">
            <style>{`
              .ml-embedded { text-align: left !important; width: 100% !important; max-width: 450px !important; margin: 0 !important; }
              .ml-form-embedWrapper { background: transparent !important; padding: 0 !important; }
              /* Force the button to match your orange-600 (#ea580c) */
              .ml-embedded button { background-color: #ea580c !important; border-radius: 9999px !important; font-weight: bold !important; border: none !important; }
              .ml-embedded input { border-radius: 12px !important; border: 2px solid #fed7aa !important; }
            `}</style>
            <div className="ml-embedded" data-form="aYQOAH"></div>
          </div>

          <p className="mt-4 text-sm text-gray-400 italic">Coming Summer 2026. No spam, just bacon.</p>
          <p className="mt-4 text-sm text-gray-400 italic font-mono text-xs">v1.6-deployed</p>
        </div>

        {/* The Phone Mockup Graphic */}
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
            <span className="text-[10px] font-black uppercase">Top Rated</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Footer */}
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
