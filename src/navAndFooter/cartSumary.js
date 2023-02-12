import Link from "next/link";

export default function CartSummary(){

    return(
        <div className="CartSummaryNav">
            <div className="row CartUpperSummary">
                <div className="upperLeft col-6">
                    <span>1 </span>Item in Cart
                </div>

                <div className="upperRight col-6">
                    <span>Cart Subtotal:</span>
                    <p className="Price">Tk<span>100</span></p>
                </div>
            </div>

            <div className="CartNabBtn">
                <Link href="/shopingCart">
                    Proceed To heckout
                </Link>
            </div>

            <div className="CartSummaryProduct row">
                <div className="col-3">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="product image" />
                </div>
                                                
                <div className="col-9">
                    <span className="CartProductTitle"> Mi343 Model Chines Light Chines Light Chines Light</span>
                    <form className="CartNavForm">
                        <div className="CartProductQuantity">
                            <label >Qty: </label>
                            <input type="text" min="1" max="10"/>
                        </div>

                        <div className="CartProductQuantity">
                            <button>
                                <i className="fa-solid fa-delete-left"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="CartNabBtn CartNabBtn1">
                <Link href="/shopingCart">
                    View and Edit Cart 
                </Link>
            </div>
        </div>
    )
}