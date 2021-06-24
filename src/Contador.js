import './Contador.css';

const Contador = (props) => {
    return (
        <div className="container mt-5">
                <div className="row">
            <div className="col display-4">
                    <i className="fa fa-clock"></i>
                </div>
                <div className="col display-4">
                {props.num6}
  </div>
                <div className="col display-4">
                {props.num5}
  </div>
                <div className="col display-4">
                {props.num4}
  </div>
                <div className="col display-4">
                {props.num3}
  </div>
                <div className="col display-4">
                {props.num2}
  </div>
                <div className="col display-4">
                    {props.num1}
  </div>

            </div>
        </div>
    )



}

export default Contador;