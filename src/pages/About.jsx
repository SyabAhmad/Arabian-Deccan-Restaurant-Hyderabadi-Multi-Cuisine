import { Link } from 'react-router-dom'

export default function About() {
  const whatsappLink = "https://wa.me/966509803398?text=Hi%2C%20I%20want%20to%20place%20an%20order%3A%0A%0AName%3A%0ALocation%3A%0A%0APlease%20confirm."

  return (
    <div>
      <div className="relative bg-stone-950 py-16 sm:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1600&h=700&fit=crop&q=70"
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/60 to-stone-950" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Our Story</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">Not a Chain. Not Fast Food.<br />Just Real Hyderabadi.</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-lg">We are a small independent restaurant bringing the authentic flavors of Hyderabad to Al Malaz, Riyadh.</p>
        </div>
      </div>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 leading-tight">The Taste of Hyderabad,<br />Made in Riyadh</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>We started Arabian & Deccan with one goal: to serve biryani the way it's meant to be made. Slow-cooked in the traditional dum style, with hand-ground spices and recipes passed down through generations.</p>
                <p>We are not a fast-food chain. We don't do shortcuts. Every pot of biryani takes hours, and every dish reflects the rich culinary heritage of the Deccan plateau.</p>
                <p>What started as a small kitchen in Al Malaz has grown into a place where people drive across the city for food that reminds them of home — or gives them a taste of something truly authentic.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&h=500&fit=crop&q=80"
                    alt="Hyderabadi kitchen preparing traditional biryani"
                    className="w-full h-[300px] sm:h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-emerald-800 text-white rounded-xl p-4 shadow-lg">
                  <p className="text-3xl font-bold">4.6</p>
                  <p className="text-emerald-200 text-sm">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">What Makes Us Different</h2>
            <p className="text-stone-500 max-w-lg mx-auto">We let our food do the talking.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-stone-100 text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Slow-Cooked Daily</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Every dish is prepared fresh. No frozen, no premade. Biryani takes time — and we give it.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-100 text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Hand-Ground Spices</h3>
              <p className="text-stone-500 text-sm leading-relaxed">We grind our own spice blends from whole ingredients sourced from Hyderabad. That's the real flavor.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-100 text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Family Recipes</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Our Marag recipe, our biryani technique — these come from generations of Hyderabadi cooks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">We Are a Specialty Restaurant</h2>
          <p className="text-stone-400 leading-relaxed mb-8 max-w-2xl mx-auto">We don't serve burgers. We don't serve pizza. We serve Hyderabadi biryani, Marag, Qubaani — and we do it exceptionally well. Our limited menu isn't a weakness; it's our strength.</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
              <p className="text-2xl font-bold text-emerald-400">Mutton Biryani</p>
              <p className="text-stone-500 text-xs mt-1">Flagship</p>
            </div>
            <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
              <p className="text-2xl font-bold text-white">Chicken Biryani</p>
              <p className="text-stone-500 text-xs mt-1">Popular</p>
            </div>
            <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
              <p className="text-2xl font-bold text-white">Marag</p>
              <p className="text-stone-500 text-xs mt-1">Heritage</p>
            </div>
            <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
              <p className="text-2xl font-bold text-white">Qubaani</p>
              <p className="text-stone-500 text-xs mt-1">Traditional</p>
            </div>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 rounded-lg hover:bg-stone-100 transition-colors"
          >
            See the Full Menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="bg-emerald-800 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Taste Real Hyderabadi?</h2>
          <p className="text-emerald-200 text-lg mb-8">Order directly on WhatsApp — no delivery apps, no commissions, no hassle.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-800 font-bold text-lg px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
