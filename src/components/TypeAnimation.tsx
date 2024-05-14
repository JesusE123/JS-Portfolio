import { TypeAnimation } from 'react-type-animation';



export const TypeAnimationC = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Apasionate',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Frontend Developer',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={1}
      />
    );
  };