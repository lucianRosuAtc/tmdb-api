import React from 'react';

export default function Wording({ wordingData }: any) {
  return (
    <div className='mx-auto  text-white px-4 md:px-8 leading-6 pb-10 md:w-4/6'>   
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl pb-7">{wordingData.header}</h1>
        <div className="space-y-5 text-sm md:text-base">
          <p>{wordingData.firstParagraph}</p>
          {wordingData.secondParagraph && (
            <>
              <p>{wordingData.secondParagraph}</p>
              <p>{wordingData.thirdParagraph}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}