import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Disclaimer from '../components/Disclaimer';

export default function Discl() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar home={false} />
            <Disclaimer/>
            <Footer/>
        </div>
    );
  }