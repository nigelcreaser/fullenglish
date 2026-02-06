import { useNavigate } from 'react-router-dom';
import { MapPin, Award, Check, Instagram, Twitter } from 'lucide-react';

function Landing() {
  const navigate = useNavigate();

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

          {/* --- MAILERLITE FORM START --- */}
          <div id="mlb2-36796662" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-36796662">
            <div className="ml-form-align-left">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyHorizontal ml-form-hoverStack">
                  
                  <form 
                    action="https://assets.mailerlite.com/jsonp/1218821/forms/137659424844318621/subscribe" 
                    method="post" 
                    target="_blank"
                  >
                    <div className="ml-form-formContent horozintalForm">
                      <div className="ml-form-horizontalRow">
                        <div className="ml-input-horizontal">
                          <div className="horizontal-fields">
                            <div className="ml-field-group ml-field-email ml-validate-required ml-validate-email">
                              <input 
                                type="email" 
                                className="form-control" 
                                name="fields[email]" 
                                placeholder="Email" 
                                autoComplete="email"
                                spellCheck="false"
                                required
                                style={{
                                  borderRadius: '12px',
                                  border: '2px solid #fed7aa',
                                  padding: '12px',
                                  width: '100%'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ml-button-horizontal">
                          <button 
                            type="submit" 
                            className="primary"
                            style={{
                              backgroundColor: '#ea580c',
                              color: 'white',
                              fontWeight: 'bold',
                              borderRadius: '12px',
                              padding: '12px 24px',
                              width: '100%',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* --- MAILERLITE FORM END --- */}

          <p className="mt-4 text-sm text-gray-400 italic">Coming Summer 2026. No spam, just bacon.</p>
          <p className="mt-4 text-sm text-gray-400 italic font-mono text-xs">v1.7-stable</p>
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
                <div className="flex justify-between items-center bg-orange-50 p-
