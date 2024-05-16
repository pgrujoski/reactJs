import PropTypes from 'prop-types';
import './DestinationCard.css';

function DestinationCard({ image, title }) {
  return (
    <div className="destination-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

DestinationCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DestinationCard;
