import Link from "next/link";

export default function LaptopMenu() {
  const categoriesID = 10;

  return (
    <div className="NavClickAction">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
                href={`/categories/${categoriesID}`}
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
                    <Link href={`/categories/${categoriesID}`}>Dresses</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Jeggings</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Kurtis</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>
                      Palazzo Pants & Culottes
                    </Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Pants</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Shapewear</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Skirts</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Tops</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>T-Shirts</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Tunics</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>Bed Room Furniture</h4>
                <ul>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Ballet Flats</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Pumps</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Closed-Toe Wedges</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Fashion Boots</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Flat Sandals</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Flip Flops</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Heeled Sandals</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>House Slippers</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Slip-Ons</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Sneakers</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Wedge Sandals</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>kitchen & Dining</h4>
                <ul>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Fashion</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Casual</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Business</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Sports</Link>
                  </li>
                  <li>
                    <Link href={`/categories/${categoriesID}`}>Accessories</Link>
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
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
              href={`/categories/${categoriesID}`}
            >
              Pet Supplies
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
