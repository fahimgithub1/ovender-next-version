import Link from "next/link";

export default function LaptopMenu() {
  return (
    <div className="NavClickAction">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Furniture
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Holiday
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Lighting
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Bath
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Improvemetn
            </Link>
          </div>
        </li>

        <li className="nav-item NavSubBranceHover">
          <div className="d-flex NavSubBrance">
            <div>
              <Link
                className="nav-link"
                aria-current="page"
                href="/categories"
              >
                Tabletop
              </Link>
            </div>

            <div>
              <i className="fa-solid fa-chevron-right navLinkI"></i>
            </div>
          </div>

          {/* <!-- for deorop down li dtart --> */}
          <div className="category-sub-menu bg-1 TabletopSubMenu">
            <div className="row g-4">
              <div className="col-lg-4">
                <h4>Living Room</h4>
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
                    <Link href="/categories">
                      Palazzo Pants & Culottes
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories">Pants</Link>
                  </li>
                  <li>
                    <Link href="/categories">Shapewear</Link>
                  </li>
                  <li>
                    <Link href="/categories">Skirts</Link>
                  </li>
                  <li>
                    <Link href="/categories">Tops</Link>
                  </li>
                  <li>
                    <Link href="/categories">T-Shirts</Link>
                  </li>
                  <li>
                    <Link href="/categories">Tunics</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>Bed Room Furniture</h4>
                <ul>
                  <li>
                    <Link href="/categories">Ballet Flats</Link>
                  </li>
                  <li>
                    <Link href="/categories">Pumps</Link>
                  </li>
                  <li>
                    <Link href="/categories">Closed-Toe Wedges</Link>
                  </li>
                  <li>
                    <Link href="/categories">Fashion Boots</Link>
                  </li>
                  <li>
                    <Link href="/categories">Flat Sandals</Link>
                  </li>
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
                    <Link href="/categories">Sneakers</Link>
                  </li>
                  <li>
                    <Link href="/categories">Wedge Sandals</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>kitchen & Dining</h4>
                <ul>
                  <li>
                    <Link href="/categories">Fashion</Link>
                  </li>
                  <li>
                    <Link href="/categories">Casual</Link>
                  </li>
                  <li>
                    <Link href="/categories">Business</Link>
                  </li>
                  <li>
                    <Link href="/categories">Sports</Link>
                  </li>
                  <li>
                    <Link href="/categories">Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Kitchern
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Bedding
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Baby and Kids
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Celling
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Home Ber
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href="/categories"
            >
              Pet Supplies
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
