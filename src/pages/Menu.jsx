import { useState } from 'react'

export default function Menu() {
  const [cart, setCart] = useState([])

  const categories = [
    {
      name: 'Biryani',
      description: 'The heart of Hyderabadi cuisine',
      items: [
        { name: 'Mutton Hyderabadi Biryani', description: 'Slow-cooked dum style with hand-ground spices, saffron rice, and tender mutton. Served with salan and raita.', price: 35, badge: 'Flagship', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop&q=75' },
        { name: 'Chicken Biryani', description: 'Fragrant basmati rice layered with succulent chicken, fried onions, and aromatic spices. Served with salan and raita.', price: 25, badge: 'Popular', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&q=75' },
      ],
    },
    {
      name: 'Starters & Soups',
      description: 'Begin your meal the Hyderabadi way',
      items: [
        { name: 'Marag', description: 'Traditional Hyderabadi mutton soup — rich, warming, deeply spiced. A family recipe passed down generations.', price: 20, badge: 'Heritage', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=75' },
      ],
    },
    {
      name: 'Sides',
      description: 'The perfect companions to your biryani',
      items: [
        { name: 'Chicken Salan', description: 'Traditional peanut-coconut curry with roasted spices, served alongside biryani.', price: 12, badge: null, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=75' },
        { name: 'Raita', description: 'Cooling yogurt with cumin, fresh mint, and herbs to balance the spice.', price: 8, badge: null, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&q=75' },
      ],
    },
    {
      name: 'Desserts',
      description: 'End on a sweet note',
      items: [
        { name: 'Qubaani Ka Meetha', description: 'Classic Hyderabadi apricot dessert — sweet, velvety, and topped with cream.', price: 15, badge: 'Traditional', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&q=75' },
      ],
    },
  ]

  const toggleItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name)
      if (existing) {
        return prev.filter((c) => c.name !== item.name)
      }
      return [...prev, item]
    })
  }

  const isInCart = (name) => cart.some((c) => c.name === name)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const buildWhatsAppMessage = () => {
    const lines = ['Hi, I want to order:', '']
    cart.forEach((item) => {
      lines.push(`• ${item.name} x1`)
    })
    lines.push('')
    lines.push('Name:')
    lines.push('Location:')
    lines.push('')
    lines.push('Please confirm.')
    return encodeURIComponent(lines.join('\n'))
  }

  const whatsappLink = cart.length > 0
    ? `https://wa.me/966509803398?text=${buildWhatsAppMessage()}`
    : null

  return (
    <div className="pb-16">
      <div className="bg-stone-950 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Our Menu</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">Authentic Hyderabadi Flavors</h1>
          <p className="text-stone-400 max-w-lg mx-auto text-lg">Every dish made fresh daily with hand-ground spices and traditional recipes. Tap any item to add to your order.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16">
        {cart.length > 0 && (
          <div className="sticky top-24 z-30 bg-white rounded-xl shadow-xl border border-stone-200 p-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">{cart.length} item{cart.length > 1 ? 's' : ''} selected</p>
                <p className="text-stone-500 text-sm">Total: SAR {total}</p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}

        {categories.map((category, ci) => (
          <div key={ci} className={ci > 0 ? 'mt-16' : ''}>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">{category.name}</h2>
              <p className="text-stone-500 mt-1">{category.description}</p>
              <div className="w-12 h-1 bg-emerald-700 rounded-full mt-3" />
            </div>

            <div className="space-y-4">
              {category.items.map((item, ii) => (
                <div
                  key={ii}
                  className={`group flex flex-col sm:flex-row gap-4 sm:gap-5 bg-white rounded-2xl border-2 overflow-hidden transition-all cursor-pointer ${
                    isInCart(item.name)
                      ? 'border-emerald-700 shadow-md'
                      : 'border-stone-100 hover:border-stone-200 hover:shadow'
                  }`}
                  onClick={() => toggleItem(item)}
                >
                  <div className="relative w-full sm:w-48 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        item.badge === 'Flagship' ? 'bg-emerald-700 text-white' :
                        item.badge === 'Popular' ? 'bg-gold-400 text-stone-900' :
                        item.badge === 'Heritage' ? 'bg-stone-900 text-white' :
                        item.badge === 'Traditional' ? 'bg-purple-600 text-white' :
                        'bg-stone-100 text-stone-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 p-4 sm:p-5 sm:pr-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-stone-900 text-lg leading-tight">{item.name}</h3>
                        <span className="text-emerald-800 font-bold text-lg whitespace-nowrap">SAR {item.price}</span>
                      </div>
                      <p className="text-stone-500 text-sm mt-2 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="mt-3 sm:mt-4">
                      {isInCart(item.name) ? (
                        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 font-semibold text-sm px-4 py-2 rounded-lg">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Added to Order
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Tap to Add
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {cart.length === 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-center">
          <div className="bg-stone-50 rounded-2xl p-8 sm:p-12 border border-stone-100">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h3 className="font-bold text-stone-900 text-lg mb-2">Tap any item to start your order</h3>
            <p className="text-stone-500 text-sm">No login, no forms. Just select what you want and order via WhatsApp.</p>
          </div>
        </div>
      )}
    </div>
  )
}
