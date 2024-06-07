const BootstrapCard = props => {
    return (
      React.createElement('div', { className: 'card m-5', style: { width: '18rem' }},
        React.createElement('img', { className: 'card-img-top', src: props.imageUrl, alt: 'Card image cap' }),
        React.createElement('div', { className: 'card-body' },
          React.createElement('h5', { className: 'card-title' }, props.title),
          React.createElement('p', { className: 'card-text' }, props.description),
          React.createElement('a', { href: props.buttonUrl, className: 'btn btn-primary' }, props.buttonLabel)
        )
      )
    );
  };
  
  const Hero = props => {
    return (
      React.createElement('div', { className: 'container m-5', style: { backgroundColor: '#E9ECEF', padding: '20px', borderRadius: '5px', width: '600px' } },
        React.createElement('h1', { className: 'display-4' }, props.title),
        React.createElement('p', { className: 'lead' }, props.description),
        React.createElement('a', { className: 'btn btn-primary btn-lg', href: props.buttonURL, role: 'button' }, props.buttonLabel)
      )
    );
  };
  
  ReactDOM.render(
    React.createElement('div', null,
      React.createElement(BootstrapCard, {
        title: "Bob Dylan",
        imageUrl: "img/Dylan.png?raw=true",
        description: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.",
        buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
        buttonLabel: "Go to wikipedia"
      }),
      React.createElement(Hero, {
        title: "Welcome to react!",
        description: "React is the most popular rendering library in the world",
        buttonLabel: "Go to the official website",
        buttonURL: "https://reactjs.org/"
      })
    ),
    document.getElementById("myDiv")
  );
  