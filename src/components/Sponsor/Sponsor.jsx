import SponsorLogo from '../../assets/sponsor-logo.jpg';
import './Sponsor.css';
const Sponsor = () => {
  return (
    <section className="sponsor-section">
      <h2>Sponsor</h2>
      <div className="sponsor-card">
        <img src={SponsorLogo} alt="Sponsor" />
        <p>Direction de la Jeunesse et des Sports wilaya de Boumerdes.</p>
      </div>
    </section>
  );
};

export default Sponsor;
