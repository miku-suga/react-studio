// TODO: create a component that displays a single bakery item

function BakeryItem(props) {
  return (
    <div className="bakery-item-container">
      <p>{props.item.name}</p>
      <p>{props.item.description}</p>
      <p>{props.item.price}</p>
      <button onClick={() => props.addToCart([...props.cart, {name: props.item.name, price: props.item.price}])}>Add To Cart</button>
      <img src={props.item.image} />
    </div>
  )
}

export default BakeryItem