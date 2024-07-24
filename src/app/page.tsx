import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Button variant="destructive">Testing</Button>
      <Footer/>
    </main>
  );
}
