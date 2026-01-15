import { benefits } from '@/lib/landing-data';

export function BenefitsSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight">
            Why Use This Tool?
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Stop guessing. Start making data-driven content decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-gray-50 border-2 border-black/5 p-8 hover:border-[#FF4500]/20 hover:bg-white transition-all"
              >
                <div className="w-12 h-12 bg-[#FF4500]/10 border-2 border-[#FF4500]/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#FF4500]" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
