const color = {
    'red': 'alert-danger',
    'yellow': 'alert-warning',
    'green': 'alert-success'
}

const text ={
    'red': "OMG! Something really bad has happened!",
    'yellow': "Well, it is not that bad after all!",
    'green': "I am supposed to be green"
}

const Alert = (props) => {
    if (props.show === true) 
    {
        return  <div className={`alert ${color[props.color]}`} role="alert">
                {text[props.color]}
            </div>;
    }
    else 
    {
        return null;
    }
};

ReactDOM.render(
    <div>
        <Alert color="red" show={true}/>
        <Alert color="yellow" show={true}/>
        <Alert color="green" show={true}/>
    </div>, 
    document.getElementById("root")
);
