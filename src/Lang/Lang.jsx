import React from 'react';
import useLang from '../hooks/useLang';
import styled from 'styled-components';

const Lang = () => {
  const { lang, switchLang } = useLang();
  // console.log('inside lang' + lang);

  return (
    <StyledSwitch>
      <StyledLang
        onClick={switchLang}
        data={lang === 'ua' ? 'currentLang' : 'secondLang'}
        //   className={lang === 'ua' ? styles.currentLang : styles.lang}
      >
        UA
      </StyledLang>
      <StyledSpase> | </StyledSpase>
      <StyledLang
        onClick={switchLang}
        data={lang === 'en' ? 'currentLang' : 'secondLang'}
        //   className={lang === 'ru' ? styles.currentLang : styles.lang}
      >
        EN
      </StyledLang>
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  position: absolute;
  top: 32px;
  right: 20px;
  display: flax;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  cursor: pointer;
`;

const StyledLang = styled.span`
  font-size: ${({ data }) => (data === 'currentLang' ? ` 20px` : `17px`)};
  font-family: inherit;
`;
const StyledSpase = styled.span`
  font-size: 20px;
`;
export default Lang;
