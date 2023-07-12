import { Header } from '@/components/Header';
import { VideoComponent } from '@/components/VideoComponent';
import { ViewComponent } from '@/components/ViewComponent';
import { FormComponent } from '@/components/FormComponent/index';
import { Footer } from '@/components/Footer';
import FooterProvider from '@/contexts/footer/footerProvider';

export default function Home() {
  return (
    <>
      <Header />
      <ViewComponent />
      <VideoComponent />
      <FormComponent />
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </>
  );
}
