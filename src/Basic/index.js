import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactJoyride, { EVENTS } from "react-joyride";
import FNImg from "./homepage.jpg";


//import 'bootstrap/dist/css/bootstrap.min.css';
//import Media from 'bootstrap';
import "./styles.css";

class Basic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false,
      steps: [
        {
          content: (
            <React.Fragment>
              <h2>Welcome to Airbus tour!</h2>
            </React.Fragment>
          ),
          placement: "center",
          locale: { skip: "SKIP" },
          target: "body"
        },
        {
          content: "This is who we are and what we work on!",
          placement: "top",
          styles: {
            options: {
              width: 900
            }
          },
          target: ".demo__projects h2",
          title: "About Us"
        },
        {
          content: "These are the snippets of our work that got featured!",
          placement: "top",
          styles: {
            options: {
              width: 900
            }
          },
          target: ".demo__how-it-works h2",
          title: "Featured News"
        },
        {
          content: "We assure you of best in industry safety standards",
          placement: "top",
          styles: {
            options: {
              width: 900
            }
          },
          target: ".demo__about h2",
          title: "Your Safety, Our Priority"
        }
      ]
    };
  }

  static propTypes = {
    joyride: PropTypes.shape({
      callback: PropTypes.func
    })
  };

  static defaultProps = {
    joyride: {}
  };

  handleClickAddSteps = ({ target }) => {
    const { steps } = this.state;

    target.style.display = "none";
    if (steps.length >= 5) return;

    const newSteps = [
      {
        content: (
          <div>
            <h3>Or event a SVG icon</h3>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 96 96"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </div>
        ),
        placement: "left",
        target: ".demo__about h2"
      }
    ];

    this.setState({ steps: steps.concat(newSteps) });
  };

  handleClickStart = (e) => {
    e.preventDefault();

    this.setState({
      run: true
    });
  };

  handleJoyrideCallback = (data) => {
    const { joyride } = this.props;
    const { type } = data;

    if (type === EVENTS.TOUR_END && this.state.run) {
      // Need to set our running state to false, so we can restart if we click start again.
      this.setState({ run: false });
    }

    if (typeof joyride.callback === "function") {
      joyride.callback(data);
    } else {
      console.group(type);
      console.log(data); //eslint-disable-line no-console
      console.groupEnd();
    }
  };

  render() {
    const { run, steps } = this.state;

    return (
      <div className="demo-wrapper">
  
        <ReactJoyride
          continuous
          scrollToFirstStep
          showProgress
          showSkipButton
          run={run}
          steps={steps}
          styles={{
            options: {
              zIndex: 10000
            }
          }}
          callback={this.handleJoyrideCallback}
        />

        <div
          className="demo__section demo__hero"
          style={{
            backgroundImage: `url("https://d1e00ek4ebabms.cloudfront.net/production/1dc09b7e-ca53-4de3-bbef-2faec21c6f73.jpg")`,
            backgroundRepeat: "no-repeat",
            resizeMode: "contain"
          }}
        >
          <div>
            <div className="welcome-card ">
              <h1>Welcome to Airbus</h1>
            </div>
            <button onClick={this.handleClickStart}>
              Click Here to start the Tour
            </button>
          </div>
        </div>
        <div className="demo__section demo__projects">
          <h2>About Airbus</h2>
        </div>
        <div>
          <br />
          <p className="text-content">
            Airbus is an international reference in the aerospace sector. We
            design, manufacture and deliver industry-leading commercial
            aircraft, helicopters, military transports, satellites and launch
            vehicles, as well as providing data services, navigation, secure
            communications, urban mobility and other solutions for customers on
            a global scale. With a forward-looking strategy based on
            cutting-edge technologies, digital and scientific excellence, we aim
            for a better-connected, safer and more prosperous world.
          </p>
        </div>
        <div className="demo__section demo__how-it-works">
          <h2>Featured News</h2>
        </div>
        <div className="featured_News">
          <br />
          <h4>An A350 fuelled by 100% SAF just took off</h4>
          <p className="text-content">
            On a chilly but pleasant March day, an A350 moved into position,
            revved its jet engines and took off from the runway at Blagnac
            airport in Toulouse, France. But this was no ordinary flight: the
            test aircraft was fuelled by 100% SAF. Today, all Airbus aircraft
            are certified to fly with up to a 50% blend of SAF mixed with
            kerosene. But the emissions performance of SAF when unblended with
            any type of fossil fuel has remained a question mark across the
            industry—until now. The Airbus-led Emission and Climate Impact of
            Alternative Fuels project, in collaboration with Rolls-Royce, German
            aerospace research centre DLR and oil refining company Neste, has
            set its sights on providing insight on that very question.
          </p>
        </div>
        <div className="demo__section demo__about">
          <h2>Safety At Airbus</h2>
        </div>
        <div className="safety">
          <br />
          <p className="text-content">
            Millions of people board Airbus airplanes and helicopters each year,
            from airline passengers to military pilots and troops, and each puts
            their trust in the Airbus brand to deliver them safely to
            destinations around the world. Airbus knows this trust doesn’t come
            lightly; it was earned – and continues to be earned – on the
            strength of decades of experience, thousands of aircraft in
            operation and millions of flight-hours. The number one priority at
            Airbus is the continued safe transport of everyone, and everything,
            that flies aboard an Airbus product – from passengers, cargo, and
            humanitarian relief supplies on aircraft and rotorcraft, to
            satellite and spacecraft that keep the world connected and explore
            the mysteries of deep space.
          </p>
        </div>
      </div>
    );
  }
}

export default Basic;
