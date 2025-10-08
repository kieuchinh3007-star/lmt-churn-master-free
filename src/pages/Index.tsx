import { ChurnCalculator } from "@/components/ChurnCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, TrendingDown, BarChart3, Users, CheckCircle2, HelpCircle, Package, Truck, RotateCcw, ExternalLink, FileText, Shield, ScrollText, Star } from "lucide-react";
import heroImage from "@/assets/churn-hero-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/50 to-background py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
          {/* Left content */}
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block text-sm font-semibold text-primary mb-3">
              📊 Free Analytics Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Free <span className="text-primary">Churn Rate Calculator</span> for SaaS & eCommerce
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Instantly calculate your customer churn rate and track retention performance over time. 
              No setup or login required — just enter your data and get insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              >
                <a href="#calculator">Calculate Now</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2"
              >
                <a href="#how-to-use">Learn How It Works</a>
              </Button>
            </div>

            <div className="flex items-center gap-2 mt-6 justify-center md:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">4.9/5 from 1,200+ users</span>
            </div>
          </div>

          {/* Right image */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img 
              src={heroImage} 
              alt="Churn Rate Calculator Illustration" 
              className="w-full max-w-md drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="container mx-auto px-4 py-12 md:py-20">
        <ChurnCalculator />
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              How to Use the Churn Rate Calculator
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                  Choose Churn Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Select between Customer Churn (for tracking customer count) or Revenue Churn (for tracking MRR/ARR). This determines what metrics you'll be measuring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                  Enter Your Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Input the number of customers (or revenue) at the start of the period, at the end of the period, and new customers (or revenue) acquired during the period. Hover over the help icons for detailed explanations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                  Select Time Period
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose the measurement period: Monthly, Quarterly, or Yearly. For monthly calculations, the tool will also show annualized churn rate automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-accent/5 transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                  Calculate & Analyze
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Click "Calculate Churn Rate" to see your churn rate, retention rate, lost customers, and actionable insights. Export results as CSV or copy to clipboard for further analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-secondary/10">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                Why Use Our Churn Rate Calculator?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Fast & Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Instant calculations without Excel. Completely free tool with no registration or installation required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Accurate & Flexible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Uses industry-standard formulas with support for customer churn, revenue churn (MRR/ARR), and multiple time periods.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Actionable Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get immediate results with detailed breakdown, retention metrics, and personalized tips to reduce churn.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Export & Share</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Copy results to clipboard or export as CSV for presentations, reports, and further analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Explanation Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Understanding Churn Rate Metrics
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">What is Churn Rate?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Churn Rate is the percentage of customers who stop using your product or service during a specific time period. It's a critical metric for assessing business health and customer retention.
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-foreground">
                    Formula: Churn Rate = (Lost Customers / Customers at Start) × 100%
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Retention Rate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Retention Rate is the inverse of churn rate, showing the percentage of customers who continued using your product during the period. Higher retention means better customer loyalty.
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-foreground">
                    Formula: Retention Rate = 1 - Churn Rate
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Lost Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The actual number of customers who left during the period. Calculated by accounting for both new acquisitions and final customer count.
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-foreground">
                    Formula: Lost = Customers at Start + New Customers - Customers at End
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Revenue Churn (MRR/ARR)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instead of tracking customer count, revenue churn measures the percentage of recurring revenue lost. This is particularly useful for businesses with variable pricing or upsell opportunities. Switch to "Revenue Churn" mode to calculate MRR (Monthly Recurring Revenue) or ARR (Annual Recurring Revenue) churn.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-secondary">Annualized Churn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For monthly churn calculations, annualized churn projects your churn rate over a full year. This helps compare monthly data to annual benchmarks and understand long-term retention trends.
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-foreground">
                    Formula: Annualized = 1 - (1 - Monthly Churn)^12
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <HelpCircle className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                Churn Rate Calculator FAQ
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-border/50 bg-card rounded-lg px-6 shadow-[var(--shadow-card)]">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  What is the Churn Rate Calculator and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  The Churn Rate Calculator helps you measure customer attrition over a period by comparing customers at start, customers at end, and new customers acquired. It uses the industry-standard formula: Churn Rate = (Lost Customers / Customers at Start) × 100%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-border/50 bg-card rounded-lg px-6 shadow-[var(--shadow-card)]">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  How accurate is the Churn Rate Calculator for subscription businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  The Churn Rate Calculator uses standard industry formulas, making it ideal for subscription or SaaS businesses. For deeper insights, you can switch to revenue churn mode (MRR/ARR) or enable cohort-based analysis. Accuracy depends on the quality of your input data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-border/50 bg-card rounded-lg px-6 shadow-[var(--shadow-card)]">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  Can the Churn Rate Calculator compute revenue or annualized churn?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Yes! The calculator supports both customer churn and revenue churn (MRR/ARR) modes. For monthly calculations, it also automatically displays annualized churn using the formula: 1 - (1 - monthly_churn)^12, giving you a yearly perspective.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-border/50 bg-card rounded-lg px-6 shadow-[var(--shadow-card)]">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  How can I reduce churn after using the Churn Rate Calculator?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Use the actionable insights provided by the calculator: improve customer onboarding, run re-engagement campaigns, optimize pricing strategies, analyze churn-prone customer cohorts, conduct exit surveys, and implement proactive customer success initiatives based on your churn rate results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Our Apps Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Apps 💡
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover powerful tools to optimize your e-commerce business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* SyncTrack App */}
            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">SyncTrack – Auto Track Order</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Automatically sync and track orders from multiple carriers. Keep customers informed with real-time updates.
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <a 
                    href="https://apps.shopify.com/synctrack" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View App
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Estimated Shipping Date App */}
            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Estimated Shipping Date</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Show accurate delivery estimates on product pages to build trust and boost conversions.
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <a 
                    href="https://apps.shopify.com/omega-estimated-shipping-date" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View App
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Omega Returns Drive App */}
            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <RotateCcw className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Omega Returns Drive</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Simplify your return process and increase customer satisfaction with an easy self-service return portal.
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <a 
                    href="https://apps.shopify.com/omega-returns-drive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View App
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Tools Like This Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                More Tools Like This
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Free tools to help you build trust and protect your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Shipping Policy Generator */}
              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Free Shipping Policy Generator</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    Create a professional shipping policy for your store in minutes. Build customer trust and reduce disputes.
                  </p>
                  <Button 
                    asChild
                    variant="secondary"
                    className="w-full"
                  >
                    <a 
                      href="https://synctrack.io/shipping-policy-generator/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Generate Policy
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Return & Refund Policy Generator */}
              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                    <RotateCcw className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Free Return & Refund Policy Generator</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    Generate a clear return and refund policy instantly. Protect your business and set customer expectations.
                  </p>
                  <Button 
                    asChild
                    variant="secondary"
                    className="w-full"
                  >
                    <a 
                      href="https://synctrack.io/return-refund-policy-generator/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Generate Policy
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Terms & Conditions Generator */}
              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                    <ScrollText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Free Terms & Conditions Generator</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    Create legally compliant terms and conditions for your website. Protect your business with proper documentation.
                  </p>
                  <Button 
                    asChild
                    variant="secondary"
                    className="w-full"
                  >
                    <a 
                      href="https://synctrack.io/terms-conditions-generator/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Generate Terms
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2025 Churn Rate Calculator. Free online tool for businesses.
        </p>
      </footer>
    </div>
  );
};

export default Index;
