import Header from '../Header'
import CartContext from '../../context/CartContext'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmtyView = cartList.length === 0
      const onClickRemoveAllButton = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          {showEmtyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-button"
                  onClick={onClickRemoveAllButton}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
