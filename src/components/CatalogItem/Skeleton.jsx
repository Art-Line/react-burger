import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <li className="catalog-item">
        <ContentLoader
            speed={2}
            width={270}
            height={335.52}
            viewBox="0 0 270 342.52"
            backgroundColor="#ffffff"
            foregroundColor="lightgray"
        >
            <circle cx="137" cy="87" r="77" />
            <rect x="20" y="163" rx="10" ry="10" width="230" height="73" />
            <rect x="80" y="247" rx="10" ry="10" width="122" height="34" />
            <rect x="20" y="304" rx="10" ry="10" width="230" height="39" />
        </ContentLoader>
    </li>
)

export default Skeleton
