import "bulma/css/bulma.css";
import ProfileCard from "./PofileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Pesonal digital Assistants</p>
        </div>
      </section>
      <div> </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImg}
                content="Alexa wss created by amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana99"
                image={CortanaImg}
                content="Cortana was made my microsoft idk wtf it does"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImg}
                content="made by Apple is always listening"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default App;
