import Link from "next/link";

export default function MobileMenu(props) {

  return (
    <div className="NavCaragoris">
      <ul className="navbar-nav">
        <li className="MobileMwnuTitle">
          <span>All Categories</span>
          <i className="fa-solid fa-xmark hidemobomenu" onClick={props.onHideCategoris}></i>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Furniture
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Holiday
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Rugs & Decor
            </Link>
          </div>
        </li>

        <li className="nav-item" onclick="showDropdown()">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Tabletop
            </Link>
          </div>

          <i className="fa-solid fa-chevron-right navLinkI"></i>

          {/* <!-- mobile Deopdowon Menu --> */}
          <div className="w-100 DeopDownMenuMobiel">
            <div className="DeopDownDiv">
              <h6>Living Room</h6>
              <ul>
                <li>
                  <Link href="/categories">Dresses</Link>
                </li>
                <li>
                  <Link href="/categories">Jeggings</Link>
                </li>
                <li>
                  <Link href="/categories">Kurtis</Link>
                </li>
                <li>
                  <Link href="/categories">Palazzo Pants & Culottes</Link>
                </li>
                <li>
                  <Link href="/categories">Pants</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6>Bed Room Furniture</h6>
              <ul>
                <li>
                  <Link href="/categories">Flip Flops</Link>
                </li>
                <li>
                  <Link href="/categories">Heeled Sandals</Link>
                </li>
                <li>
                  <Link href="/categories">House Slippers</Link>
                </li>
                <li>
                  <Link href="/categories">Slip-Ons</Link>
                </li>
                <li>
                  <Link href="/categories">Wedge Sandals</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Bath
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Home Improvemetn
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Kitchern & Tabletop
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Bedding
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Baby and Kids
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Outdoor
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Celling
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Home Ber
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Pet Supplies
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Improvemetn
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link className="nav-link" aria-current="page" href="/categories">
              Rugs & Decor
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
