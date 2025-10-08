import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingDown } from "lucide-react";

export const ChurnCalculator = () => {
  const [beginningCustomers, setBeginningCustomers] = useState<string>("1000");
  const [endingCustomers, setEndingCustomers] = useState<string>("850");
  const [newCustomers, setNewCustomers] = useState<string>("100");
  const [churnRate, setChurnRate] = useState<number | null>(null);
  const [churnedCustomers, setChurnedCustomers] = useState<number | null>(null);

  useEffect(() => {
    const beginning = parseFloat(beginningCustomers) || 0;
    const ending = parseFloat(endingCustomers) || 0;
    const newCust = parseFloat(newCustomers) || 0;

    if (beginning > 0) {
      const churned = beginning - ending + newCust;
      const rate = (churned / beginning) * 100;
      
      setChurnedCustomers(churned);
      setChurnRate(rate);
    } else {
      setChurnedCustomers(null);
      setChurnRate(null);
    }
  }, [beginningCustomers, endingCustomers, newCustomers]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-[var(--shadow-card)] border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="text-center space-y-2 pb-6">
        <div className="flex justify-center mb-2">
          <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent">
            <TrendingDown className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Churn Rate Calculator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Tính toán tỷ lệ khách hàng rời bỏ trong một khoảng thời gian
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="beginning" className="text-sm font-medium text-foreground">
              Số khách hàng đầu kỳ
            </Label>
            <Input
              id="beginning"
              type="number"
              value={beginningCustomers}
              onChange={(e) => setBeginningCustomers(e.target.value)}
              className="h-12 text-base transition-all focus:shadow-[var(--shadow-elegant)] border-input bg-background"
              placeholder="1000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ending" className="text-sm font-medium text-foreground">
              Số khách hàng cuối kỳ
            </Label>
            <Input
              id="ending"
              type="number"
              value={endingCustomers}
              onChange={(e) => setEndingCustomers(e.target.value)}
              className="h-12 text-base transition-all focus:shadow-[var(--shadow-elegant)] border-input bg-background"
              placeholder="850"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new" className="text-sm font-medium text-foreground">
              Số khách hàng mới thu hút được
            </Label>
            <Input
              id="new"
              type="number"
              value={newCustomers}
              onChange={(e) => setNewCustomers(e.target.value)}
              className="h-12 text-base transition-all focus:shadow-[var(--shadow-elegant)] border-input bg-background"
              placeholder="100"
            />
          </div>
        </div>

        {churnRate !== null && (
          <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Churn Rate</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {churnRate.toFixed(2)}%
                </p>
              </div>
              {churnedCustomers !== null && (
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Số khách hàng rời bỏ</p>
                  <p className="text-2xl font-semibold text-foreground">
                    {churnedCustomers.toFixed(0)} khách hàng
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
