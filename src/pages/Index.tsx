import { ChurnCalculator } from "@/components/ChurnCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingDown, BarChart3, Users, CheckCircle2, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Churn Rate Calculator – <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Free Online Tool</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Free, accurate, and easy-to-use Churn Rate Calculator. Measure customer churn rate to optimize your business retention strategy.
          </p>
        </div>
        
        <ChurnCalculator />
      </section>

      {/* How to Use Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How to Use the Churn Rate Calculator
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                  Enter Beginning Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enter the number of customers you had at the start of the time period you want to measure (e.g., beginning of the month or quarter).
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                  Enter Ending Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enter the number of customers remaining at the end of the measurement period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                  Enter New Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enter the number of new customers you acquired during the measurement period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-accent/5 transition-all hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                  Get Instant Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Churn Rate Calculator automatically calculates and displays your churn rate and the number of customers churned.
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
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-secondary/10">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Use Our Churn Rate Calculator?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>100% Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Completely free tool with no registration or installation required. Use it instantly in your browser.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Accurate Calculations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Uses industry-standard formulas to ensure accurate and reliable churn rate results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Instant Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get immediate results as you enter data, helping you make quick and informed business decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Intuitive interface that's user-friendly. No complex technical knowledge required.
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
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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
                    Formula: Churn Rate = (Churned Customers / Beginning Customers) × 100%
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Beginning Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The total number of customers you have at the start of the measurement period. For example, if measuring January, this is your customer count on January 1st.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Ending Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The total number of customers remaining at the end of the measurement period. This includes both existing customers who stayed and new customers acquired.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">New Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The number of new customers acquired during the measurement period. To accurately calculate churned customers, these new customers need to be excluded from the total.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-secondary">Churned Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The actual number of customers who left during the period. Calculated as: Beginning Customers - Ending Customers + New Customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <HelpCircle className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Churn Rate Calculator FAQ
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">What is a good Churn Rate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A good churn rate depends on your industry. For B2B SaaS, 5-7% annual churn rate is acceptable. For B2C, it can be higher at 10-15%. The general rule: lower churn rate is better, as retaining existing customers is usually cheaper than acquiring new ones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">How can I reduce my Churn Rate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To reduce churn rate: (1) Improve product/service quality, (2) Enhance customer support, (3) Analyze why customers leave, (4) Build customer retention programs, (5) Collect regular feedback for continuous improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">How often should I calculate Churn Rate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Calculate churn rate monthly to track trends and detect issues early. For new businesses, weekly calculations may be helpful. However, also track quarterly and annual churn rates for a comprehensive view of long-term trends and industry comparisons.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">Is the Churn Rate Calculator accurate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our Churn Rate Calculator uses the industry-standard formula widely accepted across business sectors. Accuracy depends on the data you input. Ensure your beginning customers, ending customers, and new customer numbers are accurate for the most reliable churn rate results.
                  </p>
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
