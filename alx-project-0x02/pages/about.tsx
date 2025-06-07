import Button from '../components/common/Button';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm" onClick={() => console.log('Small button clicked!')}>
        Small Button
      </Button>
      <Button size="medium" shape="rounded-md" onClick={() => console.log('Medium button clicked!')}>
        Medium Button
      </Button>
      <Button size="large" shape="rounded-full" onClick={() => console.log('Large button clicked!')}>
        Large Button
      </Button>
    </div>
  );
};

export default About;



