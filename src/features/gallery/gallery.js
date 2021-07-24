import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getImgAction } from "../../actions/getImgAction";

class Gallery extends React.Component {
  componentWillMount() {
    this.props.getImgAction();
    console.log(this.props);
  }
  render() {
    const gallery = this.props.gallery.map((img, idx) => (
      <div key={idx}>
        <img src={img.url} alt="wait..." />
        <p>{img.title}</p>
      </div>
    ));
    return (
      <div>
        <h1>Gallery</h1>
        {gallery}
      </div>
    );
  }
}

Gallery.propTypes = {
  getImgsAction: PropTypes.func.isRequired,
  gallery: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  gallery: state.gallery.gallery,
});

export default connect(mapStateToProps, { getImgAction })(Gallery);
