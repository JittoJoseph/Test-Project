// @ts-nocheck
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white/50 backdrop-blur-sm border-b">
            <div className="max-w-4xl mx-auto px-6 py-3">
              <h1 className="text-lg font-semibold">Test Project</h1>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t">
            <div className="max-w-4xl mx-auto px-6 py-3 text-sm text-gray-600">
              © {new Date().getFullYear()} Test Project
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
