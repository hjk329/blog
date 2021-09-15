import React from 'react';
import styled, {css} from 'styled-components';

const GridList = ({data, children, gutter = [15, 15], columnCount=3}) => {
  return (
    <Container>
      <Row gutterX={gutter[0]}
           gutterY={gutter[1]}
      >
        {
          data.map((item, index) => (
            <Col key={item.id || index}
                 gutterX={gutter[0]}
                 gutterY={gutter[1]}
                 columnCount={columnCount}
            >
              {children(item, index)}
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({gutterX}) => css`
    margin: 0 ${-gutterX}px;
  `}

`;

const Col = styled.div`

  ${({gutterX, columnCount}) => css`
    padding: 0 ${gutterX}px;
    width: ${100 / columnCount}%;
  `}
`;
export default GridList;
