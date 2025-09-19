import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar home={false} />
            <PrivacyPolicy/>
            <Footer/>
        </div>
    );
  }