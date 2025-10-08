import { ChurnCalculator } from "@/components/ChurnCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingDown, BarChart3, Users, CheckCircle2, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Churn Rate Calculator – <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Free Online Tool</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Công cụ tính toán Churn Rate miễn phí, chính xác và dễ sử dụng. Đo lường tỷ lệ khách hàng rời bỏ để tối ưu chiến lược kinh doanh của bạn.
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
              Cách sử dụng Churn Rate Calculator
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                  Nhập số khách hàng đầu kỳ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Điền số lượng khách hàng bạn có vào đầu khoảng thời gian muốn đo lường (ví dụ: đầu tháng, đầu quý).
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                  Nhập số khách hàng cuối kỳ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Điền số lượng khách hàng còn lại vào cuối khoảng thời gian đo lường.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                  Nhập số khách hàng mới
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Điền số lượng khách hàng mới bạn thu hút được trong khoảng thời gian đó.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                  Nhận kết quả ngay lập tức
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Churn Rate Calculator sẽ tự động tính toán và hiển thị tỷ lệ churn rate cùng số lượng khách hàng đã rời bỏ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Tại sao nên sử dụng Churn Rate Calculator?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Miễn phí 100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Công cụ hoàn toàn miễn phí, không yêu cầu đăng ký hay cài đặt. Sử dụng ngay trên trình duyệt.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Tính toán chính xác</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sử dụng công thức chuẩn trong ngành để đảm bảo kết quả chính xác và đáng tin cậy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Kết quả tức thì</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nhận kết quả ngay lập tức khi nhập dữ liệu, giúp bạn đưa ra quyết định nhanh chóng.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Dễ sử dụng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Giao diện trực quan, thân thiện với người dùng. Không cần kiến thức chuyên môn phức tạp.
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
              Giải thích các chỉ số trong Churn Rate Calculator
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Churn Rate là gì?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Churn Rate (tỷ lệ rời bỏ khách hàng) là tỷ lệ phần trăm khách hàng ngừng sử dụng sản phẩm/dịch vụ của bạn trong một khoảng thời gian nhất định. Đây là một chỉ số quan trọng để đánh giá sức khỏe kinh doanh.
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-foreground">
                    Công thức: Churn Rate = (Số KH rời bỏ / Số KH đầu kỳ) × 100%
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Số khách hàng đầu kỳ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Là tổng số khách hàng bạn có tại thời điểm bắt đầu khoảng thời gian đo lường. Ví dụ: nếu đo lường tháng 1, đây là số khách hàng vào ngày 1/1.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Số khách hàng cuối kỳ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Là tổng số khách hàng còn lại tại thời điểm kết thúc khoảng thời gian đo lường. Số này bao gồm cả khách hàng cũ và khách hàng mới.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-primary">Số khách hàng mới</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Là số lượng khách hàng mới bạn thu hút được trong khoảng thời gian đo lường. Để tính chính xác số khách hàng rời bỏ, cần loại trừ những khách hàng mới này ra khỏi tổng số.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-[var(--shadow-card)] bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-accent">Số khách hàng rời bỏ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Là số lượng thực tế khách hàng đã rời bỏ trong khoảng thời gian. Được tính bằng: Số KH đầu kỳ - Số KH cuối kỳ + Số KH mới.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <HelpCircle className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Câu hỏi thường gặp về Churn Rate Calculator
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">Churn Rate bao nhiêu là tốt?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Churn Rate tốt phụ thuộc vào ngành nghề. Đối với SaaS B2B, tỷ lệ 5-7% hàng năm là chấp nhận được. Với B2C, có thể cao hơn 10-15%. Nguyên tắc chung: Churn Rate càng thấp càng tốt, vì giữ chân khách hàng cũ thường rẻ hơn tìm kiếm khách hàng mới.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">Làm thế nào để giảm Churn Rate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Để giảm Churn Rate, hãy tập trung vào: (1) Cải thiện chất lượng sản phẩm/dịch vụ, (2) Tăng cường hỗ trợ khách hàng, (3) Phân tích nguyên nhân khách hàng rời bỏ, (4) Xây dựng chương trình giữ chân khách hàng, (5) Thu thập phản hồi thường xuyên để cải thiện liên tục.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">Nên tính Churn Rate bao lâu một lần?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nên tính Churn Rate Calculator hàng tháng để theo dõi xu hướng và phát hiện vấn đề sớm. Đối với doanh nghiệp mới, có thể tính hàng tuần. Tuy nhiên, cũng nên theo dõi Churn Rate theo quý và năm để có cái nhìn tổng thể về xu hướng dài hạn và so sánh với chuẩn ngành.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-lg">Churn Rate Calculator có chính xác không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Churn Rate Calculator của chúng tôi sử dụng công thức chuẩn được chấp nhận rộng rãi trong ngành. Độ chính xác phụ thuộc vào dữ liệu bạn nhập. Hãy đảm bảo số liệu khách hàng đầu kỳ, cuối kỳ và khách hàng mới là chính xác để có kết quả Churn Rate đáng tin cậy nhất.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 Churn Rate Calculator. Công cụ tính toán miễn phí cho doanh nghiệp.
        </p>
      </footer>
    </div>
  );
};

export default Index;
