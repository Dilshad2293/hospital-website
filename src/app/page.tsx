import Departments from "@/components/Departments";
import DoctorsPreview from "@/components/DoctorsPreview";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Insurance from "@/components/Insurance";
import LabsServices from "@/components/LabsServices";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import StickyBottomBar from "@/components/StickyBottomBar";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "Diagnostic Services | Gutti Malnad Hospital",
  description: "Advanced MRI, CT Scan, Ultrasound, and Laboratory services in Shivamogga.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <Hero/>
      <Stats/>
      <About/>
      <Departments/>
      <DoctorsPreview/>
      <FAQ/>
      <Testimonials/>
      <StickyBottomBar/>
      
      <Footer />
    </div>
  );
}
