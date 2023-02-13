
import React from 'react'
import ImageView from './imageView'
import TopMid from './TopMid'
import TopRight from './topRight'

export default function ProductView() {
  return (
    <section className="MainBodyTop HerosSection sectionMarginBot productPages">
            <div className="container">
                <div className="row">
                    <ImageView />

                    <TopMid />

                    <TopRight />
                </div>
            </div>
        </section>
  )
}
