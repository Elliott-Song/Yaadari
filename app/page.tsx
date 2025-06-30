import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/YAADARI.png"
            alt="Yaadari Logo"
            width={280}
            height={120}
            priority
            className="drop-shadow-lg rounded-2xl"
          />
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Coming <span className="text-emerald-600">Soon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jamaica&apos;s premier resale marketplace is almost here. Buy, sell, and discover amazing pre-loved items from across the island.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="text-3xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Buy & Sell</h3>
            <p className="text-gray-600 text-sm">Find great deals on quality pre-owned items from trusted local sellers.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="text-3xl mb-4">🏝️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Made for Jamaica</h3>
            <p className="text-gray-600 text-sm">Designed specifically for the Jamaican market with local payment options.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Secure</h3>
            <p className="text-gray-600 text-sm">Shop with confidence using our secure platform and verified sellers.</p>
          </div>
        </div>

        

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2024 Yaadari. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
