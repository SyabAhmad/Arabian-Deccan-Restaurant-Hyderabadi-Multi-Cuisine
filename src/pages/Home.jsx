import { Link } from 'react-router-dom'

export default function Home() {
  const whatsappLink = "https://wa.me/966509803398?text=Hi%2C%20I%20want%20to%20place%20an%20order%3A%0A%0AName%3A%0ALocation%3A%0A%0APlease%20confirm."

  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1600&h=900&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/80 to-stone-950/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-gold-400">★</span>
                <span>Rated 4.6/5 on Google</span>
                <span className="text-white/40">·</span>
                <span>42 Reviews</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Authentic Hyderabadi
                <span className="block text-emerald-400">Biryani in Riyadh</span>
              </h1>

              <p className="text-lg text-stone-300 leading-relaxed mb-8 max-w-lg">
                Taste the real flavors of the Deccan — from slow-cooked Mutton Biryani to traditional Marag soup. Order directly on WhatsApp, no delivery app fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order on WhatsApp
                </a>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all hover:-translate-y-0.5"
                >
                  View Menu
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-300">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No login required
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No delivery fees
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Direct order
                </span>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-[420px] h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=750&fit=crop&q=80"
                    alt="Authentic Hyderabadi Biryani served in traditional style"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                <div className="absolute -bottom-5 -left-8 bg-white rounded-xl shadow-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">Made Fresh Daily</p>
                      <p className="text-stone-500 text-xs">Slow-cooked dum style</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -right-8 bg-emerald-800 text-white rounded-xl shadow-xl p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">4.6</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'text-gold-400' : 'text-emerald-500'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-emerald-200 text-xs mt-1">42 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                Not Just Biryani.
                <span className="block text-emerald-400">It's Hyderabadi.</span>
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6 max-w-md">
                We cook the way it's done in Hyderabad — slow dum, hand-ground spices, and recipes passed down through generations. This is why people drive across the city for our food.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Try It Today
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                <p className="text-4xl font-bold text-emerald-400 mb-1">4.6</p>
                <p className="text-stone-400 text-sm">Google Rating</p>
              </div>
              <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                <p className="text-4xl font-bold text-white mb-1">42<span className="text-emerald-400">+</span></p>
                <p className="text-stone-400 text-sm">Happy Reviews</p>
              </div>
              <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                <p className="text-4xl font-bold text-white mb-1">20<span className="text-emerald-400">–</span>40</p>
                <p className="text-stone-400 text-sm">SAR per meal</p>
              </div>
              <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                <p className="text-4xl font-bold text-emerald-400 mb-1">0</p>
                <p className="text-stone-400 text-sm">Delivery Fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Dining for Every Occasion</h2>
            <p className="text-stone-500 max-w-lg mx-auto">Whether it's a family gathering or a quick solo meal, we have the right table for you.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=667&fit=crop&q=75"
                alt="Family dining"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <h3 className="text-white font-bold text-lg">Family Table</h3>
                </div>
                <p className="text-stone-300 text-sm">Seats 6–8, partitioned seating, kid-friendly</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&h=667&fit=crop&q=75"
                alt="Friends dining"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <h3 className="text-white font-bold text-lg">Friends Table</h3>
                </div>
                <p className="text-stone-300 text-sm">Seats 3–5, casual setup, shared platters</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=667&fit=crop&q=75"
                alt="Couple dining"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                  </svg>
                  <h3 className="text-white font-bold text-lg">Couple Table</h3>
                </div>
                <p className="text-stone-300 text-sm">Intimate setup for two, cozy corner seating</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=667&fit=crop&q=75"
                alt="Individual dining"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <h3 className="text-white font-bold text-lg">Quick Bite</h3>
                </div>
                <p className="text-stone-300 text-sm">Solo dining, takeaway counter, fast service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">What You're Ordering</h2>
            <p className="text-stone-400 max-w-lg mx-auto">Real food. Real flavors. No delivery apps taking a cut.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <div className="group relative overflow-hidden rounded-3xl h-80 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&h=600&fit=crop&q=80"
                alt="Mutton Hyderabadi Biryani"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  ★ FLAGSHIP
                </div>
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2">Mutton Hyderabadi Biryani</h3>
                <p className="text-stone-300 text-sm sm:text-base max-w-md">Slow-cooked dum style with hand-ground spices, saffron-infused rice, and tender mutton. The reason people come back.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-80 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&h=600&fit=crop&q=80"
                alt="Chicken Biryani"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 bg-gold-500 text-stone-900 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  POPULAR
                </div>
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2">Chicken Biryani</h3>
                <p className="text-stone-300 text-sm sm:text-base max-w-md">Fragrant basmati rice layered with succulent chicken, fried onions, and aromatic spices sealed in the pot.</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <div className="group relative overflow-hidden rounded-3xl h-72 sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&h=500&fit=crop&q=80"
                alt="Marag and Traditional Sides"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">Marag & Traditional Sides</h3>
                <p className="text-stone-300 text-sm sm:text-base max-w-md">Rich mutton soup, cooling raita, and traditional salan — the complete Hyderabadi experience.</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl h-72 sm:h-80 bg-emerald-800 flex flex-col items-center justify-center p-6 sm:p-8 hover:bg-emerald-700 transition-colors text-center"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2">Order Directly on WhatsApp</h3>
                <p className="text-emerald-200 text-sm sm:text-base max-w-md mx-auto">No delivery app commission. No hidden fees. Just great food, straight from our kitchen to you.</p>
              </div>
              <div className="absolute inset-0 bg-emerald-800 group-hover:bg-emerald-700 transition-colors">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                  </svg>
                  Reserve a Table
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">Book Your Table<br />in Two Steps</h2>
                <p className="text-emerald-200 leading-relaxed mb-6 max-w-md">No forms, no waiting. Send us a message on WhatsApp with your preferred time and group size. We'll confirm your table right away.</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-emerald-100">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant confirmation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No deposit
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Family & group friendly
                  </span>
                </div>
              </div>

              <div className="space-y-0">
                <h3 className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-6">How It Works</h3>
                <div className="space-y-0">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-emerald-900 font-bold">1</span>
                      </div>
                      <div className="w-px h-full min-h-[32px] bg-white/10 mt-1" />
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold text-white">Tap the button below</p>
                      <p className="text-emerald-200/70 text-sm mt-0.5">Opens WhatsApp with a pre-filled message</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-emerald-900 font-bold">2</span>
                      </div>
                      <div className="w-px h-full min-h-[32px] bg-white/10 mt-1" />
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold text-white">Tell us your details</p>
                      <p className="text-emerald-200/70 text-sm mt-0.5">Date, time, number of guests, seating</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">We confirm instantly</p>
                      <p className="text-emerald-200/70 text-sm mt-0.5">Your table is reserved</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/966509803398?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20table%3A%0A%0ADate%3A%0ATime%3A%0ANumber%20of%20guests%3A%0APreferred%20seating%3A%20(Family%20%2F%20Couple%20%2F%20Friends)%0A%0AName%3A%0A%0APlease%20confirm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 bg-white hover:bg-emerald-50 text-emerald-900 font-bold px-6 py-4 rounded-xl transition-colors w-full text-base shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Reserve on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
