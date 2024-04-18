import React, { useEffect, useState, useRef } from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import Shop from './Shop';
import './Images.scss';

type Props = {
  data: Pwamap.ShopData[];
}

const Content = (props: Props) => {
  const { data } = props;
  const [validImageList, setValidImageList] = useState<JSX.Element[]>([]);
  const [shop, setShop] = useState<Pwamap.ShopData | undefined>();
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  const popupHandler = (shop: Pwamap.ShopData) => {
    if (shop) {
      setShop(shop);
    }
  };

  const closeHandler = () => {
    setShop(undefined);
  };

  useEffect(() => {
    let imageListItems = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item['画像']) {
        imageListItems.push(
          <ImageListItem key={i} className="mui-image-list-item">
            <img
              src={item['画像']}
              alt={item['スポット名']}
              loading="lazy"
              onClick={() => popupHandler(item)}
              onError={(e) => {
                //@ts-ignore
                e.target.parentNode.remove();
              }}
            />
          </ImageListItem>
        );
      }
    }

    setValidImageList(imageListItems);

    const adjustHeight = () => {
      if (imagesContainerRef.current) {
        const headerHeight = document.querySelector('.head')?.clientHeight || 0;
        const calculatedHeight = window.innerHeight - headerHeight;
        imagesContainerRef.current.style.height = `${calculatedHeight}px`;
      }
    };

    window.addEventListener('resize', adjustHeight);
    adjustHeight();

    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, [data]);

  return (
    <>
      <div className="head"></div>
      <div className="images" ref={imagesContainerRef}>
        <div className="container">
          <ImageList id="mui-image-list" sx={{ width: "100%", height: "100%" }} cols={2} rowHeight={164}>
            {validImageList}
          </ImageList>
          {shop ? (
            <Shop shop={shop} close={closeHandler} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
