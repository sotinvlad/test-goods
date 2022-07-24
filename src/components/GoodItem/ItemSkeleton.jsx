import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={332}
        height={423}
        viewBox='0 0 332 423'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}>
        <rect x='0' y='0' rx='9' ry='9' width='332' height='423' />
    </ContentLoader>
);

export default ItemSkeleton;
