import "./GallaryDataStyles.css";

const Gallary = (props) => {
  return (
    <div className="gallary-card">
      <img
        src={`http://localhost:4000/${props.gallaryImg}`}
        alt="AboutImage"
        height={150}
        width={200}
      />
      <div className="card-title">{props.title}</div>
    </div>
  );
};

export default Gallary;
