import './App.css';

import Examdata from './Data/exam-data.json'

const App = () => {
  const filteredProducts = Examdata.filter(Examdata => !Examdata.is_editable_price);
  const total = filteredProducts.reduce((accumulator, product) => {
    const totalWeight = product.products.reduce((total, subProduct) => total + subProduct.weight, 0);
    accumulator.push({
      name: product.name,
      weight: totalWeight
    });
    return accumulator;
  }, []);

  const jsonData = JSON.stringify(total);

  console.log(filteredProducts);
  console.log(total);
  console.log(jsonData);

  return (
    <div>
      <h1>Example 1 Products</h1>
      <div key={jsonData}>
        <pre>{jsonData}</pre>
      </div>
      <h1>Example 2 Products</h1>
      {filteredProducts.map(record => {
        let totalWeight = 0;

        record.products.forEach(Weightproduct => {
          totalWeight += Weightproduct.weight;
        });

        return (
          <div className='box' key={record.id}>
            Name {record.name} TotalWeight {totalWeight}
          </div>
        );
      })}
    </div >
  );
};

export default App;



