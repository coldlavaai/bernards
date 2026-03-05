import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bernards Estate Agents | Portsmouth",
  description: "Expert estate agents serving Portsmouth, Southsea, Fareham, Gosport and surrounding areas since 1990.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
        <Nav />
        {children}
        <Footer />
              {/* Cold Lava Demo Tracking */}
        <meta name="cl-job" content="BERNARDS-001" />
        <Script id="cl-tracking" strategy="afterInteractive">
          {`(function(){
            var job = document.querySelector('meta[name="cl-job"]');
            var jobNum = job ? job.content : window.location.hostname.split('.')[0];
            var img = new Image();
            img.src = 'https://track.coldlava.ai/pixel/' + encodeURIComponent(jobNum) + '?t=' + Date.now() + '&r=' + encodeURIComponent(document.referrer);
          })();`}
        </Script>
      </body>
    </html>
  );
}
