const animals = [
    { label: 'Horse' },
    { label: 'Turtle' },
    { label: 'Elephant' },
    { label: 'Monkey' }
];

const animalsInHTML = animals.map((animal, index) => (
    <li key={index}>{animal.label}</li>
));

ReactDOM.render(
    <ul>{animalsInHTML}</ul>,
    document.querySelector('#anim')
);
