import { Footer } from "@/components/store/layout/footer";
import Header from "@/components/store/layout/header/header";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default StoreLayout;
