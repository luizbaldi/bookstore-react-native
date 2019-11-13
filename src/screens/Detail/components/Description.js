/* @flow */

import React from 'react';

import { StyledDescriptionContainer, StyledDescriptionText } from '../style';

type Props = {
  description: String
};

const Description = ({ description }: Props) => (
  <StyledDescriptionContainer>
    <StyledDescriptionText>{description}</StyledDescriptionText>
  </StyledDescriptionContainer>
);

export default Description;
