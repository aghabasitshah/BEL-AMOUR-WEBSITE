/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { Menu } from "./components/Menu";
import { Deals } from "./components/Deals";
import { Contact } from "./components/Contact";
import { StickyBar } from "./components/StickyBar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <Deals />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyBar />
    </main>
  );
}
