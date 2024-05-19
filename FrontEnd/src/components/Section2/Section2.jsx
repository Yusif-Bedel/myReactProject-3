import React, { useContext, useState, useEffect } from 'react';
import './Section2.css';
import MainContext from '../../context/context';
import Card from '../Card/Card';

const Section2 = () => {
  const { data } = useContext(MainContext);
  const [inpValue, setInpValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        item.title.toLowerCase().includes(inpValue.toLowerCase())
      )
    );
  }, [inpValue, data]);

  const handleInputChange = (value) => {
    setInpValue(value);
  };

  return (
    <section className='section2'>
      <div className="container">
        <div className='section2Head'>
          <h2>AWESOME</h2>
          <h3>SHOP</h3>
          <input
            type="text"
            placeholder='Search'
            value={inpValue}
            onChange={(e)=>{
              handleInputChange(e.target.value)
            }}
            style={{ padding: "10px", border: "none" }}
          />
        </div>
        <div className="section2Bottom">
          <div className="row">
            <div className="col-3">
              {filteredData.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
