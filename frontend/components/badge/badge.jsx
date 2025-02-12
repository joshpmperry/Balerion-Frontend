import PropTypes from "prop-types";
import './badge.css'

function Badge({ data }) {

  Badge.propTypes = {
    data: PropTypes.string.isRequired
  };
  
  if (!data) return null

  const roleClass = {
    user: "badge-user",
    admin: "badge-admin",
    new: "badge-new",
  }[data.toLowerCase()];

  return (
    <>
      <div className={`badge ${roleClass}`}>{data}</div>
    </>
  )
}

export default Badge
