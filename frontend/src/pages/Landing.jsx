import React from "react";
import LandingHeader from "../components/layout/LandingHeader";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      {/* Main Content with Cream Border */}
      <div
        className="border-8 border-amber-50 mx-4 my-4"
        style={{ borderColor: "#F5F0E6" }}
      >
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif text-teal-600 mb-8 leading-tight">
              Tired of bad dates—or worse, no dates at all?
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto font-serif">
              Maybe you've been told you're just choosing the wrong partner, or
              maybe you're simply over the endless swiping, awkward small talk,
              and wasted time. At Mixer, we do things differently. We'll match
              you with the right person and curate the perfect date—no apps, no
              stress, no guesswork. All you have to do is show up and have FUN!
            </p>
            <div className="mb-12">
              <p className="text-lg lg:text-xl font-bold text-gray-800 uppercase tracking-wide underline decoration-2 underline-offset-4">
                LET'S GET STARTED
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-base uppercase tracking-wide">
              COMING SOON: SINGLES NIGHT DETAILS
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://mixerltd.com/wp-content/uploads/2025/09/Mixer-SMM-Posts.jpg.webp"
                  alt="Mixer Dating App"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <p className="text-purple-600 font-medium text-lg mb-4">
                  Skip The Swipe
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  How our blind mixer works
                </h3>

                {/* Steps */}
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">
                          1
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Step 1 | We Learn About You
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Fill out a quick submission form and schedule a time to
                        chat with one of our Mixologists about your
                        expectations. From there, you decide—keep it classic
                        with a table for two, or triple your chances with a
                        lively table for six.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">
                          2
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Step 2 | We Set The Scene
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        This is where the magic happens. We dig into our
                        extensive database to find your perfect match. Once both
                        parties confirm, we'll finalize the details and gather
                        payment.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">
                          3
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Step 3 | You Enjoy the date
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        You'll receive the location 24 hours in advance. Upon
                        arrival, your Mixologist will greet you and introduce
                        you to your party. Then it's your turn to relax, have
                        fun, and enjoy the night!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-white">
            © Copyright 2025 | Mixer | All Rights Reserved | Privacy Policy |
            Terms & Conditions | Contact Support | Powered by Mountain Air
            Marketing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
