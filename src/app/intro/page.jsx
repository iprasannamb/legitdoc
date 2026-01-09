"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  MessageSquare, 
  Shield, 
  Zap, 
  ArrowRight, 
  Upload, 
  CheckCircle2,
  Scale,
  Eye,
  Clock
} from "lucide-react";

export default function IntroPage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-[#3F5EFB]" />,
      title: "Document Analysis",
      description: "Upload any legal document and get an instant AI-powered breakdown of key terms, clauses, and obligations."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#3F5EFB]" />,
      title: "Interactive Q&A",
      description: "Ask questions about your documents in plain English and receive clear, actionable answers."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#3F5EFB]" />,
      title: "Risk Detection",
      description: "Automatically identify potential risks, unusual clauses, and areas that may require legal attention."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#3F5EFB]" />,
      title: "Instant Summaries",
      description: "Get concise summaries of lengthy contracts, agreements, and legal documents in seconds."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Upload Your Document",
      description: "Securely upload your legal document in PDF, DOCX, or image format.",
      icon: <Upload className="w-6 h-6" />
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI processes and analyzes every section of your document.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Review & Understand",
      description: "Receive a clear breakdown and ask follow-up questions.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  // const stats = [
  //   { value: "10K+", label: "Documents Analyzed" },
  //   { value: "98%", label: "Accuracy Rate" },
  //   { value: "5min", label: "Average Analysis Time" },
  //   { value: "24/7", label: "Available" }
  // ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3F5EFB]/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F5EFB]/10 text-[#3F5EFB] text-sm font-medium">
              <Scale className="w-4 h-4" />
              AI-Powered Legal Document Analysis
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Demystifying
              <span className="block text-[#3F5EFB]">Legal Documents</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              legitDoc empowers you to understand complex legal documents with confidence. 
              No more confusion over contracts, agreements, or terms of service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/upload">
                <Button size="lg" className="bg-[#3F5EFB] hover:bg-[#3F5EFB]/90 text-white px-8 gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="px-8">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3F5EFB]">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to understand and navigate legal documents with ease.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-border bg-card hover:border-[#3F5EFB]/30 hover:shadow-lg hover:shadow-[#3F5EFB]/5 transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-xl bg-[#3F5EFB]/10 w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in three simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-bold text-[#3F5EFB]/10 absolute -top-4 -left-2">
                  {step.number}
                </div>
                <div className="relative pt-8 pl-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#3F5EFB] text-white">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-[#3F5EFB]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3F5EFB] to-[#3F5EFB]/80 p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJsLTQgNCAyIDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Understand Your Legal Documents?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of users who have taken control of their legal understanding. 
              Upload your first document today.
            </p>
            <Link href="/upload">
              <Button size="lg" className="bg-white text-[#3F5EFB] hover:bg-white/90 px-8 gap-2">
                Upload Document
                <Upload className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#3F5EFB]">legitDoc</span>
              <span className="text-muted-foreground">/ai</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 legitDoc. AI for Demystifying Legal Documents.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
