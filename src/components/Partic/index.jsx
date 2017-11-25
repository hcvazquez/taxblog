import React from 'react'
import Particles from 'react-particles-js'
import './style.scss'

class Partic extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#d13316',
                opacity: 0.4,
                width: 3,
              },
              color: {
                value: '#010000',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 5,
                  color: '#ffffff',
                },
                image: {
                  src:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                  width: 100,
                  height: 100,
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 1,
                  sync: false,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 50,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
          }}
          style={{
            //backgroundImage: `url(${background})`,
            backgroundColor: '#764abc',
            maxWidth: 'none',
            maxHeight: '25vw',
            position: 'relative',
            marginRight: '-50vw',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
          }}
        />
      </div>
    )
  }
}

export default Partic
