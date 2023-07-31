import styles from './styles.module.css'

const ShoppingCartTotalPrice = ({totalPrice}) => {


  const {totalPriceDiv}=styles
  return (
    <div className={totalPriceDiv}>

      <span>total price:</span>
      <span>{totalPrice} $</span>

    </div>
  )
}

export default ShoppingCartTotalPrice