import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

<<<<<<< HEAD
export default NotificationItemShape;`
=======
export default NotificationItemShape;
>>>>>>> 0806f351a2d5abc3e383c77e90c7a5288f8cb726
