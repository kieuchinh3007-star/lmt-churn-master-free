import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingDown, Copy, Download, RotateCcw, Calculator, HelpCircle, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Period = "monthly" | "quarterly" | "yearly";
type ChurnType = "customer" | "revenue";

export const ChurnCalculator = () => {
  const [customersAtStart, setCustomersAtStart] = useState<string>("1000");
  const [customersAtEnd, setCustomersAtEnd] = useState<string>("950");
  const [newCustomers, setNewCustomers] = useState<string>("200");
  const [period, setPeriod] = useState<Period>("monthly");
  const [churnType, setChurnType] = useState<ChurnType>("customer");
  
  const [results, setResults] = useState<{
    lostCustomers: number;
    churnRate: number;
    retentionRate: number;
    annualizedChurn?: number;
  } | null>(null);
  
  const [validationWarning, setValidationWarning] = useState<string>("");
  const { toast } = useToast();

  const validateInputs = (): boolean => {
    const start = parseFloat(customersAtStart) || 0;
    const end = parseFloat(customersAtEnd) || 0;
    const newCust = parseFloat(newCustomers) || 0;

    if (start <= 0) {
      setValidationWarning("Customers at start must be greater than 0");
      return false;
    }

    if (end < 0) {
      setValidationWarning("Customers at end cannot be negative");
      return false;
    }

    if (newCust < 0) {
      setValidationWarning("New customers cannot be negative");
      return false;
    }

    if (end > start + newCust) {
      setValidationWarning("Warning: Customers at end exceeds start + new customers. Please check your data.");
      return true; // Warning but allow calculation
    }

    setValidationWarning("");
    return true;
  };

  const calculateChurn = () => {
    if (!validateInputs()) {
      setResults(null);
      return;
    }

    const start = parseFloat(customersAtStart);
    const end = parseFloat(customersAtEnd);
    const newCust = parseFloat(newCustomers);

    const lost = start + newCust - end;
    const churn = lost / start;
    const retention = 1 - churn;

    let annualized: number | undefined;
    if (period === "monthly") {
      annualized = 1 - Math.pow(1 - churn, 12);
    }

    setResults({
      lostCustomers: lost,
      churnRate: churn * 100,
      retentionRate: retention * 100,
      annualizedChurn: annualized ? annualized * 100 : undefined,
    });

    toast({
      title: "Calculation Complete",
      description: "Your churn rate has been calculated successfully.",
    });
  };

  const handleReset = () => {
    setCustomersAtStart("1000");
    setCustomersAtEnd("950");
    setNewCustomers("200");
    setPeriod("monthly");
    setChurnType("customer");
    setResults(null);
    setValidationWarning("");
    toast({
      title: "Reset Complete",
      description: "All fields have been cleared.",
    });
  };

  const handleCopyResults = () => {
    if (!results) return;
    
    const text = `Churn Rate Calculator Results
Period: ${period}
Type: ${churnType}
Customers at Start: ${customersAtStart}
Customers at End: ${customersAtEnd}
New Customers: ${newCustomers}
Lost Customers: ${results.lostCustomers}
Churn Rate: ${results.churnRate.toFixed(2)}%
Retention Rate: ${results.retentionRate.toFixed(2)}%
${results.annualizedChurn ? `Annualized Churn: ${results.annualizedChurn.toFixed(2)}%` : ''}`;

    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard",
      description: "Results have been copied successfully.",
    });
  };

  const handleExportCSV = () => {
    if (!results) return;

    const csvContent = `Metric,Value
Period,${period}
Type,${churnType}
Customers at Start,${customersAtStart}
Customers at End,${customersAtEnd}
New Customers,${newCustomers}
Lost Customers,${results.lostCustomers}
Churn Rate,${results.churnRate.toFixed(2)}%
Retention Rate,${results.retentionRate.toFixed(2)}%
${results.annualizedChurn ? `Annualized Churn,${results.annualizedChurn.toFixed(2)}%` : ''}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `churn-rate-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "CSV Exported",
      description: "Results have been exported successfully.",
    });
  };

  const isFormValid = () => {
    const start = parseFloat(customersAtStart);
    const end = parseFloat(customersAtEnd);
    const newCust = parseFloat(newCustomers);

    return !isNaN(start) && start > 0 && !isNaN(end) && end >= 0 && !isNaN(newCust) && newCust >= 0;
  };

  const getActionableTips = () => {
    if (!results) return [];
    
    const churn = results.churnRate;
    const tips = [];

    if (churn > 20) {
      tips.push("Your churn rate is high. Consider improving your onboarding process.");
      tips.push("Conduct exit surveys to understand why customers are leaving.");
      tips.push("Implement proactive customer support and engagement strategies.");
    } else if (churn > 10) {
      tips.push("Your churn rate is moderate. Focus on customer success initiatives.");
      tips.push("Analyze churn by cohort to identify at-risk customer segments.");
      tips.push("Create targeted retention campaigns for high-value customers.");
    } else if (churn > 5) {
      tips.push("Your churn rate is healthy. Continue monitoring trends over time.");
      tips.push("Build customer loyalty programs to maintain low churn.");
      tips.push("Gather regular feedback to stay ahead of potential issues.");
    } else {
      tips.push("Excellent churn rate! Share your retention strategies with your team.");
      tips.push("Focus on upselling and expansion to maximize customer lifetime value.");
      tips.push("Document your best practices for maintaining low churn.");
    }

    return tips;
  };

  return (
    <TooltipProvider>
      <Card className="w-full max-w-2xl mx-auto shadow-[var(--shadow-card)] border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="flex justify-center mb-2">
            <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent">
              <Calculator className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Churn Rate Calculator
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Calculate customer churn rate over any time period
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Churn Type Toggle */}
          <div className="flex items-center justify-center gap-2 p-1 bg-muted rounded-lg w-fit mx-auto">
            <Button
              variant={churnType === "customer" ? "default" : "ghost"}
              size="sm"
              onClick={() => setChurnType("customer")}
              className="text-sm"
            >
              Customer Churn
            </Button>
            <Button
              variant={churnType === "revenue" ? "default" : "ghost"}
              size="sm"
              onClick={() => setChurnType("revenue")}
              className="text-sm"
            >
              Revenue Churn
            </Button>
          </div>

          {/* Input Fields */}
          <div className="grid gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="start" className="text-sm font-medium text-foreground">
                  {churnType === "customer" ? "Customers at Start" : "MRR/ARR at Start"}
                </Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      {churnType === "customer" 
                        ? "Number of customers at the beginning of the period" 
                        : "Monthly or Annual Recurring Revenue at the beginning"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                id="start"
                type="number"
                value={customersAtStart}
                onChange={(e) => setCustomersAtStart(e.target.value)}
                className="h-12 text-base transition-all focus:shadow-[var(--shadow-elegant)] border-input bg-background"
                placeholder={churnType === "customer" ? "Example: 1000" : "Example: 50000"}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="end" className="text-sm font-medium text-foreground">
                  {churnType === "customer" ? "Customers at End" : "MRR/ARR at End"}
                </Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      {churnType === "customer" 
                        ? "Number of customers remaining at the end of the period" 
                        : "Monthly or Annual Recurring Revenue at the end"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                id="end"
                type="number"
                value={customersAtEnd}
                onChange={(e) => setCustomersAtEnd(e.target.value)}
                className="h-12 text-base transition-all focus:shadow-[var(--shadow-elegant)] border-input bg-background"
                placeholder={churnType === "customer" ? "Example: 950" : "Example: 47500"}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="new" className="text-sm font-medium text-foreground">
                  {churnType === "customer" ? "New Customers During Period" : "New MRR/ARR During Period"}
                </Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      {churnType === "customer" 
                        ? "Number of new customers acquired during the period" 
                        : "New revenue from new customers during the period"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                id="new"
                type="number"
                value={newCustomers}
                onChange={(e) => setNewCustomers(e.target.value)}
                className="h-12 text-base transition-all focus:shadow-[var(--shadow-elegant)] border-input bg-background"
                placeholder={churnType === "customer" ? "Example: 200" : "Example: 10000"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="period" className="text-sm font-medium text-foreground">
                Period
              </Label>
              <Select value={period} onValueChange={(value) => setPeriod(value as Period)}>
                <SelectTrigger className="h-12 text-base" id="period">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Validation Warning */}
          {validationWarning && (
            <Alert variant={validationWarning.includes("Warning:") ? "default" : "destructive"}>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{validationWarning}</AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={calculateChurn}
              disabled={!isFormValid()}
              className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Churn Rate
            </Button>
            <Button 
              onClick={handleReset}
              variant="outline"
              className="h-12 px-6"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Results Display */}
          {results && (
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Churn Rate</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {results.churnRate.toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Retention Rate</p>
                    <p className="text-4xl font-bold text-secondary">
                      {results.retentionRate.toFixed(2)}%
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50 grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {churnType === "customer" ? "Lost Customers" : "Lost Revenue"}
                    </p>
                    <p className="text-2xl font-semibold text-foreground">
                      {churnType === "customer" 
                        ? `${results.lostCustomers.toFixed(0)} customers` 
                        : `$${results.lostCustomers.toFixed(2)}`}
                    </p>
                  </div>
                  {results.annualizedChurn !== undefined && (
                    <div>
                      <p className="text-sm font-medium text-[#fac02e] mb-1">Annualized Churn</p>
                      <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {results.annualizedChurn.toFixed(2)}%
                      </p>
                    </div>
                  )}
                </div>

                {/* Export Buttons */}
                <div className="mt-6 pt-6 border-t border-border/50 flex gap-3">
                  <Button 
                    onClick={handleCopyResults}
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Result
                  </Button>
                  <Button 
                    onClick={handleExportCSV}
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>

              {/* Actionable Tips */}
              <div className="p-6 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Actionable Insights</h3>
                </div>
                <ul className="space-y-3">
                  {getActionableTips().map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Worked Example */}
              <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Calculation Breakdown</h3>
                <div className="space-y-2 text-sm text-muted-foreground font-mono">
                  <p>Start + New = {customersAtStart} + {newCustomers} = {parseFloat(customersAtStart) + parseFloat(newCustomers)}</p>
                  <p>Lost = {parseFloat(customersAtStart) + parseFloat(newCustomers)} - {customersAtEnd} = {results.lostCustomers.toFixed(0)}</p>
                  <p>Churn Rate = {results.lostCustomers.toFixed(0)} / {customersAtStart} = {(results.lostCustomers / parseFloat(customersAtStart)).toFixed(4)} → <strong className="text-foreground">{results.churnRate.toFixed(2)}%</strong></p>
                  <p>Retention Rate = 1 - {(results.lostCustomers / parseFloat(customersAtStart)).toFixed(4)} = <strong className="text-foreground">{results.retentionRate.toFixed(2)}%</strong></p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};
