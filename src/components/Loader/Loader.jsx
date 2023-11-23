import React from 'react';
import { LoaderWrap } from './Loader.styled';
import { RevolvingDot } from 'react-loader-spinner';

export default function Loading() {
  const styles = {
    container: {
      width: '100%',
      hight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '30%',
      //   left: '50%'
    },
  };
  return (
    <LoaderWrap>
      <RevolvingDot
        radius="45"
        strokeWidth="5"
        color="#1769aa"
        secondaryColor="#2196f3"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={styles.container}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrap>
  );
}
