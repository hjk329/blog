import React from 'react';
import styled from 'styled-components';
import {formatDistance} from 'date-fns'
import {Link} from "react-router-dom";

import defaultImage from '../../../../assets/defaultImage.png'

const BlogItem = ({item, index}) => {
  return (
    <Container to={`/blog/${item.id}`}>
      <Thumb>
        <img src={item.thumbnailUrl || defaultImage} alt={item.title}/>
      </Thumb>
      <Desc>
        <h3>{item.title}</h3>
        <p>
          {
            item?.content?.length > 50 ? item.content.substr(0, 50) + '...' : item.content
          }
        </p>
        {
          item.publishedAt &&
          <span>
                    {
                      formatDistance(
                        new Date(item.publishedAt.seconds * 1000),
                        Date.now(),
                        {addSuffix: true})
                    }
                  </span>
        }
      </Desc>
    </Container>
  )
}

const Container = styled(Link)`
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.21);
`;

const Thumb = styled.div`
  background: #eee;
  width: 100%;
  height: 190px;
  
  img {
    height: 190px;
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 15px;

  h3 {
    font-size: 18px;
    text-transform: capitalize;
    color: #333;
    margin-bottom: 6px;
  }

  p {
    font-size: 15px;
    color: #767676;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  span {
    font-size: 13px;
    color: #777;
  }
`;
export default BlogItem;
