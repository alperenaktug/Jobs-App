import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
Spinner.propTypes = {
  loading: PropTypes.bool.isRequired, // loading prop'unun bir boolean olması ve zorunlu olması gerektiğini belirtiyoruz
};
export default Spinner;
