import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getCar } from "../../../actions/carActions";
import ShowAdditionalInfo from "../addCar/addCarStep2-components/showAdditionalInfo";
import AwesomeComponentSpinner from "../../../components/common/AwesomeComponent";

class showCar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { handle } = this.props.match.params;

    this.props.getCar(handle);
  }

  render() {
    let { showCar, loading, profile } = this.props;
    let pictures = [];
    let images = [];
    let content;

    if (loading) {
      content = <AwesomeComponentSpinner />;
    } else {
      if (showCar) {
        showCar.images.map(image => {
          const buffer = image.data.data;
          const b64 = new Buffer(buffer).toString("base64");
          let mimeType = image.contentType;
          let src = `data:${mimeType};base64,${b64}`;

          pictures.push({ original: src, thumbnail: src });
        });

        content = (
          <div className="container">
            <div className="row">
              <div className="col-6">{images}</div>
              <div className="col">
                <div>
                  <p className="h2">
                    {showCar.made} {showCar.model} {showCar.modification}
                  </p>
                  <span>
                    <a href="#">Характеристики & ревюта</a>
                  </span>
                  <p className="h3">
                    Цена: {showCar.price} {showCar.currency}
                  </p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Дата на производство</th>
                        <td>
                          {showCar.realeaseDateMonth} {showCar.realeaseDateYear}
                        </td>
                      </tr>
                      <tr>
                        <th>Тип двигател</th>
                        <td>{showCar.typeOfEngine}</td>
                      </tr>
                      <tr>
                        <th>Мощност</th>
                        <td>{showCar.horsePower} к.с.</td>
                      </tr>
                      <tr>
                        <th>Евростандарт</th>
                        <td>{showCar.euroStandart}</td>
                      </tr>
                      <tr>
                        <th>Скоростна кутия</th>
                        <td>{showCar.typeOfGear}</td>
                      </tr>
                      <tr>
                        <th>Категория</th>asdasd
                        <td>{showCar.category}</td>
                      </tr>
                      <tr>
                        <th>Пробег</th>
                        <td>{showCar.runningKMH} КМ.</td>
                      </tr>
                      <tr>
                        <th>Местоположение</th>
                        <td>{`${showCar.region} ${showCar.populatedPlace}`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-100" />
              <div className="col">
                Добавено от:
                <a href={"/profile/" + profile.handle} className="h4">{`${
                  profile.firstName
                } ${profile.lastName}`}</a>
              </div>
              <div className="col">
                <ShowAdditionalInfo
                  car={{
                    safety: showCar.safety,
                    comfort: showCar.comfort,
                    another: showCar.another,
                    protection: showCar.protection,
                    interior: showCar.interior,
                    specialized: showCar.specialized,
                    exterior: showCar.exterior
                  }}
                />
              </div>
            </div>
          </div>
        );
      } else {
        content = <AwesomeComponentSpinner />;
      }
    }

    if (pictures) {
      images.push(<ImageGallery items={pictures} key={1} />);
    }

    return <div className="container">{content}</div>;
  }
}

showCar.propTypes = {
  errors: PropTypes.object.isRequired,
  showCar: PropTypes.object,
  profile: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.carAdds.loading,
  showCar: state.carAdds.showCar,
  profile: state.carAdds.profile
});

export default connect(
  mapStateToProps,
  { getCar }
)(withRouter(showCar));
