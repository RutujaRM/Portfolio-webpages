//In this component we fill bio info
import dp from "../Assests/myphoto.jpg";

const Bio = () =>
  //here we make function
  {
    return (
      <section>
        <img src={dp} alt="This is my profile" />
        <h2>🙋‍♀️Hii I am Rutuja Mashere </h2>
        <h3>I convert text into magic✨😎 </h3>
      </section>
    );
  };

export default Bio;
