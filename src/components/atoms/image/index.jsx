import React, { Fragment } from 'react';

const Image = (props) => {
  const { img, title, loading } = props;
  let alt = title;
  const imgSrc = img.source_url;
  let srcSet = null;
  if (img.caption && img.caption.rendered.length > 0) {
    alt = img.caption.rendered;
  }
  if (img.description && img.description.rendered.length > 0) {
    alt = img.description;
  }
  if (img.alt_text) {
    alt = img.alt_text;
  }
  if (img.media_details.sizes) {
    const { sizes } = img.media_details;
    srcSet = Object.keys(sizes).map(key => `${sizes[key].source_url} ${sizes[key].width}w,`);
    console.log(srcSet);
  }
  // @TODO: Add final step for getting image description from (Google?) image description API
  console.log(img.title.rendered, img.media_details.sizes.medium);
  return (
    <Fragment>
      <img
        loading={loading || 'lazy'}
        src={imgSrc}
        srcSet={srcSet.join('')}
        alt={alt}
      />
    </Fragment>
  );
};

export default Image;
