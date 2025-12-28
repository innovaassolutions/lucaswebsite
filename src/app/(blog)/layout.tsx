import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Background effects */}
      <div className="storm-bg" />
      <div className="storm-particles" />

      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
