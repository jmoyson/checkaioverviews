import { DomainInput } from "@/components/domain-input";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-3xl w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200">
            <span className="text-xs font-medium text-gray-600">
              Free tool for SEO professionals
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Track Your Keywords
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Stolen by AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            See which of your ranking keywords are being affected by
            Google&apos;s AI Overviews—and which ones you&apos;re still getting
            credit for.
          </p>
        </div>

        {/* Input */}
        <DomainInput />

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Instant analysis • No signup required • Free forever
        </p>
        <p className="mt-3 text-center text-xs text-gray-400">
          Currently tracking US English results only
        </p>
        <p className="mt-4 text-center text-xs text-gray-400">
          Questions?{" "}
          <a
            href="https://x.com/jeremymoyson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors underline decoration-dotted"
          >
            @jeremymoyson
          </a>
        </p>
      </div>
    </main>
  );
}
