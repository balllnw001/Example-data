<div className="App">
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
</div>